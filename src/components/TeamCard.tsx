import Image from "next/image";
import type { TeamMember } from "@/lib/data";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-ink-100 bg-white shadow-sm">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-lg font-semibold text-navy-900">{member.name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
          {member.title}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">{member.bio}</p>
      </div>
    </div>
  );
}
