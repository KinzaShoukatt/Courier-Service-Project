import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  .mainHeading {
    font-family: "semibold";
    color: var(--dark-teal);
    font-size: 25px;
  }
  .cardComponent {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    gap: 25px;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  }
`;
export const PastDeliveries = styled.div`
  box-sizing: border-box;
  background-color: var(--secColor);
  border-radius: 10px;
  margin-block: 15px;
  font-family: "regular";
  color: var(--dark-teal);
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
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
      .action {
        background-color: var(--dark-teal);
        color: var(--secColor);
        border: none;
        font-family: "regular";
        font-weight: bold;
        padding: 8px 10px;
        border-radius: 5px;
        cursor: pointer;
        gap: 3px;
      }
    }
  }
`;

export const Earnings = styled.div`
  box-sizing: border-box;
  background-color: var(--secColor);
  border-radius: 10px;
  margin-block: 15px;
  font-family: "regular";
  color: var(--dark-teal);
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
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
      .action {
        background-color: var(--dark-teal);
        color: var(--secColor);
        border: none;
        font-family: "regular";
        font-weight: bold;
        padding: 8px 10px;
        border-radius: 5px;
        cursor: pointer;
        gap: 3px;
      }
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
