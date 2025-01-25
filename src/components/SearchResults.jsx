import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { callAPI } from "../utils/CallApi";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState(null);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");
    callAPI(`data/search.json`).then((SearchResults) => {
      const categoryResults = SearchResults[category];
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProduct(results);
      } else {
        setProduct(categoryResults);
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className="min-w-[1200px] max-w-[1300px] m-auto">
      {product &&
        product.map((product, key) => {
          return <div key={key}>{product.title}</div>;
        })}
    </div>
  );
};

export default SearchResults;
