export default function Home() {

  const services = [
    {
      title: "YouTube Monetization",
      price: "₹4999",
      desc: "50K Subscribers • 5K WatchTime • 500K Views",
    },
    {
      title: "Google Reviews",
      price: "Starting ₹499",
      desc: "100 to 1750 Reviews Packages Available",
    },
    {
      title: "Thumbnail Design",
      price: "₹499",
      desc: "Professional High CTR Thumbnail Design",
    },
    {
      title: "Channel Banner",
      price: "₹999",
      desc: "Premium HD YouTube Banner Design",
    },
    {
      title: "Instagram Growth",
      price: "Affordable",
      desc: "Real Audience & Engagement Growth",
    },
    {
      title: "Songs Promotion",
      price: "Affordable",
      desc: "Music Promotion With Real Reach",
    },
  ];

  return (
    <div
      style={{
        background: "#060606",
        color: "#fff",
        margin: 0,
        padding: 0,
        fontFamily: "Arial",
      }}
    >

      {/* NAVBAR */}

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 20px",
          borderBottom: "1px solid #151515",
          position: "sticky",
          top: 0,
          background: "#060606",
          zIndex: 999,
        }}
      >

        <h2
          style={{
            color: "#00ff9d",
            margin: 0,
            fontSize: "28px",
          }}
        >
          TheSocialExpert
        </h2>

        <a
          href="https://wa.me/918962007547"
          target="_blank"
          style={{
            background: "#00ff9d",
            color: "#000",
            textDecoration: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          WhatsApp
        </a>

      </nav>

      {/* HERO */}

      <section
        style={{
          padding: "70px 20px 60px",
          textAlign: "center",
          background:
            "linear-gradient(to bottom,#071a13,#060606)",
        }}
      >

        <h1
          style={{
            fontSize: "clamp(42px,8vw,75px)",
            marginBottom: "20px",
            color: "#00ff9d",
            lineHeight: "1.1",
          }}
        >
          Grow Your Social Presence
        </h1>

        <p
          style={{
            maxWidth: "750px",
            margin: "auto",
            color: "#bdbdbd",
            lineHeight: "32px",
            fontSize: "19px",
          }}
        >
          Professional YouTube Monetization, Instagram Growth,
          Google Reviews & Digital Marketing Services.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "35px",
          }}
        >

          <a
            href="https://wa.me/918962007547"
            target="_blank"
            style={{
              background: "#00ff9d",
              color: "#000",
              textDecoration: "none",
              padding: "15px 28px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Get Started
          </a>

          <a
            href="mailto:thesocialexpert2.1@gmail.com"
            style={{
              border: "1px solid #00ff9d",
              color: "#00ff9d",
              textDecoration: "none",
              padding: "15px 28px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Email Us
          </a>

        </div>

      </section>

      {/* STATS */}

      <section
        style={{
          padding: "20px",
        }}
      >

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(150px,1fr))",
            gap: "15px",
            maxWidth: "1100px",
            margin: "auto",
          }}
        >

          {[
            ["50K+", "Subscribers"],
            ["500K+", "Views"],
            ["1000+", "Clients"],
            ["24/7", "Support"],
          ].map((item, index) => (

            <div
              key={index}
              style={{
                background: "#0d0d0d",
                border: "1px solid #171717",
                padding: "25px",
                borderRadius: "18px",
                textAlign: "center",
              }}
            >

              <h2
                style={{
                  color: "#00ff9d",
                  marginBottom: "10px",
                  fontSize: "35px",
                }}
              >
                {item[0]}
              </h2>

              <p
                style={{
                  color: "#bdbdbd",
                  margin: 0,
                }}
              >
                {item[1]}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* SERVICES */}

      <section
        style={{
          padding: "70px 20px",
        }}
      >

        <h2
          style={{
            textAlign: "center",
            fontSize: "45px",
            marginBottom: "50px",
            color: "#00ff9d",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >

          {services.map((service, index) => (

            <div
              key={index}
              style={{
                background: "#0d0d0d",
                borderRadius: "18px",
                padding: "28px",
                border: "1px solid #181818",
              }}
            >

              <h3
                style={{
                  color: "#00ff9d",
                  fontSize: "28px",
                  marginBottom: "15px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#c9c9c9",
                  lineHeight: "30px",
                  minHeight: "70px",
                }}
              >
                {service.desc}
              </p>

              <h2
                style={{
                  marginTop: "20px",
                  marginBottom: "25px",
                  fontSize: "32px",
                }}
              >
                {service.price}
              </h2>

              <a
                href="https://wa.me/918962007547"
                target="_blank"
                style={{
                  display: "inline-block",
                  background: "#00ff9d",
                  color: "#000",
                  textDecoration: "none",
                  padding: "13px 24px",
                  borderRadius: "10px",
                  fontWeight: "bold",
                }}
              >
                Order Now
              </a>

            </div>

          ))}

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section
        style={{
          padding: "70px 20px",
          background: "#08110d",
        }}
      >

        <h2
          style={{
            textAlign: "center",
            fontSize: "45px",
            marginBottom: "50px",
            color: "#00ff9d",
          }}
        >
          Testimonials
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >

          {[
            "Amazing service with real growth.",
            "Professional support & fast delivery.",
            "Best monetization service online.",
          ].map((review, index) => (

            <div
              key={index}
              style={{
                background: "#0d0d0d",
                padding: "28px",
                borderRadius: "18px",
                border: "1px solid #181818",
              }}
            >

              <h3
                style={{
                  color: "#00ff9d",
                }}
              >
                Client Review
              </h3>

              <p
                style={{
                  color: "#cfcfcf",
                  lineHeight: "30px",
                }}
              >
                "{review}"
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* REFUND POLICY */}

      <section
        style={{
          padding: "70px 20px",
        }}
      >

        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            background: "#0d0d0d",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid #181818",
          }}
        >

          <h2
            style={{
              color: "#00ff9d",
              marginBottom: "25px",
              textAlign: "center",
              fontSize: "42px",
            }}
          >
            Refund Policy
          </h2>

          <p
            style={{
              color: "#cfcfcf",
              lineHeight: "35px",
              fontSize: "18px",
            }}
          >
            • Refund requests are reviewed carefully.
            <br /><br />
            • 7-10 working days it will take to refund your amount.
            <br /><br />
            • Fake claims or misuse may lead to rejection.
            <br /><br />
            • By purchasing our services you agree to our terms.
          </p>

        </div>

      </section>

      {/* FOOTER */}

      <footer
        style={{
          padding: "35px 20px",
          borderTop: "1px solid #151515",
          textAlign: "center",
        }}
      >

        <h2
          style={{
            color: "#00ff9d",
            marginBottom: "15px",
          }}
        >
          TheSocialExpert
        </h2>

        <p
          style={{
            color: "#bdbdbd",
            marginBottom: "20px",
          }}
        >
          thesocialexpert2.1@gmail.com
        </p>

        <a
          href="https://wa.me/918962007547"
          target="_blank"
          style={{
            background: "#00ff9d",
            color: "#000",
            padding: "12px 24px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Contact On WhatsApp
        </a>

        <p
          style={{
            color: "#777",
            marginTop: "30px",
            fontSize: "14px",
          }}
        >
          © 2026 TheSocialExpert. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}
