import styled from "styled-components";

export const Heading = styled.p`
  color: var(--dark-teal);
  font-family: "semibold";
  font-size: 27px;
`;
export const Container = styled.div``;

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
    }
  }
`;

export const Table = styled.div`
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
  }
  .tableDiv {
    margin-inline: 10px;
    overflow-x: auto;

    table {
      width: 100%;
      box-sizing: border-box;
      margin-block: 20px;
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
      }
      tr {
        border-bottom: 1px solid var(--borderColor);
      }

      .btns {
        display: flex;
        gap: 6px;
        .btn1 {
          background-color: var(--dark-teal);
          color: var(--secColor);
          border: none;
          padding: 4px 8px;
          border-radius: 5px;
          cursor: pointer;
          gap: 3px;
        }
        .btn2 {
          background-color: #dc3545;
          border: none;
          padding: 4px 8px;
          border-radius: 5px;
          cursor: pointer;
          gap: 3px;
        }
      }
    }
  }
`;
export const AgentPricing = styled.div`
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
  }
  .tableDiv {
    margin-inline: 10px;
    overflow-x: auto;

    table {
      width: 100%;
      box-sizing: border-box;
      margin-block: 20px;
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
      }
      tr {
        border-bottom: 1px solid var(--borderColor);
      }
      .btn1 {
        background-color: var(--dark-teal);
        color: var(--secColor);
        border: none;
        padding: 4px 8px;
        border-radius: 5px;
        cursor: pointer;
        gap: 3px;
      }
    }
  }
`;
