import styled from "styled-components";

export const Container = styled.div`
  color: var(--secColor);
  font-family: "regular";
  box-sizing: border-box;
  .closeBtn {
    display: none;
  }
  @media (max-width: 768px) {
    .closeBtn {
      display: block;
      text-align: right;
      padding-top: 10px;
      padding-right: 10px;
      cursor: pointer;
    }
  }
  .ImgDiv {
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-left: 20%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .parentDiv {
    padding-block: 30px;
    padding-inline: 15px;
    .items {
      display: flex;
      align-items: center;
      gap: 7px;
      line-height: 2.7;
      cursor: pointer;
    }
    .icon {
      font-size: 18px;
    }
    @media (max-width: 1080px) {
      p {
        font-size: 12px;
      }
      .icon {
        font-size: 14px;
      }
    }
    @media (max-width: 849px) {
      p {
        font-size: 10px;
      }
      .icon {
        font-size: 12px;
      }
    }
  }
`;
