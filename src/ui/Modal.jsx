import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled, { css } from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  ${(props) =>
    props.$orderWindow &&
    css`
      box-shadow: var(--shadow-md);
    `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1000;
  ${(props) =>
    props.$orderWindow &&
    css`
      /* background: #fcfcfc; */
      backdrop-filter: blur(50px);
    `}
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;
  &:hover {
    background-color: var(--grey-200);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  order,
  opens: opensWindowName,
  outsideFunction,
  confirm,
  setIsLoading,
}) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: confirm
      ? outsideFunction
      : () => {
          if (order) {
            setIsLoading(true);
            setTimeout(() => {
              open(opensWindowName);
              setIsLoading(false);
            }, 1000);
          } else {
            open(opensWindowName);
          }
        },
  });
}

function Window({ orderWindow, name, children }) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClick(close);

  if (name !== openName) return null;
  return createPortal(
    <Overlay $orderWindow={orderWindow}>
      <StyledModal $orderWindow={orderWindow} ref={!orderWindow ? ref : null}>
        {orderWindow ? null : (
          <Button onClick={close}>
            <HiXMark />
          </Button>
        )}
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
