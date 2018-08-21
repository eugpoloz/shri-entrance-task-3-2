// @flow
import type { Rate } from "../CommonTypes";

function ratesReducer(acc: {}, rate: Rate) {
  const { from, to, value } = rate;

  let resettableFrom = from;

  if (from > to) {
    for (let i = resettableFrom; i < 24; i++) {
      acc[i] = value;
    }
    resettableFrom = 0;
  }

  for (let i = resettableFrom; i < to; i++) {
    acc[i] = value;
  }

  return acc;
}

export default ratesReducer;
