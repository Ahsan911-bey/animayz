"use client";
import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Logo from "./Logo.png";
import Image from 'next/image';
import Link from 'next/link';


const NavBar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<'ENG' | 'JAP'>('ENG');

    const LangBtnHandler = (language: 'ENG' | 'JAP') => {
        setSelectedLanguage(language);
    };

    return (
        <div className="h-16 bg-[#1c1c1c] flex items-center justify-between px-4 md:px-8 text-white">
            <div className="flex items-center space-x-4">
                <FiAlignJustify size={32} />
            </div> 
            <div className="h-10 pl-12 ">
                <Link href="/home">
                <Image
                    src={Logo}
                    alt="Logo"
                    className="h-10 rounded-xl object-contain"
                />
                </Link>
            </div>
            <div className=" relative pl-1 sm:pl-16 w-11/12 flex flex-grow">
                <input
                    type="text"
                    placeholder="  Search..."
                    className="bg-[#141414] pl-5 w-full rounded-md h-8 md:w-1/2"
                 />
                <button className="absolute top-1 "><IoMdSearch size={24} /></button>
            </div>
            <div className="pl-44 hidden md:flex">
                <button
                    onClick={() => LangBtnHandler('ENG')}
                    className={`w-7 h-6 font-mono rounded-l-md ${
                        selectedLanguage === 'ENG' ? 'bg-gray-400 text-zinc-800' : 'bg-zinc-800 text-gray-500'
                    }`}
                >
                    EN
                </button>
                <button
                    onClick={() => LangBtnHandler('JAP')}
                    className={`w-7 h-6 ml-px font-mono rounded-r-md ${
                        selectedLanguage === 'JAP' ? 'bg-gray-400 text-zinc-800' : 'bg-zinc-800 text-gray-500'
                    }`}
                >
                    JP
                </button>
            </div>
            <div className="ml-52 hidden md:flex">
                <button
                    className="bg-purple-800 w-auto mr-4 h-auto whitespace-nowrap flex items-center justify-center py-1 px-7 font-normal text-white rounded-md ml-3 transition-all hover:bg-purple-700"
                >
                    Sign in <FaArrowRightLong className="ml-2" />
                </button>
            </div>
        </div>
    );
};
export default NavBar;