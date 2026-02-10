export default function DonatePage() {
  return (
    <div className="min-h-screen bg-neutral-100 px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-16">

        {/* Intro */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Donate</h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Your donation supports youth development through sports,
            education, and health initiatives in Senegal and Iceland.
          </p>
        </section>

        {/* Icelandic Bank Transfer */}
        <section className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
          <h2 className="text-2xl font-semibold">
            Donate by Bank Transfer (Iceland)
          </h2>

          <p className="text-neutral-600 leading-relaxed">
            Bank transfer is the primary and most common way to donate to
            charitable organizations in Iceland.
          </p>

          <div className="rounded-xl bg-neutral-50 p-6 space-y-4 text-neutral-800">
            <div>
              <span className="font-medium">Organization:</span> Nordic Waves Association
            </div>

            <div>
              <span className="font-medium">Kennitala:</span>{" "}
              <span className="tracking-wide">000000-0000</span>
            </div>

            <div>
              <span className="font-medium">Bank Account:</span>{" "}
              <span className="tracking-wide">0133-26-022503</span>
            </div>
          </div>

          <p className="text-sm text-neutral-500">
            Please include your name or “donation” in the reference field.
          </p>
        </section>

        {/* International Donations */}
        <section className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
          <h2 className="text-2xl font-semibold">
            International Donations
          </h2>

          <p className="text-neutral-600 leading-relaxed">
            Supporters outside Iceland can donate securely via PayPal.
          </p>

          <a
            href="https://www.paypal.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            Donate with PayPal
          </a>
        </section>

        {/* Trust / Transparency */}
        <section className="text-center space-y-4">
          <p className="text-neutral-700 max-w-xl mx-auto">
            Nordic Waves Association is a community-driven nonprofit focused on
            long-term impact through sport, education, and cultural exchange.
          </p>
        </section>

      </div>
    </div>
  );
}
