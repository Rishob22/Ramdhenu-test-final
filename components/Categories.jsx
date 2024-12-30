import React from "react";
import Link from "next/link";
const Categories = () => {
  const arr = ["Jewellery", "Silk", "Cotton", "Banarasi", "Dhakai", "Muslin"];
  return (
    <div className="products-container">
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
