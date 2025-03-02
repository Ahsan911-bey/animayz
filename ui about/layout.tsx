import { ReactNode } from "react";
import { AnimeProvider } from "./unwanted/AnimeProvider";
import { AnimeData } from "./unwanted/AnimeContext";

async function fetchAnimeData(animeid: string): Promise<AnimeData> {
    const res = await fetch(`https://cdn.aniwave.lat/https://v2.zoro.mom/zoro/info?id=${animeid}`, {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch anime data");
    }
    return res.json();
}

export default async function Layout({ children, params }: { children: ReactNode; params: { animeid: string } }) {
    const animeData = await fetchAnimeData(params.animeid);

    return (
        <AnimeProvider animeData={animeData}>
            <div>{children}</div>
        </AnimeProvider>
    );
}
