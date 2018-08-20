// @flow
import { toFixedNumber, oneHourEnergy } from "./utils/consumedEnergy";
import cheapestHours from "./utils/cheapestHours";

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
  const RATES = rates.reduce((acc, RATE) => {
    const { from: FROM, to: TO, value: VALUE } = RATE;

    let resettableFrom = FROM;

    if (FROM > TO) {
      for (let i = resettableFrom; i < 24; i++) {
        acc[i] = VALUE;
      }
      resettableFrom = 0;
    }

    for (let i = resettableFrom; i < TO; i++) {
      acc[i] = VALUE;
    }

    return acc;
  }, {});

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
      const NEXT_I = i + 1 < 24 ? i + 1 : 0;
      const NEXT_USED_POWER = complexSchedule[NEXT_I].usedPower + power;

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

    consumedEnergy.devices[id] = toFixedNumber(energy, 4);
    if (Array.isArray(consumedEnergy.value)) {
      consumedEnergy.value.push(energy);
    }
  }

  // обрабатываем наши девайсы
  DEVICES.forEach(device => {
    const { duration, mode } = device;
    if (duration > 24) {
      throw new Error(
        "Продолжительность работы прибора не может быть больше 24 часов!"
      );
    }

    // если девайс должен работать 24 часа, то все просто
    if (duration === 24) {
      return devicesMapper({ ...device, to: 24, from: 0 });
    }

    // что мы железно должны проверять в остальных случаях?
    // - попадает ли в нужный час
    // - за какой час мы будем платить меньше всего
    // - есть ли у нас достаточно power

    // TODO: что делать, если самых дешевых часов недостаточно?
    let cheapest = null;

    switch (mode) {
      case "day":
        cheapest = cheapestHours({
          to: MODES.day.to,
          from: MODES.day.from,
          rates: RATES
        })[0];
        break;
      case "night":
        cheapest = cheapestHours({
          to: MODES.night.to,
          from: MODES.night.from,
          rates: RATES
        })[0];
        break;
      // mode = undefined
      default:
        cheapest = cheapestHours({
          to: 24,
          from: 0,
          rates: RATES
        })[0];
        break;
    }

    let from = cheapest;
    let to = cheapest + duration;

    if (to > 24) {
      to = to - 24;
    }

    return devicesMapper({
      ...device,
      to,
      from
    });
  });

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
      value: toFixedNumber(VALUE, 4)
    }
  };

  // TODO: прибрать консоль-лог?
  console.log(OUTPUT);
  return OUTPUT;
}
