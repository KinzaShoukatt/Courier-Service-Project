import React from "react";
import {
  Container,
  Payment,
  Content,
  OrderSummary,
  PaymentMethod,
  CreditCardParent,
  CODParent,
} from "./style";
import { IoPerson } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa6";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaReceipt } from "react-icons/fa6";

import { useState } from "react";

const ManualOrderCreation = () => {
  const [pickupOption, setPickupOption] = useState("Instant Pickup");

  const [pickupAddress, setPickupAddress] = useState("");
  const [pickupZone, setPickupZone] = useState("");

  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryZone, setDeliveryZone] = useState("");

  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pickupAddress || !pickupZone) {
      alert("Please Enter pickup Address  and enter a pickup Zone!");
    }
    if (!deliveryAddress || !deliveryZone) {
      alert("Please Enter pickup Address  and enter a pickup Zone!");
    }
  };
  return (
    <>
      <Container>
        <h2 className="heading">Manual Order Creation</h2>
        <form onSubmit={handleSubmit}>
          {/* person Information */}
          <div className="boldText">
            <IoPerson className="icon" color="#006769" />
            <h2>Customer Information</h2>
          </div>
          <div className="inputFields">
            <div className="childs">
              <label htmlFor="">Full Name</label>
              <br />
              <input type="text" placeholder="Enter Full Name" />
            </div>
            <div className="childs">
              <label htmlFor="">Enter Email</label>
              <br />
              <input type="email" placeholder="Enter Email" />
            </div>
            <div className="childs">
              <label htmlFor="">Phone No.</label>
              <br />
              <input type="tel" placeholder="Enter Phone No" />
            </div>
          </div>
          {/* Address Information */}
          <div className="boldText">
            <MdLocationOn className="icon" color="#006769" />
            <h2>Address Information</h2>
          </div>
          <div className="inputFields">
            <div className="childs">
              <label htmlFor="">Pickup Address</label>
              <br />
              <input
                type="text"
                placeholder="Enter Pickup Address"
                value={pickupAddress}
                onChange={(e) => setPickupAddress(e.target.value)}
              />
              <select
                value={pickupZone}
                onChange={(e) => setPickupZone(e.target.value)}
              >
                <option>Select Pickup Zone</option>
                <option>Punjab</option>
                <option>Sindh</option>
                <option>kPk</option>
                <option>Balochistan</option>
              </select>
            </div>
            <div className="childs">
              <label htmlFor="">Delivery Address</label>
              <br />
              <input
                type="text"
                placeholder="Enter Delivery Address"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
              />
              <select
                value={deliveryZone}
                onChange={(e) => setDeliveryZone(e.target.value)}
              >
                <option>Select Delivery Zone</option>
                <option>Punjab</option>
                <option>Sindh</option>
                <option>kPk</option>
                <option>Balochistan</option>
              </select>
            </div>
          </div>
          {/* package Details */}
          <div className="boldText">
            <FaBoxOpen className="icon" color="#006769" />
            <h2>Package Details</h2>
          </div>
          <div className="inputFields">
            <div className="childs">
              <label htmlFor="">Package Weight</label>
              <br />
              <input type="number" placeholder="Enter Weight" />
            </div>
            <div className="childs">
              <label htmlFor="">Package Size</label>
              <br />
              <select name="" id="">
                <option value="">small</option>
                <option value="">medium</option>
                <option value="">large</option>
              </select>
            </div>
            <div className="childs">
              <label htmlFor="">Package Content</label>
              <br />
              <input type="text" placeholder="Enter Package Content" />
            </div>
          </div>
          <div className="inputFields">
            <div className="childs">
              <label htmlFor="">Enter Special Instructions</label>
              <br />
              <textarea></textarea>
            </div>
          </div>

          {/* Pickup Options*/}
          <div className="boldText">
            <RiCalendarScheduleFill className="icon" color="#006769" />
            <h2>Pickup Options</h2>
          </div>
          <div className="radioInputFields">
            <div className="radioChilds">
              <input
                type="radio"
                id="Instant"
                name="Pickup"
                value="Instant Pickup"
                checked={pickupOption === "Instant Pickup"}
                onClick={() => setPickupOption("Instant Pickup")}
              />
              <label htmlFor="Instant">Instant Pickup</label>
              <br />
            </div>
            <div className="radioChilds">
              <input
                type="radio"
                id="Schedule"
                name="Pickup"
                value="Schedule Pickup"
                checked={pickupOption === "Schedule Pickup"}
                onClick={() => setPickupOption("Schedule Pickup")}
              />
              <label htmlFor="Schedule">Schedule Pickup</label>
            </div>
          </div>
          {/* Date Time */}
          {pickupOption === "Schedule Pickup" && (
            <div className="dateTime">
              <div className="dateTimeChilds">
                <label htmlFor="">Pickup Date</label>
                <br />
                <input type="date" placeholder="mm/dd/yyyy" />
              </div>
              <div className="dateTimeChilds">
                <label htmlFor="">Time Slot</label>
                <br />
                <input type="time" placeholder="Enter Time" />
              </div>
            </div>
          )}
          <button onClick={() => setShow(true)}>Check Out</button>
        </form>
        {show && (
          <Payment>
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
                    <h3>Pay Now</h3>
                    <p>Kindly make your payment now.</p>
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
                    <p>You will pay $25.00 now.</p>
                  </div>
                  <button className="confirmBtn">Confirm Order</button>
                </CODParent>
              )}

              <button className="cancelBtn">Cancel Order</button>
            </Content>
          </Payment>
        )}
      </Container>
    </>
  );
};

export default ManualOrderCreation;
