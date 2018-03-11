import moment from 'moment';
import searchFlights from './searchFlights';

const pageSize = 15;
let cache = new Map();

export default function searchFlightsCached(flyFrom, to, date, offset, limit) {
  const dateFrom = moment(date);
  if (!dateFrom.isValid()) {
    return Promise.resolve([]);
  }

  const key = window.btoa(JSON.stringify({
    flyFrom,
    to,
    date: dateFrom.format('DD/MM/YYYY'),
  }));

  if (cache.has(key)) {
    const results = cache.get(key);
    if (results.length >= offset + limit) {
      return Promise.resolve(results.slice(offset, offset + limit));
    }
  }

  const internaleLimit = Math.ceil((offset + limit) / pageSize) * pageSize;

  return searchFlights(flyFrom, to, date, 0, internaleLimit)
    .then(data => {
      cache.set(key, data);
      return data.slice(offset, offset + limit);
    })
    .catch(err => {
      return [];
    });
}
