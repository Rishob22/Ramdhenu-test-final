import React from "react";
import Link from "next/link";

const Categories = () => {
  const arr = [
    "Pure Paat",
    "Pure Toss",
    "Handmade Mixed Paat",
    "Pure Cotton",
    "Cotton Silk",
    "Demaji Padmini",
    "Nooni Cotton",
    "Kesapaat Cotton",
    "Assam Silk Saree",
    "Assam Silk Replica Saree",
    "Cotton Assameese Saree",
    "Jewellery",
    "Others",
  ];

  return (
    <div
      id="shopnow"
      style={{
        padding: "80px 8%",
        background: "#ffffff",
      }}
    >
      {/* SECTION HEADER */}
      <div style={{ marginBottom: "50px", textAlign: "center" }}>
        <p
          style={{
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#c6a86b",
            fontSize: "13px",
            marginBottom: "10px",
          }}
        >
          Browse Collection
        </p>

        <h2
          style={{
            fontSize: "34px",
            fontWeight: 700,
            color: "#111",
            marginBottom: "10px",
          }}
        >
          Shop By Category
        </h2>

        <div
          style={{
            width: "60px",
            height: "3px",
            background: "#c6a86b",
            margin: "0 auto",
          }}
        />
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "28px",
        }}
      >
        {arr.map((category, index) => (
          <Link key={index} href={`/display/${category}`}>
            <div
              style={{
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                borderRadius: "6px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                background: "#faf7f2",
                transition: "transform 0.3s ease",
              }}
            >
              {/* IMAGE */}
              <img
                src={`/asset/display/${category}.jpg`}
                alt={category}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* OVERLAY */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.1))",
                }}
              />

              {/* CATEGORY NAME */}
              <div
                style={{
                  position: "absolute",
                  bottom: "18px",
                  left: "18px",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "18px",
                  letterSpacing: "0.5px",
                }}
              >
                {category}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
