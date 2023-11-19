import styled from "styled-components";

const StyledProductSize = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  p {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 2.4rem;
    color: var(--grey-500);
  }
`;

const Sizes = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const SizeButton = styled.button`
  display: flex;
  align-items: center;
  /* width: 20rem; */
  background: #fbfbfb;
  border: 1px solid #ebebeb;
  font-size: 2rem;
  padding: 1.8rem 2.4rem;
  font-weight: 500;
`;

function ProductSize({ sizes }) {
  //   console.log(sizes);
  return (
    <StyledProductSize>
      <p>select size</p>
      <Sizes>
        {sizes.map((size, index) => (
          <SizeButton key={index}>{size.label}</SizeButton>
        ))}
      </Sizes>
    </StyledProductSize>
  );
}

export default ProductSize;
