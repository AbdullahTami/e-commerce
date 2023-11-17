import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import Container from "./Container";
import new_collection from "../assets/new_collections";
import Item from "./Item";

const NewCollectionSection = styled.section`
  padding: 0 3.2rem 12.8rem;
`;

const StyledNewCollection = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; */
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

// const StyledNewCollectionItems = styled.div`
//   padding: 3.2rem;
//   display: grid;
//   gap: 2rem;
//   grid-template-columns: repeat(4, 1fr);
// `;

function NewCollections() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <NewCollectionSection>
      <Container>
        <StyledNewCollection>
          <h1>#NewCollections</h1>
          <Slider {...settings}>
            {new_collection.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </Slider>
        </StyledNewCollection>
      </Container>
    </NewCollectionSection>
  );
}

export default NewCollections;
