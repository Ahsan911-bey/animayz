"use client";

import { useParams } from "next/navigation";

const WatchPage = () => {
  const { id } = useParams();

  if (!id) return <p>Loading...</p>;

  return (
    <div className="relative w-screen h-screen">
      {/* Iframe */}
      <iframe
        src={`https://aniwave.at/watch/${id}`}
        className="w-full h-full border-none"
        allowFullScreen
      ></iframe>

      {/* Top Overlay */}
      <div className="absolute top-0 left-0 w-full h-16 bg-black"></div>

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-36 bg-black"></div>
      <div className="absolute left-0 top-0 h-full w-20 bg-black"></div>
    </div>
  );
};

export default WatchPage;
