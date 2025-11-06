import styled from "styled-components";
export const Container = styled.div`
  height: auto;
  margin-block: 3vw;
  margin-inline: 5vw;
  background-color: var(--secColor);
  border: 2px solid var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  text-align: center;
  justify-content: center;
  padding-block: 7vh;
  @media (max-width: 480px) {
    margin-inline: 2vw;
  }
`;

export const ImgDiv = styled.div`
  margin: auto;
  img {
    height: 120px;
    object-fit: cover;
    @media (max-width: 480px) {
      height: 100px;
    }
  }
`;
export const Heading = styled.p`
  color: var(--dark-teal);
  font-family: "semibold";
  padding: 10px 0px;
  font-size: 25px;
  @media (max-width: 480px) {
    font-size: 22px;
    padding-top: 2px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .errorMsg {
    color: red;
    font-family: "regular";
  }
  .inputFields {
    border: 1px solid var(--borderColor);
    margin: auto;
    width: 70%;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border-radius: 8px;
    /* margin-block: 13px; */
    .icon {
      font-size: 18px;
      @media (max-width: 480px) {
        font-size: 16px;
      }
    }
    input {
      border: none;
      font-size: 15px;
      outline: none;
      width: 90%;
      font-family: "regular";
      @media (max-width: 480px) {
        font-size: 13.5px;
      }
    }
  }
  .inputFields2 {
    border: 1px solid var(--borderColor);
    margin: auto;
    width: 70%;
    display: flex;
    padding: 10px;
    border-radius: 8px;
    /* margin-block: 13px; */
    justify-content: space-between;
    .passwordInput {
      display: flex;
      gap: 5px;
      align-items: center;
      input {
        border: none;
        font-size: 15px;
        outline: none;
        width: 90%;
        font-family: "regular";
        @media (max-width: 480px) {
          font-size: 13.5px;
        }
      }
    }
    .eyeIcon {
      align-items: center;
    }
  }
  .btn {
    background-color: var(--dark-teal);
    font-family: "regular";
    font-size: 17px;
    font-weight: bold;
    color: var(--secColor);
    padding: 9px;
    width: 74%;
    border: 2px solid var(--dark-teal);
    border-radius: 10px;
    margin-top: 3px;
    cursor: pointer;
    @media (max-width: 480px) {
      font-size: 15px;
      padding: 9px 10px;
      width: 75%;
    }
  }
`;
export const LastText = styled.div`
  p {
    margin-block: 10px;
    color: var(--dark-teal);
    font-family: "regular";
    @media (max-width: 480px) {
      font-size: 13.5px;
    }
    strong {
      cursor: pointer;
      color: var(--dark-teal);
    }
    a {
      text-decoration: none;
    }
  }
`;
