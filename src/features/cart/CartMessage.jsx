import styled from "styled-components";

const StyledCartMessage = styled.p`
  font-size: 4.4rem;
`;
function CartMessage({ children }) {
  return <StyledCartMessage>{children}</StyledCartMessage>;
}

export default CartMessage;
