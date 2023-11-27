import styled, { css, keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled(BiLoaderAlt)`
  width: 2rem;
  height: 2rem;
  animation: ${rotate} 1.5s infinite linear;
  ${(props) =>
    props.$formSpinner &&
    css`
      width: 2.4rem;
      height: 2.4rem;
    `}
`;

export default Spinner;
