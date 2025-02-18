"use client";
import { ReactNode } from "react"
import { AnimeContext } from "./AnimeContext"

type AnimeProviderProps= {
    children: ReactNode;
    animeData:any;
};

export function AnimeProvider({children,animeData}:AnimeProviderProps){
    return(
        <AnimeContext.Provider value={animeData}>
            <div>{children}</div>
        </AnimeContext.Provider>
    )
}