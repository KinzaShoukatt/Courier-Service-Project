import styled from "styled-components";

export const Container = styled.div`
  min-height: 84vh;
  /* padding-inline: 10px; */
  background-color: var(--secColor);
  box-sizing: border-box;
  border: 2px transparent;
  border-radius: 10px;

  .firstLine {
    background-color: var(--dark-teal);
    color: var(--secColor);
    display: flex;
    justify-content: center;
    gap: 5px;
    font-family: "semibold";
    align-items: center;
    padding-block: 15px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    text-align: center;
    font-size: 20px;
  }
  .parentDiv {
    padding-inline: 20px;
    padding-block: 15px;
    p {
      font-family: "regular";
      color: var(--dark-teal);
    }
    .trackOrder {
      box-sizing: border-box;
      font-family: "regular";
      display: flex;
      gap: 10px;
      white-space: nowrap;
      align-items: center;
      /* height: 30px; */
      @media (max-width: 420px) {
        flex-direction: column;
        gap: 0;
      }
      .inp {
        box-sizing: border-box;
        width: 100%;
        border: 1px solid var(--borderColor);
        font-family: "regular";
        font-size: 15px;
        border-radius: 5px;
        height: 45px;
        padding: 0px 10px;
        outline-color: var(--borderColor);
        margin-block: 10px;
        @media (max-width: 420px) {
          margin-top: 10px;
        }
      }
      .btn {
        background-color: var(--dark-teal);
        color: var(--secColor);
        font-family: "regular";
        font-weight: bold;
        border: 1 px solid var(--dark-teal);
        height: 45px;
        padding: 0px 10px;
        border-radius: 5px;
        cursor: pointer;
        @media (max-width: 420px) {
          align-self: flex-end;
        }
      }
    }

    .parcelStatus {
      margin-top: 30px;
      padding-block: 15px;
      padding-inline: 10px;
      display: flex;
      justify-content: space-between;
      background-color: var(--priColor);
      border-radius: 5px;

      @media (max-width: 600px) {
        font-size: 15px;
      }
      @media (max-width: 560px) {
        display: block;
      }
      .status {
        display: flex;
        gap: 10px;
        @media (max-width: 560px) {
          line-height: 2;
        }
        .left {
          font-weight: bold;
        }
      }
    }
    /* parcel Status */
    .parentProgressLine {
      position: relative;
      z-index: 1;
      .progressLine {
        display: flex;
        justify-content: space-between;
        position: relative;
        margin: 30px 0;
        z-index: 2;
        @media (max-width: 768px) {
          flex-direction: column;
          align-items: flex-start;
          gap: 25px;
          margin-left: 20px;
        }
      }
      .progressLine::before {
        content: "";
        position: absolute;
        top: 15px;
        left: 0;
        right: 0;
        height: 4px;
        border-radius: 4px;
        background-color: var(--borderColor);
        z-index: 1;
        @media (max-width: 768px) {
          width: 4px;
          height: 105%;
          top: -10px;
          left: 20px;
        }
      }
      .progressStep {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 2;
        @media (max-width: 768px) {
          flex-direction: row;
          gap: 15px;
        }
        .icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: var(--secColor);
          border: 4px solid var(--borderColor);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }
      }
      .progressStep.stepComplete .icon {
        border-color: green;
        background-color: green;
        color: white;
      }
      .progressStep.stepComplete p {
        color: green;
        font-weight: 600;
      }
      .progressStep.stepActive .icon {
        border-color: green;
        background-color: green;
        color: white;
      }
      .progressStep.stepActive p {
        color: green;
        font-weight: 600;
      }
    }

    /* details */
    .card {
      background-color: var(--priColor);
      box-sizing: border-box;
      padding-left: 20px;
      padding-block: 30px;
      border-radius: 10px;
      p {
        color: var(--dark-teal);
      }
      .heading1 {
        font-weight: bold;
        font-family: "semibold";
        color: var(--dark-teal);
        font-size: 18px;
        padding-bottom: 10px;
      }
      .cardChild {
        display: flex;
        gap: 10px;
        font-size: 15px;
        .heading {
          color: black;
          font-weight: bold;
        }
      }
    }
  }
`;
