"use client";
import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Logo from "./Logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const NavBar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<'ENG' | 'JAP'>('ENG');
    const [searchQuery,setSearchQuery] = useState('');
    const router = useRouter();
    const [isOpen,setIsOpen] = useState(false);
    const [isOpenAbout,setIsOpenAbout] = useState(false);
    const [isOpenGenres,setIsOpenGenres] = useState(false);
    const [isOpenType,setIsOpenType] = useState(false);
    const [isOpenYear,setIsOpenYear] = useState(false);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) =>{
        if(event.key === 'Enter'){
            handleSearch();
        }
    }
    const handleSearch = () =>{
       if(searchQuery.trim() !== ''){
            router.push(`/Search?q=${encodeURIComponent(searchQuery)}`)
       }
    }

    const LangBtnHandler = (language: 'ENG' | 'JAP') => {
        setSelectedLanguage(language);
    };


    return (
        <div className="h-16 bg-[#1c1c1c] flex items-center justify-between px-4 md:px-8 text-white">
                <div className="relative flex items-center space-x-4 cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                >
                    <FiAlignJustify size={32} />

                    {isOpen && (
                        <div className=" absolute w-20 py-8 bg-[#1c1c1c] top-7 -left-10 z-50 rounded-md overflow-hidden">
                            <ul className="w-full flex justify-center items-center flex-col">
                                <div onMouseEnter={() => setIsOpenAbout(true)} onMouseLeave={() => setIsOpenAbout(false)} className=" w-full">
                                <li className="text-gray-600 cursor-pointer mt-2 w-full flex justify-center items-center">About</li>
                                </div>
                                <div onMouseEnter={() => setIsOpenGenres(true)} onMouseLeave={() => setIsOpenGenres(false)}  className=" w-full">
                                <li className="text-slate-600 cursor-pointer mt-2 w-full flex justify-center items-center">Genres</li>
                                </div>
                                <div onMouseEnter={() => setIsOpenType(true)} onMouseLeave={() => setIsOpenType(false)}  className=" w-full">
                                <li className="text-slate-600 cursor-pointer mt-2 w-full flex justify-center items-center">Type</li>
                                </div>
                                <div onMouseEnter={() => setIsOpenYear(true)} onMouseLeave={() => setIsOpenYear(false)}  className=" w-full">
                                <li className="text-slate-600 cursor-pointer mt-2 w-full flex justify-center items-center">Year</li>
                                </div>
                            </ul>
                        </div>
                    )}
                    {isOpenAbout && (
                        <div className="absolute px-8 py-8 bg-zinc-900 top-7 left-10 z-50 rounded-md overflow-hidden" onMouseEnter={() => setIsOpenAbout(true)} onMouseLeave={() => setIsOpenAbout(false)}>
                            <ul>
                                <div >
                                <li className="text-gray-600 cursor-pointer mt-2">About</li>
                                </div>
                                <div >
                                <li className="text-slate-600 cursor-pointer mt-2">About</li>
                                </div>
                                <div >
                                <li className="text-slate-600 cursor-pointer mt-2">About</li>
                                </div>
                                <div >
                                <li className="text-slate-600 cursor-pointer mt-2">About</li>
                                </div>
                            </ul>
                        </div>
                    )}
                    {isOpenGenres && (
                        <div className="absolute px-8 py-8 bg-zinc-900 top-7 left-10 z-50 rounded-md overflow-hidden" onMouseEnter={() => setIsOpenGenres(true)} onMouseLeave={() => setIsOpenGenres(false)}>
                            <ul>
                                <div >
                                <li className="text-gray-600 cursor-pointer mt-2">Genres</li>
                                </div>
                                <div >
                                <li className="text-slate-600 cursor-pointer mt-2">Genres</li>
                                </div>
                                <div >
                                <li className="text-slate-600 cursor-pointer mt-2">Genres</li>
                                </div>
                                <div >
                                <li className="text-slate-600 cursor-pointer mt-2">Genres</li>
                                </div>
                            </ul>
                        </div>
                    )}
                     {isOpenType && (
                        <div className="absolute px-8 py-8 bg-zinc-900 top-7 left-10 z-50 rounded-md overflow-hidden" onMouseEnter={() => setIsOpenType(true)} onMouseLeave={() => setIsOpenType(false)}>
                            <ul>
                                <div >
                                <li className="text-gray-600 cursor-pointer mt-2">Type</li>
                                </div>
                                <div >
                                <li className="text-slate-600 cursor-pointer mt-2">Type</li>
                                </div>
                                <div >
                                <li className="text-slate-600 cursor-pointer mt-2">Type</li>
                                </div>
                                <div >
                                <li className="text-slate-600 cursor-pointer mt-2">Type</li>
                                </div>
                            </ul>
                        </div>
                    )}
                      {isOpenYear && (
                        <div className="absolute px-8 py-8 bg-[#0F0F0F] top-7 left-10 z-50 rounded-md overflow-hidden" onMouseEnter={() => setIsOpenYear(true)} onMouseLeave={() => setIsOpenYear(false)}>
                            <div className="flex flex-row gap-16">
                            <ul className="text-sm">
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1947</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1960</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1965</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1969</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1973</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1977</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1981</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1981</li>
                                </div></Link>
                            </ul>
                            <ul className="text-sm">
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1947</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1960</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1965</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1969</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1973</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1977</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1981</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1981</li>
                                </div></Link>
                            </ul>
                            <ul className="text-sm">
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1947</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1960</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1965</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1969</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1973</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1977</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1981</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1981</li>
                                </div></Link>
                            </ul>
                            <ul className="text-sm">
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1947</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1960</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1965</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1969</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1973</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1977</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1981</li>
                                </div></Link>
                                <Link href={`/released-year/2020`}><div >
                                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1981</li>
                                </div></Link>
                            </ul>
                            </div>
                        </div>
                    )}
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
                    value={searchQuery}
                    onChange={(e) =>setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyPress}
                 />
                <button className="absolute top-1" onClick={handleSearch}><IoMdSearch size={24} /></button>
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