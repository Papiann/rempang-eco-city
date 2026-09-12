"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Breadcrumb removed per request
import PageHeader from "@/components/PageHeader";

const pengurus = [
	{
		name: "Yudo Pramono",
		role: "Staff Khusus Kementrans",
		image: "/images/ex-pic-staff.png",
	},
	{
		name: "Yudo Pramono",
		role: "Staff Khusus Kementrans",
		image: "/images/ex-pic-staff.png",
	},
	{
		name: "Yudo Pramono",
		role: "Staff Khusus Kementrans",
		image: "/images/ex-pic-staff.png",
	},
	{
		name: "Yudo Pramono",
		role: "Staff Khusus Kementrans",
		image: "/images/ex-pic-staff.png",
	},
];

const galleryItems = [
	{
		title: "Pelatihan UMKM",
		description:
			"Peningkatan kapasitas produksi dan pemasaran produk lokal masyarakat Rempang.",
		images: ["/images/hero-kops-mp.png", "/images/hero-kop-trans.png"],
	},
	{
		title: "Program Komunitas",
		description:
			"Pemberdayaan masyarakat melalui pembinaan usaha dan dukungan kerjasama lokal.",
		images: ["/images/hero-kop-trans.png", "/images/hero-rumah-rempang.png"],
	},
	{
		title: "Kunjungan dan Pendampingan",
		description:
			"Pendampingan usaha dan pembinaan operasional untuk mendorong kemandirian ekonomi.",
		images: ["/images/hero-rumah-rempang.png", "/images/hero-pariwisata-rec.jpg"],
	},
	{
		title: "Potensi Lokal dan Wisata",
		description:
			"Integrasi kegiatan ekonomi dengan sumber daya lokal dan potensi wisata masyarakat.",
		images: ["/images/hero-pariwisata-rec.jpg", "/images/hero-kops-mp.png"],
	},
];

