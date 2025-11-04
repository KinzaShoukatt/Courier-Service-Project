import styled from "styled-components";

export const Heading = styled.p`
  color: var(--dark-teal);
  font-family: "semibold";
  font-size: 27px;
`;
export const Container = styled.div`
  position: relative;
`;

export const WeightParent = styled.div`
  box-sizing: border-box;
  margin-block: 15px;
  background-color: var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(21, 21, 21, 0.5);
  .heading {
    font-size: 22px;
    background-color: var(--dark-teal);
    color: var(--secColor);
    font-weight: bold;
    font-family: "regular";
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-block: 12px;
    font-weight: bold;
    padding-left: 20px;
    @media (max-width: 520px) {
      font-size: 18px;
    }
  }
  form {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-inline: 10px;
    .errorMsg {
      color: red;
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
        font-size: 17px;
        color: var(--dark-teal);
        @media (max-width: 520px) {
          font-size: 16px;
        }
      }
      input {
        box-sizing: border-box;
        width: 100%;
        border: 1px solid var(--borderColor);
        font-family: "regular";
        font-size: 14px;
        border-radius: 5px;
        padding: 12px 10px;
        outline-color: var(--borderColor);
        margin-block: 10px;
        @media (max-width: 520px) {
          font-size: 13px;
          margin-block: 5px;
        }
        @media (max-width: 480px) {
          margin-block: 2px;
        }
      }
    }
  }
  .btn {
    display: flex;
    justify-content: flex-end;
    margin: 5px 0px;
    .addBtn {
      padding: 12px 15px;
      margin-block: 10px;
      border-radius: 8px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "regular";
      background-color: var(--dark-teal);
      color: var(--secColor);
      font-size: 15px;
      cursor: pointer;
      @media (max-width: 520px) {
        margin-top: 0px;
        font-size: 13.5px;
      }
    }
  }
`;

export const Table = styled.div`
  box-sizing: border-box;
  margin-block: 15px;
  background-color: var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(21, 21, 21, 0.5);
  position: relative;
  .heading {
    font-size: 22px;
    background-color: var(--dark-teal);
    color: var(--secColor);
    font-weight: bold;
    font-family: "regular";
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-block: 12px;
    font-weight: bold;
    padding-left: 20px;
    @media (max-width: 520px) {
      font-size: 18px;
    }
  }
  .tableDiv {
    margin-inline: 10px;
    overflow-x: auto;

    table {
      width: 100%;
      box-sizing: border-box;
      margin-block: 15px;
      border-collapse: collapse;
      font-family: "regular";
      color: var(--textColor);

      th,
      td {
        padding: 12px;
        text-align: left;
        width: 20%;
      }
      th {
        color: var(--dark-teal);
        background: var(--priColor);
        @media (max-width: 520px) {
          font-size: 13.5px;
        }
      }
      tr {
        border-bottom: 1px solid var(--borderColor);
        @media (max-width: 520px) {
          font-size: 13.5px;
        }
      }

      .btns {
        display: flex;
        gap: 6px;
        .btn1 {
          background-color: var(--dark-teal);
          color: var(--secColor);
          font-size: 18px;
          border: none;
          padding: 4px 8px;
          border-radius: 5px;
          cursor: pointer;
          gap: 3px;
          @media (max-width: 520px) {
            font-size: 15px;
          }
        }
        .btn2 {
          background-color: #dc3545;
          border: none;
          font-size: 18px;
          padding: 4px 8px;
          border-radius: 5px;
          cursor: pointer;
          gap: 3px;
          @media (max-width: 520px) {
            font-size: 15px;
          }
        }
      }
    }
  }
`;

