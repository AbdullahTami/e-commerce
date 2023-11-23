import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";

function Cart() {
  const cart = useSelector(getCart);
  if (!cart.length) return;
  return (
    <div>
      {cart.map((item, index) => (
        <div key={index}>{index} item</div>
      ))}
    </div>
  );
}

export default Cart;
