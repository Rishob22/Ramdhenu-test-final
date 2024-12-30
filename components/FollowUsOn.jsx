import React from "react";
import Head from "next/head";

const FollowUsOn = () => {
  // Inline styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to bottom, #d3d3d3, #ffffff)",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "400px",
    margin: "auto",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "20px",
  };

  const buttonsContainerStyle = {
    display: "flex",
    gap: "20px",
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70px",
    height: "70px",
    backgroundColor: "#f0f0f0",
    borderRadius: "50%",
    textDecoration: "none",
    fontSize: "2rem",
    color: "#666",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const hoverEffect = {
    transform: "scale(1.1)",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
  };

  const instagramStyle = {
    ...buttonStyle,
    backgroundColor: "#e4405f",
    color: "#fff",
  };

  const facebookStyle = {
    ...buttonStyle,
    backgroundColor: "#4267b2",
    color: "#fff",
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
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={instagramStyle}
            onMouseEnter={(e) =>
              (e.target.style.transform = hoverEffect.transform)
            }
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={facebookStyle}
            onMouseEnter={(e) =>
              (e.target.style.transform = hoverEffect.transform)
            }
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default FollowUsOn;
