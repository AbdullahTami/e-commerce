import styled from "styled-components";

import { formatCurrency } from "../utils/helpers";
import { Link } from "react-router-dom";

const StyledProduct = styled.div`
  max-width: 35rem;
  display: flex;
  flex-direction: column;
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

const Prices = styled.div`
  font-size: 2.4rem;
  /* #fa6388 */
  display: flex;
  gap: 4rem;
  /* justify-content: space-between; */
  /* background: red; */
  /* justify-content: space-between; */
  .old {
    text-decoration: line-through;
    color: var(--grey-400);
  }
  .new {
    color: #fa6388;
  }
`;

function Item({ item }) {
  const {
    id: productId,
    name,
    image,
    new_price: newPrice,
    old_price: oldPrice,
  } = item;
  return (
    <StyledProduct>
      <Link to={`/product/${productId}`}>
        <figure>
          <img src={image} alt="product-picture" />
        </figure>
      </Link>
      <p>{name}</p>
      <Prices>
        <div className="new">{formatCurrency(newPrice)}</div>
        <div className="old">{formatCurrency(oldPrice)}</div>
      </Prices>
    </StyledProduct>
  );
}

export default Item;
