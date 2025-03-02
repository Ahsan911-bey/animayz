"use client";
import react from "react";
import { useAnimeData } from "./AnimeContext";
import { FaRegStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import Link from 'next/link';
import { IoPlay } from "react-icons/io5";
import TopA from "../../../components/TopA";




export default function AnimePage(){
    const animeData = useAnimeData();
    console.log("Anime Data:", animeData);
    console.log("Recommendations:", animeData?.recommendations);
    console.log(animeData);
    

    return(
        <div className="relative min-h-screen bg-black">
            <div className="relative bg-black h-[700px] md:h-[450px]">
                <div 
                className="absolute bg-cover bg-center inset-0"
                style={{
                    backgroundImage: `url(${animeData.image})`,
                    backgroundColor: "#0a0a0a",
                    filter: "blur(4px)",
                    WebkitFilter: "blur(10px)",
                }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]" />
                    <div className="absolute inset-0 bg-gradient-to-l from-[#09090b] via-transparent to-[#09090b]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-transparent to-[#09090b]" />
                </div>
                <div className="">
                <div className="relative flex justify-left flex-row items-center gap-4 px-4 top-24">
                <div className="h-44 w-48 ml-4">
                    <img 
                    className="min-h-full rounded-lg"
                    src={animeData.image}
                    alt={animeData.title}
                    />
                </div>
                <div className="mt-20">
                    <h1 className="text-4xl text-white font-bold">{animeData.title}</h1>
                    <p className="text-gray-400 mt-1 text-sm">{animeData.jname}</p>
                    <div className="flex mt-1">
                        <p className="text-white mt-px mr-1 "><FaRegStar /></p>
                    <p className="text-white font-bold text-sm mb-6">{animeData.rating}</p>
                    </div>
                    <div className="">
                    <button className="text-black bg-slate-50 px-4 py-2 font-medium rounded-xl flex"><FaPlay className="mt-1 mr-1"/>Play Now</button>
                    </div>
                </div>
                </div>
                </div>

            </div>
        <div>
                <p className="text-gray-400 text-lg ml-8">Overview</p>
                <div className="flex flex-row bg-[#171719] rounded-lg gap-10">
                    <div className="flex flex-col gap-3 ">
                        <div className="ml-6">
                            <h2 className="text-white text-lg font-bold mt-6 mb-4">Details:</h2>
                            <ul className="text-gray-400 space-y-2 mb-5">
                                <li ><strong className="text-white mr-2">Airing:</strong>{animeData.aired}</li>
                                <li ><strong className="text-white mr-2">Type:</strong>{animeData.type}</li>
                                <li><strong className="text-white mr-2">Genres:</strong>{animeData.genres}</li>
                                <li ><strong className="text-white mr-2">Status:</strong>{animeData.status}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col">
                    <h2 className="text-white text-lg font-bold mt-6 mb-4">Discription:</h2>
                    <p className="text-gray-400 leading-relaxed line-clamp-5">{animeData.description}</p>
                    </div>
                </div>
                <p className="text-gray-400 text-lg ml-8">Seasons</p>
                <div className="flex flex-row bg-[#171719] rounded-lg gap-10">
                    <div className="flex flex-col gap-3 ">
                        <div className="ml-6">
                            <h2 className="text-white text-lg font-bold mt-6 mb-4">Details:</h2>
                            <ul className="text-gray-400 space-y-2 mb-5">
                                <li ><strong className="text-white mr-2">Ep Duration:</strong>{animeData.duration}</li>
                                <li ><strong className="text-white mr-2">Rating:</strong>{animeData.malScore}</li>
                                <li ><strong className="text-white mr-2">Other Title:</strong>{animeData.otherTitle}</li>
                                <li><strong className="text-white mr-2">Premiered:</strong>{animeData.premiered}</li>
                                <li ><strong className="text-white mr-2">Status:</strong>{animeData.status}</li>
                                <li ><strong className="text-white mr-2">Studio:</strong>{animeData.studios}</li>
                                <li ><strong className="text-white mr-2">Type:</strong>{animeData.type}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h2 className="text-white text-2xl font-bold ml-2 mt-2">Recommended Animes:</h2>
                <div className="flex gap-4 2xl:gap-7 bg-black">
                    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 2xl:gap-4 2xl:ml-10">
                    {(animeData.recommendations || []).map((anime: any) => (
  <Link key={anime.zoroId} href={`/about/${anime.zoroId}`}>
    <div key={anime.zoroId} className='group relative mt-4 ml-2 shadow-inner overflow-hidden transition ease-in-out hover:scale-105 duration-300'>
      <img src={anime.coverImage} alt={anime.romaji} className='object-cover rounded-lg 2xl:h-80 w-52' />
      <div className='group-hover:opacity-60 absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-55'></div>
      <div className='absolute bottom-0 left-2 drop-shadow-2xl -translate-y-1 p-2 '>
        <p className='text-white font-bold line-clamp-2'>{anime.english}</p>
        <div className='flex items-center text-xs text-gray-300 gap-2'>
          <span className='bg-purple-500 px-2 py-0.5 rounded-sm'>{anime.format}</span>
        </div>
      </div>
      <div className='hidden group-hover:block absolute top-32 left-24 bg-purple-600 rounded-3xl text-white'>
        <IoPlay size={50} />
      </div>
    </div>
  </Link>
))}
                    </div> 
                    <TopA /> 
                </div>           
                  


            </div>
        </div>
    )
}
