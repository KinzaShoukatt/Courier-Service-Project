import React, { useEffect, useState } from "react";
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

import { useLocation, useNavigate } from "react-router-dom";
import AI from "../../../components/aiChatBox";
import UseCustomer from "../useHooks";
import { showSuccess } from "../../../utils/toast";

const Payment = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [isOrder1Confirmed, setIsOrder1Confirmed] = useState(false);
  const [showInvoiceBtn, setShowInvoiceBtn] = useState(false);

  const location = useLocation();
  const parcelId = Number(localStorage.getItem("parcelId"));
  const totalCharges = Number(sessionStorage.getItem("totalCharges"));

  const { codConfirm, stripePayment, bookingOrderInvoice, cancelParcel } =
    UseCustomer();

  useEffect(() => {
    const savedMethod = sessionStorage.getItem("paymentMethod");
    if (savedMethod) {
      setSelected(savedMethod);
    }
  }, []);

  const handleSelectMethod = (method) => {
    setSelected(method);
    sessionStorage.setItem("paymentMethod", method);
  };

  useEffect(() => {
    const url = new URLSearchParams(location.search);
    const status = url.get("status");
    const parcelId = url.get("parcel_id");
    if (status === "success" && parcelId) {
      showSuccess("Your payment has been processed successfully!");
      setShowInvoiceBtn(true);
    }
  }, [location.search]);

  const handleCodConfirm = async (body) => {
    return await codConfirm(body);
  };

  const handleBookingOrderInvoice = async () => {
    await bookingOrderInvoice(parcelId, navigate);
  };

  const handleStripePayment = async (body) => {
    await stripePayment(body);
  };

  const handleCancelParcel = async (body) => {
    return await cancelParcel(body);
  };

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
              <p>{totalCharges} rps</p>
            </div>
            <div className="child2">
              <p>Total Amount</p>
              <p>{totalCharges} rps</p>
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
              onClick={() => handleSelectMethod("credit")}
            >
              <FaCreditCard className="icon" color="#006769" />
              <h3>Online Payment</h3>
              <p>Pay securely with your credit or debit card</p>
            </div>
            <div
              className={`card ${selected === "cod" ? "active" : ""}`}
              onClick={() => handleSelectMethod("cod")}
            >
              <FaMoneyBill1Wave className="icon" color="#006769" />
              <h3>Cash on Delivery</h3>
              <p>Pay when your package is delivered</p>
            </div>
          </div>
        </PaymentMethod>

        {/* Credit Card */}
        {selected === "credit" && (
          <CreditCardParent>
            {showInvoiceBtn ? (
              <button
                className="confirmBtn"
                onClick={() => handleBookingOrderInvoice()}
              >
                Show Invoice
              </button>
            ) : (
              <button
                className="confirmBtn"
                onClick={async () => {
                  handleStripePayment();
                }}
              >
                Confirm Order
              </button>
            )}
          </CreditCardParent>
        )}

        {/* COD Parent */}
        {selected === "cod" && (
          <CODParent>
            <div className="child1">
              <p>
                You will pay {totalCharges} rps when your package is delivered.
              </p>
              <p>Please keep the exact amount ready for the delivery person.</p>
            </div>
            <div className="child2">
              <input type="radio" required />
              <p>
                I understand that I need to pay the full amount upon delivery
              </p>
            </div>
            {!isOrder1Confirmed ? (
              <button
                className="confirmBtn"
                onClick={async () => {
                  const response = await handleCodConfirm({
                    paymentMethod: "cod",
                  });
                  if (response?.message?.includes("successfully!")) {
                    setIsOrder1Confirmed(true);
                  }
                }}
              >
                Confirm Order
              </button>
            ) : (
              <button
                className="confirmBtn"
                onClick={() => handleBookingOrderInvoice()}
              >
                Show Invoice
              </button>
            )}
          </CODParent>
        )}

        <button
          className="cancelBtn"
          onClick={() => handleCancelParcel(parcelId)}
        >
          Cancel Order
        </button>
      </Content>
      <AI />
    </Container>
  );
};

export default Payment;
