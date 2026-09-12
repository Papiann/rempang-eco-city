"use client";

import Image from "next/image";
import { useRef } from "react";

const IMAGES = [
  "/images/about-profil-rec.png",
];

export default function ProfilGallery() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-full">
      {IMAGES.map((src, i) => (
        <div key={i} className="rounded-2xl overflow-hidden border border-border-color bg-bg-light">
          <Image
            src={src}
            alt="Foto profil Rempang Eco City"
            width={1200}
            height={900}
            className="object-cover w-full h-64 md:h-96"
          />
        </div>
      ))}
    </div>
  );
}
