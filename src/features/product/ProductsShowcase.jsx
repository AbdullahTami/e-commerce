import { useSelector } from "react-redux";
import styled from "styled-components";
import { getProducts } from "./productSlice";
import Item from "../../ui/Item";
import { useSearchParams } from "react-router-dom";

const StyledProductSection = styled.section`
  padding: 0 3.2rem 12.8rem;
`;

const StyledProductPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledPopularItems = styled.div`
  /* padding: 3.2rem; */
  display: grid;
  column-gap: 2rem;
  row-gap: 8.5rem;
  grid-template-columns: repeat(4, 1fr);
`;
function ProductsShowcase() {
  const products = useSelector(getProducts);
  const [searchParams] = useSearchParams();
  //   console.log(products);

  const filterValue = searchParams.get("category") || "all";
  //   console.log(filterValue);

  let filteredProducts;
  if (filterValue === "all") filteredProducts = products;

  if (filterValue === "women")
    filteredProducts = products.filter(
      (product) => product.category === "women"
    );

  if (filterValue === "men")
    filteredProducts = products.filter((product) => product.category === "men");

  if (filterValue === "kids")
    filteredProducts = products.filter(
      (product) => product.category === "kids"
    );

  return (
    <StyledProductSection>
      <StyledProductPage>
        <StyledPopularItems>
          {filteredProducts.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </StyledPopularItems>
      </StyledProductPage>
    </StyledProductSection>
  );
}

export default ProductsShowcase;
