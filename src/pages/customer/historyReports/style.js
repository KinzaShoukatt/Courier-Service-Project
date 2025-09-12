import styled from "styled-components";

export const Heading = styled.p`
  color: var(--dark-teal);
  font-family: "semibold";
  font-size: 25px;
`;

export const Container = styled.div``;

export const RecentParcels = styled.div`
  background-color: var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-block: 10px;
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
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-family: "regular";
    color: var(--textColor);

    th,
    td {
      padding: 12px;
      text-align: left;
      width: 20%;
    }
    tr {
      border-bottom: 1px solid var(--borderColor);
    }
    th {
      color: var(--dark-teal);
      background: var(--priColor);
    }
    .status {
      padding: 4px 8px;
      border-radius: 4px;
      font-weight: bold;
      text-transform: capitalize;
      font-size: 15px;
    }
    .status.Order {
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
`;

export const GraphDiv = styled.div`
  background-color: var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-block: 25px;
  padding-inline: 15px;
   padding-block: 15px;
  .graph {
    max-height: 90vh;
    /* .lineChart{
       height: 100%;
      width: 100%;
      object-fit: cover; 
      @media (max-width: 768px) {
        
      }
    } */
  }
`;
