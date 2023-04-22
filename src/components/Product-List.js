import React from "react";
import ProductCard from "./Product-Card";

//display a list of products - each rendered using the product card component

const ProductList = ({ product, onProductSelect, onProductDetails }) => {
  // console.log(product);
    return (
      <div className="product-list">
            <div className="product-card-list">
                <ProductCard 
                  product={product} 
                  onProductSelect={onProductSelect} 
                  onProductDetails={onProductDetails} 
                />
            </div>
      </div>
    );
};

export default ProductList;