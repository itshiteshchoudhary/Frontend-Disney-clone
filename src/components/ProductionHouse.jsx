import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import netGio from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'

import starWarV from './../assets/videos/star-wars.mp4'
import disneyV from './../assets/videos/disney.mp4'
import marvelV from './../assets/videos/marvel.mp4'
import netGioV from './../assets/videos/national-geographic.mp4'
import pixarV from './../assets/videos/pixar.mp4'

const ProductionHouse = () => {
    const ProductionList = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: marvel,
            video: marvelV
        },
        {
            id: 3,
            image: netGio,
            video: netGioV
        },
        {
            id: 4,
            image: pixar,
            video: pixarV
        },
        {
            id: 5,
            image: starwar,
            video: starWarV
        } 
    ]
    return ( 
        <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 mt-4'>
            {ProductionList.map((item) => (
                <div className='border-4 border-gray-600 relative rounded-lg hover:scale-110 duration-100 ease-in-out shadow-lg shadow-slate-800'>
                    <img src={item.image} className='z-1 w-full' />
                    <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 rounded-lg opacity-0 hover:opacity-65 z-0' />
                </div>
            ))}
        </div>
    )
}

export default ProductionHouse