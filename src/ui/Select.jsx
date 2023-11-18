import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.8rem;
  padding: 0.44rem 0.8rem;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: white;
  font-weight: 500;
  box-shadow: var(--shadow-sm);

  &:focus {
    outline: 2px solid var(--main-color);
    outline-offset: -1px;
  }
`;

function Select({ onChange, value }) {
  return (
    <StyledSelect value={value} onChange={onChange}>
      <option value={"old_price-asc"}>Sort by regular price (low first)</option>
      <option value={"old_price-desc"}>
        Sort by regular price (high first)
      </option>
      <option value={"new_price-asc"}>
        Sort by discount price (low first)
      </option>
      <option value={"new_price-desc"}>
        Sort by discount price (high first)
      </option>
    </StyledSelect>
  );
}

export default Select;
