import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import Container from "../../ui/Container";
import ProductItem from "./ProductItem";
import { getProducts } from "./productSlice";
import { useSelector } from "react-redux";

const RelatedProductsSection = styled.section`
  padding: 12.8rem 3.2rem;
`;

const StyledRelatedProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .slick-prev::before,
  .slick-next::before {
    color: var(--main-color);
    font-size: 32px;
  }

  .slick-prev {
    left: -85px !important;
  }
  h1 {
    text-align: center;
    cursor: pointer;
    font-style: italic;
    color: var(--grey-900);
    font-weight: 500;
    text-transform: capitalize;
    font-size: 4.4rem;
    margin-bottom: 3.2rem;
  }
`;

function RelatedProducts({ product }) {
  const products = useSelector(getProducts);
  const relatedProducts = products
    .filter((item) => item.category === product.category)
    .filter((curProduct) => curProduct.id !== product.id);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <RelatedProductsSection>
      <Container>
        <StyledRelatedProducts>
          <h1>#RelatedProducts</h1>
          <Slider {...settings}>
            {relatedProducts.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </Slider>
        </StyledRelatedProducts>
      </Container>
    </RelatedProductsSection>
  );
}

/*
 */

export default RelatedProducts;
