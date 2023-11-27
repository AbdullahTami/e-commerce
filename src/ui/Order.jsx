import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { getTotalQuantityInCart } from "../features/cart/cartSlice";
import { formatCurrency } from "../utils/helpers";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  transition: all 0.3s;
  padding: 1rem 1.4rem;
  border-radius: 3px;
  width: 70%;
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

  ${(props) =>
    props.$back &&
    css`
      background: #fffefe;
      border: 1px solid var(--main-color);
      color: var(--main-color);
      &:hover {
        background: #fff7f7;
      }
      &:active {
        outline: 2px solid #ffe3e3;
        outline-offset: -1px;
      }
    `}
`;

const StyledOrderSection = styled.div`
  font-size: 1.6rem;
  width: 50rem;
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
  align-items: center;
  color: var(--grey-500);
  h1 {
    margin-top: -2rem;
    color: var(--main-color);
    font-size: 2.4rem;
  }
  p {
    text-align: center;
    font-size: 1.4rem;
    color: var(--grey-500);
  }

  .buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
  }
`;

const Done = styled(IoIosCheckmarkCircleOutline)`
  width: 6rem;
  height: 6rem;
  font-weight: 500;
  color: var(--main-color);
  /* margin-bottom: 2rem; */
`;

const OrderDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem 6.4rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    span {
      color: var(--grey-700);
    }
  }
`;

function Order({ grandTotal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalItems = useSelector(getTotalQuantityInCart);
  function getDate() {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate() + 2;
    const year = dateObj.getUTCFullYear();
    const newDate = year + "/" + month + "/" + day;
    return newDate;
  }

  function handleNavigation(path) {
    dispatch(clearCart());
    navigate(path);
  }

  return (
    <StyledOrderSection>
      <Done />
      <h1>Order successfully placed</h1>
      <p>
        An email has been sent to you regarding order details, but here are the
        main things you need to know.
      </p>
      <OrderDetails>
        <div>
          Order number: <span>#{Math.floor(Math.random() * 1000000)}</span>
        </div>
        <div>
          Estimated delivery: <span>{getDate()}</span>
        </div>
        <div>
          Packaged items: <span>{totalItems}</span>
        </div>
        <div>
          Order total: <span>{formatCurrency(grandTotal)}</span>
        </div>
      </OrderDetails>
      <div className="buttons">
        <Button onClick={() => handleNavigation("/product")}>
          Continue shopping
        </Button>
        <Button onClick={() => handleNavigation("/")} $back={true}>
          Back to homepage
        </Button>
      </div>
    </StyledOrderSection>
  );
}

export default Order;
