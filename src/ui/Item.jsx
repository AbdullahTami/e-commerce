import styled from "styled-components";

import { formatCurrency } from "../utils/helpers";

const StyledProduct = styled.div`
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  p {
    color: var(--grey-700);
    margin: 10px 0;
    font-size: 1.6rem;
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
  const { name, image, new_price: newPrice, old_price: oldPrice } = item;
  return (
    <StyledProduct>
      <img src={image} alt="product-picture" />
      <p>{name}</p>
      <Prices>
        <div className="new">{formatCurrency(newPrice)}</div>
        <div className="old">{formatCurrency(oldPrice)}</div>
      </Prices>
    </StyledProduct>
  );
}

export default Item;

// import styled from "styled-components";
// import { formatCurrency } from "../utils/helpers";
// import { Link } from "react-router-dom";

// const StyledItem = styled.div`
//   /* background: red; */
//   width: 350px;

//   .name {
//     margin: 6px 0px;
//   }
//   .item-prices {
//     display: flex;
//     gap: 20px;
//   }
//   .item-price-new {
//     color: #374151;
//     font-size: 18px;
//     font-weight: 600px;
//   }
//   .item-price-old {
//     color: #8c8c8c;
//     font-size: 18px;
//     font-weight: 500;
//     text-decoration: line-through;
//   }
//   :hover {
//     transform: scale(1.05);
//     transition: 0.3s;
//   }
// `;

// function Item({ item }) {
//   const { name, image, old_price, new_price, id } = item;
//   return (
//     <StyledItem>
//       <Link to={`/product/${id}`}>
//         <img src={image} alt={name} onClick={window.scrollTo(0, 0)} />
//       </Link>
//       <p className="name">{name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">{formatCurrency(new_price)}</div>
//         <div className="item-price-old">{formatCurrency(old_price)}</div>
//       </div>
//     </StyledItem>
//   );
// }

// export default Item;
