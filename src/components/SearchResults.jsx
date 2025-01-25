import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { ProductDetails } from "./";
import { callAPI } from "../utils/CallApi";
import { GB_CURRENCY } from "../utils/constansts";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState(null);

  const getSearchResults = useCallback(() => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");
    callAPI(`data/search.json`).then((SearchResults) => {
      const categoryResults = SearchResults[category] || [];
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProduct(results);
      } else {
        setProduct(categoryResults);
      }
    });
  }, [searchParams]);

  useEffect(() => {
    getSearchResults();
  }, [getSearchResults]);

  return (
    <div className="min-w-[1200px] max-w-[1300px] m-auto pt-4">
      {product &&
        product.map((product, key) => {
          return (
            <Link key={key} to={`/product/${product.id}`}>
              <div className="h-[260px] grid grid-cols-12 rounded mt-1 mb-1 bg-purple-500">
                <div className="col-span-2 p-4 bg-gray-200">
                  <img
                    className="m-auto"
                    src={product.image_small}
                    alt={product.title}
                  />
                </div>
                <div className="col-span-10 bg-gray-50 border-gray-100 hover:bg-gray-100">
                  <div className="font-medium text-black p-2">
                    <ProductDetails product={product} ratings={true} />
                    <div className="text-xl xl:text-2xl pt-1">
                      {GB_CURRENCY.format(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResults;
