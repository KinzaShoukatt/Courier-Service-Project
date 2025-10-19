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
import UseAdmin from "../useHooks";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

const ManualOrderCreation = () => {
  const {
    manualOrderPrepare,
    cashPayment,
    bookingOrderInvoice,
    stripePayment,
    cancelParcel,
  } = UseAdmin();
  const [pickupOption, setPickupOption] = useState("Instant Pickup");
  const [isOrder1Confirmed, setIsOrder1Confirmed] = useState(false);
  const [showInvoiceBtn, setShowInvoiceBtn] = useState(false);

  const zones = [
    { id: 1, name: "Punjab" },
    { id: 2, name: "Sindh" },
    { id: 3, name: "KPK" },
    { id: 4, name: "Balochistan" },
  ];

  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

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
      customer: {
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
      },
      parcel: {
        pickupAddress: data.pickupAddress,
        deliveryAddress: data.deliveryAddress,
        packageWeight: data.packageWeight,
        packageSize: data.packageSize,
        packageContent: data.packageContent,
        pickupSlot: data.pickupSlot,
        specialInstructions: data.specialInstructions,
        pickupZoneId: Number(data.pickupZoneId),
        deliveryZoneId: Number(data.deliveryZoneId),
        deliveryType:
          pickupOption === "Instant Pickup" ? "instant" : "scheduled",
      },
    };
    const response = await manualOrderPrepare(payload);
    console.log(response);
    if (response?.parcelId) {
      setShow(true);
    }
  };

  const location = useLocation();
  const parcelId = Number(localStorage.getItem("parcelId"));
  const totalCharges = Number(sessionStorage.getItem("totalCharges"));

  const handleCashPayment = async (body) => {
    return await cashPayment(body);
  };

  const handleBookingOrderInvoice = async () => {
    await bookingOrderInvoice(parcelId);
  };

  const handleStripePayment = async (body) => {
    await stripePayment(body);
  };

  const handleCancelParcel = async (body) => {
    return await cancelParcel(body);
  };

  return (
    <>
      <Container>
        <h2 className="heading">Manual Order Creation</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* person Information */}
          <div className="boldText">
            <IoPerson className="icon" color="#006769" />
            <h2>Customer Information</h2>
          </div>
          <div className="inputFields">
            <div className="childs">
              <label htmlFor="">Full Name</label>

              <br />
              {errors.fullName && (
                <p className="errorMsg">{errors.fullName.message}</p>
              )}
              <input
                type="text"
                placeholder="Enter Full Name"
                {...register("fullName", {
                  required: "Enter Name of Customer!",
                })}
              />
            </div>
            <div className="childs">
              <label htmlFor="">Enter Email</label>
              <br />

              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}
              <input
                type="email"
                placeholder="Enter Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid Email",
                  },
                })}
              />
            </div>
            <div className="childs">
              <label htmlFor="">Phone No.</label>
              <br />
              {errors.phoneNumber && (
                <p className="errorMsg">{errors.phoneNumber.message}</p>
              )}
              <input
                type="tel"
                placeholder="Enter Phone No"
                {...register("phoneNumber", {
                  required: "Phone Number is Required",
                  minLength: {
                    value: 11,
                    message: "Invalid Phone Number",
                  },
                  maxLength: {
                    value: 11,
                    message: "Invalid Phone Number",
                  },
                })}
              />
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
                value="Schedule Pickup"
                checked={pickupOption === "Scheduled Pickup"}
                onClick={() => setPickupOption("Scheduled Pickup")}
                {...register("deliveryType", {
                  required: "Select Pickup Date!",
                })}
              />
              <label htmlFor="Schedule">Schedule Pickup</label>
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
                    <p>You will pay {totalCharges} now.</p>
                  </div>
                  {!isOrder1Confirmed ? (
                    <button
                      className="confirmBtn"
                      onClick={async () => {
                        const response = await handleCashPayment({
                          paymentMethod: "cod",
                        });
                        if (response?.message?.includes("confirmed")) {
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
          </Payment>
        )}
      </Container>
    </>
  );
};

export default ManualOrderCreation;
