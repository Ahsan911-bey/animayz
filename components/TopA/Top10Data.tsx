import React from "react";

const API_URL = "https://cdn.aniwave.lat/https://v2.zoro.mom/zoro/top10";

export async function getTop10Data() {
  try {
    const res = await fetch(API_URL, { cache: "no-store" }); // Disable caching for fresh data
    if (!res.ok) throw new Error("Failed to fetch data");
    return await res.json();
  } catch (error) {
    console.error("Error fetching top 10 data:", error);
    return null; // Return null in case of error
  }
}

const Top10Data = async () => {
  const data = await getTop10Data();
  return <>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</>;
};

export default Top10Data;
