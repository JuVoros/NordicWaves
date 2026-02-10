import { FadeUp } from "./motion-wrapper";

export function ImpactStats() {
  const stats = [
    { label: "Youth Supported", value: "1,200+" },
    { label: "Free Programs", value: "35" },
    { label: "Volunteer Coaches", value: "80+" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        {stats.map((s, i) => (
  <FadeUp key={i} delay={i * 0.1}>
    <div>
      <div className="text-4xl font-extrabold text-[#FFDA03]">
        {s.value}
      </div>
      <p className="mt-2 text-gray-600">{s.label}</p>
    </div>
  </FadeUp>
))}

      </div>
    </section>
  );
}
