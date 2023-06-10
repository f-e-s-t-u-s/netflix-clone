const api_key = '560b700a0daacf78fd509bbc83fe7c5e'

const requests = {
  fetchtmovies: `/genre/movie/list?api_key=${api_key}&language=en-US`,
  fetchtrendingmovies: `/trending/all/day?api_key=${api_key}`,
  tvlist: `/genre/tv/list?api_key=${api_key}&language=en-US`,
  moviegenres: `/genre/movie/list?api_key=${api_key}&language=en-US`,
  netflixoriginals:`/discover/tv?api_key=${api_key}&with_networks=213`,
  topratedmovies: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  actionmovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  comedymovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  horrormovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  romancemovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  documentariesmovies: `/discover/movie?api_key=${api_key}&with_genres=99`,
};

export default requests;