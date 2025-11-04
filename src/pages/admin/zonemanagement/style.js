import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  .mainHeading {
    color: var(--dark-teal);
    font-family: "semibold";
    font-size: 25px;
  }
`;

export const ServiceAreasParent = styled.div`
  box-sizing: border-box;
  margin-block: 15px;
  background-color: var(--secColor);
  border-radius: 10px;
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
`;
export const ServiceAreas = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 15px;
  padding: 10px;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const FormDiv = styled.div`
  font-family: "regular";
  color: var(--dark-teal);
  box-sizing: border-box;
  width: 100%;
  .leftHeading {
    border-bottom: 2px solid var(--dark-teal);
    font-family: "semibold";
    font-size: 18px;
    padding: 5px 0px;
  }
  form {
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    .inputFeild {
      flex: 1;
      min-width: 160px;
      select {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        margin-top: 5px;
        font-family: "regular";
        outline: none;
        border: 1px solid var(--borderColor);
        border-radius: 5px;
        background-color: var(--secColor);
      }
    }
    .btn {
      display: flex;
      justify-content: flex-start;
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
  }
`;

export const Listing = styled.div`
  font-family: "regular";
  color: var(--dark-teal);
  box-sizing: border-box;
  width: 100%;
  .rightHeading {
    border-bottom: 2px solid var(--dark-teal);
    font-family: "semibold";
    font-size: 18px;
    padding: 5px 0px;
  }
  table {
    width: 100%;
    margin-block: 15px;
    font-family: "regular";
    border-collapse: collapse;
    text-align: left;
    color: var(--textColor);
    overflow-x: auto;
    th,
    td {
      padding: 10px;
    }
    th {
      background-color: var(--priColor);
      color: var(--dark-teal);
    }
    tr {
      border-bottom: 1px solid var(--borderColor);
      white-space: nowrap;
    }
  }
  .deleteBtn {
    background-color: #dc3545;
    border: none;
    padding: 4px 6px;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const SetChargesParent = styled.div`
  box-sizing: border-box;
  background-color: var(--secColor);
  border-radius: 10px;
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
`;
export const SetCharges = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 15px;
  padding: 10px;
  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

export const LastFormDiv = styled.div`
  font-family: "regular";
  color: var(--dark-teal);
  box-sizing: border-box;
  width: 100%;
  .leftHeading {
    border-bottom: 2px solid var(--dark-teal);
    font-family: "semibold";
    font-size: 18px;
    padding: 5px 0px;
    @media (max-width: 420px) {
      font-size: 16px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    .inputFeild {
      flex: 1;
      min-width: 160px;
      select,
      input {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        margin-top: 5px;
        font-family: "regular";
        outline: none;
        border: 1px solid var(--borderColor);
        border-radius: 5px;
        background-color: var(--secColor);
      }
    }
    .btn {
      display: flex;
      justify-content: flex-start;
      margin: 5px 0px;
      .addZoneBtn {
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
        @media (max-width: 420px) {
          padding: 10px 12px;
          font-size: 14px;
        }
      }
    }
  }
`;

export const LastListing = styled.div`
  font-family: "regular";
  color: var(--dark-teal);
  box-sizing: border-box;
  width: 100%;
  .rightHeading {
    border-bottom: 2px solid var(--dark-teal);
    font-family: "semibold";
    font-size: 18px;
    padding: 5px 0px;
    @media (max-width: 420px) {
      font-size: 16px;
    }
  }
  table {
    width: 100%;
    margin-block: 15px;
    font-family: "regular";
    border-collapse: collapse;
    text-align: left;
    color: var(--textColor);
    overflow-x: auto;
    th,
    td {
      padding: 10px;
    }
    th {
      background-color: var(--priColor);
      color: var(--dark-teal);
      @media (max-width: 420px) {
        font-size: 14px;
      }
    }
    tr {
      border-bottom: 1px solid var(--borderColor);
      white-space: nowrap;
      @media (max-width: 420px) {
        font-size: 14px;
      }
    }
  }
  .btns {
    display: flex;
    gap: 5px;
  }
  .editBtn {
    background-color: var(--dark-teal);
    border: none;
    padding: 4px 6px;
    border-radius: 3px;
    font-size: 18px;
    cursor: pointer;
    @media (max-width: 420px) {
      font-size: 15px;
    }
  }
  .deleteBtn {
    background-color: #dc3545;
    border: none;
    padding: 4px 6px;
    border-radius: 3px;
    cursor: pointer;
  }
`;
