import PopularProducts from "../features/product/PopularProducts";
import Hero from "../ui/Hero";
import Offers from "../ui/Offers";

function HomePage() {
  return (
    <div>
      <Hero />
      <PopularProducts />
      <Offers />
    </div>
  );
}

export default HomePage;
