import config from './config';

function send(path, params) {
  return fetch(config.apiUrl + path, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...params,
  }).then(response => response.json());
}

function get(path, params) {
  return send(path, {
    method: 'GET',
    ...params,
  });
}

function post(path, params) {
  return send(path, {
    method: 'POST',
    ...params,
  });
}

export function getUsers() {
  return get('/users.json');
}

export function setUser(id) {
  return post(`/users/${id}`);
}
