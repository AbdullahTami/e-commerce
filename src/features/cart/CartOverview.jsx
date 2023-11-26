import { useSelector } from "react-redux";
import { BsDashLg } from "react-icons/bs";
import styled, { css } from "styled-components";
import { getCart, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { Link, useNavigate, useParams } from "react-router-dom";

const StyledCartOverview = styled.div`
  height: 50vh;
  width: 80rem;
  font-size: 1.8rem;
  overflow-y: scroll;
`;

const Sections = styled.header`
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
  column-gap: 4rem;
  text-align: center;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #d5d5d5;
  color: var(--grey-400);
`;

const ItemShortDisplay = styled(Sections)`
  color: var(--grey-700);
  padding-top: 1rem;
  margin-bottom: 0;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;

  img {
    width: 8rem;
    cursor: pointer;
    ${(props) =>
      props.$cursor &&
      css`
        cursor: not-allowed;
      `}
  }
`;

const Footer = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 3rem 0;
  font-size: 1.8rem;
`;

const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  border-radius: 2px;
  background: black;
  color: white;
  &:hover {
    background: #2c2a2a;
  }
  &:active {
    outline: 2px solid #2c2a2a;
    outline-offset: -1px;
  }
`;

const TotalPrice = styled.span`
  box-shadow: var(--shadow-sm);
`;

function CartOverview({ onCloseModal }) {
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const navigate = useNavigate();
  const { productId: params } = useParams();

  let equalValues;

  if (!cart.length) onCloseModal();

  function handleNavigation(id) {
    equalValues = Number(params) === id;
    if (equalValues) return;
    navigate(`/product/${id}`);
    onCloseModal();
    scrollTo(0, 0);
  }

  return (
    <>
      <StyledCartOverview>
        <Sections>
          <div>Product</div>
          <div>Qty</div>
          <div>Size</div>
          <div>Price</div>
        </Sections>
        {cart.map((item) => {
          const { productId, image, quantity, size, totalPrice } = item;
          return (
            <ItemShortDisplay
              $cursor={productId === Number(params)}
              key={productId}
            >
              <div onClick={() => handleNavigation(productId)}>
                <img src={image} />
              </div>
              <div>{quantity}</div>
              <div>{size ? size : <BsDashLg />}</div>
              <div>{formatCurrency(totalPrice)}</div>
            </ItemShortDisplay>
          );
        })}
      </StyledCartOverview>
      <Footer>
        <TotalPrice>Total Price: {formatCurrency(totalCartPrice)}</TotalPrice>

        <StyledLink to="/cart" onClick={() => scrollTo(0, 0)}>
          Open Cart
        </StyledLink>
      </Footer>
    </>
  );
}

export default CartOverview;
