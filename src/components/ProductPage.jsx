import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { ProductDetails } from ".";

import { callAPI } from "../utils/CallApi";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = useCallback(() => {
    callAPI(`/data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  if (!product?.title) return <h1>Loading Product ...</h1>;

  return (
    product && (
      <div className="h-screen bg-amazonclone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto bg-orange-500">
          <div className="grid grid-cols-10 gap-2">
            {/* 왼 */}
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} alt="사진" />
            </div>
            {/* 중 */}
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-3">
                {product.description}
              </div>
            </div>
            {/* 오 */}
            <div className="col-span-2 p-4 rounded bg-white">
              <div>{product.price}</div>
              <div>{product.oldPrice}</div>
              <div>FREE Returns</div>
              <div>FREE Delivery</div>
              <div>In Stock</div>
              <div>
                Quantity :
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
