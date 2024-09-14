// https://api.themoviedb.org/3
// /movie/550?
// api_key=28f10ca147421a022de5d9449196c860
// // 28f10ca147421a022de5d9449196c860


import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key='28f10ca147421a022de5d9449196c860'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';



const getTrandingVideos=axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`)
const getMovieByGenerId=(id)=>axios.get(movieByGenreBaseURL+`&with_genres=`+id);

export default {getTrandingVideos, getMovieByGenerId}