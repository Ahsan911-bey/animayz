"use client";

import { ReactNode } from "react";
import { AnimeContext } from "./AnimeContext";

export function AnimeProvider({ children, animeData }:{ children:ReactNode; animeData:any}){
    <AnimeContext.Provider value={animeData}>
        return(
            <div>{children}</div>
        )
    </AnimeContext.Provider>
}