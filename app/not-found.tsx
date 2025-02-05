"use client";

import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Aurora from "@/components/ui/aurora";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Aurora Background */}
      <div className="absolute inset-0 w-full h-full">
        <Aurora 
          colorStops={["#1A5FB4", "#9141AC", "#E01B24"]} 
          speed={0.5}
          amplitude={0.2} 
        />
      
      </div>
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8 px-4">
        {/* 404 Title */}
        <div className="w-full max-w-3xl">
          <TextHoverEffect text="404" />
        </div>

        {/* Error Message */}
        <h2 className="text-2xl md:text-3xl font-medium text-neutral-200 text-center">
          Page not found
        </h2>
        
        {/* Description */}
        <p className="text-sm md:text-lg text-neutral-400 text-center max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Home Button */}
        <Link 
          href="/"
          className="px-6 py-2 rounded-full bg-white hover:bg-white/90 text-black transition-colors font-medium"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
