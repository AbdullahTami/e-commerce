import { useState } from "react";
import styled from "styled-components";
import businessInfo from "../../assets/businessInfo";
import AccordionItem from "./AccordionItem";

const StyledProductDescriptionAccordion = styled.div`
  padding: 4.8rem 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function ProductDescriptionAccordion() {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <StyledProductDescriptionAccordion>
      {businessInfo.map((el, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={index}
          key={index}
        >
          {el.text}
        </AccordionItem>
      ))}
    </StyledProductDescriptionAccordion>
  );
}

export default ProductDescriptionAccordion;
