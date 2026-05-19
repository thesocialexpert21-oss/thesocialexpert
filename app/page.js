export default function Home() {

  const services = [
    {
      title: "YouTube Monetization",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop",
      details: [
        "50K Active Users Subscribers",
        "5K Hour WatchTime",
        "500K Views (Real Users)",
        "50K Likes",
        "5K Comments",
        "5K Shares",
        "500 Dollar Earning Included",
      ],
      price: "₹4999",
    },

    {
      title: "Google Reviews",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
      details: [
        "₹499 - 100 Reviews",
        "₹799 - 500 Reviews",
        "₹1000 - 800 Reviews",
        "₹1499 - 1200 Reviews",
        "₹1999 - 1750 Reviews",
      ],
    },

    {
      title: "YouTube Thumbnail Design",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
      details: [
        "Professional Thumbnail Design",
        "High CTR Design",
        "HD Quality",
      ],
      price: "₹499 Per Thumbnail",
    },

    {
      title: "YouTube Channel Banner",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      details: [
        "Professional HD Banner",
        "Premium Quality",
        "Modern Design",
      ],
      price: "₹999",
    },

    {
      title: "Songs Promotion",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
      details: [
        "Affordable Packages",
        "Real Audience Reach",
        "Music Promotion Service",
      ],
    },

    {
      title: "Instagram Growth",
      image:
        "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1200&auto=format&fit=crop",
      details: [
        "Followers Growth",
        "Real Reach",
        "Engagement Increase",
      ],
    },

    {
      title: "Facebook Monetization",
      image:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop",
      details: [
        "Facebook Page Monetization",
        "Audience Growth",
        "Professional Support",
      ],
    },

    {
      title: "Video Editing",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
      details: [
        "Professional Editing",
        "HD Export",
        "Reels & YouTube Videos",
      ],
    },
  ];

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        background: "#050505",
        color: "#fff",
        fontFamily: "Arial",
      }}
    >

      {/* HERO */}

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
            "linear-gradient(to bottom,#03110d,#000000)",
        }}
      >

        <h1
          style={{
            fontSize: "clamp(45px,8vw,90px)",
            color: "#00ff9d",
            textShadow: "0 0 30px #00ff9d",
            marginBottom: "20px",
          }}
        >
          THE SOCIAL EXPERT
        </h1>

        <p
          style={{
            maxWidth: "800px",
            color: "#cfcfcf",
            lineHeight: "35px",
            fontSize: "clamp(18px,3vw,24px)",
          }}
        >
          Professional YouTube Monetization, Google Reviews,
          Instagram Growth, Songs Promotion & Digital Marketing Services.
        </p>

        <a
          href="https://wa.me/918962007547"
          target="_blank"
          style={{
            marginTop: "40px",
            background: "#00ff9d",
            color: "#000",
            padding: "16px 40px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "20px",
            boxShadow: "0 0 25px #00ff9d",
          }}
        >
          Contact On WhatsApp
        </a>

      </section>

      {/* SERVICES */}

      <section
        style={{
          padding: "100px 20px",
        }}
      >

        <h2
          style={{
            textAlign: "center",
            color: "#00ff9d",
            fontSize: "clamp(35px,6vw,60px)",
            marginBottom: "70px",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
            maxWidth: "1400px",
            margin: "auto",
          }}
        >

          {services.map((service, index) => (

            <div
              key={index}
              style={{
                background: "#0d0d0d",
                borderRadius: "22px",
                overflow: "hidden",
                border: "1px solid #1f1f1f",
                boxShadow:
                  "0 0 20px rgba(0,255,157,0.15)",
              }}
            >

              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "25px",
                }}
              >

                <h3
                  style={{
                    color: "#00ff9d",
                    fontSize: "28px",
                    marginBottom: "20px",
                  }}
                >
                  {service.title}
                </h3>

                <div
                  style={{
                    color: "#d0d0d0",
                    lineHeight: "32px",
                    marginBottom: "25px",
                  }}
                >
                  {service.details.map((detail, i) => (
                    <p key={i}>• {detail}</p>
                  ))}
                </div>

                {service.price && (
                  <h2
                    style={{
                      color: "#fff",
                      marginBottom: "25px",
                      fontSize: "35px",
                    }}
                  >
                    {service.price}
                  </h2>
                )}

                <a
                  href="https://wa.me/918962007547"
                  target="_blank"
                  style={{
                    display: "inline-block",
                    background: "#00ff9d",
                    color: "#000",
                    padding: "14px 30px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "18px",
                    boxShadow:
                      "0 0 20px rgba(0,255,157,0.5)",
                  }}
                >
                  Order On WhatsApp
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* REFUND POLICY */}

      <section
        style={{
          padding: "90px 20px",
          background: "#08110d",
        }}
      >

        <h2
          style={{
            textAlign: "center",
            color: "#00ff9d",
            fontSize: "clamp(35px,6vw,60px)",
            marginBottom: "50px",
          }}
        >
          Refund Policy
        </h2>

        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            background: "#0d0d0d",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid #1f1f1f",
            color: "#d0d0d0",
            lineHeight: "35px",
          }}
        >

          <p>
            • Refund requests are reviewed carefully.
          </p>

          <p>
            • 7-10 working days it will take to refund your amount.
          </p>

          <p>
            • Fake claims or misuse may lead to rejection.
          </p>

          <p>
            • By purchasing our services you agree to our terms.
          </p>

          <p>
            © Copyright TheSocialExpert
          </p>

        </div>

      </section>

      {/* CONTACT */}

      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >

        <h2
          style={{
            color: "#00ff9d",
            fontSize: "clamp(40px,6vw,65px)",
            marginBottom: "20px",
          }}
        >
          Contact Us
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            fontSize: "20px",
            marginBottom: "50px",
          }}
        >
          Connect with The Social Expert
        </p>

        <div
          style={{
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >

          <a
            href="https://wa.me/918962007547"
            target="_blank"
            style={{
              background: "#00ff9d",
              color: "#000",
              padding: "18px 40px",
              borderRadius: "15px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "22px",
              boxShadow:
                "0 0 25px rgba(0,255,157,0.5)",
            }}
          >
            WhatsApp Us
          </a>

          <a
            href="mailto:thesocialexpert2.1@gmail.com"
            style={{
              border: "2px solid #00ff9d",
              color: "#00ff9d",
              padding: "18px 40px",
              borderRadius: "15px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "22px",
            }}
          >
            Email Us
          </a>

        </div>

      </section>

    </div>
  );
            }
