const AboutUs = () => {
  return (
    <div
      style={{
        padding: "90px 8%",
        background: "linear-gradient(to bottom, #ffffff, #faf7f2)",
      }}
    >
      {/* SECTION HEADER */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <p
          style={{
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#c6a86b",
            fontSize: "13px",
            marginBottom: "12px",
          }}
        >
          Our Story
        </p>

        <h2
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#111",
            marginBottom: "10px",
          }}
        >
          About Our Saree House
        </h2>

        <div
          style={{
            width: "70px",
            height: "3px",
            background: "#c6a86b",
            margin: "0 auto",
          }}
        />
      </div>

      {/* CONTENT AREA */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        {/* IMAGE SIDE */}
        <div style={{ position: "relative" }}>
          {/* Soft glow behind image */}
          <div
            style={{
              position: "absolute",
              width: "280px",
              height: "280px",
              background: "#efe3c9",
              borderRadius: "50%",
              filter: "blur(50px)",
              top: "20px",
              left: "20px",
              zIndex: 0,
            }}
          />

          <img
            src="/asset/aboutus/abtUs.jpg"
            alt="About Us"
            style={{
              width: "320px",
              maxWidth: "90vw",
              borderRadius: "10px",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 20px 45px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* TEXT SIDE */}
        <div style={{ maxWidth: "520px" }}>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555",
              marginBottom: "26px",
            }}
          >
            Ramdhenu Collection is a curated celebration of Assamese heritage
            and timeless craftsmanship, bringing you elegant handwoven textiles
            that embody culture, quality, and artistry. Inspired by the vibrant
            colors of the rainbow (“Ramdhenu”), our collection reflects a
            harmony of tradition and modern style. Each piece in the Ramdhenu
            Collection is thoughtfully chosen — from classic Mekhela Chadors and
            Assam Silk weaves to contemporary drapes that honor our roots while
            appealing to today’s fashion sensibilities. We respect the skill of
            artisans and the legacy of weaving traditions, offering fabrics that
            are rich in texture, comfortable in wear, and beautiful in expres
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555",
              marginBottom: "35px",
            }}
          >
            From everyday cotton classics to luxurious silk masterpieces, our
            mission is to offer sarees that make every woman feel graceful,
            confident, and connected to tradition.
          </p>

          <button
            style={{
              padding: "14px 32px",
              background: "#111",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              letterSpacing: "1px",
              borderRadius: "2px",
              boxShadow: "0px 12px 30px rgba(0,0,0,0.18)",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
