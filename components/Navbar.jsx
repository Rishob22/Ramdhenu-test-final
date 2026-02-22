import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";
import Cart from "./Cart";
import { useStateContext } from "@/context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinkStyle = {
    textDecoration: "none",
    color: "#3A1212",
    fontSize: "17px",
    fontWeight: "600",
    letterSpacing: "0.5px",
  };

  return (
    <>
      {/* NAVBAR */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 28px",
          backgroundColor: "#fff",
          borderBottom: "1px solid #eee",
          boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
        }}
      >
        {/* LOGO */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "70px" }}>
            <Image
              src="/asset/Logo.jpg"
              alt="Ramdhenu Sarees"
              width={70}
              height={70}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            <Link href="/" style={navLinkStyle}>
              Home
            </Link>
            <Link href="/#aboutus" style={navLinkStyle}>
              About Us
            </Link>
            <Link href="/#contactus" style={navLinkStyle}>
              Contact
            </Link>

            {/* CART */}
            <button
              onClick={() => setShowCart(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                position: "relative",
                fontSize: "26px",
                color: "#111",
              }}
            >
              <AiOutlineShopping />
              {totalQuantities > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-6px",
                    right: "-8px",
                    background: "#FF2625",
                    color: "#fff",
                    borderRadius: "50%",
                    fontSize: "11px",
                    padding: "2px 6px",
                    fontWeight: "600",
                  }}
                >
                  {totalQuantities}
                </span>
              )}
            </button>
          </div>
        )}

        {/* MOBILE RIGHT SIDE */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            {/* CART */}
            <button
              onClick={() => setShowCart(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                position: "relative",
                fontSize: "26px",
              }}
            >
              <AiOutlineShopping />
              {totalQuantities > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-6px",
                    right: "-8px",
                    background: "#FF2625",
                    color: "#fff",
                    borderRadius: "50%",
                    fontSize: "11px",
                    padding: "2px 6px",
                    fontWeight: "600",
                  }}
                >
                  {totalQuantities}
                </span>
              )}
            </button>

            {/* HAMBURGER */}
            <div
              style={{ fontSize: "28px", cursor: "pointer" }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </div>
          </div>
        )}
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && isMobile && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            background: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            borderTop: "1px solid #eee",
            zIndex: 40,
          }}
        >
          {[
            { name: "Home", link: "/" },
            { name: "About Us", link: "/#aboutus" },
            { name: "Contact", link: "/#contactus" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "18px 28px",
                fontSize: "17px",
                color: "#3A1212",
                textDecoration: "none",
                borderBottom: "1px solid #f1f1f1",
                fontWeight: "600",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* CART */}
      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
