import styled from "styled-components";
import Container from "./Container";
import { useState } from "react";
import { MdError } from "react-icons/md";
import toast from "react-hot-toast";

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
  position: relative;
  /* border-radius: 89px;
  border: 1px solid #e3e3e3; */
  input {
    /* width: 50rem; */
    width: 100%;
    height: 100%;
    margin-left: 0.5rem;
    border: none;
    outline: none;
    padding-left: 3rem;
    border-radius: 89px;
    border: 1px solid #e3e3e3;
    color: var(--grey-500);
    font-size: 1.6rem;

    &:focus {
      /* border: 1px solid black; */
      outline: 2px solid var(--grey-200);
    }
  }
  button {
    position: absolute;
    right: 0;
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
      &:hover:disabled {
        background-color: var(--grey-200);
        color: var(--grey-300);
        border: none;
      }
    }
  }
  button:active {
    outline: 1px solid black;
    outline-offset: -1px;
  }
`;

const ErrorText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #b91c1c;
  font-size: 1.2rem;
  background: #fee2e2;
  padding: 0.8rem;
`;

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    if (!email) {
      setIsLoading(false);
      setError(true);
    } else {
      setTimeout(() => {
        setError(false);
        setIsLoading(false);
        toast.success("You have successfully subscribed to our newsletter!");
        setEmail("");
      }, 1000);
    }
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
          {error && (
            <ErrorText>
              <MdError />{" "}
              <span>
                You have to provide an email address in order to subscribe{" "}
              </span>
            </ErrorText>
          )}
          <Form onSubmit={handleSubmit}>
            <input
              disabled={isLoading}
              value={email}
              type="email"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button disabled={isLoading}>
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </Form>
        </StyledNewsLetter>
      </Container>
    </StyledNewsLetterSection>
  );
}

export default NewsLetter;
