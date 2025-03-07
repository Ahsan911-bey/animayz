import { ReactNode } from "react";
import { AnimeProvider } from "./AnimeProvider";
async function fetchAnimeData(){
    const response= await fetch("https://cdn.aniwave.lat/https://v2.zoro.mom/zoro/most-popular?page=2");
    if (!response.ok){
        throw new Error("Error Fetching Data");
    }
    return response.json();
}

export default async function Layout({children}:{children:ReactNode;}){
    const animeData = await fetchAnimeData();
    return(
        <AnimeProvider animeData={animeData}>
            <div>{children}</div>
        </AnimeProvider>
    )
}