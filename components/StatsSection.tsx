import { stats } from "@/data/stats";
import StatCard from "./StatCard";

export default function StatsSection() {
  return (
    <section className="bg-forest py-24 md:py-32">
      <div className="container-content">
        <p className="text-offwhite/60 text-sm font-medium mb-14 max-w-md">
          A national strategic development, measured at scale.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
