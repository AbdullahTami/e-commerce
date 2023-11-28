import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import Container from "./Container";
import hero from "../assets/hero_image.png";
import Button from "./Button";

const StyledHeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
  padding: 0 3.2rem;
`;

const StyledHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  align-items: center;
`;

const HeroText = styled.div`
  color: var(--grey-900);
  text-transform: capitalize;

  .sub-title {
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--main-color);
    letter-spacing: 0.1rem;
  }

  h1 {
    margin-top: 1rem;
    font-size: 8.6rem;
    line-height: 1;
    letter-spacing: -0.01rem;
  }
`;

const Img = styled.img`
  height: 85rem;
`;

//     display: inline-block;
// text-decoration: none;
// font-size: 2rem;
// font-weight: 600;
// padding: 1.6rem 3.2rem;
// border-radius: 9px;
// border: none;
// cursor: pointer;
// font-family: inherit;
// transition: background-color 0.3s;
// transition: all 0.3s;

function Hero() {
  return (
    <StyledHeroSection>
      <Container>
        <StyledHero>
          <HeroText>
            <span className="sub-title">new arrivals only</span>
            <h1>new👋 collection for everyone</h1>
            <Button>
              <a href="#new-collection">latest collection</a>
              <span>
                <BsArrowRight />
              </span>
            </Button>
          </HeroText>

          <Img src={hero} alt="hero-picture" />
        </StyledHero>
      </Container>
    </StyledHeroSection>
  );
}

export default Hero;
