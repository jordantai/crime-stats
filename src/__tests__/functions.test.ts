// import { expect, test, describe } from '@jest/globals';
import { formatMonth } from '../utils/formatMonth';

describe('formatMonth()', () => {
  test('when given an empty string returns an empty string', () => {
    expect(formatMonth('')).toBe('');
  });
  test('given a string number of a calendar month and year returns the string word equivalent', () => {
    expect(formatMonth('2020-10')).toBe('October 2020');
    expect(formatMonth('2019-01')).toBe('January 2019');
  });
});
