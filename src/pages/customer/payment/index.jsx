import React, { useState} from "react";
import { Container } from "./style";

import { FaCreditCard } from "react-icons/fa6";
import { FaReceipt } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

// import { FaCreditCard } from "react-icons/fa6";
const Payment = () => {
    const navigate = useNavigate()
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

      <div className="content">
        {/* Order Summary */}
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
        {/* Payment Method */}
        <div className="boldText">
          <FaReceipt className="icon" color="#006769" />
          <h2>Select Payment Method</h2>
        </div>
        <div className="cardParent">
          <div
            className={`card ${selected === "credit" ? "active" : ""}`}
            onClick={() => setSelected("credit")}
          >
            <FaCreditCard className="icon" color="#006769" />
            <h3>Credit/Debit Card</h3>
            <p>Pay securely with your credit or debit card</p>
          </div>
          <div
            className={`card ${selected === "easypaisa" ? "active" : ""}`}
            onClick={() => setSelected("easypaisa")}
          >
            <FaMobileScreenButton className="icon" color="#006769" />
            <h3>EasyPaisa</h3>
            <p>Pay using your EasyPaisa mobile account</p>
          </div>
          <div
            className={`card ${selected === "cod" ? "active" : ""}`}
            onClick={() => setSelected("cod")}
          >
            <FaCreditCard className="icon" color="#006769" />
            <h3>Cash on Delivery</h3>
            <p>Pay when your package is delivered</p>
          </div>
        </div>
        {/* Credit Card */}
        {selected === "credit" && (
          <div className="creditCardParent">
            <div className="creditCard">
              <div className="childs">
                <label htmlFor="">Card Number</label>
                <br />
                <input type="text" placeholder="Enter card Number" />
              </div>
              <div className="childs">
                <label htmlFor="">Expiry date</label>
                <br />
                <input type="text" placeholder="DD/MM/YY" />
              </div>
            </div>
            <div className="creditCard">
              <div className="childs">
                <label htmlFor="">Card Holder</label>
                <br />
                <input type="text" placeholder="John Smith" />
              </div>
              <div className="childs">
                <label htmlFor="">CVV</label>
                <br />
                <input type="text" placeholder="123" />
              </div>
            </div>
          </div>
        )}
        {/* EsayPaisa */}
        {selected === "easypaisa" && (
          <div className="easypaisaParent">
            {/* <div className="easypaisa"> */}
            <div className="childs">
              <label htmlFor="">EasyPaisa Account Number</label>
              <br />
              <input type="text" placeholder="03XX XXXXXXX" />
            </div>
            <div className="childs">
              <label htmlFor="">EasyPaisa Pin</label>
              <br />
              <input type="text" placeholder="Enter Your Pin" />
            </div>
            {/* </div> */}
          </div>
        )}
        {/*  */}
        {selected === "cod" && (
          <div className="codParent">
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
          </div>
        )}
         {/* preview invoice */}
        { selected === "previewInvoice" && (
        <div className="previewInvoice">
          <h2>Invoice #TRK1234</h2>
          <div className="senderReciever">
            {/* Sender Deatail */}
            <div>
              <h3>Sender Details</h3>
              <div className="sender">
                <div className="senderfieldsleft">
                  <p className="key">Name:</p>
                  <p className="key">Address:</p>
                  <p className="key">Phone:</p>
                </div>
                <div className="senderfieldsright">
                  <p>John Smith</p>
                  <p>123 Main St, Karachi, Pakistan</p>
                  <p>+92 3124597202</p>
                </div>
              </div>
            </div>
            {/* Reciever Details */}
            <div>
              <h3>Receiver Details</h3>
              <div className="receiver">
                <div className="receiverfieldsleft">
                  <p className="key">Name:</p>
                  <p className="key">Address:</p>
                  <p className="key">Phone:</p>
                </div>
                <div className="receiverfieldsright">
                  <p>Emma Johsan</p>
                  <p>223 Main St, Lahore, Pakistan</p>
                  <p>+92 3124597202</p>
                </div>
              </div>
            </div>
          </div>
          <div className="dc">
            <p className="lefttext">Delivery Charges</p>
            <p>100 rps</p>
          </div>
          <div className="lastButtons" >
            <button className="email">Send to Email</button>
            <button className="download">Download</button>
          </div>
        </div>
        )}
        {/* buttons */}
        <div className="buttons">
          <div>
            <button className={`invoice ${selected === "previewInvoice" ? "active" : ""}`} onClick={() => setSelected("previewInvoice")}>Preview Invoice</button>
          </div>
          <div>
            <button className="pay">Pay Now</button>
          </div>
        </div>
       
        {/*  */}
      </div>
    </Container>
  );
};

export default Payment;
