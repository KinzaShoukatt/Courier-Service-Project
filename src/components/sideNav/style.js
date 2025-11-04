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
  width: 240px;
  .closeBtn {
    display: none;
  }
  @media (max-width: 768px) {
    width: 200px;
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
      flex-wrap: nowrap;
      overflow: hidden;
      p {
        margin: 0;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1;
      }
    }
    .items.active {
      background-color: rgba(255, 255, 255, 0.1);
      border-left: 3px solid #ffffff;
      border-radius: 4px;
      box-sizing: border-box;
    }
    .icon {
      font-size: 18px;
    }
  }
`;
