import {
  formatMonth,
  crimeCategoryLookup,
  crimeOutcomeLookup,
  formatPolyData,
  formatAreaCoords,
  randomColorGenerator,
  formatNeighourhoodCoords,
} from '../utils/functions';

describe('formatMonth()', () => {
  test('when given an empty string returns an empty string', () => {
    expect(formatMonth('')).toBe('');
  });
  test('given a string number of a calendar month and year returns the string word equivalent', () => {
    expect(formatMonth('2020-10')).toBe('October 2020');
    expect(formatMonth('2019-01')).toBe('January 2019');
  });
});

describe('crimeCategoryLookup()', () => {
  test('when passed an empty array returns and empty object', () => {
    const input: [] = [];
    const actual = crimeCategoryLookup(input);
    const expected = {};
    expect(actual).toEqual(expected);
  });
  test('returned object has different reference to input', () => {
    const input: Incident[] = [
      {
        category: 'anti-social-behaviour',
        context: '',
        id: 78315854,
        location: {
          latitude: '53.341709',
          street: { id: 582821, name: 'On or near Lawrence Place' },
          longitude: '-2.125837',
        },
        location_subtype: '',
        location_type: 'Force',
        month: '2019-10',
        outcome_status: null,
        persistent_id: '',
      },
    ];
    expect(crimeCategoryLookup(input)).not.toBe(input);
    expect(crimeCategoryLookup(input)).toEqual({ 'anti-social-behaviour': 1 });
  });
  test('takes an array of crime objects and returns a reference object with the key as the category name and the value as the number objects with that category name', () => {
    const input: Incident[] = [
      {
        category: 'anti-social-behaviour',
        context: '',
        id: 78315854,
        location: {
          latitude: '53.341709',
          street: { id: 582821, name: 'On or near Lawrence Place' },
          longitude: '-2.125837',
        },
        location_subtype: '',
        location_type: 'Force',
        month: '2019-10',
        outcome_status: null,
        persistent_id: '',
      },
    ];
    expect(crimeCategoryLookup(input)).toEqual({ 'anti-social-behaviour': 1 });
  });
  test('works for mulitple objects in the array', () => {
    const input: Incident[] = [
      {
        category: 'anti-social-behaviour',
        context: '',
        id: 78315854,
        location: {
          latitude: '53.341709',
          street: { id: 582821, name: 'On or near Lawrence Place' },
          longitude: '-2.125837',
        },
        location_subtype: '',
        location_type: 'Force',
        month: '2019-10',
        outcome_status: null,
        persistent_id: '',
      },
      {
        category: 'anti-social-behaviour',
        context: '',
        id: 78315854,
        location: {
          latitude: '53.341709',
          street: { id: 582821, name: 'On or near Lawrence Place' },
          longitude: '-2.125837',
        },
        location_subtype: '',
        location_type: 'Force',
        month: '2019-10',
        outcome_status: null,
        persistent_id: '',
      },
      {
        category: 'burglary',
        context: '',
        id: 78315854,
        location: {
          latitude: '53.341709',
          street: { id: 582821, name: 'On or near Lawrence Place' },
          longitude: '-2.125837',
        },
        location_subtype: '',
        location_type: 'Force',
        month: '2019-10',
        outcome_status: null,
        persistent_id: '',
      },
    ];
    expect(crimeCategoryLookup(input)).toEqual({
      'anti-social-behaviour': 2,
      burglary: 1,
    });
  });
  test('does not mutate original array', () => {
    const input: Incident[] = [
      {
        category: 'anti-social-behaviour',
        context: '',
        id: 78315854,
        location: {
          latitude: '53.341709',
          street: { id: 582821, name: 'On or near Lawrence Place' },
          longitude: '-2.125837',
        },
        location_subtype: '',
        location_type: 'Force',
        month: '2019-10',
        outcome_status: null,
        persistent_id: '',
      },
    ];
    crimeCategoryLookup(input);
    expect(input[0]).toEqual({
      category: 'anti-social-behaviour',
      context: '',
      id: 78315854,
      location: {
        latitude: '53.341709',
        street: { id: 582821, name: 'On or near Lawrence Place' },
        longitude: '-2.125837',
      },
      location_subtype: '',
      location_type: 'Force',
      month: '2019-10',
      outcome_status: null,
      persistent_id: '',
    });
  });
});

