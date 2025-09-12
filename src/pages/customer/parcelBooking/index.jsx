import React, { useState } from "react";
import { Container } from "./style";

import { MdLocationOn } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import AI from "../../../components/aiChatBox";

const ParcelBooking = () => {
  const navigate = useNavigate();
    const [pickupOption, setPickupOption] = useState("Instant Pickup");

    const [pickupAddress, setPickupAddress] = useState("");
    const [pickupZone, setPickupZone] = useState("")

    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [deliveryZone, setDeliveryZone] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!pickupAddress || !pickupZone){
        alert("Please Enter pickup Address  and enter a pickup Zone!")
      }
      if(!deliveryAddress || !deliveryZone){
        alert("Please Enter pickup Address  and enter a pickup Zone!")
      }
    }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="heading">
          <h1>Create New Booking</h1>
          <p>Fill out the form below to schedule your delivery</p>
        </div>
        {/* Address Information */}
        <div className="boldText">
          <MdLocationOn className="icon" color="#006769" />
          <h2>Address Information</h2>
        </div>
        <div className="inputFields">
          <div className="childs">
            <label htmlFor="">Pickup Address</label><br />
            <input type="text" placeholder="Enter Pickup Address" value={pickupAddress} onChange={(e) => setPickupAddress(e.target.value)}/>
            <select value={pickupZone} onChange={(e) => setPickupZone(e.target.value)}>
              <option >Select Pickup Zone</option>
              <option >Punjab</option>
              <option >Sindh</option>
              <option >kPk</option>
              <option >Balochistan</option>
            </select>
          </div>
          <div className="childs">
            <label htmlFor="">Delivery Address</label><br />
            <input type="text" placeholder="Enter Delivery Address" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)}/>
            <select value={deliveryZone} onChange={(e) => setDeliveryZone(e.target.value)}>
              <option >Select Delivery Zone</option>
              <option >Punjab</option>
              <option >Sindh</option>
              <option >kPk</option>
              <option >Balochistan</option>
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
            <label htmlFor="">Package Weight</label><br />
            <input type="number" placeholder="Enter Weight" />
          </div>
          <div className="childs">
            <label htmlFor="">Package Size</label><br />
            <select name="" id="">
              <option value="">small</option>
              <option value="">medium</option>
              <option value="">large</option>
              </select>
            
          </div>
          <div className="childs">
            <label htmlFor="">Package Content</label><br />
            <input type="text" placeholder="Enter Package Content" />
          </div>
        </div>
        <div className="inputFields">
          <div className="childs">
          <label htmlFor="">Enter Special Instructions</label><br />
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
                <input type="radio" id="Instant" name="Pickup" value="Instant Pickup" checked={pickupOption === "Instant Pickup"}
                onClick={() => setPickupOption("Instant Pickup")}/>
                <label htmlFor="Instant">Instant Pickup</label><br />
            </div>
            <div className="radioChilds">
                <input type="radio" id="Schedule" name="Pickup" value="Schedule Pickup" checked={pickupOption === "Schedule Pickup"}
                onClick={() => setPickupOption("Schedule Pickup")}/>
                <label htmlFor="Schedule">Schedule Pickup</label>
            </div>
        </div>
        {/* Date Time */}
        {pickupOption === "Schedule Pickup" && (
        <div className="dateTime">
          <div className="dateTimeChilds">
            <label htmlFor="">Pickup Date</label><br />
            <input type="date" placeholder="mm/dd/yyyy" />
          </div>
          <div className="dateTimeChilds">
            <label htmlFor="">Time Slot</label><br />
            <input type="time" placeholder="Enter Time" />
          </div>
        </div>
        )}
        <button onClick={() => navigate("/customer/payment")}>Check Out</button>
      </form>
      <AI/>
    </Container>
  );
};

export default ParcelBooking;
