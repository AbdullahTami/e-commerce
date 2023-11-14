import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const StyledNavLink = styled(NavLink)`
  transition: all 0.3s;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  &:link,
  &:visited {
    color: var(--grey-500);
    font-size: 1.8rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--main-color);
  }

  & hr {
    width: 80%;
    height: 0.3rem;
    background: var(--main-color);
    border: none;
    border-radius: 0.3rem;
  }
`;

function AppNav() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <nav>
      <NavList>
        <li onClick={() => setSelectedPage("home")}>
          <StyledNavLink to="/home">
            <span>home</span>
            {selectedPage === "home" && <hr />}
          </StyledNavLink>
        </li>
        <li onClick={() => setSelectedPage("product")}>
          <StyledNavLink to="/product">
            <span>shop</span>
            {selectedPage === "product" && <hr />}
          </StyledNavLink>
        </li>
        <li onClick={() => setSelectedPage("about")}>
          <StyledNavLink to="/about">
            <span>about</span>
            {selectedPage === "about" && <hr />}
          </StyledNavLink>
        </li>
        <li onClick={() => setSelectedPage("faq")}>
          <StyledNavLink to="/faq">
            <span>faq</span>
            {selectedPage === "faq" && <hr />}
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default AppNav;
