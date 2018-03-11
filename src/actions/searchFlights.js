import moment from 'moment';

const KIWI_FLIGHTS_API_URL = 'https://api.skypicker.com/flights';

export default function searchFlights(flyFrom, to, date, offset, limit) {
  const dateFrom = moment(date);
  if (!dateFrom.isValid()) {
    return Promise.resolve([]);
  }

  const query = new URLSearchParams(
    Object.entries({
      flyFrom,
      to,
      dateFrom: dateFrom.format('DD/MM/YYYY'),
      offset: offset,
      limit: limit,
      curr: 'CZK',
      sort: 'price',
    })
  ).toString();

  return fetch(`${KIWI_FLIGHTS_API_URL}?${query}`, {
    header: new Headers({
      'Access-Control-Allow-Origin': '*',
    }),
  })
    .then(res => res.json())
    .then(res => res.data)
    .catch(() => {
      return [];
    });
}
