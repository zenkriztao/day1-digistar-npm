const moment = require('moment');

function formatDate(date, format) {
  return moment(date).format(format);
}

function daysBetween(date1, date2) {
  return moment(date2).diff(moment(date1), 'days');
}

function addDays(date, days) {
  return moment(date).add(days, 'days').toDate();
}

module.exports = { formatDate, daysBetween, addDays };
