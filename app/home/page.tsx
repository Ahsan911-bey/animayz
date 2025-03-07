import React from "react";
import HeroSection from "./HeroSection";
import AnimeGrid from "./AnimeGrid";
import Top10Client from "@/components/TopA/Top10Client"; 
import { getTop10Data } from "@/components/TopA/Top10Data";

export default async function Site() { // ✅ Make it async
    const data = await getTop10Data(); // ✅ Now await is valid

    return (
        <div className="bg-black">
            <HeroSection />
            <div className="flex flex-row gap-4 2xl:gap-10 bg-black">
            <AnimeGrid />
            <Top10Client data={data} /> {/* ✅ No issues now */}
            </div>
        </div>
    );
}
