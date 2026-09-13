import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UMKMDetailContent from "@/components/pages/UMKMDetailContent";
import { getUmkmBySlug, umkmCatalog } from "@/data/umkmCatalog";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return umkmCatalog.map((item) => ({ slug: item.slug }));
}

export default function UMKMDetailPage({ params }: PageProps) {
  const umkm = getUmkmBySlug(params.slug);

  if (!umkm) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <UMKMDetailContent umkm={umkm} />
      </div>
      <Footer />
    </main>
  );
}
