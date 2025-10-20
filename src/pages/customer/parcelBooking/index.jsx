import React, { useState } from "react";
import { Container } from "./style";
import { useForm } from "react-hook-form";

import { MdLocationOn } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";
import AI from "../../../components/aiChatBox";
import UseCustomer from "../useHooks";

import "flatpickr/dist/flatpickr.min.css";

const ParcelBooking = () => {
  const { parcelBookingCheckout } = UseCustomer();
  const [pickupOption, setPickupOption] = useState("Instant Pickup");

  const zones = [
    { id: 1, name: "Punjab" },
    { id: 2, name: "Sindh" },
    { id: 3, name: "KPK" },
    { id: 4, name: "Balochistan" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (pickupOption === "Scheduled Pickup") {
      data.pickupSlot = `${data.pickupDate}, ${data.pickupStart} to ${data.pickupEnd}`;
    } else {
      data.pickupSlot = "Instant Pickup";
    }
    const payload = {
      pickupAddress: data.pickupAddress,
      deliveryAddress: data.deliveryAddress,
      packageWeight: data.packageWeight,
      packageSize: data.packageSize,
      packageContent: data.packageContent,
      pickupSlot: data.pickupSlot,
      specialInstructions: data.specialInstructions,
      pickupZoneId: Number(data.pickupZoneId),
      deliveryZoneId: Number(data.deliveryZoneId),
      deliveryType: pickupOption === "Instant Pickup" ? "instant" : "scheduled",
    };

    console.log("Final Payload -> ", payload);
    await parcelBookingCheckout(payload);
  };
  return (
    <Container>
      <div className="heading">
        <h2 className="firstLine">Create New Booking</h2>
        <p>Fill out the form below to schedule your delivery</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="boldText">
          <MdLocationOn className="icon" color="#006769" />
          <h2>Address Information</h2>
        </div>
        <div className="inputFields">
          <div className="childs">
            <label htmlFor="">Pickup Address</label>
            <br />
            {errors.pickupAddress && (
              <p className="errorMsg">{errors.pickupAddress.message}</p>
            )}
            <input
              type="text"
              placeholder="Enter Pickup Address"
              {...register("pickupAddress", {
                required: "Enter Pickup Address",
              })}
            />
            {errors.pickupZoneId && (
              <p className="errorMsg">{errors.pickupZoneId.message}</p>
            )}
            <select
              {...register("pickupZoneId", {
                required: "Enter Pickup Zone",
              })}
            >
              <option value="">Select Pickup Zone</option>
              {zones.map((zone) => (
                <option key={zone.id} value={zone.id}>
                  {zone.name}
                </option>
              ))}
            </select>
          </div>

          <div className="childs">
            <label htmlFor="">Delivery Address</label>
            <br />
            {errors.deliveryAddress && (
              <p className="errorMsg">{errors.deliveryAddress.message}</p>
            )}
            <input
              type="text"
              placeholder="Enter Delivery Address"
              {...register("deliveryAddress", {
                required: "Enter Delivery Address",
              })}
            />
            {errors.deliveryZoneId && (
              <p className="errorMsg">{errors.deliveryZoneId.message}</p>
            )}
            <select
              {...register("deliveryZoneId", {
                required: "Enter Delivery Zone",
              })}
            >
              <option value="">Select Delivery Zone</option>
              {zones.map((zone) => (
                <option key={zone.id} value={zone.id}>
                  {zone.name}
                </option>
              ))}
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
            {errors.packageWeight && (
              <p className="errorMsg">{errors.packageWeight.message}</p>
            )}
            <input
              type="number"
              placeholder="Enter Weight"
              {...register("packageWeight", {
                required: "Enter Weight of Parcel!",
                max: {
                  value: 50,
                  message: "Weight cannot exceed 50 kg",
                },
              })}
            />
          </div>
          <div className="childs">
            <label htmlFor="">Package Size</label>
            <br />
            {errors.packageSize && (
              <p className="errorMsg">{errors.packageSize.message}</p>
            )}
            <select
              name=""
              id=""
              {...register("packageSize", {
                required: "Enter Size of Parcel!",
              })}
            >
              <option value="">Select Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="childs">
            <label htmlFor="">Package Content</label>
            <br />
            {errors.packageContent && (
              <p className="errorMsg">{errors.packageContent.message}</p>
            )}
            <input
              type="text"
              placeholder="Enter Package Content"
              {...register("packageContent", {
                required: "Enter Package Content!",
              })}
            />
          </div>
        </div>
        <div className="inputFields">
          <div className="childs">
            <label htmlFor="">Enter Special Instructions</label>
            <br />
            {errors.specialInstructions && (
              <p className="errorMsg">{errors.specialInstructions.message}</p>
            )}
            <textarea
              {...register("specialInstructions", {
                required: "Enter Special Instructions!",
              })}
            ></textarea>
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
              {...register("deliveryType", {
                required: "Select Pickup Date!",
              })}
            />
            <label htmlFor="Instant">Instant Pickup</label>
            <br />
          </div>
          <div className="radioChilds">
            <input
              type="radio"
              id="Scheduled"
              name="Pickup"
              value="Scheduled Pickup"
              checked={pickupOption === "Scheduled Pickup"}
              onClick={() => setPickupOption("Scheduled Pickup")}
              {...register("deliveryType", {
                required: "Select Pickup Date!",
              })}
            />
            <label htmlFor="Scheduled">Scheduled Pickup</label>
          </div>
        </div>

        {/* Date Time */}
        {pickupOption === "Scheduled Pickup" && (
          <>
            <div className="dateTime">
              <div className="dateTimeChilds">
                <label htmlFor="">Pickup Date</label>
                <br />
                {errors.pickupDate && (
                  <p className="errorMsg">{errors.pickupDate.message}</p>
                )}
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  {...register("pickupDate", {
                    required: "Select Pickup Date!",
                  })}
                />
              </div>
            </div>

            <label htmlFor="">Pick Time Slot</label>
            <div className="dateTime">
              <div className="dateTimeChilds">
                <label htmlFor="">Strat Time</label>
                <br />
                {errors.pickupStart && (
                  <p className="errorMsg">{errors.pickupStart.message}</p>
                )}
                <input
                  type="time"
                  placeholder="mm/dd/yyyy"
                  {...register("pickupStart", {
                    required: "Select Start Time!",
                  })}
                />
              </div>
              <div className="dateTimeChilds">
                <label htmlFor="">End Time</label>
                <br />
                {errors.pickupEnd && (
                  <p className="errorMsg">{errors.pickupEnd.message}</p>
                )}
                <input
                  type="time"
                  placeholder="Enter Time"
                  {...register("pickupEnd", { required: "Select End Time!" })}
                />
              </div>
            </div>
            <input type="hidden" {...register("pickupSlot")} />
          </>
        )}
        <button type="submit">Check Out</button>
      </form>
      <AI />
    </Container>
  );
};

export default ParcelBooking;
