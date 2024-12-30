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
   <AboutUs />
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
