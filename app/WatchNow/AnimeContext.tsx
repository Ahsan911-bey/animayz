"use client";

import { useContext, createContext } from "react";

type Anime = {
  id: string;
  title: string;
  jname: string;
  image: string;
  duration: string;
  type: string;
  ep_id: number;
  ep_no: number;
  ep_url: string | null;
  episodes: {
    sub: number;
    dub: number;
  };
};

type AnimeData = {
  currentPage: number;
  hasNextPage: boolean;
  totalPages: number;
  results: Anime[];
};

export const AnimeContext = createContext<AnimeData | null>(null);

export function useAnimeData() {
  const context = useContext(AnimeContext);
  if (!context) {
    throw new Error("useAnimeData must be used inside AnimeContext.Provider");
  }
  return context;
}