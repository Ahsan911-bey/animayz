"use client";
import React from "react";
import { ColourfulText } from "../../components/ui/colourful-text";
import { motion } from "motion/react";
export function ColourText() {
  return (
    <div className="min-h-80 w-full flex items-center justify-center relative overflow-hidden bg-black">
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        The best <ColourfulText text="Animes" /> <br /> you will ever find
      </h1>
    </div>
  );
}