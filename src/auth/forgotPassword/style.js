import styled from "styled-components";
export const Container = styled.div`
  box-sizing: border-box;
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
`;

export const ImgDiv = styled.div`
  margin: auto;
  img {
    height: 120px;
    object-fit: cover;
  }
`;
export const Heading = styled.h1`
  color: var(--dark-teal);
  font-family: "semibold";
  padding: 10px 0px;
`;
export const Form = styled.form`
  .inputFields {
    border: 1px solid var(--borderColor);
    margin: auto;
    width: 70%;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 12px;
    align-items: center;
    border-radius: 8px;
    margin-block: 13px;
    input {
      border: none;
      font-size: 15px;
      outline: none;
      width: 90%;
      font-family: "regular";
    }
  }
  .btn {
    background-color: var(--dark-teal);
    font-size: 17px;
    font-weight: bold;
    color: var(--secColor);
    padding: 12px 10px;
    width: 75%;
    border: 2px solid var(--dark-teal);
    border-radius: 10px;
    cursor: pointer;
    @media (max-width: 510px) {
      width: 76%;
    }
    @media (max-width: 470px) {
      width: 77%;
    }
  }
`;
export const LastText = styled.div`
  p {
    font-family: "regular";
    margin-block: 10px;
    color: var(--dark-teal);
    margin-top: 15px;
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
