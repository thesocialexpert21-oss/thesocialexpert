"use client";

import { motion } from "framer-motion";

export default function Home() {

  const packages = [
    {
      title: "YouTube Monetization",
      price: "₹4999",
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop",
      features: [
        "50K Active Subscribers",
        "500K Views",
        "20K Likes",
        "1K Comments",
        "4K Hour Watchtime",
        "Real Engagement",
        "Banner Optimization",
      ],
    },

    {
      title: "Silver Play Button",
      price: "₹7999",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      features: [
        "100K Subscribers",
        "Silver Play Button",
        "4K Hour Watchtime",
        "1M Views",
        "Full Monetization",
        "Channel Banner",
        "Channel Logo",
        "Keywords Setup",
      ],
    },

    {
      title: "Instagram Growth",
      price: "₹3499",
      image:
        "https://images.unsplash.com/photo-1611262588019-db6cc2032da3?q=80&w=1200&auto=format&fit=crop",
      features: [
        "50K+ Followers",
        "1M Engagement",
        "High Likes",
        "High Views",
        "Premium Reach",
      ],
    },
  ];

  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Amazing service and fast delivery. Monetization completed successfully.",
    },
    {
      name: "Aman Verma",
      text: "Instagram engagement quality was really good and support was professional.",
    },
    {
      name: "Sahil Khan",
      text: "Best digital marketing service experience till now.",
    },
  ];

  return (
    <main className="bg-[#050816] text-white overflow-hidden">

      {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center px-6">

        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full top-[-100px]" />

        <div className="text-center max-w-5xl z-10">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            THE <span className="text-purple-500">SOCIAL</span> EXPERT
          </motion.h1>

          <p className="text-gray-400 mt-8 text-xl leading-relaxed">
            Premium YouTube, Instagram, Facebook & Google Reviews
            Marketing Services With Real Engagement.
          </p>

          <div className="flex gap-5 justify-center mt-10 flex-wrap">

            <a
              href="https://wa.me/918962007547"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              WhatsApp Now
            </a>

            <a
              href="mailto:thesocialexpert2.1@gmail.com"
              className="border border-white/20 hover:border-purple-500 transition px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="py-24 px-6">

        <h2 className="text-5xl font-bold text-center mb-20">
          OUR SERVICES
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            "YouTube Monetization",
            "Instagram Growth",
            "Facebook Promotion",
            "Google Reviews",
          ].map((service, index) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-[30px] backdrop-blur-xl hover:border-purple-500 transition"
            >

              <h3 className="text-2xl font-bold mb-5">
                {service}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Professional marketing solutions with premium growth and real engagement.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}

      <section className="py-24 px-6 bg-white/5">

        <h2 className="text-5xl font-bold text-center mb-20">
          PREMIUM PACKAGES
        </h2>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

          {packages.map((pkg, index) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={index}
              className="bg-[#0B1120] border border-white/10 rounded-[35px] overflow-hidden hover:border-purple-500 transition"
            >

              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-6">
                  {pkg.title}
                </h3>

                <ul className="space-y-3 text-gray-300">

                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      ✅ {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center mt-10">

                  <span className="text-4xl font-bold text-purple-500">
                    {pkg.price}
                  </span>

                  <a
                    href="https://wa.me/918962007547"
                    target="_blank"
                    className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-2xl font-semibold"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}

      <section className="py-24 px-6">

        <h2 className="text-5xl font-bold text-center mb-20">
          CLIENT REVIEWS
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={index}
              className="bg-white/5 border border-white/10 rounded-[30px] p-8"
            >

              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-relaxed">
                "{review.text}"
              </p>

              <h4 className="mt-6 text-xl font-bold">
                {review.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXTRA SERVICES */}

      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-white/10 rounded-[40px] p-12 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Additional Services Available
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Facebook Promotion • Google Reviews • Meta Ads •
            YouTube SEO • Branding • Channel Optimization
          </p>
        </div>
      </section>

      {/* CONTACT */}

      <section className="py-24 px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          READY TO GROW?
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Contact us now and boost your brand professionally.
        </p>

        <div className="flex justify-center gap-5 flex-wrap">

          <a
            href="https://wa.me/918962007547"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            WhatsApp
          </a>

          <a
            href="mailto:thesocialexpert2.1@gmail.com"
            className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Email
          </a>
        </div>

        <p className="text-gray-500 mt-8">
          thesocialexpert2.1@gmail.com
        </p>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 The Social Expert — All Rights Reserved
      </footer>

    </main>
  );
}
