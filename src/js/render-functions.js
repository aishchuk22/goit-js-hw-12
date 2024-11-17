// У файлі render-functions.js створи функції для відображення елементів інтерфейсу.

export function createMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
         `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              width="360"
            />
          </a>
          <div class="gallery-container">
            <div class="gallery-info-item">
              <h2 class="tittle">Likes</h2>
              <p class="number">${likes}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Views</h2>
              <p class="number">${views}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Comments</h2>
              <p class="number">${comments}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Downloads</h2>
              <p class="number">${downloads}</p>
            </div>
          </div>
        </li>`
    )
    .join('');
    }