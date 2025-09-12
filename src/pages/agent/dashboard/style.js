import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  .mainHeading {
    font-family: "semibold";
    color: var(--dark-teal);
    font-size: 25px;
  }
`;
export const AssignedDelivery = styled.div`
  box-sizing: border-box;
  background-color: var(--secColor);
  border-radius: 10px;
  margin-block: 15px;
  font-family: "regular";
  color: var(--dark-teal);
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  position: relative;
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
      .btns {
        display: flex;
        gap: 6px;
        .btn1 {
          background-color: var(--dark-teal);
          color: var(--secColor);
          border: none;
          font-family: "regular";
          font-weight: bold;
          padding: 6px 8px;
          border-radius: 5px;
          cursor: pointer;
          gap: 3px;
        }
        .btn2 {
          background-color: #dc3545;
          border: none;
          font-family: "regular";
          font-weight: bold;
          padding: 6px 10px;
          border-radius: 5px;
          cursor: pointer;
          gap: 3px;
        }
      }
    }
  }
`;

export const ReasonRejection = styled.div`
background-color: var(--secColor);
border-radius: 10px;
box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
font-family: "regular";
padding-inline: 20px;
padding-block: 10px;
width: fit-content;
position: absolute;
top: 0;
left: 70%;
.rejectionHeading{
color: var(--dark-teal);
font-weight: bold;
}
textarea{
  outline-color: var(--borderColor);
  border-color: var(--borderColor);
  border-radius: 5px;
  background-color: var(--secColor);
  padding: 5px;
}
`;

export const UpdateStatus = styled.div`
  box-sizing: border-box;
  background-color: var(--secColor);
  border-radius: 10px;
  margin-block: 15px;
  font-family: "regular";
  color: var(--dark-teal);
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  position: relative;
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
      .button {
        background-color: #fef6e7;
        color: #e6a71e;
        border: none;
        font-family: "regular";
        font-weight: bold;
        padding: 6px 8px;
        border-radius: 5px;
        cursor: pointer;
        gap: 3px;
      }
    }
  }
`;

export const PopUp = styled.div`
  background-color: var(--secColor);
  padding-block: 20px;
  padding-inline: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
  .btnParent {
    display: flex;
    gap: 15px;
  }
  .btn {
    padding: 5px 10px;
    margin-block: 8px;
    border-radius: 5px;
    border: none;
    padding: 8px 13px;
    font-family: "regular";
    display: flex;
    align-items: center;
    gap: 3px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
  .picked {
    background-color: #fef3c7;
    color: #92400e;
  }
  .transit {
    background-color: #dbeafe;
    color: #1e3a8a;
  }
  .out {
    background-color: #ede9fe;
    color: #5b21b6;
  }
  .delivered {
    background-color: #d1fae5;
    color: #065f46;
  }
`;

export const DeliveryProof = styled.div`

`