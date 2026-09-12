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
		image: "/images/hero-kop-trans.png",
	},
	{
		title: "Kegiatan Ekonomi Komunitas",
		description:
			"Kolaborasi pengelolaan usaha dan distribusi kebutuhan masyarakat di sekitar kawasan.",
		image: "/images/hero-kops-mp.png",
	},
	{
		title: "Kunjungan dan Pendampingan",
		description:
			"Pendampingan langsung untuk membangun sinergi antara koperasi, warga, dan mitra usaha.",
		image: "/images/hero-rumah-rempang.png",
	},
	{
		title: "Wisata dan Potensi Lokal",
		description:
			"Integrasi program ekonomi dengan potensi wisata dan budaya lokal untuk kesejahteraan bersama.",
		image: "/images/hero-pariwisata-rec.jpg",
	},
];

export default function KoperasiTransmigrasiPage() {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeItem = galleryItems[activeIndex];

	const goTo = (index: number) =>
		setActiveIndex((index + galleryItems.length) % galleryItems.length);

	return (
		<main>
			<Navbar />
			<div className="pt-20 md:pt-24">
				<PageHeader
					title="Koperasi Transmigrasi"
					description="Koperasi yang mendukung kebutuhan ekonomi dan kesejahteraan masyarakat di Rempang Eco City."
				/>
				{/* breadcrumb removed */}

				<section className="bg-white py-16 md:py-20">
					<div className="container-content">
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
							<div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
								<img
									src="/images/hero-kop-trans.png"
									alt="Koperasi Transmigrasi"
									className="h-full min-h-[320px] w-full object-cover"
								/>
							</div>

							<div className="space-y-5">
								<h2 className="font-heading text-3xl font-bold text-primary-blue">
									Tentang Koperasi Transmigrasi
								</h2>
								<p className="text-base leading-relaxed text-text-secondary">
									Koperasi Transmigrasi menjadi salah satu pilar ekonomi
									masyarakat di Rempang Eco City. Koperasi ini berperan dalam
									menyediakan layanan kebutuhan pokok, membantu pengelolaan
									usaha masyarakat, serta menjadi wadah pelatihan dan
									pemberdayaan ekonomi warga.
								</p>
								<p className="text-base leading-relaxed text-text-secondary">
									Berbagai program seperti akses kebutuhan konsumsi,
									pendampingan usaha, dan bantuan permodalan menjadi strategi
									utama untuk mendorong kesejahteraan masyarakat secara
									berkelanjutan.
								</p>

								<div className="grid grid-cols-2 gap-4 pt-4">
									<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
										<p className="text-sm text-text-secondary">
											Tahun Berdiri
										</p>
										<p className="mt-2 text-xl font-bold text-text-primary">
											2018
										</p>
									</div>
									<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
										<p className="text-sm text-text-secondary">Anggota</p>
										<p className="mt-2 text-xl font-bold text-text-primary">
											245
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
							Struktur Kepengurusan Koperasi Transmigrasi
						</h2>

						<div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6 shadow-[0_8px_20px_rgba(15,23,42,0.03)]">
							<img
								src="/images/struktur-kop-trans.png"
								alt="Struktur kepengurusan Koperasi Transmigrasi"
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
								Galeri Koperasi Transmigrasi
							</h2>
							<p className="mt-3 text-base text-text-secondary">
								Kegiatan dan aktivitas yang mendukung pengembangan ekonomi dan
								kesejahteraan warga.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.7fr_0.9fr]">
							<div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
								<div className="relative">
									<img
										src={activeItem.image}
										alt={activeItem.title}
										className="h-[420px] w-full object-cover md:h-[500px]"
									/>
									<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 via-slate-900/25 to-transparent p-6 text-white">
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
								</div>
							</div>

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
										<div className="h-20 w-24 overflow-hidden rounded-xl">
											<img
												src={item.image}
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

						<div className="mt-6 flex items-center justify-center gap-3">
							<button
								type="button"
								onClick={() => goTo(activeIndex - 1)}
								className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-xl text-text-primary transition hover:border-primary-blue hover:text-primary-blue"
								aria-label="Previous gallery item"
							>
								‹
							</button>
							<div className="flex gap-2">
								{galleryItems.map((_, index) => (
									<button
										key={index}
										type="button"
										onClick={() => goTo(index)}
										aria-label={`Show item ${index + 1}`}
										className={`h-2.5 rounded-full transition-all ${
											activeIndex === index
												? "w-8 bg-primary-blue"
												: "w-3 bg-slate-300 hover:bg-slate-400"
										}`}
									/>
								))}
							</div>
							<button
								type="button"
								onClick={() => goTo(activeIndex + 1)}
								className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-xl text-text-primary transition hover:border-primary-blue hover:text-primary-blue"
								aria-label="Next gallery item"
							>
								›
							</button>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
