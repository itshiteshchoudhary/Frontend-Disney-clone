import React, { useState, useEffect } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard'

const MovieList = ({ genereId, searchText }) => {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        getMovieByGenreId()
    }, [])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenerId(genereId).then(resp => {
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const filteredMovies = movieList.filter((movie) =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (

        <div className='flex overflow-x-auto gap-12 scrollbar-hide pt-10 hover:shadow-lg shadow-slate-800'>
            {/* {filteredMovies > 0 ?
                filteredMovies.map((movie)=>(
                    <MovieCard movie={movie}/>
                ))
                :
                movieList.map((item) => (
                    <MovieCard movie={item} />
                ))} */}
                {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <p className="text-white">No movies found.</p>
      )}
        </div>
    )
}

export default MovieList