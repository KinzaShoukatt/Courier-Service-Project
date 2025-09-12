import React, { useState } from "react";
import {
  Container,
  Content,
  OrderSummary,
  PaymentMethod,
  CreditCardParent,
  CODParent,
} from "./style";

import { FaCreditCard } from "react-icons/fa6";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaReceipt } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import AI from "../../../components/aiChatBox";

const Payment = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  return (
    <Container>
      <div className="firstLine">
        <div className="heading">
          <FaCreditCard className="icon" size={20} color="white" />
          <h2>Payment</h2>
        </div>
        <div className="para">Complete your payment securely</div>
      </div>

      <Content>
        {/* Order Summary */}
        <OrderSummary>
          <div className="boldText">
            <FaReceipt className="icon" color="#006769" />
            <h2>Order Summary</h2>
          </div>
          <div className="parent">
            <div className="child1">
              <p>Delivery Charges</p>
              <p>100 rps</p>
            </div>
            <div className="child2">
              <p>Total Amount</p>
              <p>100 rps</p>
            </div>
          </div>
        </OrderSummary>
        {/* Payment Method */}
        <PaymentMethod>
          <div className="boldText">
            <FaMoneyBill1Wave className="icon" color="#006769" />
            <h2>Select Payment Method</h2>
          </div>
          <div className="cardParent">
            <div
              className={`card ${selected === "credit" ? "active" : ""}`}
              onClick={() => setSelected("credit")}
            >
              <FaCreditCard className="icon" color="#006769" />
              <h3>Online Payment</h3>
              <p>Pay securely with your credit or debit card</p>
            </div>
            <div
              className={`card ${selected === "cod" ? "active" : ""}`}
              onClick={() => setSelected("cod")}
            >
              <FaMoneyBill1Wave className="icon" color="#006769" />
              <h3>Cash on Delivery</h3>
              <p>Pay when your package is delivered</p>
            </div>
          </div>
        </PaymentMethod>
        {/* Credit Card */}
        {selected === "credit" && (
          <CreditCardParent>{/* remianing  */}</CreditCardParent>
        )}

        {/* COD Parent */}
        {selected === "cod" && (
          <CODParent>
            <div className="child1">
              <p>You will pay $25.00 when your package is delivered.</p>
              <p>Please keep the exact amount ready for the delivery person.</p>
            </div>
            <div className="child2">
              <input type="radio" required />
              <p>
                I understand that I need to pay the full amount upon delivery
              </p>
            </div>
            <button className="confirmBtn">Confirm Order</button>
          </CODParent>
        )}

        <button className="cancelBtn">Cancel Order</button>
      </Content>
      <AI />
    </Container>
  );
};

export default Payment;
