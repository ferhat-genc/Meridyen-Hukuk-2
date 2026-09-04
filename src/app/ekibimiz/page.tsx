import type { Metadata } from "next";
import TeamCard from "@/components/TeamCard";
import { team, firm } from "@/lib/data";

export const metadata: Metadata = {
  title: `Ekibimiz | ${firm.name}`,
  description: "Alanında deneyimli avukat kadromuzla tanışın.",
};

export default function TeamPage() {
  return (
    <>
      <section className="bg-navy-950 text-white">
        <div className="container-content py-20 sm:py-24">
          <p className="eyebrow">Kadromuz</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Ekibimiz</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-200">
            Farklı uzmanlık alanlarında derinleşmiş avukatlarımız, her dosyaya özenli ve
            stratejik bir yaklaşımla eğiliyor.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-content grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
        <p className="container-content mt-8 text-xs text-ink-400">
          Ekip üyeleri ve biyografileri kurgusaldır; gerçek kişileri temsil etmemektedir.
        </p>
      </section>
    </>
  );
}
