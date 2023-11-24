import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, getProduct } from "../cart/cartSlice";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";

const StyledProduct = styled.div`
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
  p {
    color: var(--grey-700);
    margin: 10px 0;
    font-size: 1.6rem;
  }
  img:hover {
    transform: scale(1.09);
    transition: 1.5s;
  }
  figure {
    overflow: hidden;
  }
`;

const Footer = styled.div`
  margin-top: auto;
  font-size: 2.4rem;
  display: flex;
  justify-content: space-between;

  & svg {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    /* color: var(--grey-400); */
    transition: all 0.3s;
  }
`;

const Prices = styled.div`
  margin-top: auto;
  /* font-size: 2.4rem; */

  display: flex;
  gap: 1rem;

  .old {
    text-decoration: line-through;
    color: var(--grey-400);
  }
  .new {
    color: #fa6388;
  }
`;

const FillCart = styled(BsFillCartPlusFill)`
  color: var(--grey-500);
`;

function ProductItem({ item }) {
  const dispatch = useDispatch();
  const {
    id: productId,
    name,
    image,
    new_price: newPrice,
    old_price: oldPrice,
    category,
  } = item;

  const productInCart = useSelector(getProduct(productId));

  function handleAddToCart() {
    const newItem = {
      image,
      productId,
      size: "",
      category,
      name,
      quantity: 1,
      newPrice,
      totalPrice: newPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <StyledProduct>
      <Link to={`/product/${productId}`} onClick={() => window.scrollTo(0, 0)}>
        <figure>
          <img src={image} alt="product-picture" />
        </figure>
      </Link>
      <p>{name}</p>
      <Footer>
        {!productInCart && <FillCart onClick={handleAddToCart} />}
        {productInCart && (
          <BsCartCheckFill onClick={() => dispatch(deleteItem(productId))} />
        )}
        <Prices>
          <div className="new">{formatCurrency(newPrice)}</div>
          <div className="old">{formatCurrency(oldPrice)}</div>
        </Prices>
      </Footer>
    </StyledProduct>
  );
}

export default ProductItem;
