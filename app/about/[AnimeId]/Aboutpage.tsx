"use client";
import { useEffect, useState } from "react";
import { useAnimeData } from "./AnimeContext";
import { FaRegStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import Link from 'next/link';
import { IoPlay } from "react-icons/io5";
import Top10Client from "@/components/TopA/Top10Client"; 
import { getTop10Data } from "@/components/TopA/Top10Data";
import { IoIosInformationCircleOutline } from "react-icons/io";




export default function AnimePage() {
    const animeData = useAnimeData();
    const [seeAllCharacters, setSeeAllCharacters] = useState(false);
    const [seeAllActors, setSeeAllActors] = useState(false);
    const [data, setData] = useState<any>(null); // State for async data

    useEffect(() => {
        async function fetchData() {
            const top10Data = await getTop10Data();
            setData(top10Data);
        }
        fetchData();
    }, []);

    return(
        <div className="relative min-h-screen bg-black">
            <div className="relative bg-black h-[700px] md:h-[450px]">
                    <div 
                    className="absolute bg-cover bg-center inset-0"
                    style={{
                        backgroundImage: `url(${animeData.bannerImage})`,
                        backgroundColor: "#0a0a0a",
                    }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]" />
                        <div className="absolute inset-0 bg-gradient-to-l from-[#09090b] via-transparent to-[#09090b]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-transparent to-[#09090b]" />
                    </div>
                    <div className="">
                    <div className="relative flex justify-left flex-col md:flex-row  items-center gap-4 px-4 top-24">
                            <div className="h-44 w-48 ml-4">
                                <img 
                                className="min-h-full rounded-lg"
                                src={animeData.largeCover}
                                alt={animeData.title}
                                />
                            </div>
                            <div className="mt-20">
                                <h1 className="text-4xl mt-12 text-white font-bold">{animeData.title}</h1>
                                <p className="text-gray-400 mt-1 text-sm">{animeData.jname}</p>
                                <div className="mt-1 flex justify-center md:justify-start">
                                    <p className="text-white mt-px mr-1 "><FaRegStar /></p>
                                <p className=" text-white font-bold text-sm mb-6">{animeData.rating}</p>
                                </div>
                                <div className="flex justify-center md:justify-start">
                                <Link href={`/watch/${animeData.id}-ep-${animeData.ep_id}`}><button className="text-black bg-slate-50 px-4 py-2 font-medium rounded-xl flex"><FaPlay className="mt-1 mr-1"/>Play Now</button></Link>
                                </div>
                    </div>
                    </div>
                    </div>

            </div>
        <div>
                <p className="text-gray-400 text-xl ml-8 font-myfont mt-5 mb-5">Overview</p>
                <div className="flex flex-row bg-[#171719] rounded-lg gap-10">
                    <div className="flex flex-col gap-3 ">
                        <div className="ml-6">
                        <h2 className="text-white flex items-center gap-1 text-xl  font-myfont mt-6 mb-4"><IoIosInformationCircleOutline size={20} /> Details</h2>
                        <ul className="text-gray-400 space-y-2 mb-5">
                                <li ><strong className="text-white mr-2">Airing:</strong>{animeData.aired}</li>
                                <li ><strong className="text-white mr-2">Type:</strong>{animeData.type}</li>
                                <li><strong className="text-white mr-2">Genres:</strong>{animeData.genres}</li>
                                <li ><strong className="text-white mr-2">Status:</strong>{animeData.status}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col">
                    <h2 className="text-white flex items-center gap-1 text-xl  font-myfont mt-6 mb-4"><IoIosInformationCircleOutline size={20} /> Discription</h2>
                    <p className="text-gray-400 leading-relaxed line-clamp-5">{animeData.description}</p>
                    </div>
                </div>
                <p className="text-gray-400 text-xl ml-8 font-myfont mt-5 mb-5">Seasons</p>
                <div className="flex flex-row bg-[#171719] rounded-lg gap-10">
                    <div className="flex flex-col gap-3 ">
                        <div className="ml-6">
                        <h2 className="text-white flex items-center gap-1 text-xl  font-myfont mt-6 mb-4"><IoIosInformationCircleOutline size={20} /> Details</h2>
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
                <h2 className="text-white text-3xl font-bold ml-10 mt-5 mb-5">Characters</h2>
                <div className="flex flex-row flex-wrap justify-around">
                    {animeData.characters.slice(0 , seeAllCharacters ? animeData.characters.length : 6).map((anime:any) => (
                        <div key={anime.name} className="group relative mt-4 ml-2 shadow-inner overflow-hidden transition ease-in-out hover:scale-105 duration-300" >
                            <div className="inset-0 bg-gradient-to-t from-black to-transparent opacity-85">
                                <img src={anime.image} alt={anime.name} className="object-cover rounded-lg h-60 2xl:h-80 xl:w-52 w-40" ></img>
                                <p className="text-purple-200 text-center text-lg font-myfont">{anime.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {!seeAllCharacters &&
                <div className="flex justify-center mt-2">
                    <button className="px-10 py-1 bg-purple-700 hover:bg-purple-600 rounded-lg text-white"
                    onClick={() => {setSeeAllCharacters(true)}}
                    >See All</button>
                </div>}

                <h2 className="text-white text-3xl font-bold ml-10 mt-5 mb-5">Voice Actors</h2>
                <div className="flex flex-row flex-wrap justify-around">
                    {animeData.characters.slice(0 , seeAllActors ? animeData.characters.length : 6).map((anime:any) => {
                        const firstVoiceActor = anime.voiceActor?.[0]; // Get the first voice actor (if exists)
                        if (!firstVoiceActor) return null;
                        return (
                        <div key={firstVoiceActor.id} className="group relative mt-4 ml-2 shadow-inner overflow-hidden transition ease-in-out hover:scale-105 duration-300" >
                            <div className="inset-0 bg-gradient-to-t from-black to-transparent opacity-85">
                                <img src={firstVoiceActor.image} alt={firstVoiceActor.name} className="object-cover rounded-lg h-60 2xl:h-80 xl:w-52 w-40" ></img>
                                <p className="text-purple-200 text-center text-lg font-myfont">{firstVoiceActor.name}</p>
                            </div>
                        </div>
                        );
                    })}
                </div>
                {!seeAllActors &&
                <div className="flex justify-center mt-2">
                    <button className="px-10 py-1 bg-purple-700 hover:bg-purple-600 rounded-lg text-white"
                    onClick={() => {setSeeAllActors(true)}}
                    >See All</button>
                </div>}

                <h2 className="text-white text-3xl font-bold ml-10 mt-5 mb-5">Recommended Animes</h2>
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
                    {animeData.recommendations.length > 0 && (
                   <Top10Client data={data} /> 
                    )}
                </div>           
                  


            </div>
        </div>
    )
}
