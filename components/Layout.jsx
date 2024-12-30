import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
/*
   -><Head> contains the title name
   ->The header contains the navbar
   ->The main component contains the body
   ->The footer contains the footer banner etc
 */
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Saree Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      {
        //children is mainly the index.js file passed into "Components" component
      }
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
