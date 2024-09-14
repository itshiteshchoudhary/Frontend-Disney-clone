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

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const menu = [
        {
            name: 'HOME',
            icon: IoMdHome
        },
        {
            name: 'SEARCH',
            icon: FaSearch
        },
        {
            name: 'WATCH LIST',
            icon: FaPlus
        },
        {
            name: 'ORIGNALS',
            icon: FaStar
        },
        {
            name: 'MOVIES',
            icon: RiMovie2Fill
        },
        {
            name: 'SERIES',
            icon: GiTv
        },

    ]
    return (
        <div className="flex gap-40 p-3 ">
            <img src={logo} className='w-[60px] md:w-[100px] object-cover ' />
            <div className="hidden md:flex gap-8">
                {menu.map((item, index) => {
                    return <HeaderItem key={index} name={item.name} Icon={item.icon} />
                })}
            </div>
            <div className="md:hidden flex gap-8">
                {menu.map((item, index) => index < 3 && (
                    <HeaderItem key={index} name={''} Icon={item.icon} />
                ))}
               <div className="mt-2" >
               <div className="md:hidden mt-4" onClick={()=>{setToggle(!toggle)}}>
                    <div className="">
                    <HeaderItem name={''} Icon={SlOptionsVertical} />
                    </div>
                    {toggle ?<div>
                        {menu.map((item, index) => index > 3 && (
                            <HeaderItem key={index} name={item.name} Icon={item.icon} />
                        ))}
                    </div>:null}
                    
                </div>
               </div>
            </div>

            <div>
                <img src={login} className="w-[48px] h-[48px] object-cover rounded-full m-1" />
            </div>
        </div>
    )
}

export default Header