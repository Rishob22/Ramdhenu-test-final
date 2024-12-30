import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import Cart from "./Cart";
import { useStateContext } from "@/context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 40px",
          borderBottom: "1px solid #ccc",
        }}
      >
        {/* Logo */}
        <Link href="/" passHref>
          <a style={{ display: "flex", alignItems: "center" }}>
            <div style={{ height: "50px", width: "50px" }}>
              <Image
                src="/asset/Logo.png"
                alt="Logo"
                layout="responsive"
                width={28}
                height={28}
                priority
              />
            </div>
          </a>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
          }}
          className="menu-toggle"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          style={{
            display: menuOpen ? "flex" : "none",
            flexDirection: "column",
            position: "absolute",
            top: "60px",
            left: "0",
            width: "100%",
            backgroundColor: "#fff",
            padding: "10px 0",
            gap: "10px",
            zIndex: 1000,
          }}
          className="mobile-menu"
        >
          <Link href="/" passHref>
            <a
              style={{
                textDecoration: "none",
                color: "#3A1212",
                fontFamily: "'Playfair Display', serif",
                padding: "10px 20px",
                borderBottom: "1px solid #ccc",
                fontSize: "16px",
              }}
            >
              Home
            </a>
          </Link>

          <Link href="/book-services" passHref>
            <a
              style={{
                textDecoration: "none",
                color: "#3A1212",
                fontFamily: "'Playfair Display', serif",
                padding: "10px 20px",
                borderBottom: "1px solid #ccc",
                fontSize: "16px",
              }}
            >
              Book Services
            </a>
          </Link>

          <Link href="#contactus" passHref>
            <a
              style={{
                textDecoration: "none",
                color: "#3A1212",
                fontFamily: "'Playfair Display', serif",
                padding: "10px 20px",
                borderBottom: "1px solid #ccc",
                fontSize: "16px",
              }}
            >
              Contact Us
            </a>
          </Link>

          <Link href="#aboutus" passHref>
            <a
              style={{
                textDecoration: "none",
                color: "#3A1212",
                fontFamily: "'Playfair Display', serif",
                padding: "10px 20px",
                fontSize: "16px",
              }}
            >
              About Us
            </a>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
            fontSize: "16px",
            flex: "1",
            justifyContent: "center",
          }}
          className="desktop-menu"
        >
          <Link href="/" passHref>
            <a
              style={{
                textDecoration: "none",
                color: "#3A1212",
                fontFamily: "'Playfair Display', serif",
                borderBottom: "3px solid #FF2625",
                fontSize: "18px",
              }}
            >
              Home
            </a>
          </Link>

          <Link href="/book-services" passHref>
            <a
              style={{
                textDecoration: "none",
                color: "#3A1212",
                fontFamily: "'Playfair Display', serif",
                fontSize: "18px",
              }}
            >
              Book Services
            </a>
          </Link>

          <Link href="#contactus" passHref>
            <a
              style={{
                textDecoration: "none",
                color: "#3A1212",
                fontFamily: "'Playfair Display', serif",
                fontSize: "18px",
              }}
            >
              Contact Us
            </a>
          </Link>

          <Link href="#aboutus" passHref>
            <a
              style={{
                textDecoration: "none",
                color: "#3A1212",
                fontFamily: "'Playfair Display', serif",
                fontSize: "18px",
              }}
            >
              About Us
            </a>
          </Link>
        </div>

        {/* Cart Icon */}
        <button
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

      {/* Cart Modal */}
      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
