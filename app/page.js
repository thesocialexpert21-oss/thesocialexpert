export default function Home() {

  const services = [
    { title: "YouTube Monetization", price: "₹4999", desc: "50K Subs • 5K WatchTime • 500K Views" },
    { title: "Google Reviews", price: "₹499+", desc: "100–1750 Real Reviews" },
    { title: "Thumbnail Design", price: "₹499", desc: "High CTR Professional Design" },
    { title: "Instagram Growth", price: "₹999+", desc: "Real Engagement Growth" },
    { title: "Song Promotion", price: "₹1499+", desc: "Music Reach & Promotion" },
  ];

  const testimonials = [
    "Amazing service, my channel growth improved fast.",
    "Professional work and quick delivery.",
    "Best monetization support I have seen.",
    "Highly recommended for creators."
  ];

  return (
    <div style={styles.body}>

      {/* NAV */}
      <div style={styles.nav}>
        <h2 style={styles.logo}>TheSocialExpert</h2>
        <a href="https://wa.me/918962007547" style={styles.btn}>Contact</a>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Grow Your Digital Presence 🚀</h1>
        <p style={styles.subtitle}>
          YouTube Monetization • Instagram Growth • Marketing Services
        </p>
        <a href="https://wa.me/918962007547" style={styles.btnBig}>
          Get Started
        </a>
      </div>

      {/* SERVICES */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Our Services</h2>

        <div style={styles.grid}>
          {services.map((s, i) => (
            <div key={i} style={styles.card}>
              <h3 style={{ color: "#4ea1ff" }}>{s.title}</h3>
              <p style={{ color: "#b8c0d9" }}>{s.desc}</p>
              <h2>{s.price}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div style={{ ...styles.section, background: "#0b1020" }}>
        <h2 style={styles.heading}>Customer Testimonials</h2>

        <div style={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} style={styles.card}>
              <p style={{ color: "#ddd", lineHeight: "26px" }}>
                “{t}”
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* REFUND POLICY */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Refund Policy</h2>

        <div style={styles.policyBox}>
          <p>• Refund requests are reviewed carefully.</p>
          <p>• It will take 7–10 working days to process your refund.</p>
          <p>• Fake claims or misuse will not be entertained.</p>
          <p>• Amount is non-refundable in case of fake or invalid claims.</p>
        </div>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        © 2026 TheSocialExpert • All Rights Reserved
      </div>

    </div>
  );
}

const styles = {
  body: {
    fontFamily: "Arial",
    background: "#050814",
    color: "white",
    minHeight: "100vh"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 25px",
    borderBottom: "1px solid #1b2335"
  },
  logo: { color: "#4ea1ff" },
  btn: {
    background: "#4ea1ff",
    color: "black",
    padding: "10px 15px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: "bold"
  },
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    background: "radial-gradient(circle at top, #12203a, #050814)"
  },
  title: { fontSize: 48 },
  subtitle: { color: "#b8c0d9", marginTop: 10 },
  btnBig: {
    display: "inline-block",
    marginTop: 20,
    background: "#4ea1ff",
    padding: "14px 22px",
    borderRadius: 12,
    color: "black",
    textDecoration: "none",
    fontWeight: "bold"
  },
  section: {
    padding: "60px 20px"
  },
  heading: {
    textAlign: "center",
    color: "#4ea1ff",
    marginBottom: 40
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 20,
    maxWidth: 1000,
    margin: "auto"
  },
  card: {
    background: "#0f1628",
    padding: 20,
    borderRadius: 15,
    border: "1px solid #1c2233"
  },
  policyBox: {
    maxWidth: 800,
    margin: "auto",
    background: "#0f1628",
    padding: 25,
    borderRadius: 15,
    border: "1px solid #1c2233",
    lineHeight: "28px"
  },
  footer: {
    textAlign: "center",
    padding: 25,
    borderTop: "1px solid #1c2335",
    color: "#777"
  }
};
