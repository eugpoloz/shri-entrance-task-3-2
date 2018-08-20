// @flow
export type Device = {|
  id: string,
  name?: string,
  power: number,
  duration: number,
  mode?: "night" | "day"
|};

type Rate = {|
  from: number,
  to: number,
  value: number
|};

export type Input = {|
  devices: Array<Device>,
  rates: Array<Rate>,
  maxPower: number
|};
