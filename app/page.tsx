export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Insurance Cost Estimator
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Predict Your Out-of-Pocket Costs{" "}
          <span className="text-[#58a6ff]">Before You Book</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your insurance plan and instantly see real-time cost estimates
          for any procedure or appointment — no surprises, no billing shock.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No hidden fees.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔗", title: "Live Insurance Data", desc: "Connects to Eligible & Change Healthcare APIs for real-time plan details." },
            { icon: "💰", title: "Personalized Estimates", desc: "Deductibles, copays, and coinsurance calculated for your specific plan." },
            { icon: "📋", title: "Procedure Search", desc: "Search thousands of CPT codes and find in-network providers near you." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$9</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited procedure lookups",
              "Real-time insurance API access",
              "In-network provider search",
              "Cost history & saved estimates",
              "Email cost alerts"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How accurate are the cost estimates?",
              a: "Estimates are based on live data from your insurance plan via Eligible and Change Healthcare APIs. Accuracy depends on your insurer's data quality, but most estimates are within 10% of actual billed costs."
            },
            {
              q: "Is my insurance information secure?",
              a: "Yes. We use OAuth-based authentication with your insurer and never store your insurance credentials. All data is encrypted in transit and at rest."
            },
            {
              q: "Which insurance plans are supported?",
              a: "We support most major US commercial insurers including Aetna, Cigna, UnitedHealthcare, Blue Cross Blue Shield, and Humana. Medicare and Medicaid support is coming soon."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} MedCost Predictor. Not a substitute for professional medical or financial advice.
      </footer>
    </main>
  );
}
