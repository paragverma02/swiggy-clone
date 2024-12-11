import React from "react";
import { RxCaretDown } from "react-icons/rx";


function Header() {
    return (<>
        <header className="p-[15px] shadow-xl">
            <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center">
                <div className="w-[80px] border border-blue-500">
                    <img src="images/logo.jpeg" className="w-full" alt=""/>
                </div>
                <div className="">
                    <span className="font-bold border-b-[3px] border-[black] ">Cities</span>
                    <RxCaretDown fontSize={15} className="inline text-[#fc8019]"/>
                </div>
            </div>
        </header>
    </>  );
}

export default Header;