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
    font-size: 15px;
    @media (max-width: 520px) {
      font-size: 14px;
    }
    @media (max-width: 420px) {
      font-size: 12px;
    }
    @media (max-width: 340px) {
      font-size: 10px;
    }
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
`;
export const Content = styled.div`
  padding-inline: 15px;
  padding-block: 10px;
  color: var(--dark-teal);
  .cancelBtn {
    background-color: #dc3545;
    border: none;
    font-family: "regular";
    color: black;
    font-weight: bold;
    font-size: 15px;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    @media (max-width: 520px) {
      font-size: 14px;
      padding: 9px 12px;
    }
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
      font-size: 20px;
    }
    .headings {
      font-size: 20px;
      @media (max-width: 420px) {
        font-size: 18px;
      }
      @media (max-width: 340px) {
        font-size: 15px;
      }
    }
  }
  .parent {
    font-family: "regular";
    background-color: var(--priColor);
    margin-block: 20px;
    border-radius: 10px;
    padding-inline: 30px;
    padding-block: 15px;
    @media (max-width: 520px) {
      gap: 7px;
      font-size: 14px;
      margin-block: 10px;
      padding-block: 12px;
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
      font-size: 20px;
    }
    .headings {
      font-size: 20px;
      @media (max-width: 420px) {
        font-size: 18px;
      }
      @media (max-width: 340px) {
        font-size: 15px;
      }
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
      .paymentHeading {
        font-family: "semibold";
        font-size: 18px;
        color: var(--dark-teal);
        @media (max-width: 520px) {
          font-size: 16px;
        }
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
      border: 1px solid var(--dark-teal);
    }
  }
`;

export const CreditCardParent = styled.div`
  background-color: var(--priColor);
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
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    @media (max-width: 520px) {
      font-size: 14px;
      padding: 9px 12px;
    }
  }
`;

/* COD Parent */
export const CODParent = styled.div`
  background-color: var(--priColor);
  border-radius: 10px;
  margin-block: 10px;
  padding-block: 20px;
  padding-inline: 20px;
  font-family: "regular";
  font-size: 15px;
  @media (max-width: 520px) {
    font-size: 14px;
  }
  .child1 {
    color: black;
  }
  .child2 {
    display: flex;
    align-items: baseline;
    gap: 3px;
    color: var(--dark-teal);
    padding-block: 15px;
    input {
      cursor: pointer;
    }
  }
  .confirmBtn {
    background-color: var(--dark-teal);
    color: var(--secColor);
    font-family: "regular";
    border: none;
    font-weight: bold;
    font-size: 15px;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    @media (max-width: 520px) {
      font-size: 14px;
      padding: 9px 12px;
    }
  }
`;
