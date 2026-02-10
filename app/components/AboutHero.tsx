import { FadeUp } from "./motion-wrapper";

export function AboutHero() {
  return (
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
  );
}
