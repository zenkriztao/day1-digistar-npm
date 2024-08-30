const { formatDate, daysBetween, addDays } = require('./moment');
const moment = require('moment');

describe('Date utilities using Moment.js', () => {
  test('formats date correctly', () => {
    const date = new Date(2024, 0, 1);
    const format = 'YYYY-MM-DD';
    expect(formatDate(date, format)).toEqual('2024-01-01');
  });

  test('calculates days between two dates', () => {
    const start = new Date(2024, 0, 1);
    const end = new Date(2024, 0, 5);
    expect(daysBetween(start, end)).toEqual(4);
  });

  test('adds days to a date', () => {
    const date = new Date(2024, 0, 1);
    const daysToAdd = 10;
    const result = addDays(date, daysToAdd);
    expect(moment(result).format('YYYY-MM-DD')).toEqual('2024-01-11');
  });
});
