import styled from "styled-components";

export const ChatbotWrapper = styled.div`
  display: flex;
  background: #f0f2f5;
  min-height: 84vh;

  .chat-container {
    height: 84vh;
    width: 100%;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: "regular";
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
      img {
        height: 50px;
        width: 60px;
      }
    }
  }
  .homee {
    flex: 1;
    padding-inline: 15px;
    border-bottom: 1px solid #ccc;

    .box {
      background-color: var(--priColor);
      padding: 20px;
      margin-block: 10px;
      border-radius: 10px;
      font-family: "regular";
      font-weight: bold;
      color: var(--dark-teal);
      cursor: pointer;
      letter-spacing: 1px;
    }
  }
  .messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .bot-message,
  .user-message {
    padding: 15px 20px;
    border-radius: 15px;
    margin-bottom: 12px;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-size: 14px;
    line-height: 1.6;
  }

  .bot-message {
    background: #f1f0f0;
    align-self: flex-start;
  }

  .user-message {
    background: #006769;
    color: #fff;
    align-self: flex-end;
  }

  .bot-message.typing {
    font-style: italic;
    color: #555;
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

  .button-section {
    display: flex;
    flex-wrap: wrap; /* wrap long FAQ lists */
    gap: 10px;
    padding: 10px 20px;
    background: #fafafa;
    border-top: 1px solid #ddd;
    /* max-height: 200px; scroll if too many buttons */
    overflow-y: auto;
  }

  .button-section button {
    padding: 8px 14px;
    border-radius: 20px;
    border: none;
    background: #00b894;
    color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 13px;
    transition: 0.3s;
  }

  .button-section button:hover {
    background: #01976b;
  }
  .homeMsg {
    display: flex;
    justify-content: space-evenly;
    padding-block: 17px;
    cursor: pointer;
    color: var(--dark-teal);
    font-weight: bold;

    .home,
    .msg {
      display: flex;
      align-items: center;
      gap: 2px;
    }
  }
`;
