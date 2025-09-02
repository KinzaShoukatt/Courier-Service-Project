import styled from "styled-components";

export const Heading = styled.p`
  color: var(--dark-teal);
  font-family: "semibold";
  font-size: 27px;
`;
export const Container = styled.div`
  background-color: var(--secColor);
  box-sizing: border-box;
  padding: 20px;
  margin-block: 10px;
  min-height: 84vh;
  border-radius: 10px;
`;

export const PickupDeliveryContainer = styled.div`
  color: var(--dark-teal);
  font-family: "regular";
  border-bottom: 1px solid var(--borderColor);
  padding-bottom: 25px;
  box-sizing: border-box;
  .heading1 {
    text-align: center;
    font-weight: bold;
    font-family: "semibold";
    font-size: 23px;
    margin-bottom: 18px;
  }
  .cardParent {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    .card {
      background-color: #e5f2f2;
      text-align: center;
      align-items: center;
      padding-block: 30px;
      border-radius: 8px;
      font-weight: bold;
      .bold {
        font-size: 17px;
      }
    }
  }
`;

export const Charts = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 15px;
  margin-block: 20px;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const BookingchartContainer = styled.div`
  width: 50%;
  box-sizing: border-box;
  p {
    color: var(--dark-teal);
    font-family: "semibold";
    font-size: 22px;
    padding-bottom: 10px;
    padding-left: 5px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const BookingChart = styled.div`
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  .heading {
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: bold;
    font-family: "semibold";
    color: var(--dark-teal);
    font-weight: bold;
    padding-top: 10px;
  }
  .filterContainer {
    margin-block: 15px;
    font-family: "regular";
    position: relative;
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

export const AgentchartContainer = styled.div`
  width: 50%;
  box-sizing: border-box;
  p {
    color: var(--dark-teal);
    font-family: "semibold";
    font-size: 22px;
    padding-bottom: 10px;
    padding-left: 5px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AgentChart = styled.div`
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  .heading {
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: bold;
    font-family: "semibold";
    color: var(--dark-teal);
    font-weight: bold;
    padding-top: 10px;
  }
  .filterContainer {
    margin-block: 15px;
    font-family: "regular";
    position: relative;
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
export const RevenuechartContainer = styled.div`
  min-height: 80vh;
  height: 100%;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-top: 30px;
  .heading {
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: bold;
    font-family: "semibold";
    color: var(--dark-teal);
    font-weight: bold;
    padding-top: 10px;
  }
  .filterContainer {
    margin-block: 15px;
    font-family: "regular";
    position: relative;
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
