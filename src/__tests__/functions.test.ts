import {
  formatMonth,
  crimeCategoryLookup,
  crimeOutcomeLookup,
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
  test('takes an array of crime objects and returns a reference object with the outcome_status values as the keys in the new object. The values in the new object is a count of the keys', () => {
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
    expect(crimeOutcomeLookup(input)).toEqual({ null: 1 });
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
      null: 1,
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
