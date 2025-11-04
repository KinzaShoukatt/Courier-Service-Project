import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  position: relative;
`;

export const LeftDiv = styled.div`
  width: 240px;
  min-height: 100vh;
  background-color: var(--dark-teal);
  box-sizing: border-box;
  display: block;
  position: relative;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 200px;
    display: block;
    position: fixed;
    top: 0;
    left: -300px;
    min-height: 100vh;
    transition: left 0.4s ease-in-out;
    z-index: 1000;
  }
  &.open {
    left: 0;
  }
`;

export const RightDiv = styled.div`
  position: relative;
  width: calc(100% - 240px);
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Main = styled.div`
  box-sizing: border-box;
  margin: 15px 20px;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;
