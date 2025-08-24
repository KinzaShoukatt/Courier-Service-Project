import styled from "styled-components";

export const Container = styled.div`
  /* height: auto; */
  position: sticky;
  top: 0;
  background-color: var(--secColor);
  height: 10vh;
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
  .burgerIcon {
    display: none;
    font-size: 20px;
    @media (max-width: 768px) {
      display: block;
      position: fixed;
      top: 17px;
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
    }
  }

  @media (max-width: 768px) {
    padding-left: 40px;
    padding-right: 20px;
  }
  @media (max-width: 650px) {
    padding-left: 35px;
    padding-right: 15px;
  }
  @media (max-width: 480px) {
    padding-left: 25px;
    padding-right: 7px;
  }
  .tracking {
    display: flex;
    border: 2px solid var(--priColor);
    padding: 6px 7px;
    width: 25%;
    gap: 3px;
    background-color: var(--priColor);
    border-radius: 5px;
    @media (max-width: 768px) {
      width: 30%;
    }
    @media (max-width: 550px) {
      width: 35%;
    }
    @media (max-width: 430px) {
      width: 38%;
    }
    @media (max-width: 380px) {
      width: 40%;
    }
    input {
      background-color: var(--priColor);
      border: none;
      outline: none;
      width: 90%;
      font-family: "regular";
    }
  }
  .profile {
    cursor: pointer;
  }
`;
