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

  // Check screen size on load and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Navbar Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          borderBottom: "1px solid #ddd",
          backgroundColor: "#fff",
        }}
      >
        {/* Logo */}
        <Link href="/" passHref>
          <a style={{ display: "flex", alignItems: "center" }}>
            <div style={{ height: "80px", width: "80px" }}>
              <Image
                src="/asset/Logo.jpg"
                alt="Logo"
                layout="responsive"
                width={60}
                height={60}
                priority
              />
            </div>
          </a>
        </Link>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "30px",
              fontSize: "18px", // Larger font size
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
            }}
          >
            <Link href="/" passHref>
              <a style={{ textDecoration: "none", color: "#3A1212" }}>Home</a>
            </Link>

            <Link href="#contactus" passHref>
              <a style={{ textDecoration: "none", color: "#3A1212" }}>
                Contact Us
              </a>
            </Link>
            <a href="#aboutus">
              <a style={{ textDecoration: "none", color: "#3A1212" }}>
                About Us
              </a>
            </a>
            <button
              className="cart-icon"
              onClick={() => setShowCart(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                position: "relative",
                fontSize: "24px",
              }}
            >
              <AiOutlineShopping />
              <span
                className="cart-item-qty"
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  backgroundColor: "#FF2625",
                  color: "#fff",
                  borderRadius: "50%",
                  padding: "0 5px",
                  fontSize: "12px",
                }}
              >
                {totalQuantities}
              </span>
            </button>
          </div>
        )}

        {/* Mobile View: Cart and Hamburger Menu */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {/* Hamburger Menu Icon */}
            <div
              style={{
                fontSize: "28px", // Larger hamburger icon
                cursor: "pointer",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </div>

            {/* Cart Icon */}
            <button
              className="cart-icon"
              onClick={() => setShowCart(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                position: "relative",
                fontSize: "24px",
              }}
            >
              <AiOutlineShopping />
              <span
                className="cart-item-qty"
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  backgroundColor: "#FF2625",
                  color: "#fff",
                  borderRadius: "50%",
                  padding: "0 5px",
                  fontSize: "12px",
                }}
              >
                {totalQuantities}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Navigation Links */}
      {menuOpen && isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "60px",
            left: "0",
            backgroundColor: "#fff",
            width: "100%",
            zIndex: 10,
            borderTop: "1px solid #ddd",
          }}
        >
          <Link href="/" passHref>
            <a
              style={{
                padding: "15px 30px",
                textDecoration: "none",
                color: "#3A1212",
                borderBottom: "1px solid #ddd",
                fontSize: "18px", // Larger font size for mobile
              }}
            >
              Home
            </a>
          </Link>
          <Link href="/book-services" passHref>
            <a
              style={{
                padding: "15px 30px",
                textDecoration: "none",
                color: "#3A1212",
                borderBottom: "1px solid #ddd",
                fontSize: "18px", // Larger font size for mobile
              }}
            >
              Book Services
            </a>
          </Link>
          <Link href="#contactus" passHref>
            <a
              style={{
                padding: "15px 30px",
                textDecoration: "none",
                color: "#3A1212",
                borderBottom: "1px solid #ddd",
                fontSize: "18px", // Larger font size for mobile
              }}
            >
              Contact Us
            </a>
          </Link>
          <Link href="#aboutus" passHref>
            <a
              style={{
                padding: "15px 30px",
                textDecoration: "none",
                color: "#3A1212",
                borderBottom: "1px solid #ddd",
                fontSize: "18px", // Larger font size for mobile
              }}
            >
              About Us
            </a>
          </Link>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
