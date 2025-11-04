import styled from "styled-components";

export const Heading = styled.p`
  color: var(--dark-teal);
  font-family: "semibold";
  font-size: 25px;
`;
export const Container = styled.div`
  position: relative;
`;
// Assign Delivery to Agent Section
export const AssignDelivery = styled.div`
  background-color: var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-block: 15px;
  @media (max-width: 520px) {
    margin-block: 10px;
  }
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
`;
export const DivsSetting = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 25px;
  padding-inline: 15px;
  box-sizing: border-box;
  @media (max-width: 950px) {
    flex-direction: column;
    gap: 15px;
  }
`;
export const LeftDiv = styled.div`
  font-family: "regular";
  box-sizing: border-box;
  width: 100%;
  .leftHeading {
    font-weight: bold;
    color: var(--dark-teal);
    border-bottom: 2px solid var(--dark-teal);
    padding-block: 10px;
  }
  .childLeft {
    width: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    margin-block: 20px;
    .box {
      display: flex;
      align-items: flex-end;
      gap: 20px;
      justify-content: space-between;
      padding-block: 15px;
      padding-inline: 20px;
      border: 1px solid var(--borderColor);
      margin-block: 10px;
    }
    .trackingId {
      font-weight: bold;
      font-size: 16px;
      @media (max-width: 520px) {
        font-size: 15px;
      }
    }
    .paras {
      .childPara {
        color: #212529;
        font-size: 14px;
        @media (max-width: 520px) {
          font-size: 13px;
        }
        span {
          color: var(--dark-teal);
          font-weight: bold;
        }
      }
    }
    .btn {
      background: var(--dark-teal);
      color: var(--secColor);
      padding: 5px 12px;
      border-radius: 5px;
      cursor: pointer;
      text-align: center;
      @media (max-width: 520px) {
        font-size: 13.5px;
      }
    }
  }
  .cancelBtn {
    background-color: #dc3545;
    border: none;
    font-family: "regular";
    color: black;
    font-weight: bold;
    font-size: 15px;
    padding: 6px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
    @media (max-width: 520px) {
      font-size: 13.5px;
    }
  }
`;
export const RightDiv = styled.div`
  font-family: "regular";
  box-sizing: border-box;
  width: 100%;
  .rightHeading {
    font-weight: bold;
    color: var(--dark-teal);
    border-bottom: 2px solid var(--dark-teal);
    padding-block: 10px;
  }
  .childRight {
    width: 100%;
    box-sizing: border-box;
    margin-block: 20px;
  }
  .rightBox {
    border: 1px solid transparent;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    margin-block: 10px;
    padding: 10px 20px;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
    @media (max-width: 520px) {
      font-size: 14px;
    }
    input {
      width: 20px;
      height: 20px;
      accent-color: #007bff;
    }
    p {
      font-weight: bold;
    }
  }
  .button {
    font-family: "regular";
    border: 1px solid transparent;
    background-color: var(--dark-teal);
    color: var(--secColor);
    font-weight: bold;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-top: 20px;
    padding: 13px 20px;
    cursor: pointer;
  }
`;

// Assign Delivery to Agent Section
export const AssignDeliveryTable = styled.div`
  background-color: var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-block: 25px;
  overflow-x: auto;
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
  .tableDiv {
    overflow-x: auto;
    padding-inline: 10px;
  }
  table {
    width: 100%;
    margin-block: 15px;
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
    .cancelBtn {
      color: black;
      background-color: #dc3545;
      font-weight: bold;
      padding: 6px 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 15px;
      @media (max-width: 520px) {
        font-size: 13.5px;
      }
    }
  }
`;

export const RescheduleCancel = styled.div`
  background-color: var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-block: 25px;
  position: relative;
  /* position: absolute; */
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
  .tableDiv {
    padding-inline: 10px;
    overflow-x: auto;
    box-sizing: border-box;
    width: 100%;
  }
  table {
    border-collapse: collapse;
    font-family: "regular";
    color: var(--textColor);
    width: 100%;
    margin-block: 15px;
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

    .cancelStatus {
      background-color: #dc3545;
      color: black;
      font-weight: bold;
      padding: 5px;
      border-radius: 10px;
      font-size: 12px;
    }
    .btns {
      .btn1 {
        background-color: #ffca2c;
        border: none;
        padding: 4px 8px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        gap: 3px;
        padding: 10px;
        align-items: center;
        font-family: "regular";
        @media (max-width: 520px) {
          font-size: 13.5px;
        }
      }
    }
  }
`;

export const Popup = styled.div`
  font-family: "regular";
  color: var(--dark-teal);
  width: 60%;
  background-color: var(--priColor);
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.3);
  z-index: 1;
  .heading {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-family: "semibold";
    border-bottom: 1px solid var(--borderColor);
    padding-block: 10px;
  }
  .errorMsg {
    color: red;
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
        outline-color: var(--borderColor);
        cursor: pointer;
        @media (max-width: 480px) {
          margin-block: 3px;
        }
      }
    }
  }
  .slot {
    font-weight: bold;
    font-size: 18px;
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
    margin: 5px 0px;
    cursor: pointer;
    @media (max-width: 480px) {
      padding: 10px 28px;
    }
  }
`;

export const ParcelHistory = styled.div`
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
  .parcelHistoryTable {
    padding-inline: 10px;
    overflow-x: auto;
    box-sizing: border-box;

    table {
      width: 100%;
      font-family: "regular";
      border-collapse: collapse;
      text-align: left;
      color: var(--textColor);
      margin-block: 15px;
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
        @media (max-width: 520px) {
          font-size: 13.5px;
        }
      }
      .status.order_placed {
        background-color: #c8d9eeff;
        color: #0b5ed7;
      }
      .status.picked_up {
        background-color: #facc15;
        color: #08101cff;
      }
      .status.in_transit {
        background-color: #3b82f6;
        color: #ffffff;
      }
      .status.out_for_delivery {
        background-color: #1e404f;
        color: #ffffff;
      }
      .status.delivered {
        background-color: #ceead7;
        color: #28a745;
      }
      .actionBtn {
        background-color: var(--dark-teal);
        font-family: "regular";
        color: var(--secColor);
        padding: 6px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      .btns {
        display: flex;
        gap: 3px;
        .cancelBtn {
          color: black;
          background-color: #dc3545;
          font-weight: bold;
          padding: 6px 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 15px;
          @media (max-width: 520px) {
            font-size: 13.5px;
          }
        }
      }
    }
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 2rem; */
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  font-family: "regular";
  padding-bottom: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  @media (max-width: 520px) {
    font-size: 13px;
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
  @media (max-width: 520px) {
    width: 35px;
    height: 35px;
  }
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
  font-size: 14px;
  @media (max-width: 520px) {
    font-size: 12px;
  }
`;
