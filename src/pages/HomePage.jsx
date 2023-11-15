import PopularProducts from "../features/product/PopularProducts";
import Hero from "../ui/Hero";
import NewCollections from "../ui/NewCollections";
import Offers from "../ui/Offers";

function HomePage() {
  return (
    <div>
      <Hero />
      <PopularProducts />
      <Offers />
      <NewCollections />
    </div>
  );
}

export default HomePage;
