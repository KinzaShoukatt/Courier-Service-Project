import styled from "styled-components";

export const Heading = styled.p`
  color: var(--dark-teal);
  font-family: "semibold";
  font-size: 27px;
`;
export const Container = styled.div`
  box-sizing: border-box;
  margin-block: 15px;
  background-color: var(--secColor);
  border-radius: 10px;
  padding-block: 20px;
  padding-inline: 20px;
  font-family: "regular";
  display: flex;
  flex-direction: column;
  .subject {
    color: var(--dark-teal);
    font-weight: bold;
    display: flex;
    gap: 10px;
    text-align: center;
    font-size: 17px;
    padding-block: 10px;
    input {
      width: 100%;
      outline: none;
      border-bottom: 1px solid var(--borderColor);
      border-top: none;
      border-left: none;
      border-right: none;
      font-family: "regular";
      font-weight: bold;
    }
  }
  .trackingId {
    color: var(--dark-teal);
    font-weight: bold;
    gap: 10px;
    font-size: 17px;
    padding-block: 15px;
    input {
      width: 100%;
      box-sizing: border-box;
      font-family: "regular";
      margin-top: 5px;
      padding: 10px;
      outline: none;
      font-size: 15px;
      outline-color: 2px solid var(--borderColor);
      border: 1px solid var(--borderColor);
      border-radius: 10px;
    }
  }
  .description {
    color: var(--dark-teal);
    font-weight: bold;
    gap: 10px;
    font-size: 17px;
    padding-bottom: 15px;
    p {
      padding-bottom: 10px;
    }
    textarea {
      width: 100%;
      border: 1px solid var(--borderColor);
      /* outline-color: 1px solid var(--borderColor); */
      outline-style: 2px solid var(--borderColor);
      border-radius: 10px;
      box-sizing: border-box;
      padding: 10px;
      min-height: 20vh;
      min-width: 100%;
      max-width: 100%;
      font-family: "regular";
    }
  }
  .submitBtn {
    background-color: var(--dark-teal);
    color: var(--secColor);
    border: none;
    align-self: flex-end;
    font-family: "regular";
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
  }
`;
