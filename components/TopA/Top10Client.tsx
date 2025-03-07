"use client";

import React from "react";
import Link from "next/link";

interface Anime {
  id: string;
  rank: number;
  title: string;
  jname: string;
  image: string;
  ep_no: number;
  episodes: {
    sub: number;
    dub: number;
  };
}

interface Top10ClientProps {
  data: {
    today: Anime[];
    week: Anime[];
    month: Anime[];
  } | null;
}

const Top10Client: React.FC<Top10ClientProps> = ({ data }) => {
  if (!data) return <p>Failed to load data.</p>;

  return (
    <div className='hidden  lg:flex flex-col items-center relative bg-[#1c1c1c] w-1/4 2xl:w-1/5 h-1/5 mt-4 rounded-lg'>
        <h3 className='font-bold mt-2 text-2xl text-white'>Top Anime</h3>
        <div>
        {data.today.map((anime) => (
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
  );
};

export default Top10Client;
