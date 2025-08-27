import React from "react";
import { Container } from "./style";
import { IoMdCheckmark } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { RiTruckFill } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa6";
const ParcelTracking = () => {
  return (
    <Container>
      <div className="firstLine">
        <FaLocationDot className="icon" size={20} color="white" />
        <h2>Parcel Tracking</h2>
      </div>
      <div className="parentDiv">
        <p>Enter Your Trcaking Number</p>
        <div className="trackOrder">
          <input className="inp" type="text" placeholder="TRK-1234567" />
          <button className="btn">Track Package</button>
        </div>
        {/* parcel Status */}
        <div className="parcelStatus">
          <div className="status">
            <p className="left">Parcel Status:</p>
            <p>In Transit</p>
          </div>
          <div className="status">
            <p className="left">Tracking ID:</p>
            <p>TRK_1234567</p>
          </div>
        </div>
        {/* parcel status */}
        <div className="parentProgressLine">
          <div className="progressLine">
            <div className="progressStep stepComplete">
              <div className="icon ">
                <IoMdCheckmark size={25} />
              </div>
              <p>Order placed</p>
            </div>
            <div className="progressStep stepComplete">
              <div className="icon">
                <IoMdCheckmark size={25} />
              </div>
              <p>Picked Up</p>
            </div>
            <div className="progressStep stepActive">
              <div className="icon ">
                <FaTruckFast size={25} />
              </div>
              <p>In Transit</p>
            </div>
            <div className="progressStep stepPending">
              <div className="icon">
                <RiTruckFill size={25} />
              </div>
              <p>Out for Delivery</p>
            </div>
            <div className="progressStep stepPending">
              <div className="icon">
                <FaBoxOpen size={25} />
              </div>
              <p>Delivered</p>
            </div>
          </div>
        </div>
        {/* detail */}
        <div className="card">
          <p className="heading">Package Details</p>
          <div className="cardChild">
            <p>Weight:</p>
            <p>5</p>
          </div>
          <div className="cardChild">
            <p>Size:</p>
            <p>Small</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ParcelTracking;
