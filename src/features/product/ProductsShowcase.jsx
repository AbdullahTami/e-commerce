import { useSelector } from "react-redux";
import styled from "styled-components";
import { getProducts } from "./productSlice";
import Item from "../../ui/Item";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

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

const LoadMore = styled.button`
  margin-top: 9.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  padding: 1.6rem 3.2rem;
  transition: background-color 0.3s;
  transition: all 0.3s;
  border: none;
  border-radius: 1000px;
  background: #ededed;
  font-weight: 500;
  color: #787878;
  &:hover {
    background: var(--grey-200);
  }
  &:active {
    outline: 2px solid var(--grey-200);
    outline-offset: -1px;
  }
`;

function ProductsShowcase() {
  const [load, setLoad] = useState(true);
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

  const sortBy = searchParams.get("sortBy") || "regularPrice-asc";

  const [field, direction] = sortBy.split("-");
  // console.log(field, direction);
  // const modifier = direction === "asc" ? 1 : -1;
  const sortedProducts = filteredProducts
    .slice()
    .sort((a, b) => a[field] - b[field]);

  return (
    <StyledProductSection>
      <StyledProductPage>
        <StyledPopularItems>
          {load
            ? sortedProducts
                .slice(0, 8)
                .map((item) => <Item key={item.id} item={item} />)
            : sortedProducts.map((item) => <Item key={item.id} item={item} />)}
        </StyledPopularItems>
        <LoadMore onClick={() => setLoad((load) => !load)}>
          {load ? "Show more" : "Show less"}
        </LoadMore>
      </StyledProductPage>
    </StyledProductSection>
  );
}

export default ProductsShowcase;

// {filteredProducts.map((item) => (
//   <Item key={item.id} item={item} />
// ))}
