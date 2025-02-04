"use client"
import { useContext,createContext } from "react"

type AnimeData= {
    map(arg0: (anime: any) => import("react").JSX.Element): import("react").ReactNode;
    id:string;
    title:string;
    image:string;
    duration:string;
    jname:string;
    type:string;
    nsfw:boolean;
    sub:number;
    dub:number;
    episodes:number;
};

export const AnimeContext = createContext<AnimeData | null>(null);

export function useAnimeData(){
    const context = useContext(AnimeContext);
    if (!context){
        throw new Error("UseAnimeData must be used inside AnimeContext.provider");
    }
    return context;
};