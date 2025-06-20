import React from "react";
import Link from "next/link";
import { urlFor } from "../utils/urlGenerator.js";
const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        {
          //slug's first substring is the category and the remaining part is unique to a product of that category
          //current represents the url friendly part of the slug like saree-number-01
        }
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">Rs.{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
