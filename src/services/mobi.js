import axios from 'axios'

const api = axios.create({
  baseURL: 'http://educacao.dadosabertosbr.com/api',
});

export const getSchools = (name = null) => {
  return new Promise((resolve, reject) => {
    api.get(`/escolas/buscaavancada?cidade=2211001${name ? `&nome=${name}` : ''}`)
      .then(({ data }) => resolve(data))
      .catch(error => reject(error));
  });
}