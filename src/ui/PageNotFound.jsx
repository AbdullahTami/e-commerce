import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";

// import { useMoveBack } from "../hooks/useMoveBack";
// import Heading from "../ui/Heading";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: #fce3fe;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: white;
  border: 2px solid var(--grey-200);
  border-radius: 5px;

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }

  button {
    border: none;
    background: none;
    font-size: 1.6rem;
    display: inline-block;
    padding: 1.5rem 3rem;
    border-radius: 5px;
    transition: 0.3s;
    &:hover {
      background: #f7f7f7;
    }
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <h1>The page you are looking for could not be found </h1>

        <button onClick={moveBack}>&larr; Go back</button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
