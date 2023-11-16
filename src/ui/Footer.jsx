import styled from "styled-components";
import Container from "./Container";
import { allLinks, socialIcons } from "../assets/linksData";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Logo from "./Logo";

const StyledFooterSection = styled.section`
  padding: 12.8rem 0;
  border-top: 1px solid #eee;
`;

const StyledFooter = styled.div`
  font-size: 1.6rem;
  display: grid;
  gap: 6rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  li {
    transition: all 0.3s;
    font-size: 1.6rem;
    color: var(--grey-400);
    margin: 2rem 0;
    &:hover {
      color: var(--main-color);
    }
  }
  /* address {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  } */
  address p:last-child {
    display: flex;
    flex-direction: column;
  }

  address p:last-child a {
    transition: all 0.3s;
    margin-bottom: -1.5rem;
    &:hover {
      color: var(--main-color);
    }
  }

  p {
    color: var(--grey-400);
  }
  .p-heading {
    font-size: 1.8rem;
    font-weight: 500;
    color: #555555;
    margin-bottom: 3.5rem;
  }
`;

const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 1.6rem;
    color: var(--grey-400);
  }

  .icons {
    display: flex;
    gap: 4rem;
  }
  svg {
    width: 3rem;
    height: 3rem;
    color: var(--grey-400);
    transition: all 0.3s;

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      color: var(--main-color);
    }
  }
`;

const ContactColumn = styled.div`
  .address {
    margin-bottom: 2.4rem;
  }
`;

function Footer() {
  return (
    <StyledFooterSection>
      <Container>
        <StyledFooter>
          <LogoColumn>
            <Logo />
            <ul className="icons">
              {socialIcons.map((socialIcon) => {
                return (
                  <li key={socialIcon.id}>
                    <a href="#">{socialIcon.icon}</a>
                  </li>
                );
              })}
            </ul>
            <p>
              Copyright &copy;{new Date().getFullYear()} by Shopper, Inc. All
              rights reserved.
            </p>
          </LogoColumn>

          <ContactColumn>
            <p className="p-heading">Contact us</p>
            <address>
              <p className="address">
                King Abd Al Aziz Street, Al-Sahafa district, P.O Box 13321
                Riyadh Saudi Arabia
              </p>
              <p>
                <a href="tel:0545334956">0545334965</a>
                <br />
                <a href="mailto:hello@gmail.com">hello@shopper.com</a>
              </p>
            </address>
          </ContactColumn>

          {allLinks.map((aLink) => {
            return (
              <div key={aLink.id}>
                <p className="p-heading">{aLink.headline}</p>
                <ul>
                  <li>
                    <a href="#">{aLink.links.firstLink}</a>
                  </li>
                  <li>
                    <a href="#">{aLink.links.secondLink}</a>
                  </li>
                  <li>
                    <a href="#">{aLink.links.thirdLink}</a>
                  </li>
                  <li>
                    <a href="#">{aLink.links.forthLink}</a>
                  </li>
                </ul>
              </div>
            );
          })}
        </StyledFooter>
      </Container>
    </StyledFooterSection>
  );
}

export default Footer;
