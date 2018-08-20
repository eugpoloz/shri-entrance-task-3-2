// @flow
type CheapestHours = {
  rates: {
    [key: number]: number
  },
  to: number,
  from: number
};

function cheapestHours({ rates: RATES, to: TO, from: FROM }: CheapestHours) {
  let cheapestArray = [];
  let cheapestRate = null;
  let resettableFrom = FROM;

  function repeatableLoop(i) {
    if (cheapestRate == null || cheapestRate > RATES[i]) {
      cheapestRate = RATES[i];
      cheapestArray = [i];
    } else if (cheapestRate === RATES[i]) {
      // if (i > 21) {
      //   cheapestArray.unshift(i);
      // } else {
      cheapestArray.push(i);
      // }
    }
  }

  if (FROM > TO) {
    for (let i = resettableFrom; i < 24; i++) {
      repeatableLoop(i);
    }

    resettableFrom = 0;
  }

  for (let i = resettableFrom; i < TO; i++) {
    repeatableLoop(i);
  }

  return cheapestArray;
}

export default cheapestHours;
