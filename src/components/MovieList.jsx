import React, { useState ,useEffect } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard'

const MovieList = ({genereId}) => {
    const[movieList,setMovieList]=useState([])

    useEffect(() => {
        getMovieByGenreId()
    },[])
    
    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenerId(genereId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

  return (
    
    <div className='flex overflow-x-auto gap-12 scrollbar-hide pt-10 hover:shadow-lg shadow-slate-800'>
        {movieList.map((item)=>(
            <MovieCard movie={item}/>
        ))}
    </div>
  )
}

export default MovieList