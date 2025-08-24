import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
`;
export const CoverImage = styled.div`
  width: 50%;
  position: relative;
  min-height: 100vh;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }
  @media (max-width: 768px) {
    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 128, 128, 0.5);
    z-index: 1;
  }
  .whiteLogo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    img {
      width: 25%;
      height: 22%;
      object-fit: contain;
    }
  }
`;

export const Main = styled.div`
  width: 50%;
  min-height: 100vh;
  align-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
