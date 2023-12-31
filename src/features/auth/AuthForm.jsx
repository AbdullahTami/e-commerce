import styled, { css } from "styled-components";
import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";
import { useDispatch } from "react-redux";
import { updateName } from "./authUserSlice";
import { useNavigate } from "react-router";

const StyledAuthFormSection = styled.section`
  min-height: 80vh;
  background: #fce3fe;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
`;

const StyledAuthForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 3.2rem 4.8rem;
  transform: translate(-50%, -50%);
  width: 50rem;
  background: white;
  h1 {
    font-size: 2rem;
    margin: 2rem 4rem;
    padding: 0 0 2rem;
    /* border-bottom: 1px solid silver; */
  }
`;

const Form = styled.form`
  font-size: 1.6rem;
  padding: 0 4rem;

  .pass {
    margin: -5px 0 20px 5px;
    color: #a6a6a6;
    cursor: pointer;
  }
  .pass:hover {
    text-decoration: underline;
  }

  .signup-link {
    margin: 3rem;
    text-align: center;
    color: #666;
  }
  .signup-link a {
    color: var(--main-color);
    text-decoration: none;
  }
  .signup-link a:hover {
    text-decoration: underline;
  }
`;

const InputField = styled.div`
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 3.5rem 0;
  input {
    width: 100%;
    padding: 0 0.5rem;
    height: 4rem;
    border: none;
    background: none;
    border-radius: 0.7rem 0.7rem 0 0;
    outline: none;
    &:disabled {
      background-color: var(--grey-200);
      color: var(--grey-300);
    }
  }
  label {
    position: absolute;
    top: 50%;
    left: 0.5rem;
    color: #adadad;
    transform: translateY(-50%);
    pointer-events: none;
    transition: all 0.5s;
  }
  span::before {
    content: "";
    position: absolute;
    top: 4rem;
    left: 0;
    width: 0%;
    height: 0.2rem;
    background: var(--main-color);
    transition: all 0.5s;
  }

  input:focus ~ label,
  input:active ~ label {
    top: -0.9rem;
    color: var(--main-color);
  }

  input:focus ~ span::before,
  input:active ~ span::before {
    width: 100%;
  }

  ${(props) =>
    props.$input &&
    css`
      span::before {
        width: 100%;
      }
      label {
        top: -0.9rem;
        color: var(--main-color);
      }
    `}
`;

const Button = styled.button`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  transition: all 0.3s;
  padding: 1.5rem 3.2rem;
  width: 100%;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  background: #ff4141;
  border: none;
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
  &:disabled {
    background: #ff2626;
  }
`;

function AuthForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !password) return;

    if (password.split("").length < 8) {
      toast.error("Password must be at least 8 characters long");
    } else if (
      password
        .split("")
        .map((num) => parseInt(num))
        .filter((value) => !Number.isNaN(value)).length <= 2
    ) {
      toast.error("Password must contain at least 3 digits");
    } else {
      setIsLoading(true);
      setTimeout(() => {
        toast.success(`Welcome back, ${name}`);
        dispatch(updateName(name));
        navigate("/cart");
        setName("");
        setPassword("");
      }, 1500);
    }
  }
  return (
    <StyledAuthFormSection>
      <StyledAuthForm>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <InputField $input={name}>
            <input
              disabled={isLoading}
              type="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <span></span>
            <label htmlFor="name">Name</label>
          </InputField>
          <InputField $input={password}>
            <input
              disabled={isLoading}
              type="Password"
              id="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span></span>
            <label htmlFor="password">Password</label>
          </InputField>
          <div className="pass">Forgot Password?</div>
          <Button disabled={isLoading}>
            {isLoading ? <Spinner $formSpinner={true} /> : "LOGIN"}
          </Button>
          <div className="signup-link">
            You don&apos;t have an account? <a href="#">Signup</a>
          </div>
        </Form>
      </StyledAuthForm>
    </StyledAuthFormSection>
  );
}

export default AuthForm;
