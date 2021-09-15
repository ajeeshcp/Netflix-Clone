const API_KEY = "5b221cba4bcf0c692380b539717e8150" ;
export const BASE_URL = "https://api.themoviedb.org/3" ;
export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213` ;
export const action =   `/discover/movie?api_key=${API_KEY}&with_genres=28` ;
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35` ;
export const romance = `discover/movie?api_key=${API_KEY}&with_genres=10749` ;
export const documentry = `discover/movie?api_key=${API_KEY}&with_genres=99` ;
export const horror =  `discover/movie?api_key=${API_KEY}&with_genres=27` ;

export const popular =  `movie/popular?api_key=${API_KEY}&language=en-US&page=1` ;
export const toprated =  `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const upcoming  =  `movie/upcoming?api_key=${API_KEY}&language=en-US&page=2` ;
export const trending =  `trending/all/day?api_key=${API_KEY}`;