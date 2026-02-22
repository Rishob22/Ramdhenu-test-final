import React from "react";
import Link from "next/link";
import { urlFor } from "../utils/urlGenerator.js";

const HeroBanner = ({ heroBanner }) => {
  // 🛑 Prevent crash if data not loaded yet
  if (!heroBanner) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "70px 8%",
        background:
          "linear-gradient(120deg, #f8f3ea 0%, #faf7f2 40%, #ffffff 100%)",
        minHeight: "75vh",
        flexWrap: "wrap",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* GOLD DECOR STRIP */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "20%",
          width: "6px",
          height: "120px",
          background: "#c6a86b",
          borderRadius: "4px",
        }}
      />

      {/* LEFT TEXT */}
      <div style={{ maxWidth: "520px", zIndex: 2 }}>
        <p
          style={{
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#c6a86b",
            fontSize: "13px",
            marginBottom: "12px",
            fontWeight: 500,
          }}
        >
          {heroBanner.smallText || ""}
        </p>

        <h3
          style={{
            fontWeight: 400,
            color: "#666",
            marginBottom: "8px",
            fontSize: "20px",
          }}
        >
          {heroBanner.midText || ""}
        </h3>

        <h1
          style={{
            fontSize: "56px",
            fontWeight: 700,
            marginBottom: "18px",
            color: "#111",
            lineHeight: "1.05",
          }}
        >
          {heroBanner.largeText1 || ""}
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
            lineHeight: "1.7",
            fontSize: "15px",
            maxWidth: "440px",
          }}
        >
          {heroBanner.desc || ""}
        </p>

        <Link href="/#shopnow">
          <button
            style={{
              padding: "15px 34px",
              background: "#111",
              color: "white",
              border: "none",
              cursor: "pointer",
              letterSpacing: "1px",
              fontSize: "14px",
              borderRadius: "2px",
              boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            {heroBanner.buttonText || "Shop Now"}
          </button>
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          zIndex: 2,
        }}
      >
        {heroBanner.image && (
          <>
            <div
              style={{
                position: "absolute",
                width: "380px",
                height: "380px",
                background: "#efe3c9",
                borderRadius: "50%",
                filter: "blur(60px)",
                zIndex: 0,
              }}
            />

            <img
              src={urlFor(heroBanner.image)}
              alt="Elegant saree collection"
              style={{
                width: "380px",
                maxWidth: "90vw",
                position: "relative",
                zIndex: 1,
                filter: "drop-shadow(0px 25px 40px rgba(0,0,0,0.18))",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
