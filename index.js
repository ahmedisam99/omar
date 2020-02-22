function render(res) {
  const movies = res.data.movies;
  const mainMovies = document.querySelector('#mainMovies');
  movies.forEach(movie => {
    const movieId = movie.id;
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h3 = document.createElement('a');

    img.src = movie.medium_cover_image;
    img.className = 'movie-img';

    h3.innerText = movie.title;
    h3.className = 'movie-title';
    h3.href = '/movie.html?id=' + movieId;

    div.className = 'main-movie';
    div.appendChild(img);
    div.appendChild(h3);

    mainMovies.appendChild(div);
  });
}

// fetch(
//   'GET',
//   'https://yts.mx/api/v2/list_movies.json?genre=action',
//   null,
//   render,
// );

fetch('https://yts.mx/api/v2/list_movies.json?genre=action')
  .then(res => {
    return res.json();
  })
  .then(render)
  .catch(err => {
    console.log(err);
  });
