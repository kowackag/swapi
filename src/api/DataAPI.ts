interface ResponseProps {
  ok: string;
  status: string;
}
const url: string = 'https://swapi.py4e.com/api/';

const handleErrors = (resp) => {
  if (!resp.ok) {
    return Promise.reject(resp.status);
  }
  return resp;
};

export const getAvatarFromAPI = (num)  => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${url}/people/${num}`, options)
    .then((resp) => handleErrors(resp))
    .then((resp) => resp.json()).then((resp) => resp);
};
