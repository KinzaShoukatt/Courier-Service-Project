import styled from "styled-components";

export const ChatbotWrapper = styled.div`
  display: flex;
  background: #f0f2f5;
  min-height: 84vh;
  position: relative;

  * {
    box-sizing: border-box;
  }

  html,
  body {
    overflow-x: hidden;
  }
  .chat-container {
    width: 100%;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: "regular", Tahoma, Verdana, sans-serif;
    .devgo {
      display: flex;
      justify-content: center;
      gap: 6px;
      padding-block: 5px;
      background-color: var(--dark-teal);
      color: var(--secColor);
      font-family: "semibold";
      font-size: 25px;
      align-items: center;
      @media (max-width: 450px) {
        font-size: 17px;
      }
      img {
        height: 50px;
        width: 60px;
      }
    }
  }

  .parent {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    min-height: 75vh;
    max-height: 75vh;
  }
  .rightChild {
    width: 78%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .backBtn {
    position: sticky;
    top: 2%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: white;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
    border: none;
    color: var(--dark-teal);
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    width: max-content;
    align-self: flex-start;
    z-index: 5;
  }

  .customer-list {
    font-family: "regular";
    padding: 5px;
    width: 22%;
    border-right: 2px solid var(--priColor);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #ccc;

    .searchDiv {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      background-color: var(--priColor);
      padding-left: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin-bottom: 5px;
      position: sticky;
      top: 0%;
      width: 100%;
      border-bottom: 2px solid var(--dark-teal);

      .text {
        box-sizing: border-box;
        color: #656363ff;
        font-size: 15px;
        background-color: var(--priColor);
        border: none;
        outline: none;
        padding-block: 10px;

        width: 100%;
      }
    }
    .listOfCustomers {
    }
    button {
      box-sizing: border-box;
      width: 100%;
      text-align: left;
      font-family: "regular";
      gap: 10px;
      padding-block: 10px;
      padding-inline-start: 15px;
      border: none;
      margin-block: 2px;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
    }
    button.active {
      background-color: var(--dark-teal);
      color: var(--secColor);
    }
  }
  .count {
    background-color: var(--dark-teal);
    font-family: "regular";
    border-radius: 50%;
    padding: 1px 7px;
    color: black;
    font-weight: bold;
  }

  .haveCount {
    background-color: #a6a6a6ff;
    font-weight: bold;
  }
  .noCount {
    background-color: (--priColor);
  }
  .mark {
    background-color: yellow;
    color: black;
    border-radius: 3px;
  }

  .messages {
    flex: 1;
    padding: 15px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .admin-message,
  .customer-message {
    padding: 15px 20px;
    border-radius: 15px;
    margin-bottom: 12px;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-size: 14px;
    line-height: 1.6;
  }

  .customer-message {
    background: #f1f0f0;
    align-self: flex-start;
  }

  .admin-message {
    background: #006769;
    color: #fff;
    align-self: flex-end;
  }
  .input-box {
    display: flex;
    padding: 15px;
    border-top: 1px solid var(--borderColor);
    border-bottom: 1px solid var(--borderColor);
    background: var(--priColor);
  }

  .input-box input {
    /* flex: 1; */
    width: 100%;
    padding: 12px 18px;
    border-radius: 25px;
    border: 1px solid #ccc;
    margin-right: 10px;
    outline: none;
    font-family: "regular";
  }

  .input-box button {
    padding: 12px 20px;
    border-radius: 25px;
    border: none;
    background: #006769;
    color: white;
    cursor: pointer;
    transition: 0.3s;
    font-family: "regular";
  }

  .input-box button:hover {
    background: #005658ff;
  }

  .select-customer {
    font-family: "regular";
    padding-inline-start: 10px;
  }
  @media (max-width: 450px) {
    .parent {
      flex-direction: column;
    }
    .customer-list {
      width: 100%;
      height: auto;
    }
    .rightChild {
      width: 100%;
      height: 100%;
    }
  }
`;