export default function KoperasiMerahPutihPage() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [photoIndex, setPhotoIndex] = useState(0);
	const activeItem = galleryItems[activeIndex];
	const activeImage = activeItem.images[photoIndex];

	const goTo = (index: number) => {
		setActiveIndex(index);
		setPhotoIndex(0);
	};

	const goToPhoto = (offset: number) => {
		setPhotoIndex(
			(prev) =>
				(prev + offset + activeItem.images.length) %
				activeItem.images.length,
		);
	};

	return (
		<main>
			<Navbar />
			<div className="pt-20 md:pt-24">
				<PageHeader
					title="Koperasi Merah Putih"
					description="Koperasi yang mendorong potensi usaha dan kesejahteraan masyarakat Rempang Eco City."
				/>
				{/* breadcrumb removed */}

				<section className="bg-white py-16 md:py-20">
					<div className="container-content">
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
							<div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
								<img
									src="/images/hero-kops-mp.png"
									alt="Koperasi Merah Putih"
									className="h-full min-h-[320px] w-full object-cover"
								/>
							</div>

							<div className="space-y-5">
								<h2 className="font-heading text-3xl font-bold text-primary-blue">
									Tentang Koperasi Merah Putih
								</h2>
								<p className="text-base leading-relaxed text-text-secondary">
									Koperasi Merah Putih menjadi wadah ekonomi masyarakat Rempang
									yang fokus pada penguatan usaha, pelayanan kebutuhan pokok,
									hingga pengembangan potensi lokal. Koperasi ini hadir untuk
									mendorong kemandirian ekonomi masyarakat secara berkelanjutan.
								</p>
								<p className="text-base leading-relaxed text-text-secondary">
									Dengan orientasi pada semangat gotong royong, koperasi ini aktif
									dalam program pengelolaan usaha, dukungan modal usaha, serta
									pemberdayaan UMKM lokal agar lebih kompetitif dan berdampak luas.
								</p>

								<div className="grid grid-cols-2 gap-4 pt-4">
									<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
										<p className="text-sm text-text-secondary">Tahun Berdiri</p>
										<p className="mt-2 text-xl font-bold text-text-primary">
											2020
										</p>
									</div>
									<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
										<p className="text-sm text-text-secondary">Anggota</p>
										<p className="mt-2 text-xl font-bold text-text-primary">
											180
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-white py-8 md:py-12">
					<div className="container-content">
						<h2 className="font-heading text-4xl font-bold text-primary-blue text-center mb-8">
							Struktur Kepengurusan Koperasi Merah Putih
						</h2>

						<div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6 shadow-[0_8px_20px_rgba(15,23,42,0.03)]">
							<img
								src="/images/struktur-kop-trans.png"
								alt="Struktur kepengurusan Koperasi Merah Putih"
								className="mx-auto w-full max-w-6xl object-contain"
							/>
						</div>

						<div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
							{pengurus.map((person, index) => (
								<article
									key={`${person.name}-${index}`}
									className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.03)] transition-all hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
								>
									<div className="overflow-hidden bg-[#39b7c9]">
										<img
											src={person.image}
											alt={person.name}
											className="h-72 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
										/>
									</div>
									<div className="p-4 text-center">
										<h3 className="text-xl font-semibold text-primary-blue">
											{person.name}
										</h3>
										<p className="mt-1 text-sm text-text-secondary">
											{person.role}
										</p>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="bg-slate-50 py-16 md:py-20">
					<div className="container-content">
						<div className="mb-8 text-center">
							<h2 className="font-heading text-4xl font-bold text-primary-blue">
								Galeri Koperasi Merah Putih
							</h2>
							<p className="mt-3 text-base text-text-secondary">
								Kegiatan dan aktivitas yang mendukung pengembangan ekonomi dan
								kesejahteraan warga.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.65fr_0.9fr]">
							<div className="relative h-[420px] overflow-hidden rounded-3xl md:h-[500px]">
								<img
									src={activeImage}
									alt={activeItem.title}
									className="h-full w-full object-cover"
								/>
								<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/75 via-slate-900/30 to-transparent p-6 text-white">
									<p className="text-xs uppercase tracking-[0.2em] text-slate-200">
										Kegiatan
									</p>
									<h3 className="mt-2 text-2xl font-bold">
										{activeItem.title}
									</h3>
									<p className="mt-2 max-w-xl text-sm text-slate-200">
										{activeItem.description}
									</p>
								</div>

								{activeItem.images.length > 1 && (
									<div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-800 shadow-md backdrop-blur-sm">
										<button
											type="button"
											onClick={() => goToPhoto(-1)}
											className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-slate-200"
											aria-label="Previous photo"
										>
											‹
										</button>
										<span>
											{photoIndex + 1}/{activeItem.images.length}
										</span>
										<button
											type="button"
											onClick={() => goToPhoto(1)}
											className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-slate-200"
											aria-label="Next photo"
										>
											›
										</button>
									</div>
								)}
							</div>

							<div className="max-h-[520px] overflow-y-auto pr-1">
								<div className="space-y-3">
									{galleryItems.map((item, index) => (
										<button
											key={item.title}
											type="button"
											onClick={() => goTo(index)}
											className={`flex w-full items-center gap-3 rounded-2xl border p-2 text-left transition-all ${
												activeIndex === index
													? "border-primary-blue bg-primary-blue/5 shadow-sm"
													: "border-slate-200 bg-white hover:border-slate-300"
											}`}
										>
											<div className="h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl">
												<img
													src={item.images[0]}
													alt={item.title}
													className="h-full w-full object-cover"
												/>
											</div>
											<div className="min-w-0 flex-1">
												<p className="truncate text-sm font-semibold text-text-primary">
													{item.title}
												</p>
												<p className="mt-1 line-clamp-2 text-xs text-text-secondary">
													{item.description}
												</p>
											</div>
										</button>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
