import styled from "styled-components";

const Button = styled.button`
  text-transform: capitalize;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  padding: 1.6rem 3.2rem;
  transition: background-color 0.3s;
  transition: all 0.3s;
  border: none;
  border-radius: 1000px;
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
`;
export default Button;
