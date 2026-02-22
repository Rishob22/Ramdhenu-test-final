import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "../utils/urlGenerator.js";

const Cart = () => {
  const cartRef = useRef();

  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleWhatsAppRedirect = () => {
    const phoneNumber = 918876385120;
    const message = `Hello! I am interested in purchasing:
${cartItems
  .map(
    (item) =>
      `${item.name} x ${item.quantity} = Rs.${item.price * item.quantity}`,
  )
  .join("\n")}
Total: Rs.${totalPrice}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div
      ref={cartRef}
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "420px",
        maxWidth: "100%",
        height: "100vh",
        background: "#fff",
        boxShadow: "-10px 0 40px rgba(0,0,0,0.15)",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        zIndex: 9999,
      }}
    >
      {/* HEADER */}
      <button
        onClick={() => setShowCart(false)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          border: "none",
          background: "none",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: 600,
          marginBottom: "25px",
        }}
      >
        <AiOutlineLeft />
        Your Cart ({totalQuantities})
      </button>

      {/* EMPTY CART */}
      {cartItems.length < 1 && (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "20px",
          }}
        >
          <AiOutlineShopping size={120} color="#ddd" />
          <h3 style={{ color: "#555" }}>Your shopping bag is empty</h3>
          <Link href="/">
            <button
              onClick={() => setShowCart(false)}
              style={{
                padding: "12px 26px",
                background: "#111",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                borderRadius: "2px",
              }}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}

      {/* ITEMS LIST */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {cartItems.map((item) => (
          <div
            key={item._id}
            style={{
              display: "flex",
              gap: "16px",
              padding: "16px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <img
              src={urlFor(item?.image[0])}
              alt={item.name}
              style={{
                width: "80px",
                height: "90px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />

            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                }}
              >
                <h5 style={{ margin: 0 }}>{item.name}</h5>
                <strong>Rs.{item.price}</strong>
              </div>

              {/* QUANTITY CONTROLS */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                >
                  <button
                    onClick={() => toggleCartItemQuantity(item._id, "dec")}
                    style={{
                      padding: "6px 10px",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    <AiOutlineMinus />
                  </button>

                  <span style={{ padding: "0 12px" }}>{item.quantity}</span>

                  <button
                    onClick={() => toggleCartItemQuantity(item._id, "inc")}
                    style={{
                      padding: "6px 10px",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>

                <button
                  onClick={() => onRemove(item._id, item.price, item.quantity)}
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    color: "#c00",
                    fontSize: "20px",
                  }}
                >
                  <TiDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER TOTAL + CTA */}
      {cartItems.length > 0 && (
        <div style={{ paddingTop: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "18px",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            <span>Subtotal</span>
            <span>Rs.{totalPrice}</span>
          </div>

          <button
            onClick={handleWhatsAppRedirect}
            style={{
              width: "100%",
              padding: "16px",
              background: "#111",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              letterSpacing: "1px",
              borderRadius: "2px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          >
            Order on WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
