// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const key = '46793755-9d28ad9f5c835a0a0339cf9e7';

export async function fetchImages(query, page, perPage) {
  const response = await axios.get(BASE_URL, {
    params : {
    key,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: perPage,
    page,
  },
});

return response.data;
}