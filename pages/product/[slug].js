import React,{useState} from 'react';
//[] around 'slug' makes it dynamic and thats why it has to be accessed in Products.js Link as 'href={`/products/${slug.current}`}'
//unlike in React.js, Next.js does file based routing 
import { Product } from '@/components';
import { client,urlFor } from '../../utils/urlGenerator.js';
import {AiOutlineMinus,AiOutlinePlus,AiFillStar,AiOutlineStar} from 'react-icons/ai';
import {useStateContext} from '../../context/StateContext';
//can use the context within stateContext
//the ProductDetails come directly as a page,it is not imported as a component in any other file
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu';
import {toast} from 'react-hot-toast';
const ProductDetails = ({ product, products }) => {
  
  // Check if the product data exists
  if (!product) {
    return <div>Product not found</div>;
  }
  
  const { image, name, details, price,category } = product;
  const [index,setIndex]=useState(0);
  const [local_qty,setLocal_qty]=useState(0);
  const {onAdd}=useStateContext();
 const handleWhatsAppRedirect = () => {
    const phoneNumber = 919804462235;
    const total=local_qty*product.price;
    const message = `Hello! I am interested in purchasing:
 ${local_qty==0?1:local_qty} piece${local_qty>1?'s':''} of ${product.name} for Rs.${local_qty==0?product.price : total}
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
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
          <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
           <div className="small-images-container">
           {image?.map((item,i)=>(<img src={urlFor(item)} className={i===index? 'small-image selected-image':'small-image' } onMouseEnter={()=>{setIndex(i)}} />))}
          </div> 
        </div>
        <div className="product-detail-desc">
         <h1>{name}</h1>
         <div className="reviews">
          <div>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          </div>
          <p>
            (20)
          </p>
         </div>
         <h4>Details:</h4>
         <p>{details}</p>
         <p className="price">Rs.{price}</p>
         <div className="quantity">

          <h3>Quantity:</h3>
          <p className="quantity-desc">
            <span className="minus" onClick={()=>{if(local_qty>0) setLocal_qty(prev=>prev-1);}} >
            <AiOutlineMinus />
            </span>
            <span className="num" onClick="">
            {local_qty}
            </span>
            <span className="plus" onClick={()=>{setLocal_qty(prev=>prev+1);}}>
            <AiOutlinePlus />
            </span>
          </p>
         </div>
         <div className="buttons">
          <button type="button" className="add-to-cart" onClick={()=>{
            if(local_qty==0)  
             {onAdd(product,1);}
         else
          {onAdd(product,local_qty); setLocal_qty(0);}}}>Add to Cart</button>
          <button type="button" className="buy-now"  onClick={() => {
   handleWhatsAppRedirect();
  }}>Buy Now</button>
         </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};











//go to getStaticPaths docs and see details about this 
export const getStaticPaths=async()=>{
  const query=`*[_type=="product"]
  { slug{
   current}
  }
  `;
  const products=await client.fetch(query);
  const paths=products.map((product)=>({
    params : {
      slug : product.slug.current
    }
  }));
return {
  paths,
  fallback:'blocking'
}
}
//this means that,give me all the products,dont return all of the data for all the products,just return the current slug property
export const getStaticProps=async({params : {slug}})=>{
  const query=`*[_type=="product" && slug.current=='${slug}'][0]`;// at 0th index because this is going to be the first product that matches the query
  const productsQuery='*[_type=="product"]'
  const product=await client.fetch(query);//client is that one object that we had already defined earlier  
  const products=await client.fetch(productsQuery);
 
  return {
    props:{
      products,
      product,
    }
  }
}
export default ProductDetails;
