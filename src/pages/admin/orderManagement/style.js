import styled from "styled-components";

export const Heading = styled.p`
  color: var(--dark-teal);
  font-family: "semibold";
  font-size: 25px;
`;
export const Container = styled.div``;

// Assign Delivery to Agent Section
export const AssignDelivery = styled.div`
  background-color: var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-block: 25px;
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
    /* text-align: center; */
    padding-left: 20px;
  }
`;
export const DivsSetting = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 25px;
  padding-inline: 15px;
  box-sizing: border-box;
  @media (max-width: 760px) {
    flex-direction: column;
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
    }
    .trackingId {
      font-weight: bold;
      font-size: 16px;
    }
    .paras {
      .childPara {
        color: #212529;
        font-size: 14px;
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
    /* text-align: center; */
    padding-left: 20px;
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
    }
    tr {
      border-bottom: 1px solid var(--borderColor);
      white-space: nowrap;
    }
    .btns {
      display: flex;
      gap: 6px;
      button {
        background-color: var(--dark-teal);
        border: none;
        padding: 4px 8px;
        border-radius: 3px;
        cursor: pointer;
        .btn1 {
          font-size: 18px;
          color: var(--secColor);
        }
        .btn2 {
          font-size: 18px;
          color: var(--secColor);
        }
      }
      .btn3 {
        background-color: #dc3545;
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
  .tableDiv {
    padding-inline: 10px;
    overflow-x: auto;
    box-sizing: border-box;
    margin-block: 20px;
    width: 100%;
  }
  table {
    border-collapse: collapse;
    font-family: "regular";
    color: var(--textColor);
    width: 100%;
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

    .status1 {
      background-color: var(--priColor);
      color: var(--dark-teal);
      font-weight: bold;
      padding: 5px;
      border-radius: 10px;
      font-size: 12px;
    }
    .status2 {
      background-color: #ceead7;
      color: #28a745;
      font-weight: bold;
      padding: 5px;
      border-radius: 10px;
      font-size: 12px;
    }
    .status3 {
      background-color: #f9f0ca;
      color: #ffc107;
      font-weight: bold;
      padding: 5px;
      border-radius: 10px;
      font-size: 12px;
    }
    .btns {
      display: flex;
      gap: 6px;
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
      }
      .btn2 {
        background-color: #bb2d3b;
        color: var(--secColor);
        border: none;
        padding: 4px 8px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        gap: 3px;
        padding: 10px;
        align-items: center;
        font-family: "regular";
      }
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
  }
  .parcelHistoryTable {
    padding-inline: 10px;
    overflow-x: auto;
    box-sizing: border-box;
    margin-block: 20px;
    table {
      width: 100%;
      font-family: "regular";
      border-collapse: collapse;
      text-align: left;
      color: var(--textColor);
      width: 100%;
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
      .status.scheduled {
        background-color: #c8d9eeff;
        color: #0b5ed7;
      }
      .status.Pickup {
        background-color: #facc15;
        color: #1f2937;
      }
      .status.in {
        background-color: #3b82f6;
        color: #ffffff;
      }
      .status.out {
        background-color: #1e404f;
        color: #ffffff;
      }
      .status.delivered {
        background-color: #ceead7;
        color: #28a745;
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
