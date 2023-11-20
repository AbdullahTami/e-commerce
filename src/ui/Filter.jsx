import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  /* border: 1px solid var(--main-color); */
  /* background-color: var(--color-grey-0); */
  box-shadow: var(--shadow-sm);
  /* border-radius: var(--border-radius-sm); */
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: white;
  border: none;
  /* 
  ${(props) =>
    props.$active === "active" &&
    css`
      background-color: var(--main-color);
      color: white;
    `} */

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--main-color);
      color: white;
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.8rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--main-color);
    color: white;
  }
  &:focus {
    background-color: var(--main-color);
    color: white;
  }
`;

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get("category") || "all";
  console.log(currentFilter);

  function handleClick(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }
  return (
    <StyledFilter>
      <FilterButton
        disabled={currentFilter === "all"}
        $active={currentFilter === "all"}
        onClick={() => handleClick("all")}
      >
        All
      </FilterButton>
      <FilterButton
        disabled={currentFilter === "men"}
        $active={currentFilter === "men"}
        onClick={() => handleClick("men")}
      >
        Men
      </FilterButton>
      <FilterButton
        disabled={currentFilter === "women"}
        $active={currentFilter === "women"}
        onClick={() => handleClick("women")}
      >
        Women
      </FilterButton>
      <FilterButton
        disabled={currentFilter === "kids"}
        $active={currentFilter === "kids"}
        onClick={() => handleClick("kids")}
      >
        Kids
      </FilterButton>
    </StyledFilter>
  );
}

export default Filter;
