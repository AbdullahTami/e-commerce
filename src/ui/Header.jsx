import styled from "styled-components";
import Logo from "./Logo";
import AppNav from "./AppNav";

const StyledHeader = styled.header`
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 8rem;
  box-shadow: 0 1px 3px -2px black;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <AppNav />
    </StyledHeader>
  );
}

export default Header;
