import styled from "styled-components";

export const Container = styled.div`
  .heading {
    color: var(--dark-teal);
    font-family: "semibold";
    margin-bottom: 20px;
  }
  .cardComponent {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    gap: 25px;
  }
  .recentParcels {
    background-color: var(--secColor);
    height: auto;
    margin-block: 20px;
    padding-inline: 15px;
    border-radius: 10px;
    padding-block: 10px;
    /* width: auto; */
    overflow-x: auto;
    .firstLine {
      display: flex;
      justify-content: space-between;
      padding-block: 10px;
      align-items: center;
      border-bottom: 1px solid var(--borderColor);
      min-width: 500px;
      overflow-x: auto;
      h3 {
        color: var(--dark-teal);
        font-family: "regular";
        flex-shrink: 0;
      }
      button {
        background-color: var(--dark-teal);
        border: none;
        color: var(--secColor);
        font-weight: bold;
        font-family: "regular";
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        flex-shrink: 0;
      }
    }
    table {
      width: 100%;
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
      tr {
        border-bottom: 1px solid var(--borderColor);
      }
      th {
        color: var(--dark-teal);
        background: var(--priColor);
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
      button {
        background-color: var(--dark-teal);
        color: var(--secColor);
        padding: 7px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
  .graph {
    background-color: var(--secColor);
    padding-block: 15px;
    padding-inline: 15px;
    /* display: block; */
    /* justify-content: center; */
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
