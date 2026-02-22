import React from "react";
import { Product, HeroBanner, Footer } from "../components/index.js";
import { client } from "../utils/urlGenerator.js";
import Categories from "@/components/Categories.jsx";
import FollowUsOn from "@/components/FollowUsOn.jsx";
import AboutUs from "@/components/AboutUs.jsx";

const Home = ({ products = [], bannerData = [] }) => {
  const hero = bannerData?.length ? bannerData[0] : null;

  return (
    <>
      {/* HERO */}
      {hero && <HeroBanner heroBanner={hero} />}

      {/* CATEGORIES HEADING */}
      <section
        style={{
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "30px",
          padding: "0 20px",
        }}
      ></section>

      <Categories />

      {/* ABOUT US */}
      <section
        id="aboutus"
        style={{
          marginTop: "70px",
          padding: "0 20px",
          maxWidth: "1100px",
          marginInline: "auto",
        }}
      >
        <AboutUs />
      </section>

      {/* CONTACT US */}
      <section
        id="contactus"
        style={{
          marginTop: "110px",
          padding: "0 20px",
        }}
      >
        {/* TITLE */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "2.4rem",
              marginBottom: "10px",
              fontWeight: "600",
              letterSpacing: "0.4px",
            }}
          >
            Contact Us
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "1.05rem",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Have questions about our collections or need help placing an order?
            We’re happy to assist you.
          </p>
        </div>

        {/* CARD */}
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "40px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 18px 45px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          {/* INFO BLOCK */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              fontSize: "1.05rem",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <strong style={{ minWidth: "80px", color: "#111" }}>
                Owner:
              </strong>
              <span style={{ color: "#555" }}>Ajoy Dey</span>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <strong style={{ minWidth: "80px", color: "#111" }}>
                Email:
              </strong>
              <span style={{ color: "#555" }}>ajoy.dey306@gmail.com</span>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <strong style={{ minWidth: "80px", color: "#111" }}>
                Phone:
              </strong>
              <span style={{ color: "#555" }}>+91 8876385120</span>
            </div>
          </div>

          {/* CTA AREA */}
          <div style={{ marginTop: "15px" }}>
            <a
              href="https://wa.me/918876385120"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                background: "linear-gradient(135deg,#25D366,#1DA851)",
                color: "#fff",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                textDecoration: "none",
                boxShadow: "0 10px 22px rgba(37,211,102,0.25)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 14px 28px rgba(37,211,102,0.35)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 10px 22px rgba(37,211,102,0.25)";
              }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FollowUsOn />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products: products || [],
      bannerData: bannerData || [],
    },
  };
};

export default Home;
