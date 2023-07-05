import { styled } from "styled-components";

export const Modal = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: aqua;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.2;
  position: fixed;
  width: 100vw;
  height: 100vh;
`;
