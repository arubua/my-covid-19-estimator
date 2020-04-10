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
        switch (periodType) {
          case 'days':
            return this.currentlyInfected * 2 ** Math.trunc(timeToElapse / 3);

          case 'weeks':
            return this.currentlyInfected * 2 ** Math.trunc((timeToElapse * 7) / 3);
          case 'months':
            return this.currentlyInfected * 2 ** Math.trunc((timeToElapse * 30) / 3);

          default:
            break;
        }
        return null;
      }
    },
    severeImpact: {
      currentlyInfected: (reportedCases) => reportedCases * 50,
      infectionsByRequestedTime: (periodType, timeToElapse) => {
        switch (periodType) {
          case 'days':
            return this.currentlyInfected * 2 ** Math.trunc(timeToElapse / 3);

          case 'weeks':
            return this.currentlyInfected * 2 ** Math.trunc((timeToElapse * 7) / 3);
          case 'months':
            return this.currentlyInfected * 2 ** Math.trunc((timeToElapse * 30) / 3);

          default:
            break;
        }
        return null;
      }
    }
  };
};

export default covid19ImpactEstimator;
