import React from "react";
import Head from "next/head";

const FollowUsOn = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to bottom, #eaeaea, #ffffff)",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    maxWidth: "420px",
    margin: "40px auto",
  };

  const titleStyle = {
    fontSize: "2rem",
    color: "#222",
    marginBottom: "25px",
    fontWeight: "600",
  };

  const buttonsContainerStyle = {
    display: "flex",
    gap: "25px",
  };

  const baseButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    textDecoration: "none",
    fontSize: "2.2rem",
    color: "#fff",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  };

  const instagramStyle = {
    ...baseButtonStyle,
    background:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
  };

  const facebookStyle = {
    ...baseButtonStyle,
    backgroundColor: "#1877f2",
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.15)";
    e.target.style.boxShadow = "0 10px 16px rgba(0, 0, 0, 0.25)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
  };

  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Follow Us On</h2>
        <div style={buttonsContainerStyle}>
          <a
            href="https://www.instagram.com/ramdhenumekhlachadarcollectios?igsh=MTJiZzQ3bGVyb3FjbA=="
            target="_blank"
            rel="noopener noreferrer"
            style={instagramStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/ramdhenumekhlachadarcollections"
            target="_blank"
            rel="noopener noreferrer"
            style={facebookStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default FollowUsOn;
