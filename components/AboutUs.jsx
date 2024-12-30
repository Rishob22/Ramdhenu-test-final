const AboutUs = () => {
  return (
    <div className="products-heading">
      <h2
        className="about-us-title"
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}
      >
        About Us
      </h2>
      <div
        className="about-us-container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          src="/asset/aboutus/AboutUs.jpeg"
          className="about-us"
          alt="About Us"
          style={{ width: "300px", height: "auto", borderRadius: "8px" }}
        />
        <div
          className="about-us-content"
          style={{ maxWidth: "500px", textAlign: "left" }}
        >
          <p
            className="about-us-text"
            style={{ fontSize: "1rem", lineHeight: "1.5", color: "#333" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button
            className="learn-more-btn"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
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
