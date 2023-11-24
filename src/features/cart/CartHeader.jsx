import styled from "styled-components";

const StyledCartHeader = styled.p`
  /* display: flex;
  justify-content: center; */
  padding: 6.4rem 6.4rem;
  font-size: 4.4rem;
`;

function CartHeader() {
  return <StyledCartHeader>Here is your cart, #Name.</StyledCartHeader>;
}

export default CartHeader;
