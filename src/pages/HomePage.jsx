import PopularProducts from "../ui/PopularProducts";
import Hero from "../ui/Hero";
import NewCollections from "../ui/NewCollections";
import NewsLetter from "../ui/NewsLetter";
import Offers from "../ui/Offers";

function HomePage() {
  return (
    <div>
      <Hero />
      <PopularProducts />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
}

export default HomePage;
