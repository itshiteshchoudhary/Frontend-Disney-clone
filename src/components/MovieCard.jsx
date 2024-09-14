
const Image_Base_url = "https://image.tmdb.org/t/p/original"

const MovieCard = ({movie}) => {
  return (
    <>
        <img src={Image_Base_url+movie.poster_path}
        className="w-[110px] md:w-[200px] hover:border-[3px] pb-1 border-gray-600 hover:scale-105 rounded-md  transition-all duration-150 ease-in-out "/>
    </>
  )
}

export default MovieCard