describe('crimeOutcomeLookup()', () => {
  test('when passed an empty array returns an empty object', () => {
    const input: [] = [];
    const actual = crimeOutcomeLookup(input);
    const expected = {};
    expect(actual).toEqual(expected);
  });
  test('returned object has different referece to input', () => {
    const input: Incident[] = [
      {
        category: 'anti-social-behaviour',
        context: '',
        id: 78315854,
        location: {
          latitude: '53.341709',
          street: { id: 582821, name: 'On or near Lawrence Place' },
          longitude: '-2.125837',
        },
        location_subtype: '',
        location_type: 'Force',
        month: '2019-10',
        outcome_status: null,
        persistent_id: '',
      },
    ];
    expect(crimeOutcomeLookup(input)).not.toBe(input);
  });
  test('takes an array of crime objects and returns a reference object with the outcome_status values as the keys in the new object. The values in the new object is a count of the keys. If the value is null this is replaced with "Unknown', () => {
    const input: Incident[] = [
      {
        category: 'anti-social-behaviour',
        context: '',
        id: 78315854,
        location: {
          latitude: '53.341709',
          street: { id: 582821, name: 'On or near Lawrence Place' },
          longitude: '-2.125837',
        },
        location_subtype: '',
        location_type: 'Force',
        month: '2019-10',
        outcome_status: null,
        persistent_id: '',
      },
    ];
    expect(crimeOutcomeLookup(input)).toEqual({ Unknown: 1 });
  });
  test('works for non null values when outcome_status is an object', () => {
    const input: Incident[] = [
      {
        category: 'anti-social-behaviour',
        context: '',
        id: 78315854,
        location: {
          latitude: '53.341709',
          street: { id: 582821, name: 'On or near Lawrence Place' },
          longitude: '-2.125837',
        },
        location_subtype: '',
        location_type: 'Force',
        month: '2019-10',
        outcome_status: {
          category: 'Investigation complete; no suspect identified',
          date: '2020-05',
        },
        persistent_id: '',
      },
    ];
    expect(crimeOutcomeLookup(input)).toEqual({
      'Investigation complete; no suspect identified': 1,
    });
  });
  test('works for mulitple objects and both null and non-null outcome_status values', () => {
    const input: Incident[] = [
      {
        category: 'anti-social-behaviour',
        context: '',
        id: 78315854,
        location: {
          latitude: '53.341709',
          street: { id: 582821, name: 'On or near Lawrence Place' },
          longitude: '-2.125837',
        },
        location_subtype: '',
        location_type: 'Force',
        month: '2019-10',
        outcome_status: {
          category: 'Investigation complete; no suspect identified',
          date: '2020-05',
        },
        persistent_id: '',
      },
      {
        category: 'anti-social-behaviour',
        context: '',
        id: 78315854,
        location: {
          latitude: '53.341709',
          street: { id: 582821, name: 'On or near Lawrence Place' },
          longitude: '-2.125837',
        },
        location_subtype: '',
        location_type: 'Force',
        month: '2019-10',
        outcome_status: null,
        persistent_id: '',
      },
    ];
    expect(crimeOutcomeLookup(input)).toEqual({
      'Investigation complete; no suspect identified': 1,
      Unknown: 1,
    });
  });
  test('does not mutate original array', () => {
    const input: Incident[] = [
      {
        category: 'anti-social-behaviour',
        context: '',
        id: 78315854,
        location: {
          latitude: '53.341709',
          street: { id: 582821, name: 'On or near Lawrence Place' },
          longitude: '-2.125837',
        },
        location_subtype: '',
        location_type: 'Force',
        month: '2019-10',
        outcome_status: null,
        persistent_id: '',
      },
    ];
    crimeOutcomeLookup(input);
    expect(input[0]).toEqual({
      category: 'anti-social-behaviour',
      context: '',
      id: 78315854,
      location: {
        latitude: '53.341709',
        street: { id: 582821, name: 'On or near Lawrence Place' },
        longitude: '-2.125837',
      },
      location_subtype: '',
      location_type: 'Force',
      month: '2019-10',
      outcome_status: null,
      persistent_id: '',
    });
  });
});

describe('formatPolyData()', () => {
  test('when passed an empty array, returns an empty string', () => {
    const input: [] = [];
    expect(formatPolyData(input)).toBe('');
  });
  test('takes a single array with 1 number and returns a string of that value', () => {
    const input: number[][] = [[53.6255779]];
    expect(formatPolyData(input)).toBe('53.6255779');
  });
  test('reverses the values in the array so the larger (lat) number is first in the string', () => {
    const input: number[][] = [[-2.379134, 53.6255779]];
    expect(formatPolyData(input)).toBe('53.6255779,-2.379134');
  });
  test('joins mulitple arrays together in one string, with each array"s values separated by a colon', () => {
    const input: number[][] = [
      [-2.379134, 53.6255779],
      [-2.3794096, 53.6287564],
    ];
    expect(formatPolyData(input)).toBe(
      '53.6287564,-2.3794096:53.6255779,-2.379134'
    );
  });
  test('works for multiple nested arrays', () => {
    const input: number[][] = [
      [-2.379134, 53.6255779],
      [-2.3794096, 53.6287564],
      [-2.3790976, 53.6270199],
    ];
    const expected: string =
      '53.6270199,-2.3790976:53.6287564,-2.3794096:53.6255779,-2.379134';
    const input2: number[][] = [
      [-2.379134, 53.6255779],
      [-2.3794096, 53.6287564],
      [-2.3790976, 53.6270199],
      [-2.3794822, 53.6270807],
      [-2.3796207, 53.6270093],
    ];
    const expected2: string =
      '53.6270093,-2.3796207:53.6270807,-2.3794822:53.6270199,-2.3790976:53.6287564,-2.3794096:53.6255779,-2.379134';
    expect(formatPolyData(input)).toBe(expected);
    expect(formatPolyData(input2)).toBe(expected2);
  });
  test('does not mutate original array', () => {
    const input: number[][] = [[-2.379134, 53.6255779]];
    formatPolyData(input);
    expect(input[0]).toEqual([-2.379134, 53.6255779]);
  });
});

