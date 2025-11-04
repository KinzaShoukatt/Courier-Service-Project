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
    font-size: 15px;
    @media (max-width: 520px) {
      font-size: 14px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
    }
    @media (max-width: 340px) {
      font-size: 10px;
    }
  }
  .firstLine {
    font-weight: bold;
  }
  form {
    padding-block: 10px;
    padding-inline: 3vw;
    color: var(--dark-teal);
    box-sizing: border-box;
    @media (max-width: 420px) {
      padding-block: 5px;
    }
    .boldText {
      font-family: "semibold";
      display: flex;
      gap: 8px;
      align-items: center;
      padding-block: 10px;
      border-bottom: 1px solid var(--borderColor);
      @media (max-width: 340px) {
        gap: 5px;
      }
      .icon {
        font-size: 22px;
        @media (max-width: 340px) {
          font-size: 18px;
        }
      }
      .headings {
        font-size: 20px;
        @media (max-width: 420px) {
          font-size: 18px;
        }
        @media (max-width: 340px) {
          font-size: 15px;
        }
      }
    }
    .inputFields {
      box-sizing: border-box;
      font-family: "regular";
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding-block: 10px;
      @media (max-width: 520px) {
        gap: 7px;
      }
      .childs {
        flex: 1;
        min-width: 200px;
        label {
          font-size: 17.5px;
          @media (max-width: 520px) {
            font-size: 16.5px;
          }
          @media (max-width: 420px) {
            font-size: 15px;
          }
          @media (max-width: 340px) {
            font-size: 14px;
          }
        }
        input,
        select {
          box-sizing: border-box;
          width: 100%;
          border: 1px solid var(--borderColor);
          font-family: "regular";
          font-size: 15px;
          border-radius: 5px;
          padding: 12px 10px;
          outline-color: var(--borderColor);
          margin-block: 10px;
          @media (max-width: 520px) {
            margin-block: 3px;
            font-size: 13.5px;
          }
          @media (max-width: 420px) {
            font-size: 12.5px;
          }
          @media (max-width: 340px) {
            font-size: 11.5px;
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
          @media (max-width: 520px) {
            margin-block: 2px;
            font-size: 13.5px;
          }
          @media (max-width: 420px) {
            font-size: 12.5px;
          }
          @media (max-width: 340px) {
            font-size: 11.5px;
          }
        }
      }
    }

    .radioInputFields {
      display: flex;
      gap: 50px;
      font-size: 20px;
      font-family: "regular";
      padding-top: 10px;
      @media (max-width: 420px) {
        flex-direction: column;
        font-size: 15px;
        gap: 10px;
      }
      @media (max-width: 340px) {
        font-size: 14px;
      }

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
          font-size: 18px;
          font-family: "regular";
          @media (max-width: 520px) {
            font-size: 16.5px;
          }
          @media (max-width: 420px) {
            font-size: 15px;
          }
          @media (max-width: 340px) {
            font-size: 14px;
          }
        }
      }
    }
    .specialLabel {
      font-size: 18px;
      font-family: "regular";
      font-weight: bold;
      @media (max-width: 520px) {
        font-size: 16.5px;
      }
      @media (max-width: 420px) {
        font-size: 15px;
      }
      @media (max-width: 340px) {
        font-size: 14px;
      }
    }

    .dateTime {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      font-family: "regular";
      padding-block: 10px;
      @media (max-width: 520px) {
        gap: 14px;
      }
      @media (max-width: 420px) {
        gap: 7px;
      }
      .dateTimeChilds {
        flex: 1;
        min-width: 200px;

        label {
          font-size: 18px;
          @media (max-width: 520px) {
            font-size: 16.5px;
          }
          @media (max-width: 420px) {
            font-size: 15px;
          }
          @media (max-width: 340px) {
            font-size: 14px;
          }
        }
        input {
          width: calc(100% - 15px);
          object-fit: cover;
          border: 1px solid var(--borderColor);
          font-family: "regular";
          font-size: 15px;
          border-radius: 5px;
          padding: 10px 10px;
          margin-block: 10px;
          color: grey;
          @media (max-width: 520px) {
            margin-block: 3px;
            font-size: 13.5px;
          }
          @media (max-width: 420px) {
            font-size: 12.5px;
          }
          @media (max-width: 340px) {
            font-size: 11.5px;
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
      margin-top: 12px;
      cursor: pointer;
      @media (max-width: 520px) {
        padding: 10px 25px;
        font-size: 16.5px;
        margin-top: 10px;
      }
      @media (max-width: 420px) {
        font-size: 15px;
        padding: 10px 20px;
      }
      @media (max-width: 340px) {
        font-size: 14px;
        padding: 8px 18px;
      }
    }
  }
`;
