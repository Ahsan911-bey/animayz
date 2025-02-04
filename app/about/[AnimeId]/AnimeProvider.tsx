"use client";

import { ReactNode } from "react";
import { AnimeContext } from "./AnimeContext";

type AnimeProviderProps = {
    children: ReactNode;
<<<<<<< HEAD
    animeData: any;
=======
    animeData: any; // Replace any with your data type if needed
>>>>>>> f0d5ce43c33bf8d8173aa5a96e4cb69138aa7bca
};

export function AnimeProvider({ children, animeData }: AnimeProviderProps) {
    return <AnimeContext.Provider value={animeData}>{children}</AnimeContext.Provider>;
}