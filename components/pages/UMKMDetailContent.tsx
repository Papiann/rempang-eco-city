"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { UMKMItem } from "@/data/umkmCatalog";

type Props = {
  umkm: UMKMItem;
};

export default function UMKMDetailContent({ umkm }: Props) {
  const [activeProduct, setActiveProduct] = useState(0);

  const shopeeHref =
    umkm.ecommerce?.find((store) => store.platform === "shopee")?.href ??
    "https://shopee.co.id/";

  const galleryLength = Math.max(umkm.gallery.length, 1);
  const activeImage = umkm.gallery[activeProduct % galleryLength] ?? umkm.image;

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-content">
        <div className="mb-8">
          <Link
            href="/umkm"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary-blue hover:text-primary-blue"
          >
            <ArrowLeft size={16} />
            Kembali ke Daftar UMKM
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.03)]">
              <img
                src={activeImage}
                alt={umkm.name}
                className="h-[360px] w-full object-cover md:h-[460px]"
              />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link
                href={umkm.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2bb673] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#239d63]"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.55 0 .24 5.3.24 11.82c0 2.08.54 4.11 1.56 5.9L0 24l6.46-1.7a11.75 11.75 0 0 0 5.6 1.43h.01c6.5 0 11.82-5.3 11.82-11.82 0-3.16-1.23-6.12-3.47-8.43Zm-8.46 18.24h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.83 1 1.03-3.74-.24-.38a9.8 9.8 0 0 1-1.5-5.2c0-5.45 4.44-9.88 9.9-9.88 2.65 0 5.14 1.03 7 2.9a9.84 9.84 0 0 1 2.89 6.99c0 5.46-4.44 9.9-9.88 9.9Zm5.43-7.42c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.46-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.25 5.15 4.55.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.03-1.42.25-.7.25-1.31.18-1.43-.08-.12-.28-.2-.58-.35Z" />
                </svg>
                Hubungi via WhatsApp
              </Link>

              <Link
                href={shopeeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ee4d2d] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#d84427]"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M7.2 7.1h9.6l-.62 10.5a1.8 1.8 0 0 1-1.8 1.7H9.6a1.8 1.8 0 0 1-1.8-1.7L7.2 7.1Zm1.74-1.9a3.06 3.06 0 0 1 6.12 0h1.92a4.98 4.98 0 0 0-9.96 0h1.92Zm3.05 5.1c-2.11 0-3.18.87-3.18 2.3 0 1.27.91 2.05 2.45 2.3v1.05h1.37v-1.02c1.45-.21 2.4-1.03 2.4-2.29 0-1.42-1-2.08-2.48-2.34l-.75-.12c-.75-.13-1.08-.36-1.08-.7 0-.42.42-.7 1.22-.7.86 0 1.34.33 1.45.95h1.5c-.08-1.3-1-2.12-2.53-2.3V6.9h-1.37v.93Zm.3 2.76.89.15c.7.12.97.34.97.7 0 .46-.42.74-1.24.74-.84 0-1.37-.34-1.48-1.01H9.9c.08 1.4 1.07 2.2 2.69 2.34v.87h1.37v-.9c1.38-.22 2.28-1 2.28-2.25 0-1.29-.84-1.98-2.39-2.25l-.94-.16c-.66-.11-.92-.32-.92-.66 0-.38.37-.67 1.07-.67.79 0 1.26.33 1.34.9h1.46c-.08-1.3-.98-2.08-2.42-2.24V8.54h-1.37v.85c-1.35.2-2.22.94-2.22 2.12 0 1.27.81 1.98 2.43 2.25Z" />
                </svg>
                Shopee
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.03)] md:p-8">
            <span className="inline-flex rounded-full bg-[#f2da8d] px-3 py-1 text-xs font-semibold text-[#3d4b1a]">
              {umkm.category}
            </span>

            <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-primary-blue md:text-4xl">
              {umkm.brandName}
            </h1>

            <h2 className="mt-2 text-lg font-semibold text-text-primary">{umkm.name}</h2>

            <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
              {umkm.detailDescription}
            </p>

            <div className="mt-5 rounded-xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-text-primary">Produk yang dijual:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {umkm.products.map((product, idx) => (
                  <button
                    key={`${umkm.slug}-${product}`}
                    type="button"
                    onClick={() => setActiveProduct(idx)}
                    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                      activeProduct === idx
                        ? "border-primary-blue bg-primary-blue text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-primary-blue hover:text-primary-blue"
                    }`}
                  >
                    <img
                      src={umkm.gallery[idx % galleryLength] ?? umkm.image}
                      alt={product}
                      className="h-6 w-6 rounded object-cover"
                    />
                    {product}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-500">
              Pilih produk di atas untuk mengganti foto utama pada panel kiri.
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
