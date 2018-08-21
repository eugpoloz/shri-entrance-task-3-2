// @flow
type OneHourEnergy = {|
  rate: number,
  power: number
|};

export function oneHourEnergy({ rate, power }: OneHourEnergy) {
  return rate * (power / 1000);
}
