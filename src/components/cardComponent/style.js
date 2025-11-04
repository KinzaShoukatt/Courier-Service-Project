import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  .card {
    box-sizing: border-box;
    background-color: var(--secColor);
    display: flex;
    gap: 10px;
    align-items: center;
    padding-left: 20px;
    border-radius: 8px;
    padding-block: 20px;
    font-family: "regular";
    .iconDiv {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #e5f2f2;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .text {
      h2 {
        color: black;
      }
      p {
        color: var(--textColor);
      }
    }
  }
`;
