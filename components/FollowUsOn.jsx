import React from "react";

const FollowUsOn = () => {
  return (
    <div
      style={{
        padding: "90px 8%",
        background: "linear-gradient(to bottom, #ffffff, #faf7f2)",
        textAlign: "center",
      }}
    >
      {/* HEADER */}
      <p
        style={{
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#c6a86b",
          fontSize: "13px",
          marginBottom: "12px",
        }}
      >
        Stay Connected
      </p>

      <h2
        style={{
          fontSize: "34px",
          fontWeight: 700,
          color: "#111",
          marginBottom: "16px",
        }}
      >
        Follow Our Saree Journey
      </h2>

      <p
        style={{
          maxWidth: "520px",
          margin: "0 auto 40px",
          color: "#666",
          lineHeight: "1.7",
        }}
      >
        Discover new arrivals, weaving stories, customer looks, and exclusive
        collections by following us on social media.
      </p>

      {/* SOCIAL BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "28px",
          flexWrap: "wrap",
        }}
      >
        {/* INSTAGRAM CARD */}
        <a
          href="https://www.instagram.com/ramdhenumekhlachadarcollectios?igsh=MTJiZzQ3bGVyb3FjbA=="
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "160px",
            height: "160px",
            borderRadius: "10px",
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
            color: "#fff",
            textDecoration: "none",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-6px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0px)")
          }
        >
          <div style={{ fontSize: "42px", marginBottom: "10px" }}>📷</div>
          <strong>Instagram</strong>
        </a>

        {/* FACEBOOK CARD */}
        <a
          href="https://www.facebook.com/ramdhenumekhlachadarcollections"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "160px",
            height: "160px",
            borderRadius: "10px",
            background: "#1877f2",
            color: "#fff",
            textDecoration: "none",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-6px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0px)")
          }
        >
          <div style={{ fontSize: "42px", marginBottom: "10px" }}>👍</div>
          <strong>Facebook</strong>
        </a>
      </div>
    </div>
  );
};

export default FollowUsOn;
