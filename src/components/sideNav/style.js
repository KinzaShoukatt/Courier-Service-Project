import styled from "styled-components";

export const Container = styled.div`
  color: var(--secColor);
  font-family: "regular";
  box-sizing: border-box;
  position: fixed;
  overflow-y: auto;
  top: 0;
  height: 100vh;
  -ms-overflow-style: none;
  scrollbar-width: none;  
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
      .items.active{
        /* margin-inline: 0px; */
        width: 100%;
         background-color: rgba(255, 255, 255, 0.1); 
    border-left: 3px solid #ffffff; 
    border-radius: 4px; 
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
