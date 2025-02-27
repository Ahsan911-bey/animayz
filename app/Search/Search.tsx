"use client";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { IoPlay } from "react-icons/io5";
import TopA from "@/components/TopA";
import Link from 'next/link';

interface AnimeResult {
  id: string;
  title: string;
  jname: string;
  image: string;
  duration: number;
  type: string;
  rating: string;
  nsfw: boolean;
}

export function SearchContent() {
  const [results, setResults] = useState<AnimeResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const q = searchParams.get("q") || "";
  const genre = searchParams.get("genre") || "";
  const type = searchParams.get("type") || "";
  const year = searchParams.get("year") || "";
  const page = Number(searchParams.get("page") || 1);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!q && !genre && !type && !year) {
        setResults([]);
        return;
      }

      setLoading(true);
      setError(null); // Reset error state before fetching
      
      try {
        const response = await axios.get(
            `https://cdn.aniwave.lat/https://v2.zoro.mom/zoro/filter?keyword=${q}&genre=${genre}&type=${type}&page=${page}&year=${year}`
        );
        const animeResults = response.data.results.map((anime : any) => ({
            id:anime.id,
            title:anime.title,
            jname:anime.jname,
            image:anime.image,
            duration: anime.duration,
            type: anime.type,
            rating: anime.rating,
            nsfw:anime.nsfw,
        }));

        setResults(animeResults);
        console.log(response.data.results);
      } catch (error) {
        setError("CANNOT FETCH DATA");
        setResults([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [q, page, type , genre , year]);

  const handlePageChange = (newPage: number) => {
    router.push(`${pathname}?q=${q}&page=${newPage}`);
  };

  return (
    <div>
            <div>
                <div className="mt-5 ml-10">
                {q && <p className="text-white text-2xl">Showing results for "{q}"</p>}
                </div>
                {loading && <p className="text-2xl h-20 font-serif  text-center text-purple-500">Loading...</p>}
                {!loading && results.length === 0 && (
                <div className="w-full h-32 flex justify-center items-center">
                <p className="text-2xl text-purple-600 font-sans">No Results Found!</p>
                </div>
                )}
                {error && <p className=" text-red-500 absolute left-32">{error}</p>}
            </div>
           
            <div></div>
        <div className={`flex flex-row gap-4 2xl:gap-10 bg-black ${results.length === 0 ? 'justify-end mr-5' : ''}`}>
            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 2xl:gap-4 2xl:ml-10'>
                {results.map((anime) =>(
                    <Link key={anime.id} href={`/about/${anime.id}`}>
                    <div key={anime.id} className='group relative mt-4 ml-2 shadow-inner overflow-hidden transition ease-in-out hover:scale-105 duration-300'>
                        <img src={anime.image} alt={anime.title} className='object-cover rounded-lg h-80 w-52' />
                        <div className='group-hover:opacity-60 absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-55'></div>
                            <div className='absolute bottom-5 left-2 drop-shadow-2xl -translate-y-1 p-2 '>
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
        </div>
  );
}
