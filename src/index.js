// @flow
import round from "lodash/round";

import { oneHourEnergy } from "./utils/consumedEnergy";
import cheapestHours from "./utils/cheapestHours";
import ratesReducer from "./utils/ratesReducer";

import type { Input, Device } from "./CommonTypes";

export default function calc({
  devices: DEVICES,
  rates,
  maxPower: MAX_POWER
}: Input) {
  // границы дней
  const MODES = {
    day: {
      from: 7,
      to: 21
    },
    night: {
      from: 21,
      to: 7
    }
  };

  // создаем табличку стоимости
  const RATES = rates.reduce(ratesReducer, {});

  // делаем большую табличку, в которой будет информация по каждому часу
  // и которую мы потом и заредьюсим в output
  let complexSchedule = {};
  let consumedEnergy = {
    value: [],
    devices: {}
  };

  for (let i = 0; i < 24; i++) {
    complexSchedule[i] = {
      devices: [],
      rate: RATES[i],
      usedPower: 0
    };
  }

  type DevicesMapper = {
    ...Device,
    from: number,
    to: number
  };

  function devicesMapper({
    id,
    name,
    power,
    duration,
    mode,
    from,
    to
  }: DevicesMapper) {
    let energy = 0;
    let [resettableFrom, resettableTo] = [from, to];

    // повторяем функцию каждый луп
    function repeatableLoop(i) {
      const USED_POWER = complexSchedule[i].usedPower + power;

      if (USED_POWER <= MAX_POWER) {
        complexSchedule[i].devices.push(id);
        complexSchedule[i].usedPower = complexSchedule[i].usedPower + power;

        energy = energy + oneHourEnergy({ rate: RATES[i], power });
      } else {
        resettableTo = resettableTo + 1;
      }
    }

    if (resettableFrom > resettableTo) {
      for (let i = resettableFrom; i < 24; i++) {
        repeatableLoop(i);
      }

      resettableFrom = 0;
    }

    for (let i = resettableFrom; i < resettableTo; i++) {
      repeatableLoop(i);
    }

    consumedEnergy.devices[id] = round(energy, 4);
    if (Array.isArray(consumedEnergy.value)) {
      consumedEnergy.value.push(energy);
    }
  }

  // обрабатываем наши девайсы
  for (let i = 0, len = DEVICES.length; i < len; i++) {
    const device = DEVICES[i];

    const { duration, mode } = device;
    if (duration > 24) {
      throw new Error(
        "Продолжительность работы прибора не может быть больше 24 часов!"
      );
    }

    // если девайс должен работать 24 часа, то все просто
    if (duration === 24) {
      devicesMapper({ ...device, to: 24, from: 0 });
      continue;
    }

    // что мы железно должны проверять в остальных случаях?
    // - попадает ли в нужный час
    // - за какой час мы будем платить меньше всего
    // - есть ли у нас достаточно power

    let cheapest = null;
    const CHEAPEST_HOURS = cheapestHours(RATES);

    switch (mode) {
      case "day":
        cheapest = CHEAPEST_HOURS.day[0];
        break;
      case "night":
        cheapest = CHEAPEST_HOURS.night[0];
        break;
      // mode = undefined
      default:
        cheapest = CHEAPEST_HOURS.all[0];
        break;
    }

    let from = Number(cheapest);
    let to = Number(cheapest) + duration;

    if (to > 24) {
      to = to - 24;
    }

    devicesMapper({
      ...device,
      to,
      from
    });
    continue;
  }

  // определяем финальные значения
  const VALUE = Array.isArray(consumedEnergy.value)
    ? consumedEnergy.value.reduce((acc, val) => acc + val, 0)
    : 0;

  let schedule = {};
  for (let indexKey in complexSchedule) {
    if (complexSchedule.hasOwnProperty(indexKey)) {
      schedule[indexKey] = complexSchedule[indexKey].devices;
    }
  }

  const OUTPUT = {
    schedule,
    consumedEnergy: {
      devices: consumedEnergy.devices,
      value: round(VALUE, 4)
    }
  };

  // TODO: прибрать консоль-лог?
  console.log(OUTPUT);
  return OUTPUT;
}
