
//Base URL
const base_url = "https://jikan1.p.rapidapi.com/";

//Const
const host = "jikan1.p.rapidapi.com";
const key = "0e274b1d45mshf1eaad7d4827458p1c2364jsnccda405a47f9";

export const search = (anime) => `$${base_url}search/${anime}`
export const topUncoming = (type) => `${base_url}top/${type}/1/upcoming`
export const topMovies = (type) => `${base_url}top/${type}/1/movie`