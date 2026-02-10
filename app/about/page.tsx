'use client';

import Image from "next/image";
import { FadeUp } from "../components/motion-wrapper";
import { TeamCard } from "../components/TeamCard";

const team = [
  {
    name: "Birta Lind Garðarsdóttir",
    role: "Chairman",
    img: "/Photos/Birta Lind.jpg",
    bio: `Birta Lind Garðarsdóttir works at the intersection of leadership, responsibility, and strong teamwork. She serves as Chair of Nordic Waves, where she demonstrates strategic vision and collaborative leadership. She is a qualified nurse and works at the Westfjords Healthcare Institution. In addition, she is Chair of the youth association Geisli and an active member of her local search and rescue team, fire brigade, and emergency response unit. Birta has a strong connection to football in her community, having played from a young age. She is passionate about children’s wellbeing, holistic health, and community-driven initiatives that promote positive and sustainable development.`
  },
  {
    name: "Tinna Hrund Hlynsdóttir",
    role: "Board Member",
    img: "/Photos/Tinna Run.jpg",
    bio: `Tinna Snorradóttir works at the intersection of community engagement, teamwork, and practical problem-solving. She is an industrial engineer and Head of Research and Development at Blámi, a board member of her local search and rescue unit, and has many years of experience practicing football. She is passionate about supporting community-led initiatives and working respectfully with local partners to create lasting impact`
  },
  {
    name: "Serigne Modou Fall",
    role: "Executive Director",
    img: "/Photos/serigne.jpg",
    bio: `Tinna hrund Hlynsdóttir : I serve on the board of the Children and Youth Council of Vestri Football Club and on the board of the Football Association of Iceland. I am deeply passionate about football and the power of sport to bring people together. The relationships and community built through the game are what inspire me the most.Football is more than a sport to me — it brings people together and creates lasting connections. The people I meet through football are what motivate and inspire me every day.`
  }
];

export default function AboutPage() {

  return (
    <>
      {/* ABOUT HERO */}
      <section className="bg-[#F6FAFC] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <span className="text-sm font-semibold text-[#FFDA03] uppercase">
              About Us
            </span>
            <h1 className="mt-4 text-5xl font-extrabold">
              The Story Behind Nordic Waves
            </h1>
            <p className="mt-6 text-gray-600 text-lg">
              Connecting youth, cultures, and opportunity through the power of sport.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <FadeUp>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nordic Waves Association exists to build a bridge between Iceland and
                Senegal through sports, health education, and cultural exchange.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Sports have the power to inspire change, build discipline, and create
                healthier futures. Our programs focus on leadership, hygiene, nutrition,
                and mental well-being.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With support from the Westfjords community, Nordic Waves connects cultures
                and proves how opportunity can travel across borders.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="rounded-[2rem] overflow-hidden shadow-lg">
              <Image
                src="/Photos/ProkebsCamp-5.jpg"
                alt="Team huddle"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </FadeUp>

        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="text-4xl font-bold">Our Impact</h2>
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { value: "150+", label: "Youth Engaged" },
              { value: "3", label: "Local Initiatives Supported" },
              { value: "Senegal ↔ Iceland", label: "Cultural Bridge" }
            ].map((s, i) => (
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
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <FadeUp>
            <h2 className="text-4xl font-bold text-center">Our Story</h2>
          </FadeUp>

          <FadeUp>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nordic Waves was inspired by a personal journey that began in Kebemer,
              Senegal. Many children face barriers to education, healthcare, and safe
              spaces to grow.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through sport, opportunity opened doors that once felt unreachable. That
              experience shaped the belief that access can change lives.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Today, Nordic Waves exists to pass that opportunity forward—connecting
              communities and empowering the next generation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* TEAM – INTERACTIVE */}
      <section className="space-y-8 pb-28">
  <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {team.map((member) => (
      <TeamCard key={member.name} member={member} />
    ))}
  </div>
</section>
    </>
  );
}
