import { useSelector } from "react-redux";
import { getProducts } from "./productSlice";
import { useParams } from "react-router";
import Container from "../../ui/Container";
import Breadcrumbs from "./ProductBreadcrumbs";
import ProductDisplay from "./ProductDisplay";

function SingleProduct() {
  const products = useSelector(getProducts);
  const { productId } = useParams();
  const product = products.find((item) => item.id === Number(productId));
  console.log(product);
  return (
    <Container>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </Container>
  );
}

export default SingleProduct;
