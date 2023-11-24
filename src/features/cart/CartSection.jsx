import { useSelector } from "react-redux";
import styled from "styled-components";
import { getCart } from "./cartSlice";

import Container from "../../ui/Container";
import CartItem from "./CartItem";

const StyledCartSection = styled.div`
  font-size: 1.8rem;
  padding: 0 6.4rem;
  margin-top: 2.4rem;
`;

const Sections = styled.header`
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 0.5fr;
  column-gap: 4rem;
  color: var(--grey-550);
  text-align: center;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #d5d5d5;
`;

function CartSection() {
  const cart = useSelector(getCart);

  return (
    <Container>
      <StyledCartSection>
        <Sections>
          <div>Product</div>
          <div>Title</div>
          <div>Quantity</div>
          <div>Size</div>
          <div>Price</div>
          <div>Remove</div>
        </Sections>
        {cart.map((item) => (
          <CartItem item={item} key={item.productId} />
        ))}
      </StyledCartSection>
    </Container>
  );
}

export default CartSection;