export const FormDiv = styled.div`
  font-family: "regular";
  color: var(--dark-teal);
  width: 60%;
  background-color: var(--priColor);
  border-radius: 10px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.3);
  z-index: 1;
  form {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .errorMsg {
      color: red;
    }
  }
  .heading {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-family: "semibold";
    border-bottom: 1px solid var(--borderColor);
    padding-inline: 15px;
    align-items: center;
    @media (max-width: 520px) {
      font-size: 18px;
    }
  }
  .parentInput {
    padding-inline: 15px;
  }
  .inputFields {
    box-sizing: border-box;
    font-family: "regular";
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding-block: 10px;
    .childs {
      flex: 1;
      min-width: 200px;
      label {
        font-size: 17px;
        color: var(--dark-teal);
        @media (max-width: 520px) {
          font-size: 16px;
        }
      }
      input {
        box-sizing: border-box;
        width: 100%;
        border: 1px solid var(--borderColor);
        font-family: "regular";
        font-size: 14px;
        border-radius: 5px;
        padding: 12px 10px;
        outline-color: var(--borderColor);
        margin-block: 10px;
        @media (max-width: 520px) {
          font-size: 13px;
          margin-block: 5px;
        }
        @media (max-width: 480px) {
          margin-block: 2px;
        }
      }
    }
  }
  .btn {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    .addBtn {
      padding: 12px 15px;
      border-radius: 8px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "regular";
      background-color: var(--dark-teal);
      color: var(--secColor);
      font-size: 15px;
      cursor: pointer;
    }
  }
`;

export const AgentPricing = styled.div`
  box-sizing: border-box;
  margin-block: 15px;
  background-color: var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(21, 21, 21, 0.5);
  .errorMsg {
    color: red;
  }
  .heading {
    font-size: 22px;
    background-color: var(--dark-teal);
    color: var(--secColor);
    font-weight: bold;
    font-family: "regular";
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-block: 12px;
    font-weight: bold;
    padding-left: 20px;
    @media (max-width: 520px) {
      font-size: 18px;
    }
  }
  form {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-inline: 10px;
  }
  .inputFeild {
    flex: 1;
    min-width: 160px;
    font-family: "regular";
    color: var(--dark-teal);
    font-weight: bold;
    input {
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      margin-top: 5px;
      font-family: "regular";
      outline-color: var(--borderColor);
      border: 1px solid var(--borderColor);
      border-radius: 5px;
      background-color: var(--secColor);
      @media (max-width: 520px) {
        font-size: 13px;
      }
    }
  }
  .btn {
    display: flex;
    justify-content: flex-end;
    margin: 5px 0px;
    .addAgentBtn {
      padding: 12px 15px;
      margin-block: 10px;
      border-radius: 8px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "regular";
      background-color: var(--dark-teal);
      color: var(--secColor);
      font-size: 15px;
      cursor: pointer;
      @media (max-width: 520px) {
        padding: 10px 12px;
        font-size: 13.5px;
        margin-top: 5px;
      }
    }
  }
`;

export const AgentPricingTable = styled.div`
  box-sizing: border-box;
  margin-block: 15px;
  background-color: var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(21, 21, 21, 0.5);

  .heading {
    font-size: 22px;
    background-color: var(--dark-teal);
    color: var(--secColor);
    font-weight: bold;
    font-family: "regular";
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-block: 12px;
    font-weight: bold;
    padding-left: 20px;
    @media (max-width: 520px) {
      font-size: 18px;
    }
  }
  .tableDiv {
    margin-inline: 10px;
    overflow-x: auto;

    table {
      width: 100%;
      box-sizing: border-box;
      margin-block: 10px;
      border-collapse: collapse;
      font-family: "regular";
      color: var(--textColor);

      th,
      td {
        padding: 12px;
        text-align: left;
        width: 20%;
      }
      th {
        color: var(--dark-teal);
        background: var(--priColor);
        @media (max-width: 520px) {
          font-size: 13.5px;
        }
      }
      tr {
        border-bottom: 1px solid var(--borderColor);
        @media (max-width: 520px) {
          font-size: 13.5px;
        }
      }
      .btn1 {
        background-color: var(--dark-teal);
        color: var(--secColor);
        border: none;
        padding: 4px 8px;
        border-radius: 5px;
        cursor: pointer;
        gap: 3px;
        font-size: 18px;
        @media (max-width: 520px) {
          font-size: 15px;
        }
      }
    }
  }
`;
