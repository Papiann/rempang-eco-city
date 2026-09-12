import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Breadcrumb removed per request
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Dimulainya Pembangunan Infrastruktur Fase Pertama",
    excerpt: "Proyek konstruksi jalan dan persiapan lahan telah dimulai di sepanjang garis pantai utara Rempang.",
    date: "Agustus 2026",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    content: "Proyek pembangunan infrastruktur fase pertama Rempang Eco City telah resmi dimulai. Proyek konstruksi jalan dan persiapan lahan sedang berlangsung di sepanjang garis pantai utara Rempang dengan target penyelesaian dalam 18 bulan. Tim konstruksi yang terdiri dari lebih dari 500 pekerja telah ditempatkan di lokasi untuk memastikan kelancaran proyek ini. Infrastruktur yang dibangun mencakup jalan raya utama, jaringan air bersih, dan sistem drainase yang canggih.\n\nProyek ini merupakan fondasi penting dalam mewujudkan visi Rempang Eco City sebagai kota berkelanjutan masa depan. Dengan menggunakan teknologi terkini dan praktik konstruksi ramah lingkungan, kami memastikan bahwa setiap aspek pembangunan sejalan dengan komitmen kami terhadap keberlanjutan.\n\nPeringkat keselamatan kerja telah ditetapkan sebagai prioritas utama dengan penerapan standar internasional di seluruh lokasi konstruksi. Kami berkomitmen untuk menyelesaikan fase pertama ini sesuai jadwal dan anggaran yang telah ditetapkan.",
  },
  {
    id: 2,
    title: "Program Transisi Komunitas Mencapai Milestone Baru",
    excerpt: "Dukungan perumahan dan mata pencaharian berkelanjutan untuk keluarga yang pindah.",
    date: "Juli 2026",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    content: "Program transisi komunitas Rempang Eco City telah mencapai milestone penting dengan penyelesaian fase pertama relokasi. Lebih dari 1000 keluarga telah dipindahkan ke perumahan baru yang tersedia dengan dukungan penuh dari pemerintah. \n\nProgram ini juga mencakup pelatihan keterampilan dan bantuan modal usaha untuk memastikan kehidupan ekonomi komunitas tetap stabil. Kepuasan penerima manfaat mencapai 95% berdasarkan survei terbaru, menunjukkan bahwa program ini telah berhasil menciptakan dampak positif bagi ribuan keluarga.\n\nUntuk fase berikutnya, kami akan fokus pada pengembangan usaha mikro dan kecil (UMKM) yang didukung penuh oleh program pelatihan dan pendampingan intensif. Investasi dalam pengembangan sumber daya manusia akan memastikan komunitas Rempang tidak hanya lolos dari proses transisi, tetapi juga berkembang dan sejahtera.",
  },
  {
    id: 3,
    title: "Mitra Energi Terbarukan Pertama Diumumkan",
    excerpt: "Kemitraan baru bertujuan menghadirkan infrastruktur tenaga surya dan pembangkit rendah karbon.",
    date: "Juni 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
    content: "Rempang Eco City telah menandatangani perjanjian kemitraan dengan perusahaan energi terbarukan terkemuka untuk mengembangkan infrastruktur energi terbarukan. Proyek ini akan menghasilkan 500 MW tenaga surya dan 200 MW tenaga angin, menjadikan Rempang Eco City sebagai pusat energi terbarukan terbesar di kawasan.\n\nInvestasi total mencapai 2 triliun rupiah, dengan target operasional dimulai pada tahun 2028. Kemitraan strategis ini menunjukkan komitmen Rempang Eco City untuk menjadi pemimpin dalam transisi energi global dan mengurangi emisi karbon.\n\nSelain itu, proyek ini juga akan menciptakan lapangan kerja baru bagi lebih dari 5000 orang dalam berbagai sektor, mulai dari konstruksi, operasi dan pemeliharaan, hingga penelitian dan pengembangan. Dukungan dari universitas lokal dan lembaga penelitian akan memastikan transfer teknologi yang berkelanjutan dan pengembangan kapabilitas lokal.",
  },
];

export default function BeritaDetailPage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === parseInt(params.id));

  if (!article) {
    return (
      <main>
        <Navbar />
        <div className="pt-20 md:pt-24">
          <PageHeader 
            title="Berita Tidak Ditemukan"
            description="Maaf, berita yang anda cari tidak dapat ditemukan"
          />
          <div className="container-content py-16 text-center">
            <p className="text-text-secondary mb-4">Berita ini tidak tersedia atau telah dihapus.</p>
            <Link href="/berita" className="text-primary-blue font-medium hover:text-primary-dark">
              Kembali ke halaman berita →
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <PageHeader 
          title={article.title}
          description={article.excerpt}
        />
        {/* breadcrumb removed */}

        <article className="bg-white py-16 md:py-24">
          <div className="container-content max-w-3xl">
            {/* Article Image */}
            <div className="mb-12 rounded-xl overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Article Meta */}
            <div className="mb-8 pb-8 border-b border-border-color">
              <span className="text-sm text-text-secondary">{article.date}</span>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {article.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-text-primary text-base leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Back Link */}
            <div className="pt-8 border-t border-border-color">
              <Link 
                href="/berita"
                className="text-primary-blue font-medium hover:text-primary-dark transition-colors inline-flex items-center gap-2"
              >
                ← Kembali ke Berita
              </Link>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}
