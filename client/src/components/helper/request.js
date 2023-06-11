const api_key = "560b700a0daacf78fd509bbc83fe7c5e";

const requests = [
  {
    tittle: "Netflix Trending",
    api: `/trending/all/day?api_key=${api_key}`,
    key:1,
    backdrop:true,
  },

  {
    tittle: "Netflix Originals",
    api: `/discover/tv?api_key=${api_key}&with_networks=213`,
    key:2,
  },
  {
    tittle: "Top Rated Movies",
    api: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    key:3
  },
  {
    tittle: "Action Movies",
    api: `/discover/movie?api_key=${api_key}&with_genres=28`,
    key:4,
  },
  {
    tittle: "Comedy",
    api: `/discover/movie?api_key=${api_key}&with_genres=35`,
    key:5
  },
  {
    tittle: "Horror Movies",
    api: `/discover/movie?api_key=${api_key}&with_genres=27`,
    key:6
  },

  {
    tittle: "Romance",
    api: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    key:7,
  },
  {
    tittle: "Documentaries",
    api: `/discover/movie?api_key=${api_key}&with_genres=99`,
    key:8,
  },
];

export default requests;
