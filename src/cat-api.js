// const url = 'https://api.thecatapi.com/v1';
// const api_key = "live_DtsjAPJseX0WxoLPudQqtoOqILGnIs0FJxEfiuionVIUcdWWXnug01nzABU3k997";
// export function fetchBreeds() {
//     return fetch(`${url}/breeds?api_key=${api_key}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
// };
// export function fetchCatByBreed(breedId) {
//     return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
//         .catch(() => {
//             setErrorState(true);
//             setLoadingState(false);
//         });
// };
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_DtsjAPJseX0WxoLPudQqtoOqILGnIs0FJxEfiuionVIUcdWWXnug01nzABU3k997';
const catApiUrl = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  const url = `${catApiUrl}/breeds`;

  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const url = `${catApiUrl}/images/search?breed_ids=${breedId}`;

  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}