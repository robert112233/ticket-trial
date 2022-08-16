export const fetchEndpoint = (options) => {
  return fetch(
    `https://app.ticketmaster.com/discovery/v2/${options}.json?apikey=9M1LVQPAdpLCVSjcjG2CAiZg97n0uDWU`
  )
    .then((response) => {
      return response.json();
    })
    .then(({ _embedded }) => {
      return _embedded[`${options}`];
    });
};
