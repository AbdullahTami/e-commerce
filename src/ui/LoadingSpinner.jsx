import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const LoadingSpinner = styled.div`
  margin: 25rem auto;
  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--main-color) 94%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--main-color));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

export default LoadingSpinner;
