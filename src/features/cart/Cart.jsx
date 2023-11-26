import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartSection from "./CartSection";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import { getUser } from "../auth/authUserSlice";

const StyledCart = styled.section`
  padding: 0 0 12.8rem;

  span {
    text-transform: capitalize;
  }
`;

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector(getUser);

  if (!cart.length)
    return (
      <StyledCart>
        <CartHeader cart={cart} message={`Your cart is empty, ${username}.`} />
      </StyledCart>
    );

  return (
    <StyledCart>
      <CartHeader cart={cart} message={`Here is your cart, ${username}.`} />
      <main>
        <CartSection cart={cart} />
      </main>
    </StyledCart>
  );
}

export default Cart;
