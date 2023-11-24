import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartSection from "./CartSection";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";

const StyledCart = styled.section`
  padding: 0 0 12.8rem;
`;

function Cart() {
  const cart = useSelector(getCart);
  // if (!cart.length) return <div>Cart empty</div>;

  if (!cart.length)
    return (
      <StyledCart>
        <CartHeader cart={cart} message={"Your cart is empty, #Name."} />
      </StyledCart>
    );

  return (
    <StyledCart>
      <CartHeader cart={cart} message={"Here is your cart, #Name."} />
      <main>
        <CartSection cart={cart} />
      </main>
    </StyledCart>
  );
}

export default Cart;
