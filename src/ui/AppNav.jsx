import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { getTotalQuantityInCart } from "../features/cart/cartSlice";
import { getUser } from "../features/auth/authUserSlice";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { CiLogin } from "react-icons/ci";

const StyledAppNav = styled.div`
  display: flex;
  align-items: center;

  .login-cart-count {
    width: 2.3rem;
    height: 2.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -5rem;
    margin-left: -5.1rem;
    font-size: 1.6rem;
    border-radius: 1000px;
    background: red;
    color: white;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  &:link,
  &:visited {
    color: var(--grey-500);
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--main-color);
  }

  & svg {
    width: 4rem;
    height: 4rem;
    color: var(--grey-400);
    transition: all 0.3s;
  }

  &.active:link svg,
  &.active:visited svg,
  &:hover svg,
  &:active svg {
    color: var(--main-color);
  }
`;

function AppNav() {
  const totalPrice = useSelector(getTotalQuantityInCart);
  const isLoggedIn = useSelector(getUser);

  return (
    <StyledAppNav>
      <StyledNavLink to="product">
        <HiMiniShoppingBag />
      </StyledNavLink>

      {!isLoggedIn && (
        <StyledNavLink to="/auth">
          <CiLogin />
        </StyledNavLink>
      )}

      <StyledNavLink to="/cart">
        <span>
          <BsCart2 />
        </span>
      </StyledNavLink>
      <div className="login-cart-count">{totalPrice}</div>
    </StyledAppNav>
  );
}

export default AppNav;
