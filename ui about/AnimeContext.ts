"use client";

import { createContext, useContext } from "react";



export type AnimeData = {
    map(arg0: (anime: any) => import("react").JSX.Element): import("react").ReactNode;
    id: string;
    title: string;
    animeID: number;
    malID: number;
    alID: number;
    otherTitle: string;
    jname: string;
    rating: string;
    image: string;
    description: string;
    type: string;
    aired: string;
    premiered: string;
    duration: string;
    status: string;
    malScore: string;
    genres: string[];
    studios: string[];
    producers: string[];
    recommendations?: {
        zoroId: string;
        english: string;
        romaji: string;
        coverImage: string;
        format: string;
      }[];
};

export const AnimeContext = createContext<AnimeData | null>(null);

export function useAnimeData() {
    const context = useContext(AnimeContext);
    if (!context) {
        throw new Error("useAnimeData must be used within AnimeProvider");
    }
    return context;
}
