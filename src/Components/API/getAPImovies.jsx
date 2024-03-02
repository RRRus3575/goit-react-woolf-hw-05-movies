import axios from "axios";

export const getApiMovies = async () => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&authorization=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzYyMWE1ZDc2ZjllZjMzYjA2YzA3MDRhYzNkOGJiYSIsInN1YiI6IjY1ZTJkOGY5OTk3OWQyMDE0OWFmMmViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qo8shEPAbKViwlFQ3oddJMr-xKSYiuzHijoGy_EhAYQ&api_key=13621a5d76f9ef33b06c0704ac3d8bba`
  );
  return data;
};

export const getApiSingleMovie = async (id) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&authorization=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzYyMWE1ZDc2ZjllZjMzYjA2YzA3MDRhYzNkOGJiYSIsInN1YiI6IjY1ZTJkOGY5OTk3OWQyMDE0OWFmMmViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qo8shEPAbKViwlFQ3oddJMr-xKSYiuzHijoGy_EhAYQ&api_key=13621a5d76f9ef33b06c0704ac3d8bba`
  );
  return data;
};

export const getApiSearch = async (search) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/search/movie?query=${search}&language=en-US&authorization=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzYyMWE1ZDc2ZjllZjMzYjA2YzA3MDRhYzNkOGJiYSIsInN1YiI6IjY1ZTJkOGY5OTk3OWQyMDE0OWFmMmViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qo8shEPAbKViwlFQ3oddJMr-xKSYiuzHijoGy_EhAYQ&api_key=13621a5d76f9ef33b06c0704ac3d8bba`
  );
  return data;
};
