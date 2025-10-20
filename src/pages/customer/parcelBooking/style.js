import styled from "styled-components";

export const Container = styled.div`
  min-height: 85vh;
  background-color: var(--secColor);
  border-radius: 10px;
  margin-inline: 15px;

  @media (max-width: 768px) {
    margin-inline: 0px;
  }
  .errorMsg {
    color: red;
    font-family: "regular";
  }
  .heading {
    text-align: center;
    background-color: var(--dark-teal);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-block: 12px;
    color: var(--secColor);
    font-family: "regular";
  }
  .firstLine {
    font-weight: bold;
  }
  form {
    padding-block: 10px;
    padding-inline: 3vw;
    color: var(--dark-teal);
    box-sizing: border-box;
    .heading {
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
      gap: 20px;
      align-items: center;
      padding-block: 10px;
      border-bottom: 1px solid var(--borderColor);
      .icon {
        font-size: 22px;
      }
    }
    .inputFields {
      box-sizing: border-box;
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
        input,
        select {
          box-sizing: border-box;
          width: 100%;
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
        textarea {
          width: calc(100% - 15px);
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
      gap: 50px;
      font-size: 20px;
      font-family: "regular";
      padding-block: 10px;
      .radioChilds {
        display: flex;
        gap: 3px;
        align-items: center;
        input[type="radio"] {
          font-size: 50px;
          height: 17px;
          width: 17px;
          accent-color: var(--dark-teal);
          cursor: pointer;
        }
        label {
          cursor: pointer;
        }
      }
    }
    label {
      font-size: 18px;
      font-family: "regular";
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
