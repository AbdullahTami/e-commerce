import { useSelector } from "react-redux";
import { BsDashLg } from "react-icons/bs";
import styled from "styled-components";
import { getCart } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

const StyledCartOverview = styled.div`
  height: 50vh;
  width: 80rem;
  font-size: 1.8rem;
  overflow-y: scroll;
`;

const Sections = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
  column-gap: 4rem;
  text-align: center;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #d5d5d5;
`;

const ItemShortDisplay = styled(Sections)`
  padding-top: 1rem;
  margin-bottom: 0;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;

  img {
    width: 8rem;
  }
`;

function CartOverview({ onCloseModal }) {
  const cart = useSelector(getCart);

  return (
    <StyledCartOverview>
      <Sections>
        <div>Product</div>
        <div>Quantity</div>
        <div>Size</div>
        <div>Price</div>
      </Sections>
      {cart.map((item) => {
        const { productId, image, quantity, size, newPrice, totalPrice } = item;
        return (
          <ItemShortDisplay key={productId}>
            <div>
              <img src={image} />
            </div>
            <div>{quantity}</div>
            <div>{size ? size : <BsDashLg />}</div>
            <div>{formatCurrency(totalPrice)}</div>
          </ItemShortDisplay>
        );
      })}
    </StyledCartOverview>
  );
}

export default CartOverview;
