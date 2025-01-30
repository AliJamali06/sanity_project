import Hero from "./components/hero";
import Gallery from "./gallery/page";
import Featured from "./featured/page";
import Categories from "./Categories/page";
import Images from "./gallery2/page";
import Products from "./products/page";
import ProductListingPage from "./productpage/page";
export default function Home() {
  return (
    <div>
      <Hero />
      <Gallery />
      <Featured />
      <Categories />
      <Images />
      <Products />
      
    </div>
  );
}
