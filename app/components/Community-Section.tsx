import Image from "next/image";
import { FadeUp } from "./motion-wrapper";

const people = [
  {
    name: "Youth Training Day",
    img: "/Photos/ProkebsCamp-5.jpg",
    text: "Weekly football sessions building confidence and teamwork."
  },
  {
    name: "Community Coaches",
    img: "/Photos/ProkebsCamp-6.jpg",
    text: "Local mentors guiding the next generation."
  },
  {
    name: "Cross-Cultural Exchange",
    img: "/Photos/ProkebsCamp-20.jpg",
    text: "Connecting Iceland and Senegal through sport."
  }
];

export function CommunitySection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <FadeUp>
          <h2 className="text-4xl font-bold">Our Community</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Every program is built around people, connection, and opportunity.
          </p>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12">
          {people.map((p, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="space-y-4">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-md">
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
