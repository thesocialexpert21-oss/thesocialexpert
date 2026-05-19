export default function Home() {

  const services = [
    { title: "YouTube Monetization", price: "₹4999", desc: "50K Subs • 5K WatchTime • 500K Views" },
    { title: "Google Reviews", price: "₹499+", desc: "100–1750 High Quality Reviews" },
    { title: "Thumbnail Design", price: "₹499", desc: "High CTR Professional Thumbnails" },
    { title: "Instagram Growth", price: "₹999+", desc: "Real Engagement & Growth" },
  ];

  return (
    <div className="min-h-screen bg-[#05070d] text-white font-sans">

      {/* NAV */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <h1 className="text-2xl font-bold text-blue-400">TheSocialExpert</h1>
        <a
          href="https://wa.me/918962007547"
          className="bg-blue-500 px-4 py-2 rounded-xl font-semibold hover:bg-blue-600"
        >
          WhatsApp
        </a>
      </nav>

      {/* HERO */}
      <section className="text-center px-6 py-24 bg-gradient-to-b from-blue-950/40 to-transparent">

        <h1 className="text-5xl md:text-7xl font-bold">
          Grow Your <span className="text-blue-400">Social Media</span> Fast
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          YouTube Monetization, Instagram Growth, Reviews & Marketing Services — All in One Place.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a className="bg-blue-500 px-6 py-3 rounded-xl font-semibold">
            Get Started
          </a>

          <a className="border border-blue-400 px-6 py-3 rounded-xl text-blue-400">
            Learn More
          </a>
        </div>

      </section>

      {/* SERVICES */}
      <section className="px-6 py-20">

        <h2 className="text-center text-4xl font-bold text-blue-400 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold text-blue-300">{s.title}</h3>
              <p className="text-gray-400 mt-3">{s.desc}</p>
              <h4 className="text-2xl font-bold mt-4">{s.price}</h4>

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

      {/* CTA */}
      <section className="text-center py-20 bg-white/5">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
          Ready to Grow Your Brand?
        </h2>

        <p className="text-gray-400 mt-4">
          Contact us now and start your digital growth journey.
        </p>

        <a
          href="https://wa.me/918962007547"
          className="inline-block mt-6 bg-blue-500 px-6 py-3 rounded-xl font-semibold"
        >
          Contact Now
        </a>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-white/10 text-gray-500">
        © 2026 TheSocialExpert. All Rights Reserved.
      </footer>

    </div>
  );
}
