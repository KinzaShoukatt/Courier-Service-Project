import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  /* padding-block: 10px; */
  position: relative;
  .mainHeading {
    margin-bottom: 20px;
    color: var(--dark-teal);
    font-family: "semibold";
    font-size: 25px;
  }
`;
export const CustomerParent = styled.div`
  position: relative;
`;
export const Customer = styled.div`
  box-sizing: border-box;
  background-color: var(--secColor);
  border-radius: 10px;
  padding-block: 15px;
  padding-inline: 10px;
  overflow-x: auto;
  /* position: relative; */
  .firstLine {
    display: flex;
    justify-content: space-between;
    font-family: "semibold";
    align-items: center;
    padding-bottom: 15px;
    padding-inline-start: 15px;
    border-bottom: 1px solid var(--borderColor);
    min-width: 650px;
    overflow-x: auto;
    .heading {
      color: var(--dark-teal);
      font-size: 22px;
    }
    .btn {
      display: flex;
      gap: 3px;
      align-items: center;
      color: var(--secColor);
      border: none;
      font-family: "semibold";
      padding: 10px;
      border-radius: 7px;
      background-color: var(--dark-teal);
      cursor: pointer;
      flex-shrink: 0;
    }
  }
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
    .character.true {
      background-color: #dc3545;
      color: black;
      padding: 4px 8px;
      border-radius: 4px;
    }
    .character.false {
      background-color: #16a34a;
      color: var(--secColor);
      padding: 4px 8px;
      border-radius: 4px;
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

export const FormDiv = styled.div`
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
  .inputFields {
    display: flex;
    gap: 10px;
    margin-block: 20px;
    flex-wrap: wrap;
    .inputFeild {
      flex: 1;
      min-width: 160px;
      .errorMsg {
        color: red;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        font-family: "regular";
        outline: none;
        border: 1px solid var(--borderColor);
        border-radius: 5px;
        background-color: var(--secColor);
      }
    }
  }
  .btns {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
  }
  .btn {
    flex: 1;
  }
  button {
    padding: 12px 15px;
    border-radius: 8px;
    border: none;
    display: flex;
    justify-content: center;
    gap: 3px;
    align-items: center;
    font-family: "regular";
    background-color: var(--dark-teal);
    color: var(--secColor);
    width: 100%;
    font-size: 15px;
    cursor: pointer;
    min-width: 195px;
    flex-wrap: wrap;
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

export const AgentParent = styled.div`
  position: relative;
`;
export const Agent = styled.div`
  box-sizing: border-box;
  background-color: var(--secColor);
  border-radius: 10px;
  padding-block: 15px;
  padding-inline: 10px;
  margin-block: 25px;
  overflow-x: auto;
  .firstLine {
    display: flex;
    justify-content: space-between;
    font-family: "semibold";
    align-items: center;
    padding-bottom: 15px;
    padding-inline-start: 15px;
    border-bottom: 1px solid var(--borderColor);
    min-width: 650px;
    overflow-x: auto;
    .heading {
      color: var(--dark-teal);
      font-size: 22px;
    }
    .btn {
      display: flex;
      gap: 3px;
      align-items: center;
      color: var(--secColor);
      border: none;
      font-family: "semibold";
      padding: 10px;
      border-radius: 7px;
      background-color: var(--dark-teal);
      cursor: pointer;
      flex-shrink: 0;
    }
  }
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

export const GuestCustomerParent = styled.div`
  position: relative;
`;
export const GuestCustomer = styled.div`
  box-sizing: border-box;
  background-color: var(--secColor);
  border-radius: 10px;
  padding-block: 15px;
  padding-inline: 10px;
  margin-block: 25px;
  overflow-x: auto;
  .firstLine {
    display: flex;
    justify-content: space-between;
    font-family: "semibold";
    align-items: center;
    padding-bottom: 15px;
    padding-inline-start: 15px;
    border-bottom: 1px solid var(--borderColor);
    min-width: 650px;
    overflow-x: auto;
    .heading {
      color: var(--dark-teal);
      font-size: 22px;
    }
  }
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

export const SuspendBlock = styled.div`
  box-sizing: border-box;
  background-color: var(--secColor);
  border-radius: 10px;
  padding-block: 15px;
  padding-inline: 10px;
  overflow-x: auto;
  /* position: relative; */
  .firstLine {
    display: flex;
    justify-content: space-between;
    font-family: "semibold";
    align-items: center;
    padding-bottom: 15px;
    padding-inline-start: 15px;
    border-bottom: 1px solid var(--borderColor);
    .heading {
      color: var(--dark-teal);
      font-size: 22px;
    }
  }
  .tableDiv {
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
          background-color: #16a34a;
          border: none;
          padding: 6px 8px;
          border-radius: 3px;
          cursor: pointer;
          display: flex;
          align-items: center;
          color: var(--secColor);
          border-radius: 3px;
        }
        .btn2 {
          background-color: #475569;
          border: none;
          padding: 6px 8px;
          border-radius: 3px;
          cursor: pointer;
          display: flex;
          align-items: center;
          color: var(--secColor);
        }
      }
    }
  }
`;
