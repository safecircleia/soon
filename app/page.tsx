"use client";

import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import {
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import Aurora from "@/components/ui/aurora";


function SocialButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-2 hover:opacity-80"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Aurora Background */}
      <div className="absolute inset-0 w-full h-full">
        <Aurora colorStops={["#1A5FB4", "#9141AC", "#E01B24"]} 
        speed={0.5}
        amplitude={0.2} 
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center pt-20">
        {/* Coming Soon Chip */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-neutral-900/90 to-neutral-800/90 text-neutral-300 border border-neutral-800/50 hover:border-neutral-700/50 backdrop-blur-sm transition duration-300">
            Coming soon
          </div>
        </div>

        {/* Title with Text Hover Effect */}
        <div className="w-full max-w-50xl">
          <TextHoverEffect text="SafeCircle" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-8 py-6">
          <SocialButton
            href="https://github.com/safecircleia"
            label="Visit our GitHub"
            icon={<FaGithub size={32} />}
          />
          <SocialButton
            href="https://twitter.com/safecircleai"
            label="Follow us on Twitter"
            icon={<FaTwitter size={32} />}
          />
          <SocialButton
            href="https://t.me/safecircleai"
            label="Join our Telegram"
            icon={<FaTelegram size={32} />}
          />
          <SocialButton
            href="https://discord.gg/Ubr6AcAupr"
            label="Join our Discord"
            icon={<FaDiscord size={32} />}
          />
          <SocialButton
            href="https://instagram.com/safecircleai"
            label="Follow us on Instagram"
            icon={<FaInstagram size={32} />}
          />
        </div>

        {/* Description */}
        <p className="text-xs md:text-xl font-normal text-center text-neutral-400 max-w-lg">
          AI powered solution to detect predatory behavior
        </p>
      </div>
    </div>
  );
}
