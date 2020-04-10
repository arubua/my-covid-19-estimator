const input = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

const covid19ImpactEstimator = (data) => {
  const { reportedCases, periodType, timeToElapse } = data;
  const getImpact = () => {
    const currentlyInfected = reportedCases * 10;
    let infectionsByRequestedTime = 0;
    if (periodType === 'days') {
      infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc(timeToElapse / 3);
    } else if (periodType === 'weeks') {
      infectionsByRequestedTime = this.currentlyInfected * 2 ** Math.trunc((timeToElapse * 7) / 3);
    } else if (periodType === 'months') {
      infectionsByRequestedTime = this.currentlyInfected * 2 ** Math.trunc((timeToElapse * 30) / 3);
    }
    return { currentlyInfected, infectionsByRequestedTime };
  };

  const getSevereImpact = () => {
    const currentlyInfected = reportedCases * 50;
    let infectionsByRequestedTime = 0;
    if (periodType === 'days') {
      infectionsByRequestedTime = this.currentlyInfected * 2 ** Math.trunc(timeToElapse / 3);
    } else if (periodType === 'weeks') {
      infectionsByRequestedTime = this.currentlyInfected * 2 ** Math.trunc((timeToElapse * 7) / 3);
    } else if (periodType === 'months') {
      infectionsByRequestedTime = this.currentlyInfected * 2 ** Math.trunc((timeToElapse * 30) / 3);
    }
    return { currentlyInfected, infectionsByRequestedTime };
  };

  return {
    data: input,
    impact: getImpact(),
    severeImpact: getSevereImpact()
  };
};

export default covid19ImpactEstimator;
