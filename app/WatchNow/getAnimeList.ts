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
    const response = await axios.get("http://127.0.0.1:3001/api/most-popular?page=1");
    const data = response.data;

    return data.map((anime: Anime) => ({
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
