import {useState, useEffect} from 'react';
import axios from 'axios';
import Link from 'next/link';

type AnimeT = {
    rank: number;
    id: string;
    title: string;
    jname: string;
    image: string;
  };
  
  const TopA: React.FC = () => {
    const [AnimeListT, setAnimeListT] = useState<AnimeT[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchAnimeListT = async () => {
        try {
          const response = await axios.get(
            "https://cdn.aniwave.lat/https://v2.zoro.mom/zoro/top10"
          );
          const data = response.data;
  
          if (data && data.today) {
            const formattedData = data.today.map((anime: any) => ({
              rank: anime.rank,
              id: anime.id,
              title: anime.title,
              jname: anime.jname,
              image: anime.image,
            }));
            setAnimeListT(formattedData);
          } else {
            throw new Error("Invalid API response structure");
          }
        } catch (error) {
          console.error("ERROR FETCHING FROM API:", error);
          setError("ERROR FETCHING FROM TRENDING API");
        }
      };
  
      fetchAnimeListT();
    }, []);

    return(
        <div className='hidden lg:flex flex-col items-center relative bg-[#1c1c1c] w-1/4 2xl:w-1/5 h-1/5 mt-4 rounded-lg'>
        <h3 className='font-bold mt-2 text-2xl text-white'>Top Anime</h3>
        <div>
            {AnimeListT.map((anime) =>(
                <Link key={anime.id} href={`/about/${anime.id}`}>
                <div key={anime.id}>
                    <div className='group flex flex-row mt-10 gap-4 hover:bg-slate-950 py-2 rounded-lg'>
                        <h1 className='group-hover:text-blue-600 font-bold text-3xl text-[#374151] ml-4'>{anime.rank}</h1>
                        <img src={anime.image} alt={anime.title} className='h-16 w-14 rounded-lg' />
                        <p className='group-hover:text-blue-600 font-bold text-sm line-clamp-2 text-white'>{anime.title}</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    </div>
    )

}
export default TopA;