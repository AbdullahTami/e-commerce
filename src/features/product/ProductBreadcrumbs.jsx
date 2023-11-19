import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBreadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0 3.2rem;
  color: var(--grey-500);
  font-size: 1.8rem;
  font-weight: 500;
  margin: 1.6rem 0;
  text-transform: capitalize;
  & svg {
    color: var(--main-color);
    width: 3rem;
    height: 3rem;
  }
  span {
    color: var(--grey-700);
  }
`;

function Breadcrumbs({ product }) {
  return (
    <StyledBreadcrumb>
      <Link to="/">Home</Link> <BiChevronRight />
      <Link to="/product">Shop</Link> <BiChevronRight />
      {product.category} <BiChevronRight /> <span>{product.name}</span>
    </StyledBreadcrumb>
  );
}

export default Breadcrumbs;
