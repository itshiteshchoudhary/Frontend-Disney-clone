import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const Image_Base_url = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth

const Slider = () => {
    const [movieList, setMovieList] = useState([])
    const elementRef =useRef()
    useEffect(() => {
        getTrendingMovies()
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrandingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-100
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-100
    }
    return (
        <div>
            <FaChevronLeft onClick={()=>sliderLeft(elementRef.current)} className='hidden md:block text-white text-[40px] absolute mx-8 mt-[155px] bg-transparent' />
            <FaChevronRight onClick={()=>sliderRight(elementRef.current)} className='hidden md:block text-white text-[40px] absolute mx-8 mt-[155px] right-0 bg-transparent' />
            <div className='flex overflow-x-auto px-16 py-4 scrollbar-hide scroll-smooth ' ref={elementRef}>
                {movieList.map((item, index) => (
                    <img src={Image_Base_url + item.backdrop_path}
                        className='rounded-lg md:h-[310px] size-full min-w-full object-fit pr-4 hover:border-[4px] border-gray-800 transition-all duration-100 ease-in-out' />
                ))}
            </div>
        </div>
    )
}
export default Slider