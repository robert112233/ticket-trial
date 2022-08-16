export const fetchEndpoint = (options) => {
  console.log(options);
  return fetch(
    `https://app.ticketmaster.com/discovery/v2/${options}.json?apikey=MJkNGexO1FoixD4AhBGnttEOYDatPYg7 `
  )
    .then((response) => {
      return response.json();
    })
    .then(({ _embedded }) => {
      let results = _embedded[`${options}`];
      return results.slice(3, 8);
    });
};
