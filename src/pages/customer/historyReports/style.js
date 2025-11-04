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
    @media (max-width: 520px) {
      font-size: 19px;
    }
  }

  .tableDiv {
    padding-inline: 10px;
    overflow-x: auto;
    box-sizing: border-box;
    margin-block: 20px;
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
      color: #1f2937;
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
