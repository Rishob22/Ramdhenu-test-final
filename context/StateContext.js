import React,{createContext,useContext,useState,useEffect} from 'react';
import {toast} from 'react-hot-toast';
const Context=createContext();
export const StateContext=({children})=>{
const [showCart,setShowCart]=useState(false);//are we currently showing the cart in the side or not
const [cartItems,setCartItems]=useState([]);
const [totalPrice,setTotalPrice]=useState(0);
const [totalQuantities,setTotalQuantities]=useState(0);
const [qty,setQty]=useState(1);
let foundProduct;
let index; 
const onAdd=(product,quantity)=>{
  //quantity is the net quantity of the latest added product
   const checkProductInCart=cartItems.find((item)=>item._id===product._id);//check if the item which is about to be added to the cart is alredy in the cart 
   setTotalPrice((prevTotalPrice)=>prevTotalPrice+product.price * quantity);
   setTotalQuantities(prevTotalQuantities=>prevTotalQuantities+quantity); 
   if(checkProductInCart){
    let updatedCartItems=cartItems.map((cartProduct)=>{
      if(cartProduct._id==product._id) 
        return {
      ...cartProduct,
      quantity: cartProduct.quantity+quantity
    }
    });
    setCartItems(updatedCartItems);

   }//end of if block
   else{
    product.quantity=quantity;
    setCartItems([...cartItems,{...product}]);
    //In the array,we spread the existing cart items and then we have the object where we spread the new product
   }//end of else block
   toast.success(`${qty} ${product.name} added to the cart.`);
   setQty(1);
}
const onRemove=(id,removed_price,removed_quantity)=>{
   setTotalPrice((prevTotalPrice)=>prevTotalPrice-removed_price*removed_quantity);
   setTotalQuantities(prevTotalQuantities=>prevTotalQuantities-removed_quantity);
   const removedCartItems=cartItems.filter((item)=>item._id!=id);
   setCartItems(removedCartItems);
}
const toggleCartItemQuantity=(id,value)=>{
   const foundProduct=cartItems.find((item)=>item._id===id);
   const newCartItems=cartItems.filter((item)=>item._id!=id);
   //take care not to mutate the original state directly in react
   if(value==='inc') {
    
     setCartItems([...newCartItems,{...foundProduct,quantity:foundProduct.quantity+1}]);
     setTotalPrice((prevTotalPrice)=>prevTotalPrice+foundProduct.price);
     //Observe I can catch the current price in the argument of the callback function
     setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities+1);
        }
   else if(value==='dec'){
    if(foundProduct.quantity>1){
    setCartItems([...newCartItems,{...foundProduct,quantity:foundProduct.quantity-1}]);
     setTotalPrice((prevTotalPrice)=>prevTotalPrice-foundProduct.price);
     setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities-1);
    }
   }
   //we cannot lower the quantity if its 1,because delete option plays 
}
const incQty=()=>{
  setQty((prevQty)=> prevQty+1); 
}
const decQty=()=>{
  setQty((prevQty)=> {
    if(prevQty-1<1) return 1;
    return prevQty-1;
  }); 
}
return(
  <Context.Provider
  value={{
    showCart,
    setShowCart,
    cartItems,
    setCartItems,
    totalPrice,
    setTotalPrice,
    totalQuantities,
    setTotalQuantities,
    qty,
    setQty,
    incQty,
    decQty,
    onAdd,
    toggleCartItemQuantity,
    onRemove,
  }}  >
    {children}
  </Context.Provider>
);
}
export const useStateContext=()=>{
 return useContext(Context);//instd of using useContext in every function,u just export this function and use this function directly to use the context
}
//fn that exports the context