"use client";

import { ReactNode } from "react";
import { AnimeContext } from "./AnimeContext";

type AnimeProviderProps = {
    children: ReactNode;
    animeData: any; // Replace any with your data type if needed
};

export function AnimeProvider({ children, animeData }: AnimeProviderProps) {
    return <AnimeContext.Provider value={animeData}>{children}</AnimeContext.Provider>;
}