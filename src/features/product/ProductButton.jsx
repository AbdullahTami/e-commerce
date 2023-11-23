import styled, { css } from "styled-components";

const Button = styled.button`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  transition: all 0.3s;
  padding: 2rem 3.2rem;
  /* width: 20rem; */
  width: 100%;
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
    props.$cart === "cart" &&
    css`
      width: 100%;
      background: black;
      color: white;
      &:hover {
        background: #2c2a2a;
      }
      &:active {
        outline: 2px solid #2c2a2a;
        outline-offset: -1px;
      }
    `}
`;

export default Button;
