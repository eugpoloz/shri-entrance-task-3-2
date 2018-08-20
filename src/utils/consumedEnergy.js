// @flow

// скопировано с https://stackoverflow.com/a/23560569
export function toFixedNumber(num: number, precision: number) {
  const str = (+(
    Math.round(+(num + "e" + precision)) +
    "e" +
    -precision
  )).toFixed(precision);

  return Number(str);
}

type OneHourEnergy = {|
  rate: number,
  power: number
|};

export function oneHourEnergy({ rate, power }: OneHourEnergy) {
  return rate * (power / 1000);
}
