import styled, { css } from "styled-components";
import { FaChevronUp } from "react-icons/fa";

const StyledAccordionItem = styled.div`
  box-shadow: var(--shadow-sm);
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  padding: 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 2.4rem;
  row-gap: 2rem;
  align-items: center;
  transition: all 0.6s;
  ${(props) =>
    props.$isOpen &&
    css`
      transform: translate(2%);
    `}
`;

const Title = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  ${(props) =>
    props.$isOpen &&
    css`
      color: var(--main-color);
    `}
`;

const StyledIcon = styled(FaChevronUp)`
  height: 2.4rem;
  width: 2.4rem;
  transition: all 0.3s;
  ${(props) =>
    props.$isOpen &&
    css`
      rotate: 180deg;
    `}
`;

const ContentBox = styled.div`
  /* grid-column: 2 / -1; */
  font-size: 2rem;
  line-height: 1.6;
`;

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  return (
    <StyledAccordionItem
      $isOpen={isOpen}
      onClick={() => onOpen(isOpen ? null : num)}
    >
      <Title $isOpen={isOpen}>{title}</Title>
      <StyledIcon $isOpen={isOpen} />
      {isOpen && <ContentBox>{children}</ContentBox>}
    </StyledAccordionItem>
  );
}

export default AccordionItem;
