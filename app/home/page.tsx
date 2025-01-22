import React from "react";
import HeroSection from "./HeroSection";
import AnimeGrid from "./AnimeGrid";

export default function Site() {
    return(
        <div className="bg-black">
            <HeroSection />
            <AnimeGrid />
        </div>
    )
}