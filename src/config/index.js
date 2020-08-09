const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://gamefl1x.herokuapp.com';

export default {
  URL_BACKEND,
};
