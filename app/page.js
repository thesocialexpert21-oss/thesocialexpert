export default function Home() {

  const services = [
    { title: "YouTube Monetization", price: "₹4999", desc: "50K Subs • 5K WatchTime • 500K Views" },
    { title: "Google Reviews", price: "₹499+", desc: "100 to 1750 High Quality Reviews" },
    { title: "Thumbnail Design", price: "₹499", desc: "High CTR Professional Thumbnails" },
    { title: "Instagram Growth", price: "₹999+", desc: "Real Organic Engagement Growth" },
  ];

  const plans = [
    { name: "Starter", price: "₹499", features: ["Basic Support", "1 Service", "Fast Delivery"] },
    { name: "Pro", price: "₹1999", features: ["Priority Support", "3 Services", "Better Reach"] },
    { name: "Elite", price: "₹4999", features: ["24/7 Support", "All Services", "Max Growth"] },
  ];

  return (
    <div className="min-h-screen bg-[#05070d] text-white font-sans">

      {/* NAV */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-white/10 backdrop-blur">
        <h1 className="text-2xl font-bold text-blue-400">TheSocialExpert</h1>
        <a
          href="https://wa.me/918962007547"
          className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl font-semibold"
        >
          WhatsApp
        </a>
      </nav>

      {/* HERO */}
      <section className="text-center px-6 py-24 bg-gradient-to-b from-blue-950/30 to-transparent">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Grow Your <span className="text-blue-400">Social Media</span> Faster
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          YouTube Monetization, Instagram Growth, Reviews & Digital Marketing — All in one place.
        </p>

        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <a className="bg-blue-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition" href="https://wa.me/918962007547">
            Get Started
          </a>
          <a className="border border-blue-400 px-6 py-3 rounded-xl text-blue-400">
            View Services
          </a>
        </div>

      </section>

      {/* SERVICES */}
      <section className="px-6 py-20">

        <h2 className="text-center text-4xl font-bold mb-12 text-blue-400">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {services.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition">

              <h3 className="text-xl font-bold text-blue-300">{s.title}</h3>
              <p className="text-gray-400 mt-3">{s.desc}</p>
              <h4 className="text-2xl font-bold mt-5">{s.price}</h4>

              <a
                href="https://wa.me/918962007547"
                className="inline-block mt-5 bg-blue-500 px-4 py-2 rounded-lg"
              >
                Order Now
              </a>

            </div>
          ))}

        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-20 bg-white/5">

        <h2 className="text-center text-4xl font-bold mb-12 text-blue-400">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {plans.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl bg-black/30 border border-white/10">

              <h3 className="text-xl font-bold text-blue-300">{p.name}</h3>
              <h2 className="text-3xl font-bold mt-3">{p.price}</h2>

              <ul className="mt-4 text-gray-400 space-y-2">
                {p.features.map((f, j) => <li key={j}>• {f}</li>)}
              </ul>

              <a
                href="https://wa.me/918962007547"
                className="block mt-6 bg-blue-500 text-center py-2 rounded-lg"
              >
                Choose Plan
              </a>

            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 border-t border-white/10">
        © 2026 TheSocialExpert • All Rights Reserved
      </footer>

    </div>
  );
                     }
