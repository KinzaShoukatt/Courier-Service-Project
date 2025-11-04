import React, { useEffect, useState } from "react";
import {
  Container,
  AssignedDelivery,
  ReasonRejection,
  UpdateStatus,
  PopUp,
  PaginationWrapper,
  PaginationInfo,
  PaginationNav,
  PageButton,
  PageNavButton,
  Dots,
} from "./style";

import { FaCircleCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import UseAgent from "../useHooks";
import { useForm } from "react-hook-form";

const AgentDashboard = () => {
  const [rejection, setRejection] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    allAssignedParcels,
    acceptParcel,
    rejectParcel,
    allAcceptParcels,
    changeParcelStatus,
  } = UseAgent();

  const [assignDeliveries, setAssignDeliveries] = useState([]);
  const [acceptParcels, setAcceptParcels] = useState([]);
  const [pagination1, setPagination1] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetchAssignDeliveries = async () => {
    const response = await allAssignedParcels();
    console.log("Api Response", response);
    setAssignDeliveries(response.parcels);
  };
  useEffect(() => {
    fetchAssignDeliveries();
  }, []);

  const fetchAcceptParcels = async () => {
    const response = await allAcceptParcels();
    console.log("Api Response", response);
    setAcceptParcels(response.parcels);
    setPagination1({
      page: response.pagination.currentPage,
      limit: response.pagination.itemsPerPage,
      totalItems: response.pagination.totalItems,
      totalPages: response.pagination.totalPages,
    });
  };
  useEffect(() => {
    fetchAcceptParcels(pagination1.page, pagination1.limit);
  }, []);

  const handleAcceptParcel = async (id, body) => {
    await acceptParcel(id, body);
    fetchAssignDeliveries();
    fetchAcceptParcels();
  };

  const handleRejectParcel = async (id, body) => {
    await rejectParcel(id, body);
    fetchAssignDeliveries();
  };

  const handleChangeParcelStatus = async (id, body) => {
    await changeParcelStatus(id, body);
    setOpen(false);
    fetchAcceptParcels();
  };

  return (
    <Container>
      <p className="mainHeading">Dashboard</p>
      <AssignedDelivery>
        <p className="heading">Assigned Deliveriers</p>
        <div className="AssignedDeliveryTable">
          <table>
            <thead>
              <tr>
                <th>Tracking ID</th>
                <th>Customer Name</th>
                <th>Pickup Address</th>
                <th>Delivery Address</th>
                <th>Pickup Slot</th>
                <th>Payment Method</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignDeliveries.map((parcel) => (
                <tr key={parcel.id}>
                  <td>{parcel.trackingNumber}</td>
                  <td>{parcel.Customer.fullName}</td>
                  <td>{parcel.pickupAddress}</td>
                  <td>{parcel.pickupAddress}</td>
                  <td>{parcel.pickupSlot}</td>
                  <td>{parcel.paymentMethod}</td>
                  <td>{parcel.paymentStatus}</td>
                  <td>
                    <div className="btns">
                      <button
                        className="btn1"
                        onClick={() => handleAcceptParcel(parcel.id)}
                      >
                        Accept
                      </button>
                      <button
                        className="btn2"
                        onClick={() => setRejection(true)}
                      >
                        Reject
                      </button>
                      {rejection && (
                        <ReasonRejection>
                          <div className="rejectionHeading">
                            <p>Reason of Rejection:</p>
                            <RxCross2
                              onClick={() => setRejection(false)}
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                          {/* <p className="rejectionHeading">Reason of Rejection:</p> */}
                          <form
                            onSubmit={handleSubmit((body) =>
                              handleRejectParcel(parcel.id, body)
                            )}
                          >
                            <textarea
                              name=""
                              id=""
                              rows="10"
                              {...register("reason", {
                                required: "reason is required",
                                pattern: {},
                              })}
                            ></textarea>
                            <div className="Btn">
                              <button className="submitBtn">Submit</button>
                            </div>
                          </form>
                        </ReasonRejection>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AssignedDelivery>

      <UpdateStatus>
        <p className="heading">Parcel Status</p>
        <div className="AssignedDeliveryTable">
          <table>
            <thead>
              <tr>
                <th>Tracking ID</th>
                <th>Customer Name</th>
                <th>Pickup Address</th>
                <th>Delivery Address</th>
                <th>Pickup Slot</th>
                <th>Payment Method</th>
                <th>Delivery Charges</th>
                <th>Payment Status</th>
                <th>Parcel Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {acceptParcels.map((order) => (
                <tr key={order.id}>
                  <td>{order.trackingNumber}</td>
                  <td>{order.Customer.fullName}</td>
                  <td>{order.pickupAddress}</td>
                  <td>{order.deliveryAddress}</td>
                  <td>{order.pickupSlot}</td>
                  <td>{order.paymentMethod}</td>
                  <td>{`${order.deliveryCharge}Rs`}</td>
                  <td>
                    <span className={`status ${order.paymentStatus}`}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td>
                    <span className={`orderStatus ${order.status}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="button"
                      onClick={() => setOpen(order.id)}
                    >
                      Change Parcel Status
                    </button>
                    {open === order.id && (
                      <PopUp>
                        <div className="parcelStatus">
                          <p>Change Parcel Status:</p>
                          <RxCross2
                            onClick={() => setOpen(false)}
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                        <div className="btnParent">
                          <div>
                            <button
                              className="btn picked"
                              onClick={() =>
                                handleChangeParcelStatus(order.id, {
                                  status: "picked_up",
                                })
                              }
                            >
                              PickedUp
                            </button>
                          </div>
                          <div>
                            <button
                              className="btn out"
                              onClick={() =>
                                handleChangeParcelStatus(order.id, {
                                  status: "out_for_delivery",
                                })
                              }
                            >
                              Out For Delivery
                            </button>
                          </div>
                        </div>
                        <div className="btnParent">
                          <div>
                            <button
                              className="btn transit"
                              onClick={() =>
                                handleChangeParcelStatus(order.id, {
                                  status: "in_transit",
                                })
                              }
                            >
                              In Transit
                            </button>
                          </div>
                          <div>
                            <button
                              className="btn delivered"
                              onClick={() =>
                                handleChangeParcelStatus(order.id, {
                                  status: "delivered",
                                })
                              }
                            >
                              <FaCircleCheck size={16} />
                              Delivered
                            </button>
                          </div>
                        </div>
                      </PopUp>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <PaginationWrapper>
            <PaginationInfo>
              Showing {(pagination1.page - 1) * pagination1.limit + 1}–
              {Math.min(
                pagination1.page * pagination1.limit,
                pagination1.totalItems
              )}
              of {pagination1.totalItems}
            </PaginationInfo>

            <PaginationNav>
              <PageNavButton
                disabled={pagination1.page === 1}
                onClick={() =>
                  fetchAcceptParcels(pagination1.page - 1, pagination1.limit)
                }
              >
                <FaChevronLeft size={12} />
              </PageNavButton>

              {Array.from({ length: pagination1.totalPages }).map(
                (_, index) => (
                  <PageButton
                    key={index}
                    className={pagination1.page === index + 1 ? "active" : ""}
                    onClick={() =>
                      fetchAcceptParcels(index + 1, pagination1.limit)
                    }
                  >
                    {index + 1}
                  </PageButton>
                )
              )}

              <PageNavButton
                disabled={pagination1.page === pagination1.totalPages}
                onClick={() =>
                  fetchAcceptParcels(pagination1.page + 1, pagination1.limit)
                }
              >
                <FaChevronRight size={12} />
              </PageNavButton>
            </PaginationNav>
          </PaginationWrapper>
        </div>
      </UpdateStatus>
    </Container>
  );
};

export default AgentDashboard;
