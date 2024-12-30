import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "../sanity-backend/lib/client";
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
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
    const message = `Hello! I am interested in purchasing:
    ${cartItems.map(
      (item) =>
        `${item.name}X${item.quantity} = Rs.${item.price}x${item.quantity}=Rs.${
          item.price * item.quantity
        },
        
      `
    )}   ,
    Total cart price is Rs.${totalPrice} 
    `;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Detect if it's mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Opens in WhatsApp mobile app
      window.location.href = url;
    } else {
      // For desktops, attempt to open WhatsApp Desktop or Web
      const desktopUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
      window.location.href = desktopUrl;

      // Fallback if desktop URL fails
      if (!isMobile) {
        setTimeout(() => {
          window.open(url, "_blank"); // Redirect to web version
        }, 4000);
      }
    }
  };
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => {
            setShowCart(false);
          }}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>Rs.{item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num" onClick="">
                          {item.quantity}
                        </span>
                        <span
                          className="plus"
                          onClick={() => {
                            toggleCartItemQuantity(item._id, "inc");
                          }}
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => {
                        onRemove(item._id, item.price, item.quantity);
                      }}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                  {cartItems.length >= 1 && (
                    <div className="cart-bottom">
                      <div className="total">
                        <h3>Subtotal:</h3>
                        <h3>Rs.{totalPrice}</h3>
                      </div>
                      <div className="btn-container">
                        <button
                          type="button"
                          className="btn"
                          onClick={handleWhatsAppRedirect}
                        >
                          Order on WhatsApp
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
