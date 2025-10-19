import styled from "styled-components";

export const Heading = styled.p`
  color: var(--dark-teal);
  font-family: "semibold";
  font-size: 27px;
`;

export const AgentPricingTable = styled.div`
  box-sizing: border-box;
  margin-block: 15px;
  background-color: var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(21, 21, 21, 0.5);

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
    z-index: auto;
  }
  .tableDiv {
    margin-inline: 10px;
    overflow-x: auto;

    table {
      width: 100%;
      box-sizing: border-box;
      margin-block: 20px;
      border-collapse: collapse;
      font-family: "regular";
      color: var(--textColor);

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
      button {
        background-color: var(--dark-teal);
        font-family: "regular";
        color: var(--secColor);
        border: none;
        padding: 6px 10px;
        border-radius: 5px;
        cursor: pointer;
        gap: 3px;
      }
      .ticketStatus{
          padding: 4px 8px;
        border-radius: 4px;
        font-weight: bold;
        text-transform: capitalize;
        font-size: 15px;
      }
      .ticketStatus.closed{
                background-color: #e7f6e9;
        color: #155724;
      }
       .ticketStatus.open {
        background-color: #fef6e7;
        color: #e6a700;
      }
    }
  }
`;

export const Popup = styled.div`
  background-color: var(--secColor);
  padding: 20px;
  position: absolute;
  bottom: 90%;
  right: 30%;
  border-radius: 5px;
  box-shadow: 0px 4px 14px rgba(21, 21, 21, 0.5);
  z-index: 12;
  .btnParent {
    display: flex;
    flex-direction: column;
    button {
      padding: 10px;
      background-color: var(--dark-teal);
      color: var(--secColor);
      font-family: "regular";
      border: none;
      margin: 5px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
