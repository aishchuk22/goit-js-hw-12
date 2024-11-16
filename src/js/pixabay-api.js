// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

const BASE_URL = 'https://pixabay.com/api/';
const key = '46793755-9d28ad9f5c835a0a0339cf9e7';

export function fetchImages(textInput) {
  const params = new URLSearchParams({
    key,
    q: textInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

    return fetch(`${BASE_URL}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
    });
}