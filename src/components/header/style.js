import styled from "styled-components";

export const Container = styled.div`
  /* height: auto; */
  position: sticky;
  top: 0;
  background-color: var(--secColor);
  height: 11vh;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
  padding-left: 15px;
  align-items: center;
  color: var(--dark-teal);
  font-family: "semibold";
  border: 1px solid var(--secColor);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  z-index: 10;
  @media (max-width: 768px) {
    padding-right: 15px;
    padding-left: 0px;
  }
  @media (max-width: 480px) {
    padding-right: 7px;
  }
  .headertext {
    display: flex;
    align-items: center;
    gap: 3px;
    /* border: 1px solid black; */

    .burgerIcon {
      display: none;
      font-size: 20px;
      @media (max-width: 768px) {
        display: block;
        position: fixed;
        left: 3px;
        left: 15px;
        align-items: center;
        z-index: 1100;
        cursor: pointer;
      }
      @media (max-width: 650px) {
        left: 10px;
      }
      @media (max-width: 480px) {
        font-size: 17px;
      }
      @media (max-width: 320px) {
        font-size: 15px;
      }
    }

    @media (max-width: 768px) {
      padding-left: 25px;
    }
    @media (max-width: 650px) {
      padding-left: 20px;
    }
    @media (max-width: 480px) {
      padding-left: 13px;
    }
    h2 {
      color: var(--dark-teal);
      font-family: "semibold";
      padding-left: 15px;
      @media (max-width: 320px) {
        font-size: 17px;
      }
    }
  }
  .imgProfileDiv {
    display: flex;
    gap: 5px;
    align-items: center;
    font-family: "regular";
    font-weight: bold;
    /* border: 1px solid black; */
  }
  .imgDiv {
    height: 30px;
    width: 30px;
    /* border: 1px solid black; */
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 320px) {
      height: 25px;
      width: 25px;
    }
    .profileImg {
      border: 1px solid black;
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
    .placeholder {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      background-color: #006769;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
    }
  }

  .profile {
    cursor: pointer;
    border: none;
    font-family: "regular";
    color: var(--dark-teal);
    background-color: var(--secColor);
    font-weight: bold;
    font-size: 16px;
    @media (max-width: 320px) {
      font-size: 15px;
    }
  }
`;
