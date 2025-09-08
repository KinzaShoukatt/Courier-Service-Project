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
  .cardParent {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    font-family: "regular";
    color: var(--dark-teal);
    line-height: 1.8;
    .card {
      background-color: var(--secColor);
      text-align: center;
      align-items: center;
      padding-block: 30px;
      border-radius: 8px;
      .heading {
        font-weight: bold;
      }
    }
  }
`;
export const FormDiv = styled.div`
  font-family: "regular";
  color: var(--dark-teal);
  background-color: var(--secColor);
  border-radius: 10px;
  box-sizing: border-box;
  margin-block: 25px;
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
  form {
    display: flex;
    flex-direction: column;
    .inputFields {
      display: flex;
      gap: 15px;
      margin-block: 10px;
      flex-wrap: wrap;
      padding-inline: 10px;
      .inputFeild {
        flex: 1;
        min-width: 160px;
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
    .btn {
      display: flex;
      justify-content: flex-end;
      margin: 5px 10px;

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

// Assign Delivery to Agent Section
export const AssignDelivery = styled.div`
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
  .tableDiv{
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

export const AgentchartContainer = styled.div`
  width: 100%;
  background-color: var(--secColor);
  /* text-align: center; */
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  .mainHeading {
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

  .heading {
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: bold;
    font-family: "semibold";
    color: var(--dark-teal);
    font-weight: bold;
    padding-top: 10px;
    text-align: center;
  }
  .filterContainer {
    margin-block: 15px;
    font-family: "regular";
    position: relative;
    text-align: center;
  }
  .filter-btn {
    font-family: "regular";
    padding: 8px 16px;
    background: var(--dark-teal);
    color: var(--secColor);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .filter-btn:hover {
    background-color: teal;
  }
  .popupMenu {
    background-color: var(--priColor);
    padding: 20px;
    width: 10vw;
    border-radius: 10px;
    background: var(--priColor);
    border: 1px solid #ddd;
    border-radius: 6px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    margin-top: 10px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .popupMenu button {
    padding: 10px;
    border: none;
    background: transparent;
    text-align: left;
    cursor: pointer;
  }
  .popupMenu button:hover {
    background: #f2f2f2;
  }
  .chartBox {
    height: 50vh;
    padding: 10px;
  }
`;
