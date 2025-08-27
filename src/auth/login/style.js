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
    padding: 10px;
    border-radius: 8px;
    margin-block: 13px;
    align-items: center;
    input {
      border: none;
      font-size: 15px;
      outline: none;
      width: 90%;
      font-family: "regular";
    }
  }
  .inputFields2 {
    border: 1px solid var(--borderColor);
    margin: auto;
    width: 70%;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    margin-block: 13px;
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
      }
    }
    .eyeIcon {
      align-items: center;
    }
  }
  p {
    color: var(--dark-teal);
    font-family: "regular";
    cursor: pointer;
    width: 72%;
    text-align: left;
    margin: auto;
  }
  .btn{
     background-color: var(--dark-teal);
    font-family: "regular";
    font-size: 17px;
    font-weight: bold;
    color: var(--secColor);
    padding: 9.5px 10px;
    width: 74%;
    border: 2px solid var(--dark-teal);
    border-radius: 10px;
    margin: 10px;
    cursor: pointer;
  }
  .btn1 {
    background-color: var(--dark-teal);
    font-family: "regular";
    font-size: 17px;
    font-weight: bold;
    color: var(--secColor);
    padding: 7px 10px;
    width: 74%;
    border: 2px solid var(--dark-teal);
    border-radius: 10px;
    margin: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-inline: auto;
    @media (max-width: 858px) {
      font-size: 14px;
      padding: 9px 10px;
    }
   
    img{
      height: 30px;
      width: 30px;
      align-items: center;
      @media (max-width: 858px) {
       height: 25px;
      width: 25px;
    }
    }
  }
  
  .or{
    text-align: center;
    font-weight: bold;
    align-items: center;
  }
`;
export const LastText = styled.div`
  p {
    margin-block: 10px;
    color: var(--dark-teal);
    font-family: "regular";
    strong {
      cursor: pointer;
      color: var(--dark-teal);
    }
    a {
      text-decoration: none;
    }
  }
`;
