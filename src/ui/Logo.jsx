import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const StyledLogo = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 2rem;

    p {
      position: relative;
      text-align: center;
      font-size: 100px;
      font-family: arial;
      font-weight: 900;
      background-image: linear-gradient(
        109.6deg,
        var(--main-color) 62%,
        var(--grey-900) 38%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
      /* filter: brightness(1.85); */
      font-size: 3.6rem;
      font-weight: 600;
    }
  }
`;

const Img = styled.img`
  height: 7rem;
  width: 7rem;
  display: block;
`;

function Logo() {
  return (
    <StyledLogo>
      <Link to="home">
        <Img src={logo} alt="logo-picture" />
        <p> SHOPPER </p>
      </Link>
    </StyledLogo>
  );
}

export default Logo;
