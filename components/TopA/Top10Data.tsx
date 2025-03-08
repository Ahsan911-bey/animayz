import React from "react";

const API_URL = "https://cdn.aniwave.lat/https://v2.zoro.mom/zoro/top10";

let cache: { data: any; timestamp: number } | null = null;
const CACHE_DURATION = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

export async function getTop10Data() {
  const now = Date.now();

  // Use cache if it exists and is still valid
  if (cache && now - cache.timestamp < CACHE_DURATION) {
    return cache.data;
  }

  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();

    // Store data in cache with timestamp
    cache = { data, timestamp: now };

    return data;
  } catch (error) {
    console.error("Error fetching top 10 data:", error);
    return null;
  }
}

const Top10Data = async () => {
  const data = await getTop10Data();
  return <>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</>;
};

export default Top10Data;
