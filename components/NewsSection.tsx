import { newsArticles } from "@/data/news";
import NewsCard from "./NewsCard";
import SectionHeader from "./SectionHeader";

export default function NewsSection() {
  const featured = newsArticles.find((a) => a.featured) ?? newsArticles[0];
  const rest = newsArticles.filter((a) => a.id !== featured.id);

  return (
    <section id="updates" className="bg-offwhite py-24 md:py-36">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader headline="Latest updates." />
          <a
            href="#"
            className="text-sm font-medium text-forest border-b border-forest/40 hover:border-forest pb-0.5 self-start md:self-auto shrink-0 focus-ring"
          >
            View all updates
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
          <NewsCard article={featured} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
            {rest.map((article, i) => (
              <NewsCard article={article} key={article.id} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
