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

export const crimeOutcomeLookup = (crimeArray: Incident[]) => {
  let lookupObj: CrimeOutcomeLookupObject = {};
  crimeArray.forEach((incident) => {
    if (incident.outcome_status === null) {
      if (lookupObj.hasOwnProperty(String(incident.outcome_status))) {
        lookupObj[String(incident.outcome_status)]++;
      } else {
        lookupObj[String(incident.outcome_status)] = 1;
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
