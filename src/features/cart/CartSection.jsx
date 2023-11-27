import styled from "styled-components";
import Container from "../../ui/Container";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import CartBottom from "./CartBottom";

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
  color: var(--grey-400);
  text-align: center;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #d5d5d5;
`;

const Footer = styled.footer`
  padding: 0 6.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 6.4rem;
`;

const Price = styled.div`
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-top: 8rem;
  display: flex;
  gap: 2rem;

  span {
    color: var(--grey-400);
  }
`;

function CartSection({ cart }) {
  const grandTotal = useSelector(getTotalCartPrice);
  return (
    <Container>
      <StyledCartSection>
        <Sections>
          <div>Product</div>
          <div>Title</div>
          <div>Qty</div>
          <div>Size</div>
          <div>Price</div>
          <div>Remove</div>
        </Sections>
        {cart.map((item) => (
          <CartItem item={item} key={item.productId} />
        ))}
      </StyledCartSection>
      <Footer>
        <Price>
          <span>GRAND TOTAL</span> {formatCurrency(grandTotal)}
        </Price>
        <CartBottom grandTotal={grandTotal} />
      </Footer>
    </Container>
  );
}

export default CartSection;
