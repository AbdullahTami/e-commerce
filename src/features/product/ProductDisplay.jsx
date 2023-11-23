import styled from "styled-components";
import ProductRating from "./ProductRating";
import { formatCurrency } from "../../utils/helpers";
import ProductSize from "./ProductSize";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getProduct } from "../cart/cartSlice";
import UpdateProductQuantity from "../cart/UpdateProductQuantity";

const StyledProductDisplaySection = styled.section`
  padding: 4.8rem 3.2rem;
`;

const StyledProductDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.4rem;
`;

const Img = styled.img`
  width: 58.6rem;
`;

const ProductDetails = styled.div`
  display: flex;
  gap: 4rem;
  flex-direction: column;
  & h1:first-child {
    color: #3d3d3d;
    font-size: 3.6rem;
    font-weight: 500;
  }
  .product-description {
    font-size: 2rem;
  }
  .button-add-to-cart {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
    transition: all 0.3s;
    padding: 2rem 3.2rem;
    width: 20rem;
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
    background: #ff4141;
    border: none;
    background: var(--main-color);
    font-weight: 600;
    color: white;
    &:hover {
      background: #ff2626;
    }
    &:active {
      outline: 2px solid var(--main-color);
      outline-offset: -1px;
    }
  }

  .footer {
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-transform: capitalize;
  }

  .footer span {
    font-weight: 600;
  }
`;

const Prices = styled.div`
  font-size: 3rem;
  font-weight: 500;
  /* #fa6388 */
  display: flex;
  gap: 4rem;

  .old {
    text-decoration: line-through;
    color: var(--grey-400);
  }
  .new {
    color: #fa6388;
  }
`;

function ProductDisplay({ product }) {
  const dispatch = useDispatch();

  const {
    id: productId,
    image,
    name,
    category,
    productRating,
    description,
    new_price: newPrice,
    old_price: oldPrice,
  } = product;

  const isProductInCart = useSelector(getProduct(productId));

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
    <StyledProductDisplaySection>
      <StyledProductDisplay>
        <Img src={image} alt="product-image" />
        <ProductDetails>
          <h1>{name}</h1>
          <ProductRating productRating={productRating} />
          <Prices>
            <div className="old">{formatCurrency(oldPrice)}</div>
            <div className="new">{formatCurrency(newPrice)}</div>
          </Prices>
          <div className="product-description">{description}</div>
          {!isProductInCart ? (
            <button className="button-add-to-cart" onClick={handleAddToCart}>
              Add to cart
            </button>
          ) : (
            <>
              <UpdateProductQuantity productId={productId} />
              <ProductSize
                productId={productId}
                sizes={[
                  { label: "S", value: "S" },
                  { label: "M", value: "M" },
                  { label: "L", value: "L" },
                  { label: "XL", value: "XL" },
                  { label: "XXL", value: "XXL" },
                ]}
              />
            </>
          )}

          <div className="footer">
            <p>
              <span>Category: </span>
              {category}, T-Shirt, Crop Top{" "}
            </p>
            <p>
              <span>tags: </span>Modern, Latest
            </p>
          </div>
        </ProductDetails>
      </StyledProductDisplay>
    </StyledProductDisplaySection>
  );
}

export default ProductDisplay;
