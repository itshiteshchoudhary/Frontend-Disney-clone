import MovieList from './MovieList'
import { genere } from './recom/GenerateList'

const GenerateMovies = () => {
    return (
        <div>
            {genere.map((item, index) => (
                // 
                <div className='p-8  ' >
                    <h2 className='text-[20px] font-bold text-yellow-50'>{item.name}</h2>
                    <MovieList genereId={item.id}/>
                </div>
            ))}
        </div>
    )
}
export default GenerateMovies