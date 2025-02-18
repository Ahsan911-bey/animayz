"use client";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { IoPlay } from "react-icons/io5";
import TopA from "./TopA";
import Link from 'next/link';
import { useAnimeData } from './AnimeContext';



const AnimeGrid: React.FC = () =>{
    const AnimeList = useAnimeData();
    return(
        <div className='flex gap-4 2xl:gap-10 bg-black'>
            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 ml-10'>
                {AnimeList.map((anime) =>(
                    <Link key={anime.id} href={`/about/${anime.id}`}>
                    <div key={anime.id} className='group relative mt-4 ml-2 shadow-inner overflow-hidden transition ease-in-out hover:scale-105 duration-300'>
                        <img src={anime.image} alt={anime.title} className=' object-cover rounded-lg 2xl:h-80 w-52' />
                        <div className='group-hover:opacity-60 absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-55'></div>
                            <div className='absolute bottom-0 left-2 drop-shadow-2xl -translate-y-1 p-2 '>
                                <p className='text-white font-bold line-clamp-2'>{anime.title}</p>
                                <div className='flex items-center text-xs text-gray-300 gap-2'>
                                    <span className='bg-purple-500 px-2 py-0.5 rounded-sm'>{anime.type}</span>
                                    <span>{anime.duration}</span>
                                </div>
                            </div>
                            {anime.nsfw && (
                                <div className='absolute bg-red-500 top-1 left-2 px-1 py-0.5 rounded-md text-sm text-white font-bold'>18+</div>
                            )}
                            <div className='hidden group-hover:block absolute top-32 left-24 bg-purple-600 rounded-3xl text-white'>
                            <IoPlay size={50} />
                            </div>
                    </div>
                    </Link>
                ))}
            </div>

            <TopA />

        </div>
    )
}
export default AnimeGrid;





