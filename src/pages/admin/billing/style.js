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
    @media (max-width: 520px) {
      font-size: 18px;
    }
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
    .searchBtn {
      background-color: var(--dark-teal);
      color: var(--secColor);
      font-family: "regular";
      border: none;
      padding: 10px 15px;
      font-weight: bold;
      border-radius: 7px;
    }
    .tableDiv {
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
        text-align: left;
      }
      th {
        background-color: var(--priColor);
        color: var(--dark-teal);
        @media (max-width: 520px) {
          font-size: 13.5px;
        }
      }
      tr {
        border-bottom: 1px solid var(--borderColor);
        white-space: nowrap;
        @media (max-width: 520px) {
          font-size: 13.5px;
        }
      }
      .iconClass {
        display: flex;
        align-items: center;
        gap: 3px;
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
      .orderStatus {
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: bold;
        text-transform: capitalize;
        font-size: 15px;
      }
      .orderStatus.scheduled {
        background-color: #74ea70c8;
        color: #39a294ff;
      }
      .orderStatus.order_placed {
        background-color: #c8d9eeff;
        color: #0b5ed7;
      }
      .orderStatus.picked_up {
        background-color: #facc15;
        color: #08101cff;
      }
      .orderStatus.in_transit {
        background-color: #3b82f6;
        color: #ffffff;
      }
      .orderStatus.out_for_delivery {
        background-color: #1e404f;
        color: #ffffff;
      }
      .orderStatus.delivered {
        background-color: #ceead7;
        color: #28a745;
      }
      .completePaymentBtn {
        background-color: green;
        color: var(--secColor);
        border: none;
        padding: 5px;
        font-family: "regular";
        border-radius: 5px;
        cursor: pointer;
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
        text-align: left;
      }
      th {
        background-color: var(--priColor);
        color: var(--dark-teal);
      }
      tr {
        border-bottom: 1px solid var(--borderColor);
        white-space: nowrap;
        @media (max-width: 520px) {
          font-size: 13.5px;
        }
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
        @media (max-width: 520px) {
          font-size: 13.5px;
        }
      }
      tr {
        border-bottom: 1px solid var(--borderColor);
        white-space: nowrap;
        @media (max-width: 520px) {
          font-size: 13.5px;
        }
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
    }
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #111827;
  font-family: "regular";
  padding-bottom: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const PaginationInfo = styled.p`
  padding-left: 0.25rem;
  @media (max-width: 320px) {
    display: none;
  }
`;

export const PaginationNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PageButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  color: #374151;
  background-color: white;
  font-family: "regular";
  font-weight: 600;
  @media (max-width: 320px) {
    width: 30px;
    height: 30px;
  }

  &.active {
    background-color: var(--dark-teal);
    color: white;
    border: none;
  }
`;

export const PageNavButton = styled(PageButton)`
  font-size: 0.75rem;
`;
