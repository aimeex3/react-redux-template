import config from './config';

function send(path, params) {
  return fetch(config.apiUrl + path, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...params,
  }).then(response => response.json());
}

function get(path, headers) {
  return send(path, {
    method: 'GET',
    headers,
  });
}

function post(path, headers) {
  return send(path, {
    method: 'POST',
    headers,
  });
}

export function getUsers() {
  return get('/users');
}

export function setUser(id) {
  return post(`/users/${id}`);
}
