"use client";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import axios from "axios";

interface AnimeResult {
  id: string;
  name: string;
  jname: string;
  poster: string;
  duration: number;
  type: string;
  rating: string;
}

function SearchContent() {
  const [results, setResults] = useState<AnimeResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const q = searchParams.get("q") || "";
  const page = Number(searchParams.get("page") || 1);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!q) {
        setResults([]);
        return;
      }

      setLoading(true);
      setError(null); // Reset error state before fetching

      try {
        const response = await axios.get(
          `https://cdn.aniwave.lat/https://v2.zoro.mom/zoro/search?q=${q}&page=${page}`
        );
        setResults(response.data.data.animes || []);
      } catch (error) {
        setError("CANNOT FETCH DATA");
        setResults([]); // Clear previous results on error
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [q, page]);

  const handlePageChange = (newPage: number) => {
    router.push(`${pathname}?q=${q}&page=${newPage}`);
  };

  return (
    <div>
      {loading && <p className="text-xl font-serif text-white">Loading...</p>}
      {!loading && results.length === 0 && (
        <div className="w-96 mt-40 mb-32 flex justify-center items-center">
        <p className="text-2xl text-purple-600 font-sans">No Results Found!</p>
        </div>
      )}
      {error && <p className="text-red-500 absolute left-32">{error}</p>}

      {/* Showing the number of results */}
      {!loading && !error && results.length > 0 && (
        <p className="text-white text-lg">Results found: {results.length}</p>
      )}

      <p className="text-white">dafa hoja</p>
    </div>
  );
}

export default SearchContent;
