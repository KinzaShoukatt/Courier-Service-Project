import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--secColor);
  box-sizing: border-box;
  margin-block: 20px;
  border-radius: 10px;
  width: 70%;
  margin-inline: auto;
  padding-block: 35px;
  .errorMsg {
    color: red;
    font-family: "regular";
  }
  @media (max-width: 768px) {
    width: 85%;
  }
  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const Heading = styled.p`
  font-family: "semibold";
  color: var(--dark-teal);
  font-size: 35px;
  padding-left: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-inline: 30px;
  box-sizing: border-box;
  .imgDiv {
    height: 100px;
    width: 100px;
    border: 1px solid black;
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .profileImg {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
    .uploadIcon {
      position: absolute;
      bottom: 0;
      right: 0;
      background: white;
      border: 1px solid black;
      border-radius: 50%;
      padding: 6px;
      cursor: pointer;
      font-size: 18px;
    }
  }
  .inputFields {
    border: 1px solid var(--borderColor);
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 15px;
    border-radius: 8px;
    font-family: var("regular");
    margin-inline: 0px;
    margin: 8px 0px;
    input {
      font-family: "regular";
      border: none;
      font-size: 15px;
      outline: none;
      width: 100%;
    }
  }
  .btn {
    background-color: var(--dark-teal);
    font-family: "regular";
    font-size: 17px;
    font-weight: bold;
    color: var(--secColor);
    display: flex;
    justify-content: center;
    padding: 10px 15px;
    border: 2px solid var(--dark-teal);
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px;
    align-self: flex-end;
  }
`;
