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
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-family: "regular";
    .devgo {
      display: flex;
      justify-content: center;
      gap: 6px;
      padding-block: 5px;
      background-color: var(--dark-teal);
      color: var(--secColor);
      font-family: "semibold";
      font-size: 22px;
      align-items: center;
      @media (max-width: 520px) {
        font-size: 18px;
      }
      @media (max-width: 420px) {
        font-size: 16px;
      }
      img {
        height: 50px;
        width: 60px;
        @media (max-width: 520px) {
          height: 45px;
          width: 50px;
        }
        @media (max-width: 420px) {
          height: 40px;
          width: 45px;
        }
      }
    }
  }
  .homee {
    flex: 1;
    padding: 15px;

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
    padding: 15px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 100%;
  }

  .customer-message,
  .admin-message {
    padding: 15px 20px;
    border-radius: 15px;
    margin-bottom: 12px;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-size: 14px;
    line-height: 1.6;
    @media (max-width: 520px) {
      font-size: 13px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
      padding: 12px 15px;
    }
  }

  .admin-message {
    box-sizing: border-box;
    background: #f1f0f0;
    align-self: flex-start;
    margin-right: 90px;
    max-width: 85%;
    width: max-content;
  }

  .customer-message {
    box-sizing: border-box;
    background: #006769;
    color: #fff;
    align-self: flex-end;
    max-width: 85%;
    width: max-content;
  }

  .input-box {
    display: flex;
    padding: 15px;
    border-top: 1px solid var(--borderColor);
    border-bottom: 1px solid var(--borderColor);
    background: var(--priColor);
    @media (max-width: 520px) {
      padding: 10px;
    }
    @media (max-width: 420px) {
      padding: 8px;
    }
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
    @media (max-width: 520px) {
      font-size: 13px;
      padding: 8px 15px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
      padding: 8px 15px;
    }
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
    @media (max-width: 520px) {
      font-size: 13px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
      padding: 11px 15px;
    }
  }

  .input-box button:hover {
    background: #005658ff;
  }
`;
