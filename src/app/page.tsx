// import Hero from "./components/hero";
// import Gallery from "./gallery/page";
// import Featured from "./featured/page";
// import Categories from "./Categories/page";
// import Images from "./gallery2/page";
// import Products from "./products/page";
// export default function Home() {
//   return (
//     <div>
//       <Hero />
//       <Gallery />
//       <Featured />
//       <Categories />
//       <Images />
//       <Products />
      
//     </div>
//   );
// }
import Hero from "./components/hero";
import Gallery from "./gallery/page";
import Featured from "./featured/page";
import Categories from "./Categories/page";
import Images from "./gallery2/page";
import Products from "./products/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Featured />
      <Categories />
      <Images />
      <Products />
    </main>
  );
}
