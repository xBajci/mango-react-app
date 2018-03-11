import _ from 'lodash';
const KIWI_LOCATIONS_API_URL = 'https://api.skypicker.com/locations/';

export default function fetchLocations(term) {
  if (!term) {
    return Promise.resolve([]);
  }

  const query = new URLSearchParams(
    Object.entries({
      term,
      v: 2,
      locale: 'en-Us',
    })
  ).toString();

  return fetch(`${KIWI_LOCATIONS_API_URL}?${query}`, {
    header: new Headers({
      'Access-Control-Allow-Origin': '*',
    }),
  })
    .then(res => res.json())
    .then(res => _.map(res.locations, loc => {
      return {
        value: loc.id,
        label: loc.name
      }
    }));
}
