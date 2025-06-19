import React from 'react'
//like the component in [slug].js,the component in [category].js will also be rendered as a page,it will not be called within any element or file
import { client } from '../../sanity-backend/lib/client';
import { Product } from '@/components';
import { useRouter } from 'next/router';
const DisplayCategory = ({products}) => {
  const router = useRouter();
  const { category } = router.query;
  return (<>
  <center><h2>{category}</h2></center>
  <div className="products-container">
 {
 products?.map((product)=>category==product.category && <Product product={product} key={product._id} />)
 }
 </div>
  </>
    
  )
}
export const getServerSideProps=async()=>{
  const query='*[_type=="product"]';//lets grab all the products from our sanity dashboard
  const products=await client.fetch(query);//client is that one object that we had already defined earlier  
 
  
  return {
    props:{
      products,
    }
  }
}
export default DisplayCategory;
