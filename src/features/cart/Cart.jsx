import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartSection from "./CartSection";

const StyledCart = styled.section`
  padding: 0 0 12.8rem;
`;

function Cart() {
  return (
    <StyledCart>
      <CartHeader />
      <main>
        <CartSection />
      </main>
    </StyledCart>
  );
}

export default Cart;
