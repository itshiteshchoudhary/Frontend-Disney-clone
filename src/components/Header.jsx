import logo from "./../assets/images/logo.png"
import login from "./../assets/images/login.jpeg"
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { GiTv } from "react-icons/gi";
import { SlOptionsVertical } from "react-icons/sl";
import HeaderItem from './HeaderItem';
import { useState } from "react";

const Header = ({setSearchText}) => {
    const [toggle, setToggle] = useState(false)
    const [openSearch, setOpenSearch] = useState("false")
    const menu = [
        //     {
        //         name: 'HOME',
        //         icon: IoMdHome
        //     },
        //     {
        //         name: 'SEARCH',
        //         icon: FaSearch
        //     },
        //     {
        //         name: 'WATCH LIST',
        //         icon: FaPlus
        //     },
        //     {
        //         name: 'ORIGNALS',
        //         icon: FaStar
        //     },
        //     {
        //         name: 'MOVIES',
        //         icon: RiMovie2Fill
        //     },
        //     {
        //         name: 'SERIES',
        //         icon: GiTv
        //     }
    ]
    return (
        <div className="flex relative w-full md:h-[10vh]">
            <img src={logo} className='sm:w-[60px] absolute top-4 left-6 md:w-[8vw] object-cover ' />
            {/* <div className="hidden md:flex gap-8">
                {menu.map((item, index) => {
                    return <HeaderItem key={index} name={item.name} Icon={item.icon} />
                })}
            </div> */}
            <ul className="flex sm:px-[5vw] sm:text-xs absolute sm:top-6 sm:left-20 sm:gap-3 md:text-sm md:gap-5 lg:left-36 lg:gap-10 items-center ">
                <li key="1" className="flex gap-1 lg:gap-4 lg:text-xl hover:border-b-2 border-white pb-1 ">
                    < IoMdHome className=" " />
                    {!openSearch ? "" : "Home"}</li>
                <li key="2" className="flex gap-1 lg:gap-4 hover:border-b-2 border-white pb-1 lg:text-xl">
                    {!openSearch ? "" : < FaSearch onClick={() => { setOpenSearch(prev => !prev) }}/> }                    
                    {!openSearch ? <div className="flex gap-1">
                        < FaSearch onClick={() => { setOpenSearch(prev => !prev) }} className="absolute sm:top-2 pb-0 mb-0"/> 
                        <input onChange={(e)=>setSearchText(e.target.value)} className="bg-blue-950 px-2 py-1 sm:mx-8 rounded-md text-white" type="text" placeholder="Search here....." />
                    </div> : "Search"}</li>
                <li key="3" className="flex gap-1 lg:gap-4 text-nowrap lg:text-xl hover:border-b-2 border-white pb-1 ">
                    < FaPlus className="" />
                    {!openSearch ? "" : "WATCH LIST"}</li>
                <li key="4" className="flex gap-1 lg:gap-4 lg:text-xl hover:border-b-2 border-white pb-1 ">
                    < FaStar className=" " />
                    {!openSearch ? "" : "ORIGNALS"}</li>
                <li key="5" className="flex gap-1 lg:gap-4 lg:text-xl hover:border-b-2 border-white pb-1 ">
                    < RiMovie2Fill className=" " />
                    {!openSearch ? "" : "MOVIES"}</li>
                <li key="6" className="flex gap-1 lg:gap-4 lg:text-xl hover:border-b-2 border-white pb-1 ">
                    < GiTv className=" " />
                    {!openSearch ? "" : "SERIES"}</li>
            </ul>
            <div className="md:hidden ml-14 flex gap-8">
                {menu.map((item, index) => index < 3 && (
                    <HeaderItem key={index} name={''} Icon={item.icon} />
                ))}
                <div className="mt-2" >
                    <div className="md:hidden mt-4" onClick={() => { setToggle(!toggle) }}>
                        <div className="">
                            <HeaderItem name={''} Icon={SlOptionsVertical} />
                        </div>
                        {toggle ? <div>
                            {menu.map((item, index) => index > 3 && (
                                <HeaderItem key={index} name={item.name} Icon={item.icon} />
                            ))}
                        </div> : null}

                    </div>
                </div>
            </div>

            <div className="absolute right-6 top-2">
                <img src={login} className="sm:w-[7vw] md:w-[6vw] sm:h-[7vh] lg:w-[4vw] object-cover rounded-full m-1" />
            </div>
        </div>
    )
}

export default Header