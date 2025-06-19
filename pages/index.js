import React from 'react';
import {Product,HeroBanner,Footer} from '../components/index.js';
import {client} from '../sanity-backend/lib/client.js';//importing client info
//In next.js,unlike react.js,we use something called getServerSideProps for server side rendering.next.js will pre render this page on each request using the data returned by getServerSideProps
import Categories from '@/components/Categories.jsx';
import FollowUsOn from '@/components/FollowUsOn.jsx';
import AboutUs from '@/components/AboutUs.jsx';
const Home = ({products,bannerData}) => {
  let unique_products=[];
  for(let i=0;i<products.length;i=i+2){
    unique_products.push(products[i]);
 }
  return (
 <>
 <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
 {/* If first statement is true,then pass the second one as a prob*/}
 <div className="products-heading">
  <h2>Categories</h2>
  <p>
    Explore the variety of our collections
  </p>
 </div>
   <Categories />
   <div className="products-heading" id="aboutus">
      <h2
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}
      >
        About Us
      </h2>
      <div
        className="about-us-container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          src="/asset/aboutus/abtUs.jpg"
          className="about-us"
          alt="About Us"
          style={{ width: "300px", height: "auto", borderRadius: "8px" }}
        />
        <div
          className="about-us-content"
          style={{ maxWidth: "500px", textAlign: "left" }}
        >
          <p
            className="about-us-text"
            style={{ fontSize: "1rem", lineHeight: "1.5", color: "#333" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button
            className="learn-more-btn"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
    <div className="products-heading" id="contactus">
  <h2
    className="contact-us-title"
    style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}
  >
    Contact Us
  </h2>

  <div
    className="contact-us-container"
    style={{
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
      textAlign: "left",
    }}
  >
    <p style={{ marginBottom: "10px", fontSize: "1rem", color: "#333" }}>
      <strong>Owner:</strong> Owner's name
    </p>
    <p style={{ marginBottom: "10px", fontSize: "1rem", color: "#333" }}>
      <strong>Email:</strong> ajoy.dey306@gmail.com
    </p>
    <p style={{ marginBottom: "20px", fontSize: "1rem", color: "#333" }}>
      <strong>Phone:</strong> +91 XXXXXXXXXX
    </p>

    <a
      href="https://wa.me/919804462235"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        padding: "10px 24px",
        backgroundColor: "#25D366",
        color: "#fff",
        borderRadius: "4px",
        fontSize: "1rem",
        fontWeight: "500",
        textDecoration: "none",
        transition: "background-color 0.3s ease",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#1DA851")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#25D366")}
    >
      Chat on WhatsApp
    </a>
  </div>
</div>

   <FollowUsOn />
 </>
  )
}
//whatever the following function returns is gonna get populated into our Home function via props
export const getServerSideProps=async()=>{
  const query='*[_type=="product"]';//lets grab all the products from our sanity dashboard
  const products=await client.fetch(query);//client is that one object that we had already defined earlier  
  
  const bannerQuery='*[_type=="banner"]';//lets grab all the products from our sanity dashboard
  const bannerData=await client.fetch(bannerQuery);
  return {
    props:{
      products,
      bannerData,
    }
  }
}
export default Home;
