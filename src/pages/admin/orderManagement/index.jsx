import React from "react";
import {
  Heading,
  Container,
  AssignDelivery,
  DivsSetting,
  LeftDiv,
  RightDiv,
  AssignDeliveryTable,
  RescheduleCancel,
  Popup,
  ParcelHistory,
  PaginationWrapper,
  PaginationInfo,
  PaginationNav,
  PageButton,
  PageNavButton,
} from "./style";

import { useEffect, useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import UseAdmin from "../useHooks";
import { useForm } from "react-hook-form";
import { showError, showSuccess } from "../../../utils/toast";

const OrderManagement = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);

  const {
    orderPlacedGet,
    allAgentsGet,
    cancelParcel,
    resheduleParcel,
    assignParcel,
    orderScheduledGet,
    orderCancelledGet,
    activeOrdersGet,
    trackParcels,
    deliveryOrderInvoice,
  } = UseAdmin();

  const [allPlacedOrders, setAllPlacedOrders] = useState([]);
  const [allAgents, setAllAgents] = useState([]);
  const [allScheduledOrders, setAllScheduledOrders] = useState([]);
  const [allCancelledOrders, setAllCancelledOrders] = useState([]);
  const [allActiveOrders, setAllActiveOrders] = useState([]);
  const [show, setShow] = useState(false);
  const [assignTimer, setAssignTimer] = useState({});

  const [pagination1, setPagination1] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });
  const [pagination2, setPagination2] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });
  const [pagination3, setPagination3] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });
  const [pagination4, setPagination4] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });
  const [pagination5, setPagination5] = useState({
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

  const fetchPlacedOrders = async (page = 1, limit = 10) => {
    const response = await orderPlacedGet(page, limit);
    if (response) {
      setAllPlacedOrders(response.parcels || []);
      setPagination1({
        page: response.pagination.currentPage,
        limit: response.pagination.itemsPerPage,
        totalItems: response.pagination.totalItems,
        totalPages: response.pagination.totalPages,
      });
      // console.log(response.parcels);
    }
  };
  useEffect(() => {
    fetchPlacedOrders(pagination1.page, pagination1.limit);
  }, []);

  const fetchAllAgents = async (page = 1, limit = 10) => {
    const response = await allAgentsGet(page, limit);
    setAllAgents(response.users);
    setPagination2({
      page: response.pagination.currentPage,
      limit: response.pagination.itemsPerPage,
      totalItems: response.pagination.totalCounts,
      totalPages: response.pagination.totalPages,
    });
    // console.log(response);
  };
  useEffect(() => {
    fetchAllAgents(pagination2.page, pagination2.limit);
  }, []);

  const fetchScheduledOrders = async (page = 1, limit = 10) => {
    const response = await orderScheduledGet(page, limit);
    setAllScheduledOrders(response?.parcels || []);
    setPagination5({
      page: response.pagination.currentPage || 1,
      limit: response.pagination.itemsPerPage,
      totalItems: response.pagination.totalItems,
      totalPages: response.pagination.totalPages,
    });
    console.log(response);
  };
  useEffect(() => {
    fetchScheduledOrders(pagination5.page, pagination5.limit);
  }, []);

  const fetchCancelledOrders = async (page = 1, limit = 10) => {
    const response = await orderCancelledGet(page, limit);
    setAllCancelledOrders(response?.parcels || []);
    setPagination3({
      page: response.pagination.currentPage,
      limit: response.pagination.itemsPerPage,
      totalItems: response.pagination.totalItems,
      totalPages: response.pagination.totalPages,
    });
    console.log(response);
  };
  useEffect(() => {
    fetchCancelledOrders(pagination3.page, pagination3.limit);
  }, []);

  const fetchActiveOrders = async (page = 1, limit = 10) => {
    const response = await activeOrdersGet(page, limit);
    if (response) {
      setAllActiveOrders(response.parcels || []);
      setPagination4({
        page: response.pagination.currentPage,
        limit: response.pagination.itemsPerPage,
        totalItems: response.pagination.totalItems,
        totalPages: response.pagination.totalPages,
      });
      console.log(response.parcels);
    }
  };
  useEffect(() => {
    fetchActiveOrders(pagination4.page, pagination4.limit);
  }, []);

  const handleAssignParcel = async () => {
    if (!selectedOrder || !selectedAgent) {
      alert("Please select both an order and an agent!");
      return;
    }
    const body = { agentId: selectedAgent };
    try {
      const response = await assignParcel(selectedOrder.id, body);
      if (response?.message?.includes("assigned")) {
        const endTime = Date.now() + 600 * 1000;
        localStorage.setItem(`timer_${selectedOrder.id}`, endTime);
        setAssignTimer((prev) => ({
          ...prev,
          [selectedOrder.id]: 600,
        }));
        setSelectedOrder(null);
        setSelectedAgent(null);
      }
    } catch (error) {
      console.error(error);
      showError("Something went wrong while assigning the parcel!");
    }
  };

  // Page load par timers initialize karo
  useEffect(() => {
    const timersFromStorage = {};
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("timer_")) {
        const endTime = parseInt(localStorage.getItem(key), 10);
        const remaining = Math.floor((endTime - Date.now()) / 1000);
        if (remaining > 0) {
          timersFromStorage[key.replace("timer_", "")] = remaining;
        } else {
          localStorage.removeItem(key);
        }
      }
    });
    setAssignTimer(timersFromStorage);
  }, []);

  // decrement timer
  useEffect(() => {
    const interval = setInterval(() => {
      setAssignTimer((prev) => {
        const updated = { ...prev };
        Object.keys(updated).forEach((key) => {
          if (updated[key] > 0) {
            updated[key] -= 1;
          } else {
            delete updated[key];
            localStorage.removeItem(`timer_${key}`);
          }
        });
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCancelParcel = async (body) => {
    return await cancelParcel(body);
    fetchCancelledOrders();
    fetchPlacedOrders();
    fetchScheduledOrders();
    fetchActiveOrders();
  };

  const handleResheduleParcel = async (data) => {
    data.pickupSlot = `${data.pickupDate}, ${data.pickupStart} to ${data.pickupEnd}`;
    const payload = {
      pickupSlot: data.pickupSlot,
    };
    // console.log("payload:", payload);
    await resheduleParcel(selectedOrder.id, payload);
    fetchPlacedOrders();
    fetchCancelledOrders();
  };

  const handleTrackParcels = async (body) => {
    return await trackParcels(body);
  };

  const handleDeliveryOrderInvoice = async (id) => {
    await deliveryOrderInvoice(id);
  };

  return (
    <>
      <Heading>Order Management</Heading>
      <Container>
        {/* Assign Delivery to Agent */}
        <AssignDelivery>
          <h2 className="heading">Assign Delivery to Agents</h2>
          <DivsSetting>
            <LeftDiv>
              <p className="leftHeading">Unassigned Deliveries</p>
              <div className="childLeft">
                {allPlacedOrders.map((order) => (
                  <div className="box" key={order.id}>
                    <div className="paras">
                      <p className="trackingId">#{order.trackingNumber}</p>
                      <p className="childPara">
                        <span>Customer Name: </span>
                        {order.Customer.fullName || "N/A"}
                      </p>
                      <p className="childPara">
                        <span>From: </span>
                        {order.pickupAddress}
                        <span> → To: </span>
                        {order.deliveryAddress}
                      </p>
                      <p className="childPara">
                        <span>Parcel Type: </span>
                        {order.deliveryType}
                      </p>
                      <p className="childPara">
                        <span>Parcel Status: </span>
                        {order.status}
                      </p>
                      <p className="childPara">
                        <span>Payment Method: </span>
                        {order.paymentMethod}
                      </p>
                      <p className="childPara">
                        <span>Payment Status: </span>
                        {order.paymentStatus}
                      </p>
                      <p className="childPara">
                        <span>Total Amount: </span>
                        {order.deliveryCharge}
                      </p>
                    </div>
                    <div className="btns">
                      <div
                        className="cancelBtn"
                        onClick={() => handleCancelParcel(order.id)}
                      >
                        Cancel
                      </div>
                      <div
                        className="btn"
                        onClick={() => setSelectedOrder(order)}
                        disabled={assignTimer[order.id] > 0}
                      >
                        {assignTimer[order.id] > 0
                          ? `Assigned (${Math.floor(
                              assignTimer[order.id] / 60
                            )}:${String(assignTimer[order.id] % 60).padStart(
                              2,
                              "0"
                            )})`
                          : selectedOrder === order
                          ? "Selected"
                          : "Assign"}
                      </div>
                    </div>
                  </div>
                ))}
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
                        fetchPlacedOrders(
                          pagination1.page - 1,
                          pagination1.limit
                        )
                      }
                    >
                      <FaChevronLeft size={12} />
                    </PageNavButton>

                    {Array.from({ length: pagination1.totalPages }).map(
                      (_, index) => (
                        <PageButton
                          key={index}
                          className={
                            pagination1.page === index + 1 ? "active" : ""
                          }
                          onClick={() =>
                            fetchPlacedOrders(index + 1, pagination1.limit)
                          }
                        >
                          {index + 1}
                        </PageButton>
                      )
                    )}

                    <PageNavButton
                      disabled={pagination1.page === pagination1.totalPages}
                      onClick={() =>
                        fetchPlacedOrders(
                          pagination1.page + 1,
                          pagination1.limit
                        )
                      }
                    >
                      <FaChevronRight size={12} />
                    </PageNavButton>
                  </PaginationNav>
                </PaginationWrapper>
              </div>
            </LeftDiv>
            <RightDiv>
              <p className="rightHeading">Available Agents</p>
              <div className="childRight">
                {allAgents.map((agent) => (
                  <div className="rightBox" key={agent.id}>
                    <input
                      type="radio"
                      name="agent"
                      checked={selectedAgent === agent.id}
                      onChange={() => setSelectedAgent(agent.id)}
                    />
                    <p>{agent.fullName}</p>
                  </div>
                ))}
                <PaginationWrapper>
                  <PaginationInfo>
                    Showing {(pagination2.page - 1) * pagination2.limit + 1}–
                    {Math.min(
                      pagination2.page * pagination2.limit,
                      pagination2.totalItems
                    )}
                    of {pagination2.totalItems}
                  </PaginationInfo>
                  <PaginationNav>
                    <PageNavButton
                      disabled={pagination2.page === 1}
                      onClick={() =>
                        fetchAllAgents(pagination2.page - 1, pagination2.limit)
                      }
                    >
                      <FaChevronLeft size={12} />
                    </PageNavButton>

                    {Array.from({ length: pagination2.totalPages }).map(
                      (_, index) => (
                        <PageButton
                          key={index}
                          className={
                            pagination2.page === index + 1 ? "active" : ""
                          }
                          onClick={() =>
                            fetchAllAgents(index + 1, pagination2.limit)
                          }
                        >
                          {index + 1}
                        </PageButton>
                      )
                    )}

                    <PageNavButton
                      disabled={pagination2.page === pagination2.totalPages}
                      onClick={() =>
                        fetchAllAgents(pagination2.page + 1, pagination2.limit)
                      }
                    >
                      <FaChevronRight size={12} />
                    </PageNavButton>
                  </PaginationNav>
                </PaginationWrapper>
                <button className="button" onClick={handleAssignParcel}>
                  Assign Selected Delivery to Agent
                </button>
              </div>
            </RightDiv>
          </DivsSetting>
        </AssignDelivery>

        {/* Assigned Orders */}
        <AssignDeliveryTable>
          <h2 className="heading">Assigned Deliveries to Agents</h2>
          <div className="tableDiv">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Tracking Number</th>
                  <th>Name</th>
                  <th>Pickup → Delivery</th>
                  <th>Pickup Slot</th>
                  <th>Assigned To</th>
                  <th>Status</th>
                  <th>Assigned Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allScheduledOrders.map((sOrder) => (
                  <tr key={sOrder.id}>
                    <td>{sOrder.id}</td>
                    <td>{sOrder.trackingNumber}</td>
                    <td>{sOrder.Customer.fullName}</td>
                    <td>
                      {sOrder.pickupAddress} -> {sOrder.deliveryAddress}
                    </td>
                    <td>{sOrder.pickupSlot}</td>
                    <td>{sOrder.Agent.fullName}</td>
                    <td>{sOrder.status}</td>
                    <td>{sOrder.assignedAt}</td>
                    <td>
                      <div
                        className="cancelBtn"
                        onClick={() => handleCancelParcel(sOrder.id)}
                      >
                        Cancel
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <PaginationWrapper>
              <PaginationInfo>
                Showing {(pagination5.page - 1) * pagination5.limit + 1}–
                {Math.min(
                  pagination5.page * pagination5.limit,
                  pagination5.totalItems
                )}
                of {pagination5.totalItems}
              </PaginationInfo>
              <PaginationNav>
                <PageNavButton
                  disabled={pagination5.page === 1}
                  onClick={() =>
                    fetchScheduledOrders(
                      pagination5.page - 1,
                      pagination5.limit
                    )
                  }
                >
                  <FaChevronLeft size={12} />
                </PageNavButton>

                {Array.from({ length: pagination5.totalPages }).map(
                  (_, index) => (
                    <PageButton
                      key={index}
                      className={pagination5.page === index + 1 ? "active" : ""}
                      onClick={() =>
                        fetchScheduledOrders(index + 1, pagination5.limit)
                      }
                    >
                      {index + 1}
                    </PageButton>
                  )
                )}

                <PageNavButton
                  disabled={pagination5.page === pagination5.totalPages}
                  onClick={() =>
                    fetchScheduledOrders(
                      pagination5.page + 1,
                      pagination5.limit
                    )
                  }
                >
                  <FaChevronRight size={12} />
                </PageNavButton>
              </PaginationNav>
            </PaginationWrapper>
          </div>
        </AssignDeliveryTable>

        {/* Reschedule or Cancel Orders*/}
        <RescheduleCancel>
          <p className="heading">Reschedule/Cancel Orders</p>
          <div className="tableDiv">
            <table>
              <thead>
                <tr>
                  <th>Tracking ID</th>
                  <th>Recipient Name</th>
                  <th>Delivery Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allCancelledOrders.map((cancelOrders) => (
                  <tr key={cancelOrders.id}>
                    <td>{cancelOrders.trackingNumber}</td>
                    <td>{cancelOrders.Customer.fullName}</td>
                    <td>{cancelOrders.deliveryType}</td>
                    <td>
                      <span className="cancelStatus">
                        {cancelOrders.status}
                      </span>
                    </td>
                    <td className="btns">
                      <button
                        className="btn1"
                        onClick={() => {
                          setSelectedOrder(cancelOrders);
                          setShow(true);
                        }}
                      >
                        <FaCalendarAlt size={16} />
                        Reschedule
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <PaginationWrapper>
              <PaginationInfo>
                Showing {(pagination3.page - 1) * pagination3.limit + 1}–
                {Math.min(
                  pagination3.page * pagination3.limit,
                  pagination3.totalItems
                )}
                of {pagination3.totalItems}
              </PaginationInfo>
              <PaginationNav>
                <PageNavButton
                  disabled={pagination3.page === 1}
                  onClick={() =>
                    fetchScheduledOrders(
                      pagination3.page - 1,
                      pagination3.limit
                    )
                  }
                >
                  <FaChevronLeft size={12} />
                </PageNavButton>

                {Array.from({ length: pagination3.totalPages }).map(
                  (_, index) => (
                    <PageButton
                      key={index}
                      className={pagination3.page === index + 1 ? "active" : ""}
                      onClick={() =>
                        fetchScheduledOrders(index + 1, pagination3.limit)
                      }
                    >
                      {index + 1}
                    </PageButton>
                  )
                )}

                <PageNavButton
                  disabled={pagination3.page === pagination3.totalPages}
                  onClick={() =>
                    fetchScheduledOrders(
                      pagination3.page + 1,
                      pagination3.limit
                    )
                  }
                >
                  <FaChevronRight size={12} />
                </PageNavButton>
              </PaginationNav>
            </PaginationWrapper>
          </div>
          {show && (
            <Popup>
              <form onSubmit={handleSubmit(handleResheduleParcel)}>
                <div className="heading">
                  <p>Add Customer</p>
                  <RxCross2
                    onClick={() => setShow(false)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
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

                <label className="slot">Pick Time Slot</label>
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
                      {...register("pickupEnd", {
                        required: "Select End Time!",
                      })}
                    />
                  </div>
                </div>
                <input type="hidden" {...register("pickupSlot")} />
                <button type="submit">Submit</button>
              </form>
            </Popup>
          )}
        </RescheduleCancel>

        {/* Parcel history */}
        <ParcelHistory>
          <p className="heading">Parcels History</p>
          <div className="parcelHistoryTable">
            <table>
              <thead>
                <tr>
                  <th>Tracking ID</th>
                  <th>Pickup Address</th>
                  <th>Delivery Address</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allActiveOrders.map((data) => (
                  <tr key={data.id}>
                    <td>{data.trackingNumber}</td>
                    <td>{data.pickupAddress}</td>
                    <td>{data.deliveryAddress}</td>
                    <td>
                      <span className={`status ${data.status}`}>
                        {data.status}
                      </span>
                    </td>
                    <td>
                      <span>
                        {data.status === "delivered" ? (
                          <>
                            <button
                              className="actionBtn"
                              onClick={() =>
                                handleDeliveryOrderInvoice(data.id)
                              }
                            >
                              View
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="btns">
                              <button
                                className="actionBtn"
                                onClick={() =>
                                  handleTrackParcels(data.trackingNumber)
                                }
                              >
                                Track
                              </button>
                              <div
                                className="cancelBtn"
                                onClick={() => handleCancelParcel(data.id)}
                              >
                                Cancel
                              </div>
                            </div>
                          </>
                        )}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <PaginationWrapper>
              <PaginationInfo>
                Showing {(pagination4.page - 1) * pagination4.limit + 1}–
                {Math.min(
                  pagination4.page * pagination4.limit,
                  pagination4.totalItems
                )}
                of {pagination4.totalItems}
              </PaginationInfo>
              <PaginationNav>
                <PageNavButton
                  disabled={pagination4.page === 1}
                  onClick={() =>
                    fetchActiveOrders(pagination4.page - 1, pagination4.limit)
                  }
                >
                  <FaChevronLeft size={12} />
                </PageNavButton>

                {Array.from({ length: pagination4.totalPages }).map(
                  (_, index) => (
                    <PageButton
                      key={index}
                      className={pagination4.page === index + 1 ? "active" : ""}
                      onClick={() =>
                        fetchActiveOrders(index + 1, pagination4.limit)
                      }
                    >
                      {index + 1}
                    </PageButton>
                  )
                )}

                <PageNavButton
                  disabled={pagination4.page === pagination4.totalPages}
                  onClick={() =>
                    fetchActiveOrders(pagination4.page + 1, pagination4.limit)
                  }
                >
                  <FaChevronRight size={12} />
                </PageNavButton>
              </PaginationNav>
            </PaginationWrapper>
          </div>
        </ParcelHistory>
      </Container>
    </>
  );
};

export default OrderManagement;
