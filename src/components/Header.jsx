import "../App.css";
import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";

function Header() {

    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon: <IoIosSearch />,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers",
            sup: "New"
        },
        {
            icon: "",
            name: "Help"
        },
        {
            icon: "",
            name: "Sign In"
        },
        {
            icon: "",
            name: "Cart",
            sup: 0
        }
    ]


    return (<>
    <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu} style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden" 
        }}>
            <div onClick={(e) => {
                e.stopPropagation();
            }} className="w-[500px] bg-white h-full absolute duration-[400ms]"
            style={{
                left: toggle ? '0%' : '-100%'
            }}></div>
        </div>
        <header className="p-[15px] shadow-xl">
            <div className="max-w-[1200px] mx-auto border flex items-center">
                <div className="w-[80px]">
                    <img src="images/logo.jpeg" className="w-full" alt=""/>
                </div>
                <div className="">
                    <span className="font-bold border-b-[3px] border-[black] ">Cities</span> Jaipur,
                     Rajasthan, India<RxCaretDown onClick={showSideMenu} fontSize={25} className="font-bold inline text-[#fc8019]"/>
                </div>
                <nav className="flex list-none gap-10 ml-auto font-semibold text-[18px]">
                {
                    links.map(
                        (link, index) => {
                         return <li key={index} className="flex hover:text-[#fc8819] items-center gap-2">
                            {link.icon}
                            {link.name}
                            <sup>{link.sup} </sup>
                          </li>
                        }
                    )
                }
                    
                    
                </nav>
            </div>
        </header>
    </>  );
}

export default Header;