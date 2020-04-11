// provided input data structure
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

// The impact calculator function
const covid19ImpactEstimator = (data) => {
  const {
    reportedCases,
    periodType,
    timeToElapse,
    totalHospitalBeds,
    region: { avgDailyIncomeInUSD, avgDailyIncomePopulation }
  } = data;
  const getImpact = () => {
    const currentlyInfected = reportedCases * 10;
    let infectionsByRequestedTime = 0;
    let severeCasesByRequestedTime = 0;
    let hospitalBedsByRequestedTime = 0;
    const availableHospitalBeds = 0.35 * totalHospitalBeds;
    let casesForICUByRequestedTime = 0;
    let casesForVentilatorsByRequestedTime = 0;
    let dollarsInFlight = 0;
    if (periodType === 'days') {
      infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc(timeToElapse / 3);
      severeCasesByRequestedTime = Math.trunc(0.15 * infectionsByRequestedTime);
      hospitalBedsByRequestedTime = Math.trunc(availableHospitalBeds - severeCasesByRequestedTime);
      casesForICUByRequestedTime = Math.trunc(0.05 * infectionsByRequestedTime);
      casesForVentilatorsByRequestedTime = Math.trunc(0.02 * infectionsByRequestedTime);
      dollarsInFlight = Math.trunc((
        infectionsByRequestedTime * avgDailyIncomePopulation * avgDailyIncomeInUSD) / timeToElapse);
    } else if (periodType === 'weeks') {
      infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc((timeToElapse * 7) / 3);
      severeCasesByRequestedTime = Math.trunc(0.15 * infectionsByRequestedTime);
      hospitalBedsByRequestedTime = Math.trunc(availableHospitalBeds - severeCasesByRequestedTime);
      casesForICUByRequestedTime = Math.trunc(0.05 * infectionsByRequestedTime);
      casesForVentilatorsByRequestedTime = Math.trunc(0.02 * infectionsByRequestedTime);
      dollarsInFlight = Math.trunc((
        infectionsByRequestedTime * avgDailyIncomePopulation * avgDailyIncomeInUSD)
         / (timeToElapse * 7));
    } else if (periodType === 'months') {
      infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc((timeToElapse * 30) / 3);
      severeCasesByRequestedTime = Math.trunc(0.15 * infectionsByRequestedTime);
      hospitalBedsByRequestedTime = Math.trunc(availableHospitalBeds - severeCasesByRequestedTime);
      casesForICUByRequestedTime = Math.trunc(0.05 * infectionsByRequestedTime);
      casesForVentilatorsByRequestedTime = Math.trunc(0.02 * infectionsByRequestedTime);
      dollarsInFlight = Math.trunc((
        infectionsByRequestedTime * avgDailyIncomePopulation * avgDailyIncomeInUSD)
        / (timeToElapse * 30));
    }
    return {
      currentlyInfected,
      infectionsByRequestedTime,
      severeCasesByRequestedTime,
      hospitalBedsByRequestedTime,
      casesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime,
      dollarsInFlight
    };
  };// end  getImpact

  const getSevereImpact = () => {
    const currentlyInfected = reportedCases * 50;
    let infectionsByRequestedTime = 0;
    let severeCasesByRequestedTime = 0;
    let hospitalBedsByRequestedTime = 0;
    const availableHospitalBeds = 0.35 * totalHospitalBeds;
    let casesForICUByRequestedTime = 0;
    let casesForVentilatorsByRequestedTime = 0;
    let dollarsInFlight = 0;
    if (periodType === 'days') {
      infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc(timeToElapse / 3);
      severeCasesByRequestedTime = Math.trunc(0.15 * infectionsByRequestedTime);
      hospitalBedsByRequestedTime = Math.trunc(availableHospitalBeds - severeCasesByRequestedTime);
      casesForICUByRequestedTime = Math.trunc(0.05 * infectionsByRequestedTime);
      casesForVentilatorsByRequestedTime = Math.trunc(0.02 * infectionsByRequestedTime);
      dollarsInFlight = Math.trunc((
        infectionsByRequestedTime * avgDailyIncomePopulation * avgDailyIncomeInUSD) / timeToElapse);
    } else if (periodType === 'weeks') {
      infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc((timeToElapse * 7) / 3);
      severeCasesByRequestedTime = Math.trunc(0.15 * infectionsByRequestedTime);
      hospitalBedsByRequestedTime = Math.trunc(availableHospitalBeds - severeCasesByRequestedTime);
      casesForICUByRequestedTime = Math.trunc(0.05 * infectionsByRequestedTime);
      casesForVentilatorsByRequestedTime = Math.trunc(0.02 * infectionsByRequestedTime);
      dollarsInFlight = Math.trunc((
        infectionsByRequestedTime * avgDailyIncomePopulation * avgDailyIncomeInUSD)
        / (timeToElapse * 7));
    } else if (periodType === 'months') {
      infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc((timeToElapse * 30) / 3);
      severeCasesByRequestedTime = Math.trunc(0.15 * infectionsByRequestedTime);
      hospitalBedsByRequestedTime = Math.trunc(availableHospitalBeds - severeCasesByRequestedTime);
      casesForICUByRequestedTime = Math.trunc(0.05 * infectionsByRequestedTime);
      casesForVentilatorsByRequestedTime = Math.trunc(0.02 * infectionsByRequestedTime);
      dollarsInFlight = Math.trunc((
        infectionsByRequestedTime * avgDailyIncomePopulation * avgDailyIncomeInUSD)
        / (timeToElapse * 30));
    }
    return {
      currentlyInfected,
      infectionsByRequestedTime,
      severeCasesByRequestedTime,
      hospitalBedsByRequestedTime,
      casesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime,
      dollarsInFlight
    };
  };// end  getSevereImpact

  // output data structure
  return {
    data: input,
    impact: getImpact(),
    severeImpact: getSevereImpact()
  };
};// end  covid19ImpactCalculato

export default covid19ImpactEstimator;
