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
  /* position: relative; */
  /* z-index: 2; */
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
    z-index: 2;
  }

  .AssignedDeliveryTable {
    padding-inline: 10px;
    overflow-x: auto;
    z-index: 5;
    table {
      width: 100%;
      margin-block: 10px;
      font-family: "regular";
      border-collapse: collapse;
      text-align: left;
      color: var(--textColor);
      z-index: 5;
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
        position: relative;
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
  position: fixed;
  bottom: 50%;
  right: 15%;
  z-index: 11;
  transform: translateY(-10px);

  .rejectionHeading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--dark-teal);
    gap: 5px;
    font-weight: bold;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  textarea {
    outline-color: var(--borderColor);
    border-color: var(--borderColor);
    border-radius: 5px;
    background-color: var(--secColor);
    padding: 5px;
    /* font-family: "regular"; */
  }
  .Btn {
    /* display: flex; */
    align-self: flex-end;
    margin-top: 5px;
  }
  .submitBtn {
    background-color: var(--dark-teal);
    color: var(--secColor);
    border: none;
    padding: 5px 10px;
    font-family: "regular";
    border-radius: 3px;
    cursor: pointer;
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
  z-index: 1;
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
      .button {
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

  .parcelStatus {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--dark-teal);
    gap: 5px;
    font-weight: bold;
  }
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
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
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

export const Dots = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  font-weight: bold;
  color: #1c1c27;
  letter-spacing: 2px;
`;
