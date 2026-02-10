import Image from "next/image";
import { FadeUp } from "./motion-wrapper";

export default function Hero() {
  return (
    <section className="bg-[#F6FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Text */}
        <FadeUp>

        <div>
          <span className="text-sm font-semibold text-[#FFDA03] uppercase">
            Youth Sports Charity
          </span>

          <h1 className="mt-4 text-5xl font-extrabold leading-tight">
            Building Strong Futures <br /> Through Sport
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl">
            Nordic Waves empowers young people through free sports programs,
            mentorship, and safe spaces to grow on and off the field.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/donate"
              className="bg-[#FFDA03] px-8 py-4 rounded-full font-semibold text-black hover:bg-black hover:text-[#FFDA03] transition"
              >
              Donate Now
            </a>

            <a
              href="/events"
              className="px-8 py-4 rounded-full border font-semibold hover:bg-white transition"
              >
              View Programs
            </a>
          </div>
        </div>
              </FadeUp>

        {/* Image */}
         <FadeUp delay={0.15}>

        <div className="relative">
          <div className="rounded-[3rem] overflow-hidden shadow-xl">
            <Image
              src="/Photos/ProkebsCamp-27.jpg"
              alt="Youth sports moment"
              width={700}
              height={500}
              className="object-cover"
              />
          </div>
        </div>
              </FadeUp>

      </div>
    </section>
  );
}
