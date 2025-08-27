import styled from "styled-components";

export const Container = styled.div`
  min-height: 85vh;
  /* padding-inline: 10px; */
  background-color: var(--secColor);
  box-sizing: border-box;
  border: 2px transparent;
  border-radius: 10px;
  .firstLine {
    background-color: var(--dark-teal);
    color: var(--secColor);
    padding-block: 10px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    text-align: center;
    .heading {
      font-family: "semibold";
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: center;
    }
    .para {
      font-family: "regular";
      color: var(--borderColor);
    }
  }
  .content {
    padding-inline: 15px;
    padding-block: 10px;
    color: var(--dark-teal);
    .boldText {
      font-family: "semibold";
      display: flex;
      gap: 3px;
      align-items: center;
      padding-block: 10px;
      border-bottom: 1px solid var(--borderColor);
      .icon {
        font-size: 22px;
      }
    }
    .parent {
      font-family: "regular";
      background-color: var(--priColor);
      margin-block: 20px;
      border-radius: 10px;
      padding-inline: 30px;
      padding-block: 15px;
      @media (max-width: 480px) {
        gap: 7px;
      }
      .child1 {
        display: flex;
        justify-content: space-between;
        color: black;
        padding-block: 10px;
        border-bottom: 1px solid var(--borderColor);
      }
      .child2 {
        display: flex;
        justify-content: space-between;
        color: var(--dark-teal);
        padding-top: 5px;
        padding-bottom: 15px;
        font-weight: bold;
      }
    }
    .cardParent {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      margin-block: 20px;
      line-height: 2;
      /* flex-wrap: wrap; */
      /* flex-wrap: wrap; */
      /* @media (max-width: 480px) {
        gap: 7px;
      } */
      .card {
        border: 1px solid var(--borderColor);
        border-radius: 10px;
        width: 320px;
        /* max-width: auto; */
        text-align: center;
        padding-block: 35px;
        cursor: pointer;
        transition: all 0.4s;
       
        &:hover {
          border: 1px solid var(--dark-teal);
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
        .icon {
          font-size: 30px;
        }
        h3 {
          font-family: "semibold";
        }
        p {
          font-family: "regular";
          color: grey;
          font-size: 13px;
          flex-wrap: wrap;
        }
      }
    }
    .creditCardParent {
      background-color: var(--priColor);
      border-radius: 10px;
      padding-block: 20px;
      padding-inline: 10px;
      .creditCard {
        font-family: "regular";
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        /* @media (max-width: 502px) {
        gap: 7px;
      } */
        .childs {
          flex: 1;
          min-width: 200px;
          label {
            font-size: 18px;
          }
          input {
            width: calc(100% - 20px);
            object-fit: cover;
            border: 1px solid var(--borderColor);
            font-family: "regular";
            font-size: 15px;
            border-radius: 5px;
            padding: 13px 10px;
            outline-color: var(--borderColor);
            margin-block: 10px;
            /* @media (max-width: 480px) {
            margin-block: 2px;
          } */
          }
        }
      }
    }
    .easypaisaParent {
      background-color: var(--priColor);
      border-radius: 10px;
      margin-block: 10px;
      padding-block: 20px;
      padding-inline: 10px;
      font-family: "regular";
      /* @media (max-width: 502px) {
        gap: 7px;
      } */
      .childs {
        flex: 1;
        min-width: 200px;
        label {
          font-size: 18px;
        }
        input {
          width: calc(100% - 20px);
          object-fit: cover;
          border: 1px solid var(--borderColor);
          font-family: "regular";
          font-size: 15px;
          border-radius: 5px;
          padding: 13px 10px;
          outline-color: var(--borderColor);
          margin-block: 10px;
          /* @media (max-width: 480px) {
            margin-block: 2px;
          } */
        }
      }
    }
    .codParent {
      background-color: var(--priColor);
      border-radius: 10px;
      margin-block: 10px;
      padding-block: 20px;
      padding-inline: 20px;
      font-family: "regular";
      /* @media (max-width: 502px) {
        gap: 7px;
      } */
      .child1 {
        color: black;
      }
      .child2 {
        display: flex;
        align-items: baseline;
        gap: 3px;
        color: var(--dark-teal);
        padding-block: 15px;
      }
    }
    .buttons {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-block: 30px;
      .invoice {
        border: 1px solid var(--dark-teal);
        font-family: "regular";
        background-color: var(--secColor);
        color: var(--dark-teal);
        font-weight: bold;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
      }
      .pay {
        border: 1px solid var(--dark-teal);
        font-family: "regular";
        background-color: var(--dark-teal);
        color: var(--secColor);
        font-weight: bold;
        padding: 10px 30px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
    .previewInvoice {
      background-color: var(--priColor);
      border-radius: 10px;
      padding-block: 10px;
      padding-inline: 20px;
      .heading {
        color: black;
        padding-block: 20px;
        /* padding-inline: 50px; */
        display: flex;
        .senderheading {
          padding-left: 50px;
        }
        .receiverheading {
          padding-right: 0px;
        }
      }
      h2 {
        text-align: center;
        font-family: "semibold";
        color: black;
        padding-block: 10px;
        border-bottom: 1px solid var(--borderColor);
      }
      .senderReciever {
        display: flex;
        justify-content: space-between;
        font-family: "regular";
        padding-inline: 50px;
        padding-block: 10px;
        @media (max-width: 604px) {
          flex-direction: column;
          padding-inline: 20px;
        }
        @media (max-width: 436px) {
          padding-inline: 0px;
        }
        h3 {
          color: black;
          padding-block: 10px;
        }
        .sender {
          display: flex;
          gap: 25px;
          .senderfieldsleft {
            font-weight: bold;
            @media (max-width: 476px) {
              font-size: 14px;
            }
          }
          .senderfieldsright {
            color: black;
            @media (max-width: 476px) {
              font-size: 14px;
            }
          }
        }
        .receiver {
          display: flex;
          gap: 25px;
          .receiverfieldsleft {
            font-weight: bold;
            @media (max-width: 476px) {
              font-size: 14px;
            }
          }
          .receiverfieldsright {
            color: black;
             @media (max-width: 476px) {
              font-size: 14px;
            }
          }
        }
      }
      .dc {
        display: flex;
        margin-block: 10px;
        padding-inline: 50px;
        font-family: "regular";
        font-weight: bold;
        gap: 50%;
        background-color: #dfedee;
        padding-block: 15px;
        border-radius: 10px;
        .lefttext {
          color: black;
        }
      }
      .lastButtons {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-block: 25px;
      }
      button {
        background-color: var(--dark-teal);
        color: var(--secColor);
        font-family: "regular";
        font-weight: bold;
        border: none;
        border-radius: 7px;
        padding: 12px 25px;
      }
    }
  }
`;
