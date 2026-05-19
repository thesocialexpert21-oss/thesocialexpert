export default function Home() {

  const services = [
    { title: "YouTube Monetization", price: "₹4999", desc: "50K Subs • 5K WatchTime • 500K Views" },
    { title: "Google Reviews", price: "₹499+", desc: "100–1750 Real Reviews" },
    { title: "Thumbnail Design", price: "₹499", desc: "High CTR Professional Design" },
    { title: "Instagram Growth", price: "₹999+", desc: "Real Engagement Growth" },
  ];

  return (
    <div style={{
      fontFamily: "Arial",
      background: "#070A12",
      color: "white",
      minHeight: "100vh"
    }}>

      {/* NAV */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "18px 25px",
        borderBottom: "1px solid #1c2233"
      }}>
        <h2 style={{ color: "#4ea1ff" }}>TheSocialExpert</h2>
        <a href="https://wa.me/918962007547" style={{
          background: "#4ea1ff",
          color: "black",
          padding: "10px 16px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          WhatsApp
        </a>
      </div>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        padding: "80px 20px",
        background: "radial-gradient(circle at top, #12203a, #070A12)"
      }}>

        <h1 style={{
          fontSize: "48px",
          marginBottom: "15px"
        }}>
          Grow Your Social Media Fast 🚀
        </h1>

        <p style={{
          color: "#b8c0d9",
          maxWidth: "600px",
          margin: "auto"
        }}>
          YouTube Monetization, Instagram Growth, Reviews & Digital Services — All in one place.
        </p>

        <div style={{ marginTop: "30px" }}>
          <a href="https://wa.me/918962007547" style={{
            background: "#4ea1ff",
            color: "black",
            padding: "14px 22px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "10px"
          }}>
            Get Started
          </a>

          <a href="#services" style={{
            border: "1px solid #4ea1ff",
            color: "#4ea1ff",
            padding: "14px 22px",
            borderRadius: "12px",
            textDecoration: "none"
          }}>
            View Services
          </a>
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" style={{ padding: "60px 20px" }}>

        <h2 style={{
          textAlign: "center",
          color: "#4ea1ff",
          marginBottom: "40px"
        }}>
          Our Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "auto"
        }}>

          {services.map((s, i) => (
            <div key={i} style={{
              background: "#0f1628",
              padding: "20px",
              borderRadius: "15px",
              border: "1px solid #1c2233"
            }}>
              <h3 style={{ color: "#4ea1ff" }}>{s.title}</h3>
              <p style={{ color: "#b8c0d9" }}>{s.desc}</p>
              <h2>{s.price}</h2>

              <a href="https://wa.me/918962007547" style={{
                display: "inline-block",
                marginTop: "10px",
                background: "#4ea1ff",
                color: "black",
                padding: "10px 14px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold"
              }}>
                Order Now
              </a>
            </div>
          ))}

        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center",
        padding: "30px",
        borderTop: "1px solid #1c2233",
        color: "#777"
      }}>
        © 2026 TheSocialExpert
      </div>

    </div>
  );
}
