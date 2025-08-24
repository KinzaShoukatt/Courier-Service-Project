import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--secColor);
  box-sizing: border-box;
  margin-block: 40px;
  border-radius: 10px;
  min-height: 77vh;
  align-content: center;
  width: 70vw;
  margin-inline: auto;
  padding-block: 35px;
  @media (max-width: 768px) {
    width: 85vw;
  }
  @media (max-width: 480px) {
    width: 90vw;
  }
`;

export const Heading = styled.h1`
  font-family: "semibold";
  text-align: center;
  color: var(--dark-teal);
  font-size: 40px;
`;

export const Form = styled.form`
  .inputFields {
    border: 1px solid var(--borderColor);
    margin: auto;
    width: 60%;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 15px;
    border-radius: 8px;
    font-family: var("regular");
    margin-block: 13px;
    @media (max-width: 768px) {
      width: 70%;
    }
    @media (max-width: 480px) {
      width: 75%;
    }
    input {
      font-family: "regular";
      border: none;
      font-size: 15px;
      outline: none;
      width: 90%;
    }
  }
  .btn {
    background-color: var(--dark-teal);
    font-family: "regular";
    margin: auto;
    font-size: 17px;
    font-weight: bold;
    color: var(--secColor);
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 12px;
    width: 63.5%;
    border: 2px solid var(--dark-teal);
    border-radius: 10px;
    cursor: pointer;
    margin-top: 15px;
  }
`;
