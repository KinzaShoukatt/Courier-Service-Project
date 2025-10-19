import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--secColor);
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-block: 25px;
  .errorMsg{
      color: red;
      font-family: "regular";
    }
  .heading {
    font-size: 22px;
    background-color: var(--dark-teal);
    color: var(--secColor);
    font-weight: bold;
    font-family: "regular";
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-block: 12px;
    font-weight: bold;
    padding-left: 20px;
  }

  form {
    padding-block: 10px;
    padding-inline: 3vw;
    color: var(--dark-teal);
    box-sizing: border-box;
    .heading {
      text-align: center;
      h1 {
        font-family: "semibold";
      }
      p {
        font-family: "regular";
      }
    }
    .boldText {
      font-family: "semibold";
      display: flex;
      gap: 5px;
      align-items: center;
      padding-block: 10px;
      border-bottom: 1px solid var(--borderColor);
      .icon {
        font-size: 22px;
      }
    }
    .inputFields {
      box-sizing: border-box;
      font-family: "regular";
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding-block: 10px;
      @media (max-width: 480px) {
        gap: 7px;
      }
      .childs {
        flex: 1;
        min-width: 200px;
        label {
          font-size: 18px;
        }
        input,
        select {
          box-sizing: border-box;
          width: 100%;
          border: 1px solid var(--borderColor);
          font-family: "regular";
          font-size: 15px;
          border-radius: 5px;
          padding: 13px 10px;
          outline-color: var(--borderColor);
          margin-block: 10px;
          @media (max-width: 480px) {
            margin-block: 2px;
          }
        }
        textarea {
          width: calc(100% - 15px);
          border: 1px solid var(--borderColor);
          font-family: "regular";
          font-size: 15px;
          border-radius: 5px;
          padding: 13px 10px;
          outline-color: var(--borderColor);
          margin-block: 10px;
          @media (max-width: 480px) {
            margin-block: 2px;
          }
        }
      }
    }
    .radioInputFields {
      display: flex;
      gap: 50px;
      font-size: 20px;
      font-family: "regular";
      padding-block: 10px;
      .radioChilds {
        display: flex;
        gap: 3px;
        align-items: center;
        input[type="radio"] {
          font-size: 50px;
          height: 17px;
          width: 17px;
          accent-color: var(--dark-teal);
          cursor: pointer;
        }
        label {
          cursor: pointer;
        }
      }
    }
    .dateTime {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      font-family: "regular";
      padding-block: 10px;
      /* display: none; */
      @media (max-width: 480px) {
        gap: 7px;
      }
      .dateTimeChilds {
        flex: 1;
        min-width: 200px;
        label {
          font-size: 18px;
        }
        input {
          width: calc(100% - 15px);
          object-fit: cover;
          border: 1px solid var(--borderColor);
          font-family: "regular";
          font-size: 15px;
          border-radius: 5px;
          padding: 13px 10px;
          margin-block: 10px;
          color: grey;
          outline-color: var(--borderColor);
          cursor: pointer;
          @media (max-width: 480px) {
            margin-block: 3px;
          }
        }
      }
    }
    button {
      background-color: var(--dark-teal);
      border: none;
      color: var(--secColor);
      font-weight: 400;
      font-family: "regular";
      font-size: 18px;
      padding: 10px 35px;
      border-radius: 8px;
      margin: 5px 0px;
      cursor: pointer;
      @media (max-width: 480px) {
        padding: 10px 28px;
      }
    }
  }
`;

export const Payment = styled.div`
  background-color: var(--secColor);
  border-radius: 10px;
  padding-block: 10px;
`;
export const Content = styled.div`
  background-color: var(--priColor);
  border-radius: 10px;
  padding-inline: 3vw;
  margin-inline: 15px;
  margin-bottom: 10px;
  padding-block: 10px;
  color: var(--dark-teal);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  .cancelBtn {
    background-color: #dc3545;
    border: none;
    font-family: "regular";
    color: black;
    font-weight: bold;
    font-size: 15px;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const OrderSummary = styled.div`
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
    background-color: var(--secColor);
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
`;

export const PaymentMethod = styled.div`
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
  .cardParent {
    margin-block: 20px;
    line-height: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    .card {
      border: 1px solid var(--borderColor);
      border-radius: 10px;
      background-color: var(--secColor);
      text-align: center;
      padding-block: 35px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
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
     .card.active {
  background: #e6f0ff; 
  transform: translateY(-8px); 
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15); 
  border: 1px solid  var(--dark-teal);
}
  }
`;

export const CreditCardParent = styled.div`
  background-color: var(--secColor);
  border-radius: 10px;
  margin-block: 10px;
  padding-block: 20px;
  padding-inline: 10px;
  .confirmBtn {
    background-color: var(--dark-teal);
    color: var(--secColor);
    font-family: "regular";
    border: none;
    font-weight: bold;
    font-size: 15px;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
  }
  .creditCard {
    font-family: "regular";
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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
      }
    }
    
  }
`;

/* COD Parent */
export const CODParent = styled.div`
  background-color: var(--secColor);
  border-radius: 10px;
  margin-block: 10px;
  padding-block: 20px;
  padding-inline: 20px;
  font-family: "regular";
  .child1 {
    color: black;
    padding-bottom: 15px;
  }

  .confirmBtn {
    background-color: var(--dark-teal);
    color: var(--secColor);
    font-family: "regular";
    border: none;
    font-weight: bold;
    font-size: 15px;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
  }
`;
