"use client";

import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import Orb from "../components/ui/orb";
import SplitText from "../components/ui/split";
import StarBorder from "@/components/ui/border";
import ShinyText from "@/components/ui/shiny";

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
      <div className="absolute inset-0 w-full h-full">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Content Container as vertical stack centered completely */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pointer-events-none space-y-8">
        {/* Coming Soon Chip wrapped for interactivity */}
        <div className="pointer-events-auto">
          <div className="relative group">
            <StarBorder
              as="button"
              className="custom-class"
              color="cyan"
              speed="5s"
            >
              Coming Soon
              </StarBorder>
          </div>
        </div>

        {/* Title centered without absolute positioning */}
        <div className="pointer-events-auto">
          <SplitText
            text="SafeCircle"
            className="text-9xl font-bold text-center text-white"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing={(t) => 1 - Math.pow(1 - t, 3)}
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>

        {/* Social Icons wrapped for interactivity */}
        <div className="pointer-events-auto flex justify-center items-center gap-8 py-6">
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

        {/* Description wrapped for interactivity */}
        <div className="pointer-events-auto">
          <p className="text-xs md:text-xl font-normal text-center text-neutral-400 max-w-lg">
            <ShinyText text="AI powered solution to detect predatory behavior" disabled={false} speed={3} className='custom-class' />
          </p>
        </div>
      </div>
    </div>
  );
}
