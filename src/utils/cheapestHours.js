// @flow
import { pickBy } from "lodash";
import unique from "array-unique";

// быстрая сортировка
const sorter = (a: number, b: number) => a - b;

function cheapestHours(RATES: { [key: number]: number }) {
  const DAY_OBJECT = pickBy(RATES, (value, key) => key >= 7 && key < 21);
  const NIGHT_OBJECT = pickBy(RATES, (value, key) => key < 7 || key >= 21);

  const ALL_RATES_ARR = unique(Object.values(RATES)).sort(sorter);
  const DAY_RATES_ARR = unique(Object.values(DAY_OBJECT)).sort(sorter);
  const NIGHT_RATES_ARR = unique(Object.values(NIGHT_OBJECT)).sort(sorter);

  const ALL_HOURS_CHEAPEST = ALL_RATES_ARR.reduce(
    (acc: Array<mixed>, rate: number, idx: number, array: Array<?mixed>) => {
      const picked = pickBy(RATES, value => value === rate);

      return acc.concat(Object.keys(picked));
    },
    []
  );

  const DAY_HOURS_CHEAPEST = DAY_RATES_ARR.reduce(
    (acc: Array<mixed>, rate: number) => {
      const picked = pickBy(DAY_OBJECT, value => value === rate);

      return acc.concat(Object.keys(picked));
    },
    []
  );

  const NIGHT_HOURS_CHEAPEST = NIGHT_RATES_ARR.reduce(
    (acc: Array<mixed>, rate: number) => {
      const picked = pickBy(NIGHT_OBJECT, value => value === rate);

      return acc.concat(Object.keys(picked));
    },
    []
  );

  return {
    all: ALL_HOURS_CHEAPEST,
    day: DAY_HOURS_CHEAPEST,
    night: NIGHT_HOURS_CHEAPEST
  };
}

export default cheapestHours;
