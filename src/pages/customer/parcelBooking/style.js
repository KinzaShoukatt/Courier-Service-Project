import styled from "styled-components";

export const Container = styled.div`
  min-height: 85vh;
  background-color: var(--secColor);
  border-radius: 10px;
  margin-inline: 15px;
  @media (max-width: 768px) {
    margin-inline: 0px;
  }

  form {
    padding-block: 10px;
    padding-inline: 3vw;
    color: var(--dark-teal);
    .heading {
      text-align: center;
      h1 {
        font-family: "semibold";
      }
      p {
        font-family: "regular";
      }
    }
    .boldText {
      font-family: "semibold";
      display: flex;
      gap: 3px;
      align-items: center;
      padding-block: 10px;
      border-bottom: 1px solid var(--borderColor);
      .icon {
        font-size: 22px;
      }
    }
    .inputFields {
      font-family: "regular";
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding-block: 10px;
      @media (max-width: 480px) {
        gap: 7px;
      }
      .childs {
        flex: 1;
        min-width: 200px;
        label {
          font-size: 18px;
        }
        input {
          width: calc(100% - 15px);
          object-fit: cover;
          border: 1px solid var(--borderColor);
          font-family: "regular";
          font-size: 15px;
          border-radius: 5px;
          padding: 13px 10px;
          outline-color: var(--borderColor);
          margin-block: 10px;
          @media (max-width: 480px) {
            margin-block: 2px;
          }
        }
      }
    }
    .radioInputFields {
      display: flex;
      gap: 20px;
      font-size: 20px;
      font-family: "regular";
      padding-block: 10px;
      .radioChilds {
        display: flex;
        gap: 3px;
        input {
          font-size: 50px;
        }
      }
    }
    .dateTime {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      font-family: "regular";
      padding-block: 10px;
      /* display: none; */
      @media (max-width: 480px) {
        gap: 7px;
      }
      .dateTimeChilds {
        flex: 1;
        min-width: 200px;
        label {
          font-size: 18px;
        }
        input {
          width: calc(100% - 15px);
          object-fit: cover;
          border: 1px solid var(--borderColor);
          font-family: "regular";
          font-size: 15px;
          border-radius: 5px;
          padding: 13px 10px;
          margin-block: 10px;
          color: grey;
          @media (max-width: 480px) {
            margin-block: 3px;
          }
        }
      }
    }
    button {
      background-color: var(--dark-teal);
      border: none;
      color: var(--secColor);
      font-weight: 400;
      font-family: "regular";
      font-size: 18px;
      padding: 10px 35px;
      border-radius: 8px;
      margin-top: 15px;
      cursor: pointer;
      @media (max-width: 480px) {
        padding: 10px 28px;
      }
    }
  }
`;
