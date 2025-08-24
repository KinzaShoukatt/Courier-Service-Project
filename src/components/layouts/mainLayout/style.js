import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
`;

export const LeftDiv = styled.div`
  width: 18%;
  min-height: 100vh;
  background-color: var(--dark-teal);
  box-sizing: border-box;
  display: block;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: -200px;
    width: 200px;
    min-height: 100vh;
    transition: left 0.4s ease-in-out;
    z-index: 1000;
  }
  &.open {
    left: 0;
  }
`;

export const RightDiv = styled.div`
  width: calc(100% - 18%);
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Main = styled.div`
  box-sizing: border-box;
  margin: 15px 20px;
`;
