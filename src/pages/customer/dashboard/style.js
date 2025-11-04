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
    gap: 15px;
  }
`;
export const RecentParcels = styled.div`
  background-color: var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-block: 20px;
  .firstLine {
    background-color: var(--dark-teal);
    color: var(--secColor);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding-block: 10px;
    padding-inline: 10px;
    align-items: center;
    /* min-width: 500px; */
    overflow-x: auto;

    .heading {
      color: var(--secColor);
      font-size: 22px;
      margin-bottom: 10px;
      font-weight: bold;
      font-family: "regular";
      padding-left: 10px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      @media (max-width: 520px) {
        font-size: 19px;
      }
    }
    button {
      background-color: var(--secColor);
      border: none;
      color: var(--dark-teal);
      font-weight: bold;
      font-family: "regular";
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      flex-shrink: 0;
      @media (max-width: 520px) {
        padding: 9px 10px;
      }
    }
  }
  .tableDiv {
    padding-inline: 10px;
    overflow-x: auto;
    box-sizing: border-box;
    margin-block: 20px;
    width: 100%;
    @media (max-width: 520px) {
      margin-block: 10px;
    }
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
      @media (max-width: 520px) {
        font-size: 15px;
      }
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
