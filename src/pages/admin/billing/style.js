import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  .mainHeading {
    margin-bottom: 20px;
    color: var(--dark-teal);
    font-family: "semibold";
    font-size: 25px;
  }
`;
export const PaymentCards = styled.div`
  color: var(--dark-teal);
  font-family: "regular";
  /* padding-bottom: 12px; */
  .cardParent {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    .card {
      background-color: var(--secColor);
      align-items: center;
      padding-block: 20px;
      padding-inline: 25px;
      border-radius: 8px;
      box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
      line-height: 1.8;
      .para1 {
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
`;
export const PaymentsTable = styled.div`
  font-family: "regular";
  color: var(--dark-teal);
  background-color: var(--secColor);
  border-radius: 10px;
  box-sizing: border-box;
  margin-block: 15px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  .heading {
    font-size: 22px;
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
  .paymentTable {
    padding-inline: 10px;
    .filters {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 10px;
      margin-block: 15px;
      width: 100%;
      min-width: 100%;
      box-sizing: border-box;
      .inputs {
        width: 100%;
        min-width: 160px;
        overflow-x: auto;
        label {
          color: var(--dark-teal);
          font-family: "regular";
          font-weight: bold;
        }
        select {
          width: 100%;
          padding: 10px;
          margin-block: 5px;
          box-sizing: border-box;
          font-family: "regular";
          border: 1px solid var(--borderColor);
          border-radius: 5px;
          outline-color: var(--borderColor);
          cursor: pointer;
          flex-shrink: 0;
        }
        input {
          width: 100%;
          padding: 10px;
          margin-block: 5px;
          box-sizing: border-box;
          font-family: "regular";
          border: 1px solid var(--borderColor);
          border-radius: 5px;
          outline-color: var(--borderColor);
          cursor: pointer;
          flex-shrink: 0;
        }
      }
    }
    .tableDiv{
      overflow-x: auto;
    }
    table {
      width: 100%;
      margin-block: 10px;
      font-family: "regular";
      border-collapse: collapse;
      text-align: left;
      color: var(--textColor);
      /* overflow-x: auto; */
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
      .status {
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: bold;
        text-transform: capitalize;
        font-size: 15px;
      }
      .status.completed {
        background-color: #e7f6e9;
        color: #155724;
      }
      .status.pending {
        background-color: #fef6e7;
        color: #e6a700;
      }
      .status.failed {
        background-color: #fee7e7;
        color: #d93030;
      }
    }
  }
`;
export const RefundPayments = styled.div`
  font-family: "regular";
  color: var(--dark-teal);
  background-color: var(--secColor);
  border-radius: 10px;
  box-sizing: border-box;
  margin-block: 20px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  .heading {
    font-size: 20px;
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
  .paymentTable {
    padding-inline: 10px;
      overflow-x: auto;
    table {
      width: 100%;
      margin-block: 10px;
      font-family: "regular";
      border-collapse: collapse;
      text-align: left;
      color: var(--textColor);
      overflow-x: auto;
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
      .type {
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: bold;
        text-transform: capitalize;
        font-size: 15px;
      }
      .type.refunded {
        background-color: #e7f6e9;
        color: #155724;
      }
      .type.refundRequested {
        background-color: #fef6e7;
        color: #e6a700;
      }
      .type.failed {
        background-color: #fee7e7;
        color: #d93030;
      }
      .action {
        background-color: var(--dark-teal);
        color: var(--secColor);
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const InvoiceReports = styled.div`
  font-family: "regular";
  color: var(--dark-teal);
  background-color: var(--secColor);
  border-radius: 10px;
  box-sizing: border-box;
  margin-block: 20px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  .heading {
    font-size: 20px;
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
  .paymentTable {
    padding-inline: 10px;
      overflow-x: auto;
    table {
      width: 100%;
      margin-block: 10px;
      font-family: "regular";
      border-collapse: collapse;
      text-align: left;
      color: var(--textColor);
      overflow-x: auto;
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
      .type {
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: bold;
        text-transform: capitalize;
        font-size: 15px;
      }
      .type.paid {
        background-color: #e7f6e9;
        color: #155724;
      }
      .type.pending {
        background-color: #fef6e7;
        color: #e6a700;
      }
    }
  }
`;
