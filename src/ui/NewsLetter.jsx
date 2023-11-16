import styled from "styled-components";
import Container from "./Container";
import { useState } from "react";

const StyledNewsLetterSection = styled.section`
  padding: 0 3.2rem 4.8rem;
`;

const StyledNewsLetter = styled.div`
  background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
  padding: 0 9.4rem;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
`;

const NewsLetterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h1 {
    color: var(--grey-900);
    font-size: 5.2rem;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--grey-500);
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  /* width: 50rem; */
  width: 70rem;
  height: 6rem;
  border-radius: 89px;
  border: 1px solid #e3e3e3;
  input {
    width: 50rem;
    margin-left: 3rem;
    border: none;
    outline: none;
    color: var(--grey-500);
    font-size: 1.6rem;
  }
  button {
    width: 17rem;
    height: 6rem;
    border-radius: 80px;
    background: black;
    color: white;
    font-size: 1.6rem;
    transition: all 0.3s;
    &:hover {
      background: white;
      color: black;
      border: solid black 1px;
    }
  }
`;

function NewsLetter() {
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setEmail("");
  }
  return (
    <StyledNewsLetterSection>
      <Container>
        <StyledNewsLetter>
          <NewsLetterText>
            <h1>Subscribe to our newsletter</h1>
            <p>
              Signup for our weekly newsletter to get the latest news, updates
              and amazing <br /> offers delivered directly in your inbox.
            </p>
          </NewsLetterText>
          <Form onSubmit={handleSubmit}>
            <input
              value={email}
              type="email"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>Subscribe</button>
          </Form>
        </StyledNewsLetter>
      </Container>
    </StyledNewsLetterSection>
  );
}

export default NewsLetter;
