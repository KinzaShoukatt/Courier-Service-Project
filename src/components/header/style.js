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
  align-items: center; //verticallly center
  color: var(--dark-teal);
  font-family: "semibold";
  border: 1px solid var(--secColor);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  z-index: 10;
  @media (max-width: 768px) {
    padding-right: 15px;
  }
  @media (max-width: 480px) {
    padding-right: 7px;
  }
  .headertext {
    display: flex;
    align-items: center;
    gap: 3px;

    .burgerIcon {
      display: none;
      font-size: 20px;
      @media (max-width: 768px) {
        display: block;
        position: fixed;
        top: 18px;
        left: 15px;
        z-index: 1100;
        cursor: pointer;
      }
      @media (max-width: 650px) {
        left: 10px;
      }
      @media (max-width: 480px) {
        left: 5px;
        font-size: 17px;
        top: 19.5px;
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
    }
  }
  .profile {
    cursor: pointer;
  }
`;
