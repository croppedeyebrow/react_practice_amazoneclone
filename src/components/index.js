// 모든 컴포넌트의 import/export를 한 곳(index.js 또는 index.jsx)에서 관리할 수 있습니다
// 디렉토리 구조가 변경되어도 import 경로를 일일이 수정할 필요가 없습니다

// 단, 이 방식을 사용하려면 반드시 components 폴더에 index.js (또는 index.jsx) 파일이 있어야 하며, 그 안에서 필요한 컴포넌트들을 적절히 export 해야 합니다.

export { default as HomePage } from "./HomePage.jsx";
export { default as Carousel } from "./Carousel.jsx";
export { default as HomePageCard } from "./HomePageCard.jsx";
export { default as CarouselCategory } from "./CarouselCategory.jsx";
export { default as CarouselProduct } from "./CarouselProduct.jsx";
export { default as NavBar } from "./NavBar.jsx";
export { default as Search } from "./Search.jsx";
export { default as Checkout } from "./Checkout.jsx";
export { default as ProductPage } from "./ProductPage.jsx";
export { default as SearchResults } from "./SearchResults.jsx";
export { default as ProductDetails } from "./ProductDetails.jsx";
export { default as ProductBadge } from "./ProductBadge.jsx";
export { default as ProductRating } from "./ProductRating.jsx";
