"use client";

import { createContext, useContext } from "react";


type Episode = {
    id: string;
    number: number;
    title: string;
    isFiller: boolean;
    url: string;
};

type Season = {
    title: string;
    url: string;
    image: string;
};


type VoiceActor = {
    name: string;
    url: string;
    image: string;
};


type Character = {
    name: string;
    url: string;
    image: string;
    role: string;
    voiceActor: VoiceActor;
};

type Recommendation = {
    id: string;
    title: string;
    image: string;
    duration: string;
    jname: string;
    type: string;
    nsfw: boolean;
    sub: number;
    dub: number;
    episodes : number;
};


type AnimeData = {
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
    seasons: Season[];
    characters: Character[];
    recommendations: Recommendation[];
    subOrDub: string; 
    hasSub: boolean;
    hasDub: boolean; 
    totalEpisodes: number;
    episodes: Episode[]; 
};


export const AnimeContext = createContext<AnimeData | null>(null);


export function useAnimeData() {
    const context = useContext(AnimeContext);
    if (!context) {
        throw new Error("useAnimeData must be used within AnimeContext.Provider");
    }
    return context;
}
