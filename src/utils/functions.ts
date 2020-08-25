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
  // deep copy array and nested arrays.
  const arrCopy = JSON.parse(JSON.stringify(array));
  // reverse the values in the copied array
  let reverseArr: number[][] = [];
  for (let i = arrCopy.length - 1; i >= 0; i--) {
    reverseArr.push(arrCopy[i].reverse());
  }
  // join the arrays with a colon and make into a string
  return reverseArr.join(':');
};

// formatAreaCoords()
// takes an array with nested co-ordinates of an area boundary in numbers and converts them to a string with a colon between each set of values
export const formatAreaCoords = (array: number[][]): string => {
  // deep copy array first
  const arrCopy = JSON.parse(JSON.stringify(array));
  return arrCopy.join(':');
};

// randomColorGenerator
// creates a random hex color string array when given a number. If the given number is 2 it creates 2 random hex strings in an array
export const randomColorGenerator = (num: number) => {
  const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };
  let colorArr: string[] = [];
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      colorArr.push(randomColor());
    }
    return colorArr;
  } else {
    return [];
  }
};

// formatNeighbourhoodCoords
// takes an array of lat long objects and
// converts to a colon separated string
export const formatNeighourhoodCoords = (
  array: NeighbourhoodCoords[] | []
): string => {
  let coordString: string = '';
  if (array.length > 0) {
    array.forEach((coord) => {
      coordString += coord.latitude + ',' + coord.longitude + ':';
    });
  } else {
    return '';
  }
  return coordString.slice(0, -1);
};

// formatDate()
// Takes a date object and returns a string  version of the month and year only in format: yyyy/mm
export const formatDate = (date?: Date) => {
  if (date) {
    const dateYear = date.toLocaleString('default', {
      year: 'numeric',
    });
    const dateMonth = date.toLocaleString('default', { month: '2-digit' });
    const dateStr = dateYear + '-' + dateMonth;
    return dateStr;
  } else {
    return '';
  }
};

// formatNumberCoords()
// Takes a number of coords and formats them into an array
export const formatNumberCoords = (array: number[]) => {
  if (array.length !== 0) {
    let evensArr = [];
    let oddsArr = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        evensArr.push([+array[i].toFixed(6)]);
      }
      if (i % 2 === 1) {
        oddsArr.push(+array[i].toFixed(6));
      }
    }

    if (oddsArr.length !== 0) {
      for (let i = 0; i < evensArr.length; i++) {
        evensArr[i].push(oddsArr[i]);
      }
    }
    return evensArr;
  } else return [];
};
