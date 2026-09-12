"use client";

const REMPANG_ADDRESS =
  "R67F+PW2 Rempang Eco City Tanjung Banun, Sembulang, Galang, Batam City, Riau Islands 29481";

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(REMPANG_ADDRESS)}&z=14&output=embed`;

export default function RempangMap() {
  return (
    <iframe
      title="Rempang Eco City Map"
      src={mapUrl}
      className="h-[450px] w-full md:h-[520px] border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
