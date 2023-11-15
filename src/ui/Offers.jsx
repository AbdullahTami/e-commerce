import styled from "styled-components";
import Container from "./Container";
import exclusive_image from "../assets/exclusive_image.png";
import Button from "./Button";

const StyledOffersSection = styled.section`
  padding: 12.8rem 3.2rem 6.4rem;

  /* max-width: 120rem;
  margin: 0 auto; */
`;

const StyledOffers = styled.div`
  background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
  padding: 0 9.4rem;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5rem;
`;

const OffersText = styled.div`
  color: var(--grey-900);
  text-transform: capitalize;
  .sub-title {
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--main-color);
    letter-spacing: 0.1rem;
    align-self: flex-end;
  }
  h1 {
    margin-top: 1rem;
    font-size: 6.2rem;
    line-height: 1;
    letter-spacing: -0.01rem;
  }
`;

const Img = styled.img`
  height: 50rem;
  align-self: flex-start;
`;

function Offers() {
  return (
    <StyledOffersSection>
      <Container>
        <StyledOffers>
          <OffersText>
            <span className="sub-title">only on shopper store</span>
            <h1>exclusive offers just for you</h1>
            <Button>check now</Button>
          </OffersText>
          <Img src={exclusive_image} alt="sub-hero-image" />
        </StyledOffers>
      </Container>
    </StyledOffersSection>
  );
}

export default Offers;
