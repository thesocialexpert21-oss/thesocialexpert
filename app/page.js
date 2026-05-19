export default function Home() {
  const services = [
    "YouTube Monetization",
    "Facebook Monetization",
    "Instagram Growth",
    "Google Reviews",
    "Songs Promotion",
    "Web Development",
    "YouTube Thumbnail Design",
    "Cover Art Design",
    "YouTube Logo Design",
    "Reel Bundle Non Copyright",
    "Video Editing",
    "50K+ Active Subscribers",
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      text: "Amazing service. Monetization completed very fast.",
    },
    {
      name: "Aman Verma",
      text: "Best YouTube growth service with genuine support.",
    },
    {
      name: "Rohit Singh",
      text: "Professional team and trusted services.",
    },
  ];

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        background: "#000",
        color: "#fff",
        fontFamily: "Arial",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "20px",
          background:
            "linear-gradient(to bottom,rgb(0,0,0),rgb(15,15,15))",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          alt="The Social Expert"
          style={{
            width: "100%",
            maxWidth: "900px",
            borderRadius: "20px",
            marginBottom: "30px",
          }}
        />

        <h1
          style={{
            fontSize: "65px",
            color: "#00ffcc",
            marginBottom: "10px",
          }}
        >
          THE SOCIAL EXPERT
        </h1>

        <p
          style={{
            maxWidth: "700px",
            fontSize: "22px",
            color: "#ccc",
            lineHeight: "35px",
          }}
        >
          Professional YouTube Monetization, Instagram Growth,
          Facebook Monetization, Web Development & Digital Marketing
          Services.
        </p>

        <a
          href="https://wa.me/918962007547"
          target="_blank"
          style={{
            marginTop: "30px",
            background: "#00ffcc",
            color: "#000",
            padding: "15px 40px",
            borderRadius: "12px",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Contact On WhatsApp
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 20px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "50px",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "#111",
                border: "1px solid #222",
                borderRadius: "20px",
                padding: "25px",
                textAlign: "center",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                alt={service}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "15px",
                  marginBottom: "20px",
                }}
              />

              <h3
                style={{
                  color: "#00ffcc",
                  fontSize: "24px",
                }}
              >
                {service}
              </h3>

              <p
                style={{
                  color: "#bbb",
                  marginTop: "15px",
                  lineHeight: "28px",
                }}
              >
                Trusted and professional digital services by
                TheSocialExpert.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section
        style={{
          padding: "80px 20px",
          background: "#0d0d0d",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "50px",
          }}
        >
          Packages
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {[
            {
              title: "Starter",
              price: "₹999",
              details: "Basic Growth & Promotion Package",
            },
            {
              title: "Professional",
              price: "₹4999",
              details: "Monetization + Growth Services",
            },
            {
              title: "Premium",
              price: "₹9999",
              details: "Complete Branding & Marketing Solution",
            },
          ].map((pkg, index) => (
            <div
              key={index}
              style={{
                background: "#111",
                padding: "35px",
                borderRadius: "20px",
                textAlign: "center",
                border: "1px solid #222",
              }}
            >
              <h3
                style={{
                  fontSize: "35px",
                  color: "#00ffcc",
                }}
              >
                {pkg.title}
              </h3>

              <h1
                style={{
                  fontSize: "50px",
                  margin: "20px 0",
                }}
              >
                {pkg.price}
              </h1>

              <p
                style={{
                  color: "#bbb",
                  lineHeight: "30px",
                }}
              >
                {pkg.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "80px 20px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "50px",
          }}
        >
          Testimonials
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#111",
                padding: "30px",
                borderRadius: "20px",
              }}
            >
              <h3
                style={{
                  color: "#00ffcc",
                  marginBottom: "15px",
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  color: "#ccc",
                  lineHeight: "30px",
                }}
              >
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REFUND POLICY */}
      <section
        style={{
          padding: "80px 20px",
          background: "#0d0d0d",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "40px",
          }}
        >
          Refund Policy
        </h2>

        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            background: "#111",
            padding: "35px",
            borderRadius: "20px",
            lineHeight: "35px",
            color: "#ccc",
            fontSize: "18px",
          }}
        >
          <p>
            • Refund requests are reviewed carefully after service
            verification.
          </p>

          <p>
            • 7-10 working days it will take to refund your amount.
          </p>

          <p>
            • Any misuse, fake claims or policy violations may lead to
            refund rejection.
          </p>

          <p>
            • By purchasing our services, you agree to our terms &
            conditions.
          </p>

          <p>© Copyright TheSocialExpert</p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "25px",
          }}
        >
          Contact Us
        </h2>

        <p
          style={{
            color: "#ccc",
            fontSize: "20px",
            marginBottom: "15px",
          }}
        >
          WhatsApp: +91 8962007547
        </p>

        <p
          style={{
            color: "#ccc",
            fontSize: "20px",
            marginBottom: "35px",
          }}
        >
          Email: thesocialexpert2.1@gmail.com
        </p>

        <a
          href="https://wa.me/918962007547"
          target="_blank"
          style={{
            background: "#00ffcc",
            color: "#000",
            padding: "16px 40px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Chat On WhatsApp
        </a>
      </section>
    </div>
  );
        }
