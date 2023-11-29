import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SpinnerFullPage() {
  return (
    <Wrapper>
      <LoadingSpinner />
    </Wrapper>
  );
}

export default SpinnerFullPage;
