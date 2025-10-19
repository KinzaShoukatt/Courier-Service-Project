import React, { useState } from "react";
import { Container } from "./style";
import { IoMdCheckmark } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { RiTruckFill } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa6";
import AI from "../../../components/aiChatBox";
import { useLocation } from "react-router-dom";
import UseCustomer from "../useHooks";
const ParcelTracking = () => {
  const [inputTrackingNumber, setInputTrackingNumber] = useState("");

  const location = useLocation();
  const TrackingNumber = location?.state?.TrackingNumber;
  const ParcelStatus = location?.state?.ParcelStatus;
  const PickupAddress = location?.state?.PickupAddress;
  const DeliveryAddress = location?.state?.DeliveryAddress;
  const PaymentMethod = location?.state?.PaymentMethod;
  const DeliveryCharges = location?.state?.DeliveryCharges;
  const DeliveryType = location?.state?.DeliveryType;
  const PackageWeight = location?.state?.PackageWeight;
  const PackageSize = location?.state?.PackageSize;

  const { trackParcels } = UseCustomer();
  const handleTrackParcels = async () => {
    await trackParcels(inputTrackingNumber);
  };

  const Statuses = [
    {
      key: "order_placed",
      label: "Order Placed",
      icon: <IoMdCheckmark size={25} />,
    },
    { key: "picked_up", label: "Picked Up", icon: <IoMdCheckmark size={25} /> },
    { key: "in_transit", label: "In Transit", icon: <FaTruckFast size={25} /> },
    {
      key: "out_for_delivery",
      label: "Out for Delivery",
      icon: <RiTruckFill size={25} />,
    },
    { key: "delivered", label: "Delivered", icon: <FaBoxOpen size={25} /> },
  ];

  return (
    <Container>
      <div className="firstLine">
        <FaLocationDot className="icon" size={20} color="white" />
        <h2>Parcel Tracking</h2>
      </div>
      <div className="parentDiv">
        <p>Enter Your Trcaking Number</p>
        <div className="trackOrder">
          <input
            className="inp"
            type="text"
            placeholder="PK-3ABEC351ECDDC"
            value={inputTrackingNumber}
            onChange={(e) => setInputTrackingNumber(e.target.value)}
          />
          <button className="btn" onClick={handleTrackParcels}>
            Track Package
          </button>
        </div>
        {/* parcel Status */}
        <div className="parcelStatus">
          <div className="status">
            <p className="left">Parcel Status:</p>
            <p>{ParcelStatus}</p>
          </div>
          <div className="status">
            <p className="left">Tracking ID:</p>
            <p>{TrackingNumber}</p>
          </div>
        </div>
        {/* parcel status */}
        <div className="parentProgressLine">
          <div className="progressLine">
            {Statuses.map((status, index) => {
              const activeIndex = Statuses.findIndex(
                (s) => s.key === ParcelStatus
              );
              let stepClass = "progressStep stepPending";

              if (index < activeIndex) stepClass = "progressStep stepComplete"; // green completed
              if (index === activeIndex) stepClass = "progressStep stepActive"; // current step

              return (
                <div key={status.key} className={stepClass}>
                  <div className="icon">{status.icon}</div>
                  <p>{status.label}</p>
                </div>
              );
            })}
            {/* <div className="progressStep stepComplete">
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
            <div className="progressStep stepPending">}
              <div className="icon">
                <FaBoxOpen size={25} />
              </div>
              <p>Delivered</p>
            </div>  */}
          </div>
        </div>
        {/* detail */}
        <div className="card">
          <p className="heading1">Package Details:</p>
          <div className="cardChild">
            <p className="heading">Pickup Address:</p>
            <p>{PickupAddress}</p>
          </div>
          <div className="cardChild">
            <p className="heading">Delivery Address:</p>
            <p>{DeliveryAddress}</p>
          </div>
          <div className="cardChild">
            <p className="heading">Payment Method:</p>
            <p>{PaymentMethod}</p>
          </div>
          <div className="cardChild">
            <p className="heading">Delivery Charges:</p>
            <p>{`${DeliveryCharges}Rs`}</p>
          </div>
          <div className="cardChild">
            <p className="heading">Delivery Type:</p>
            <p>{DeliveryType}</p>
          </div>
          <div className="cardChild">
            <p className="heading">Package Weight:</p>
            <p>{`${PackageWeight}kg`}</p>
          </div>
          <div className="cardChild">
            <p className="heading">Package Size:</p>
            <p>{PackageSize}</p>
          </div>
        </div>
      </div>
      <AI />
    </Container>
  );
};

export default ParcelTracking;
