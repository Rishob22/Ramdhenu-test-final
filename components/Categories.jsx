import React from "react";
import Link from "next/link";
const Categories = () => {
  const arr = [
    "Pure Paat",
    "Pure Toss",
    "Handmade Mixed Paat",
    "Pure Cotton",
    "Cotton Silk",
    "Demaji Padmini",
    "Nooni Cotton",
    "Kesapaat Cotton",
    "Assam Silk Saree",
    "Assam Silk Replica Saree",
    "Cotton Assameese Saree",
    "Others",
  ];
  return (
    <div className="products-container" id="shopnow">
      {arr.map((category) => (
        <div>
          <Link href={`/display/${category}`}>
            {/* We dont have a category.current like in slug.current because category is a string and hence we can write directly
            
            */}
            <div className="product-card">
              <img
                src={`/asset/display/${category}.jpg`}
                width={250}
                height={250}
                className="product-image"
              />
              <center>
                <p className="product-name">{category}</p>
              </center>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
