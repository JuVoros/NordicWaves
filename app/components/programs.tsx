import Image from "next/image";

interface Card {
  img: string;
  title: string;
}

interface ProgramsProps {
  cards: Card[];
}

export function Programs({ cards }: ProgramsProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Our Programs</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-4 text-center font-semibold text-sm">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}