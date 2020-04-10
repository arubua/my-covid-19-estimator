/* eslint-disable linebreak-style */
const data = {
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

const covid19ImpactEstimator = () => {
  const input = data;
  return {
    data: input,
    impact: {
      currentlyInfected: (reportedCases) => reportedCases * 10,
      infectionsByRequestedTime: (periodType, timeToElapse) => {
        let infectionsByRequestedTime = 0;
        const { currentlyInfected } = this;
        if (periodType === 'days') {
          infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc(timeToElapse / 3);
        } else if (periodType === 'weeks') {
          infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc((timeToElapse * 7) / 3);
        } else if (periodType === 'months') {
          infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc((timeToElapse * 30) / 3);
        }
        return infectionsByRequestedTime;
      }
    },
    severeImpact: {
      currentlyInfected: (reportedCases) => reportedCases * 50,
      infectionsByRequestedTime: (periodType, timeToElapse) => {
        let infectionsByRequestedTime = 0;
        const { currentlyInfected } = this;
        if (periodType === 'days') {
          infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc(timeToElapse / 3);
        } else if (periodType === 'weeks') {
          infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc((timeToElapse * 7) / 3);
        } else if (periodType === 'months') {
          infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc((timeToElapse * 30) / 3);
        }
        return infectionsByRequestedTime;
      }
    }
  };
};

export default covid19ImpactEstimator;
