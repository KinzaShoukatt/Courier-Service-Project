import styled from "styled-components";
export const Container = styled.div`
  font-family: "regular";
  height: auto;
  background-color: var(--secColor);
  margin-block: 3vw;
  margin-inline: 5vw;
  border: 2px solid var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  text-align: center;
  justify-content: center;
  padding-block: 9vh;
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
export const Para = styled.p`
  font-family: "semibold";
  strong {
    color: var(--dark-teal);
    font-family: "regular";
  }
`;
export const Form = styled.form`
  .errorMsg {
    color: red;
  }
  .inputFields {
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-block: 20px;
    @media (max-width: 480px) {
      margin-block: 15px;
    }
    .box {
      height: 35px;
      width: 28px;
      border: 2px solid var(--dark-teal);
      border-radius: 10px;
      font-family: "regular";
      text-align: center;
    }
  }
  .time {
    color: var(--dark-teal);
    font-family: "regular";
    font-weight: 700;
  }
  .btn {
    background-color: var(--dark-teal);
    font-family: "regular";
    font-size: 17px;
    font-weight: bold;
    color: var(--secColor);
    padding: 9px 10px;
    width: 74%;
    border: 2px solid var(--dark-teal);
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px;
    @media (max-width: 480px) {
      font-size: 15px;
    }
  }
`;

export const LastText = styled.div`
  p {
    margin-block: 10px;
    color: var(--dark-teal);
    margin-top: 10px;
    font-family: "regular";
    @media (max-width: 480px) {
      font-size: 13.5px;
    }
    strong {
      font-weight: bold;
      cursor: pointer;
      padding-left: 3px;
      color: var(--dark-teal);
    }
    a {
      text-decoration: none;
    }
  }
`;
