const getFirstMovie = (num) => (
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=cc13dcde48d6e0f1b0d6dc38b6120785`)
  .then((res) => res.json())
  .then((res) => res.results)
  .then((res) => res[num])
  .then(({ id, original_language, vote_average, title, overview, poster_path, genre_ids }) => (
    { id, original_language, vote_average, title, genre_ids, overview, img: `https://image.tmdb.org/t/p/w500/${poster_path}` }
  ))
);

export default getFirstMovie;
