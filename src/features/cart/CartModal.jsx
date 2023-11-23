import Modal from "../../ui/Modal";
import ProductButton from "../../features/product/ProductButton";
import CartOverview from "./CartOverview";

function CartModal() {
  return (
    <Modal>
      {/* Model.Open component is responsibale for opening */}
      <Modal.Open opens="cart-overview">
        <ProductButton $cart="cart">cart overview</ProductButton>
      </Modal.Open>
      <Modal.Window name="cart-overview">
        <CartOverview />
      </Modal.Window>
    </Modal>
  );
}

export default CartModal;
