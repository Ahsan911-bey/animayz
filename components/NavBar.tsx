"use client";
import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Logo from "./Logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { X } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import imagehaha from "@/components/haha.jpg";




const NavBar = () => {
    const [searchQuery,setSearchQuery] = useState('');
    const router = useRouter();
    const [isOpenSignin, setIsOpenSignin] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    const [isOpenGenres,setIsOpenGenres] = useState(false);
    const [isOpenType,setIsOpenType] = useState(false);
    const [isOpenYear,setIsOpenYear] = useState(false);
    const [isSigninBtnPressed,setisSigninBtnPressed] = useState(false);
    const [isOpenAboutUs, setIsOpenAboutUs] = useState(false);

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



    return (
        <div className="h-16 bg-[#1c1c1c] flex items-center justify-between px-4 w-full md:px-8 text-white">
                <div className="relative flex items-center space-x-4 cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                >
                    <FiAlignJustify size={32} />

                    {isOpen && (
                        <div className=" absolute w-24 py-8 bg-[#1c1c1c] top-7 -left-10 z-50 rounded-md overflow-hidden">
                            <ul className="w-full flex justify-center items-center flex-col">
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
                    {isOpenGenres && (
                        <div className="absolute px-8 py-8 bg-zinc-900 top-7 left-10 z-50 rounded-md overflow-hidden" onMouseEnter={() => setIsOpenGenres(true)} onMouseLeave={() => setIsOpenGenres(false)}>
                            <ul>
                                <div >
                               <Link href={`/Search?genre=Action`}><li className="text-gray-600 cursor-pointer mt-2">Action</li></Link> 
                                </div>
                                <div >
                                <Link href={`/Search?genre=Adventure`}><li className="text-slate-600 cursor-pointer mt-2">Adventure</li></Link>
                                </div>
                                <div >
                                <Link href={`/Search?genre=Comedy`}> <li className="text-slate-600 cursor-pointer mt-2">Comedy</li></Link>
                                </div>
                                <div >
                                <Link href={`/Search?genre=Drama`}><li className="text-slate-600 cursor-pointer mt-2">Drama</li></Link>
                                </div>
                                <div >
                                <Link href={`/Search?genre=Horror`}><li className="text-slate-600 cursor-pointer mt-2">Horror</li></Link>
                                </div>
                                <div >
                                <Link href={`/Search?genre=Fantasy`}><li className="text-slate-600 cursor-pointer mt-2">Fantasy</li></Link>
                                </div>
                                <div >
                                <Link href={`/Search?genre=Mystery`}><li className="text-slate-600 cursor-pointer mt-2">Mystery</li></Link>
                                </div>
                            </ul>
                        </div>
                    )}
                     {isOpenType && (
                        <div className="absolute px-8 py-8 bg-zinc-900 top-7 left-10 z-50 rounded-md overflow-hidden" onMouseEnter={() => setIsOpenType(true)} onMouseLeave={() => setIsOpenType(false)}>
                            <ul>
                            <div >
                               <Link href={`/Search?type=TV`}><li className="text-gray-600 cursor-pointer mt-2">TV</li></Link> 
                                </div>
                                <div >
                                <Link href={`/Search?type=ONA`}><li className="text-slate-600 cursor-pointer mt-2">ONA</li></Link>
                                </div>
                                <div >
                                <Link href={`/Search?type=ONA`}> <li className="text-slate-600 cursor-pointer mt-2">OVA</li></Link>
                                </div>
                                <div >
                                <Link href={`/Search?type=Movie`}><li className="text-slate-600 cursor-pointer mt-2">Movie</li></Link>
                                </div>
                            </ul>
                        </div>
                    )}
                      {isOpenYear && (
    <div className="absolute px-8 py-8 bg-[#0F0F0F] top-7 left-10 z-50 rounded-md overflow-hidden" onMouseEnter={() => setIsOpenYear(true)} onMouseLeave={() => setIsOpenYear(false)}>
        <div className="flex flex-row gap-16">
            <ul className="text-sm">
                <Link href={`/Search?type=all&year=2019&genre=all`}><div>
                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">2024</li>
                </div></Link>
                <div>
                <Link href={`/Search?year=2023`}><li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">2023</li></Link>
                </div>
                <Link href={`/Search?year=2022`}><div>
                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">2022</li>
                </div></Link>
                <Link href={`/Search?year=2021`}><div>
                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">2021</li>
                </div></Link>
                <Link href={`/Search?year=2020`}><div>
                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">2020</li>
                </div></Link>
            </ul>
            <ul className="text-sm">
                <Link href={`/Search?year=2019`}><div>
                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">2019</li>
                </div></Link>
                <Link href={`/Search?year=2018`}><div>
                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">2018</li>
                </div></Link>
                <Link href={`/Search?year=2017`}><div>
                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">2017</li>
                </div></Link>
                <Link href={`/Search?year=2016`}><div>
                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">2016</li>
                </div></Link>
                <Link href={`/Search?year=2015`}><div>
                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">2015</li>
                </div></Link>
            </ul>
            <ul className="text-sm">
                <Link href={`/Search?year=2010`}><div>
                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">2010</li>
                </div></Link>
                <Link href={`/Search?year=2005`}><div>
                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">2005</li>
                </div></Link>
                <Link href={`/Search?year=2000`}><div>
                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">2000</li>
                </div></Link>
                <Link href={`/Search?year=1995`}><div>
                <li className="text-slate-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1995</li>
                </div></Link>
                <Link href={`/Search?year=1990`}><div>
                <li className="text-gray-600 cursor-pointer mt-2 hover:rounded-lg hover:bg-[#1c1c1c] px-1 py-1">1990</li>
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
            <div className="relative w-full flex flex-grow px-2">
            <input
                type="text"
                placeholder="Search..."
                className="bg-[#141414] pl-5 lg:w-96 w-32 md:w-56  rounded-md h-10 sm:h-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <button onClick={handleSearch} className="ml-2 bg-purple-600 rounded-md px-2 border-2 border-[#141414]">
                <IoMdSearch size={20} />
            </button>
        </div>
            <div className=" hidden xl:flex">
                <button
                onClick={(e) => {setIsOpenAboutUs(true)}}
                className="bg-slate-600 p-2 flex flex-row text-nowrap rounded-md text-black"
                >
                    <IoIosInformationCircleOutline size={25} className="mr-2" />  About Us
                </button>
            </div>
            {isOpenAboutUs && (
                <div className=" inset-0 flex fixed justify-center items-center z-50 bg-black bg-opacity-50">
                    <div className="relative w-96 h-[450px] flex-col flex bg-black rounded-xl border-[2px] border-[#27272a]">
                                <button
                        onClick={() =>{setIsOpenAboutUs(false)}}
                        className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                        >
                        <X size={24} />
                        </button>
                        <div className="flex justify-center">
                        <h2 className="text-xl absolute top-5">That's None of Your Buisness Baby!</h2>
                        </div>
                        <div className="justify-center  flex">
                        <Image src={imagehaha} alt="haha" height={100} width={250} className="absolute rounded-md top-20" />
                        </div>
                    </div>
                </div>
            )}
            <div className="md:ml-20 hidden md:flex">
        <button
          className="bg-purple-800 w-auto mr-4 h-auto whitespace-nowrap flex items-center justify-center py-1 px-7 font-normal text-white rounded-md ml-3 transition-all hover:bg-purple-700"
          onClick={(e) => {
            e.stopPropagation(); // Prevent event bubbling
            setIsOpenSignin((prev) => !prev);
        }}
        >
          Sign in <FaArrowRightLong className="ml-2" />
        </button>
      </div>

      {isOpenSignin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
          <div className="bg-black text-gray-300 p-6 rounded-2xl shadow-lg w-96 relative border-[2px] border-[#27272a]">
            <button
              onClick={() =>{ 
                setIsOpenSignin(false); 
                setisSigninBtnPressed(false); }}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <X size={24} />
            </button>
            <div className="gap-3 mb-10">
            <h2 className="text-xl font-bold mb-4">Welcome to AniMaze<br /></h2>
            <p className="text-sm">Login to AniMayz if you can because we don't have a login flow yet</p>
            </div>
            <div className="space-y-3">
                <div className="flex flex-row gap-3">
                    <div className="space-y-1">
                        <p className="text-white">First name</p>
                        <input type="text" placeholder="  Ahsan" className="w-36 p-2 text-sm border-2 border-[#232326] rounded-md mb-3 bg-[#27272a]" />
                    </div>
                    <div className="space-y-1">
                    <p className="text-white">Last name</p>
                    <input type="text" placeholder="  bey" className="w-44 p-2 text-sm border-2 border-[#232326] rounded-md mb-3 bg-[#27272a]" />
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-white">Email Address</p>
                    <input type="mail" placeholder="example@gmail.com" className="p-2 w-full text-sm border-2 border-[#232326] rounded-md mb-3 bg-[#27272a]" />
                </div>
                <div className="space-y-1">
                    <p className="text-white">Password</p>
                    <input type="mail" placeholder="   ........." className="p-2 w-full border-2 border-[#232326] rounded-md mb-3 bg-[#27272a]" />
                </div>
                <div className="space-y-1">
                    <p className="text-white">Confirm Password</p>
                    <input type="mail" placeholder="   ........." className="p-2 w-full border-2 border-[#232326] rounded-md mb-3 bg-[#27272a]" />
                </div>
                
            </div>
                <div className="mt-10">
                <button 
                onClick={() => setisSigninBtnPressed(true)}
                className="w-full  flex flex-row gap-2 justify-center bg-purple-700 text-white py-2 rounded-md transition-all hover:bg-purple-600">Sign Up <FaArrowRight className="mt-1" />    </button>
                </div>
                <div>
          {isSigninBtnPressed && (
            <div className="flex justify-center items-center mt-4">
            <p className="text-white">We don't have a login flow yet</p>
            </div>
          )}
          </div>
          </div>
        </div>
      )}
        </div>
    );
};
export default NavBar;