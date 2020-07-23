// formatMonth
// Takes a string value number for month and year and returns a
// string with the correct month. i.e. 2020-10 formats to October // 2020

export const formatMonth = (dateString: string): string => {
  if (dateString !== '') {
    const date = new Date(dateString);
    const monthAndYear = date.toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });
    return monthAndYear;
  } else {
    return '';
  }
};

// takes crime props data array and makes into a look up obj so the crime category (i.e. burglary) can be counted and then displayed in a chart.
export const crimeCategoryLookup = (crimeArray: Incident[]) => {
  let lookupObj: CrimeCategoryLookupObject = {};
  crimeArray.forEach((incident) => {
    if (lookupObj.hasOwnProperty(incident.category)) {
      lookupObj[incident.category]++;
    } else {
      lookupObj[incident.category] = 1;
    }
  });
  return lookupObj;
};

// crimeOutcomeLookup()
// takes props data array and makes a lookup object with the outcome data
export const crimeOutcomeLookup = (crimeArray: Incident[]) => {
  let lookupObj: CrimeOutcomeLookupObject = {};
  crimeArray.forEach((incident) => {
    if (incident.outcome_status === null) {
      if (lookupObj['Unknown']) {
        lookupObj['Unknown']++;
      } else {
        lookupObj['Unknown'] = 1;
      }
    } else {
      if (lookupObj.hasOwnProperty(incident.outcome_status.category)) {
        lookupObj[incident.outcome_status.category]++;
      } else {
        lookupObj[incident.outcome_status.category] = 1;
      }
    }
  });
  return lookupObj;
};

// formatPolyData()
// takes array of polygon lat lng data and makes it a string so can be passed as a param in api query
export const formatPolyData = (array: number[][]): string => {
  const arrCopy: number[][] = array.map((arrItem) => {
    return arrItem;
  });
  let reverseArr: number[][] = [];
  for (let i = arrCopy.length - 1; i >= 0; i--) {
    reverseArr.push(arrCopy[i].reverse());
  }
  console.log(arrCopy);
  return reverseArr.join(':');
};
