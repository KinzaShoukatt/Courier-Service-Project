import styled from "styled-components";

export const Container = styled.div`
  color: var(--secColor);
  font-family: "regular";
  box-sizing: border-box;
  position: fixed;
  overflow-y: auto;
  height: 100vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  height: 100%;
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
    /* padding-top: 10px; */
    /* padding-left: 20%; */
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .parentDiv {
    padding-block: 20px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    .items {
      display: flex;
      align-items: center;
      /* align-items: flex-start; */
      flex-wrap: wrap;
      gap: 7px;
      line-height: 2.7;
      width: 100%;
      box-sizing: border-box;
      cursor: pointer;
      padding: 5px 15px;
      flex-wrap: wrap;
    }
    .item p {
      max-width: 150px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .items.active {
      width: 100%;
      background-color: rgba(255, 255, 255, 0.1);
      border-left: 3px solid #ffffff;
      border-radius: 4px;
      box-sizing: border-box;
      overflow-x: hidden;
    }

    .icon {
      font-size: 18px;
    }
    @media (max-width: 1080px) {
      p {
        font-size: 12px;
        max-width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .icon {
        font-size: 14px;
      }
    }
    @media (max-width: 849px) {
      p {
        font-size: 10px;
        max-width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .icon {
        font-size: 12px;
      }
    }
  }
`;
