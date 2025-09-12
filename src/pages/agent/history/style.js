import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  p {
    font-family: "semibold";
    color: var(--dark-teal);
    font-size: 25px;
  }
`;
export const PastDeliveries = styled.div`
  box-sizing: border-box;
  background-color: var(--secColor);
  border-radius: 10px;
  margin-block: 15px;
  font-family: "regular";
  color: var(--dark-teal);
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  .heading {
    font-size: 22px;
    box-sizing: border-box;
    background-color: var(--dark-teal);
    color: var(--secColor);
    margin-bottom: 10px;
    font-weight: bold;
    font-family: "regular";
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-block: 12px;
    font-weight: bold;
    padding-left: 20px;
  }

  .AssignedDeliveryTable {
    padding-inline: 10px;
    overflow-x: auto;
    table {
      width: 100%;
      margin-block: 10px;
      font-family: "regular";
      border-collapse: collapse;
      text-align: left;
      color: var(--textColor);
      th,
      td {
        padding: 12px;
      }
      th {
        background-color: var(--priColor);
        color: var(--dark-teal);
      }
      tr {
        border-bottom: 1px solid var(--borderColor);
        white-space: nowrap;
      }
      .action {
         background-color: var(--dark-teal);
          color: var(--secColor);
          border: none;
          font-family: "regular";
          font-weight: bold;
          padding: 8px 10px;
          border-radius: 5px;
          cursor: pointer;
          gap: 3px; 
      }
    }
  }
`;

export const Earnings = styled.div`
  box-sizing: border-box;
  background-color: var(--secColor);
  border-radius: 10px;
  margin-block: 15px;
  font-family: "regular";
  color: var(--dark-teal);
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  .heading {
    font-size: 22px;
    box-sizing: border-box;
    background-color: var(--dark-teal);
    color: var(--secColor);
    margin-bottom: 10px;
    font-weight: bold;
    font-family: "regular";
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-block: 12px;
    font-weight: bold;
    padding-left: 20px;
  }

  .AssignedDeliveryTable {
    padding-inline: 10px;
    overflow-x: auto;
    table {
      width: 100%;
      margin-block: 10px;
      font-family: "regular";
      border-collapse: collapse;
      text-align: left;
      color: var(--textColor);
      th,
      td {
        padding: 12px;
      }
      th {
        background-color: var(--priColor);
        color: var(--dark-teal);
      }
      tr {
        border-bottom: 1px solid var(--borderColor);
        white-space: nowrap;
      }
      .action {
          background-color: var(--dark-teal);
          color: var(--secColor);
          border: none;
          font-family: "regular";
          font-weight: bold;
          padding: 8px 10px;
          border-radius: 5px;
          cursor: pointer;
          gap: 3px;
      }
    }
  }
`;