describe('formatAreaCoords()', () => {
  test('when passed an empty array returns an empty string', () => {
    const input: [] = [];
    expect(formatAreaCoords(input)).toBe('');
  });
  test('takes a single array with one nested array and returns a string of the values', () => {
    const input: number[][] = [[53.454705, -2.15902]];
    expect(formatAreaCoords(input)).toEqual('53.454705,-2.15902');
  });
  test('joins mulitple arrays together in one string, with each array"s values separated by a colon', () => {
    const input: number[][] = [
      [53.454705, -2.15902],
      [53.407282, -2.213392],
    ];
    expect(formatAreaCoords(input)).toBe(
      '53.454705,-2.15902:53.407282,-2.213392'
    );
  });
  test('does not mutate original array', () => {
    const input: number[][] = [
      [53.454705, -2.15902],
      [53.407282, -2.213392],
    ];
    formatAreaCoords(input);
    expect(input[0]).toEqual([53.454705, -2.15902]);
  });
});

describe('randomColorGenerator()', () => {
  test('when passed 0, returns an empty array', () => {
    const input: number = 0;
    expect(randomColorGenerator(input)).toEqual([]);
  });
  test('returns one random hex color string in an array when passed a number 1', () => {
    const input: number = 1;
    const expected = [expect.stringMatching(/^\#[A-Za-z0-9]/)];
    expect(randomColorGenerator(input)).toHaveLength(1);
    const colorArr = randomColorGenerator(input);
    expect(colorArr[0]).toHaveLength(7);
    expect(colorArr).toEqual(expect.arrayContaining(expected));
  });
  test('returns mulitple hex colour strings in a single array when passed an array with multiple values', () => {
    const input: number = 3;
    const colorArr = randomColorGenerator(input);
    expect(colorArr).toHaveLength(3);
  });
  // test('values in the hex color array are not the same', () => {
  //   const input: number = 10;
  //   const colorArr = randomColorGenerator(input);
  //   for (let i = 0; i < colorArr.length; i++) {
  //     const colorCheck = colorArr.every((color) => color !== colorArr[i]);
  //     expect(colorCheck).toEqual(true);
  //   }
  // });
});

describe('formatNeighbourhoodCoords()', () => {
  test('returns an empty string when passed an empty array', () => {
    const input: [] = [];
    expect(formatNeighourhoodCoords(input)).toBe('');
  });
  test('returns a string when passed an array with a single item object', () => {
    const input: NeighbourhoodCoords[] = [
      {
        latitude: '53.375032',
        longitude: '-2.02148',
      },
    ];
    expect(formatNeighourhoodCoords(input)).toBe('53.375032,-2.02148');
  });
  test('works for mulitple objects in the array and adds a colon between each pair of coords', () => {
    const input: NeighbourhoodCoords[] = [
      {
        latitude: '53.375032',
        longitude: '-2.02148',
      },
      {
        latitude: '53.375521',
        longitude: '-2.02157',
      },
    ];
    const input2: NeighbourhoodCoords[] = [
      {
        latitude: '53.375032',
        longitude: '-2.02148',
      },
      {
        latitude: '53.375521',
        longitude: '-2.02157',
      },
      {
        latitude: '53.375672',
        longitude: '-2.021625',
      },
      {
        latitude: '53.37576',
        longitude: '-2.021712',
      },
    ];
    expect(formatNeighourhoodCoords(input)).toBe(
      '53.375032,-2.02148:53.375521,-2.02157'
    );
    expect(formatNeighourhoodCoords(input2)).toBe(
      '53.375032,-2.02148:53.375521,-2.02157:53.375672,-2.021625:53.37576,-2.021712'
    );
  });
  test('does not mutate original array', () => {
    const input: NeighbourhoodCoords[] = [
      {
        latitude: '53.375032',
        longitude: '-2.02148',
      },
    ];
    formatNeighourhoodCoords(input);
    expect(input[0]).toEqual({
      latitude: '53.375032',
      longitude: '-2.02148',
    });
  });
});
