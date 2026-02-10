export function DonateCTA() {
  return (
    <section className="bg-[#FFDA03] py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-black">
          Help a Young Athlete Find Their Path
        </h2>
        <p className="mt-4 text-black/70">
          Your donation directly funds free access to sports, mentorship, and community.
        </p>

        <a
          href="/donate"
          className="inline-block mt-8 bg-black text-[#FFDA03] px-10 py-4 rounded-full font-semibold hover:opacity-90"
        >
          Donate Today
        </a>
      </div>
    </section>
  );
}
