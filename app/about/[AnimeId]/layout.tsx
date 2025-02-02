import { ReactNode } from "react";
import { AnimeProvider } from "./AnimeProvider";

async function fetchAnimeData(animeid: string) {
    const res = await fetch(`https://api.hi-anime.site/api/info?id=${animeid}`, {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch anime data");
    }
    return res.json();
}

export default async function Layout({ children, params}: { children: ReactNode; params: { animeid: string }; }) {
    const animeData = await fetchAnimeData(params.animeid);                          
    return (
        <AnimeProvider animeData={animeData}>
            <div>{children}</div>
        </AnimeProvider>
    );

}

