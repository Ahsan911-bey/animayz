import axios from "axios";

export interface Anime {
  id: string;
  title: string;
  image: string;
  duration: string;
  jname: string;
  type: string;
  nsfw: boolean;
  sub: number;
  dub: number;
  episodes: number;
}

export const getAnimeList = async (): Promise<Anime[]> => {
  try {
    const response = await axios.get("https://cdn.aniwave.lat/https://v2.zoro.mom/zoro//most-popular?page=2");
    const data = response.data;

    return data.results.map((anime: Anime) => ({
      id: anime.id,
      title: anime.title,
      image: anime.image,
      duration: anime.duration,
      jname: anime.jname,
      type: anime.type,
      nsfw: anime.nsfw,
      sub: anime.sub,
      dub: anime.dub,
      episodes: anime.episodes,
    }));
  } catch (error) {
    console.error("Error fetching anime list", error);
    return [];
  }
};
