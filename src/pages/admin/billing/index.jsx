import React, { useEffect, useState } from "react";
import {
  Container,
  PaymentCards,
  PaymentsTable,
  RefundPayments,
  InvoiceReports,
  PaginationWrapper,
  PaginationInfo,
  PaginationNav,
  PageButton,
  PageNavButton,
} from "./style";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import UseAdmin from "../useHooks";
const Billing = () => {
  const {
    countRevenue,
    allOrdersGet,
    deliveryOrderInvoice,
    invoiceReportsGet,
    changePaymentStatus,
  } = UseAdmin();

  const [totalRevenue, setTotalRevenue] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [allInvoicesReport, setAllInvoicesReport] = useState([]);
  const [filters, setFilters] = useState({
    fullName: "",
    paymentStatus: "",
    id: "",
  });

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

  useEffect(() => {
    const fetchRevenue = async () => {
      const response = await countRevenue();
      if (response) {
        setTotalRevenue(response);
      }
    };
    fetchRevenue();
  }, []);

  const fetchAllOrders = async (
    page = 1,
    limit = 10,
    fullName,
    paymentStatus,
    id
  ) => {
    const response = await allOrdersGet(
      page,
      limit,
      fullName,
      paymentStatus,
      id
    );
    if (response) {
      setAllOrders(response.parcels || []);
      setPagination1({
        page: response.pagination.currentPage,
        limit: response.pagination.itemsPerPage,
        totalItems: response.pagination.totalItems,
        totalPages: response.pagination.totalPages,
      });
      console.log(response.parcels);
    }
  };
  useEffect(() => {
    fetchAllOrders(
      pagination1.page,
      pagination1.limit,
      filters.fullName,
      filters.paymentStatus,
      filters.id
    );
  }, [pagination1.page]);

  const handleDeliveryOrderInvoice = async (id) => {
    await deliveryOrderInvoice(id);
    console.log(id);
  };

  const fetchInvoiceReports = async (page = 1, limit = 10) => {
    const response = await invoiceReportsGet(page, limit);
    if (response) {
      setAllInvoicesReport(response.report || []);
      setPagination2({
        page: response.pagination.currentPage,
        limit: response.pagination.itemsPerPage,
        totalItems: response.pagination.totalItems,
        totalPages: response.pagination.totalPages,
      });
      console.log("Invoice Reports", response);
    }
  };
  useEffect(() => {
    fetchInvoiceReports(pagination2.page, pagination2.limit);
  }, []);

  const handleChangePaymentStatus = async (id, body) => {
    await changePaymentStatus(id, body);
    fetchAllOrders();
  };

  // const dummyRefundPayments = [
  //   {
  //     id: "TX10001",
  //     date: "Aug 5, 2025",
  //     customerName: "Robert Smith",
  //     amount: "200",
  //     type: "refunded",
  //     action: "Processed",
  //   },
  //   {
  //     id: "TX10002",
  //     date: "Aug 15, 2025",
  //     customerName: "Sarah Johnson",
  //     amount: "400",
  //     type: "refundRequested",
  //     action: "Process",
  //   },
  //   {
  //     id: "TX10003",
  //     date: "Aug 10, 2025",
  //     customerName: "Michael Brown",
  //     amount: "300",
  //     type: "refunded",
  //     action: "Processed",
  //   },
  //   {
  //     id: "TX10004",
  //     date: "Aug 20, 2025",
  //     customerName: "Michael Brown",
  //     amount: "500",
  //     type: "refunded",
  //     action: "Processed",
  //   },
  //   {
  //     id: "TX10008",
  //     date: "Aug 31, 2025",
  //     customerName: "Walker",
  //     amount: "150",
  //     type: "failed",
  //     action: "Retry",
  //   },
  // ];

  return (
    <Container>
      <p className="mainHeading">Payment Management</p>
      <PaymentCards>
        <div className="cardParent">
          <div className="card">
            <FaMoneyBill1Wave size={20} />
            <p className="para1">{`${totalRevenue.totalRevenue}Rs`}</p>
            <p>Total Revenue</p>
          </div>
          <div className="card">
            <FaCheckCircle size={20} />
            <p className="para1">{`${totalRevenue.collectedRevenue}Rs`}</p>
            <p>Collected Revenue</p>
          </div>
          <div className="card">
            <FaExclamationCircle size={20} />
            <p className="para1">{`${totalRevenue.pendingRevenue}Rs`}</p>
            <p>Pending Revenue</p>
          </div>
          <div className="card">
            <FaExclamationCircle size={20} />
            <p className="para1">{`${totalRevenue.totalAgentCommission}Rs`}</p>
            <p>Agents Total Commision</p>
          </div>
          <div className="card">
            <FaExclamationCircle size={20} />
            <p className="para1">{`${totalRevenue.totalRemainingAmount}Rs`}</p>
            <p>Revenue Remains After Agents Commision</p>
          </div>
        </div>
      </PaymentCards>

      {/* View Payments */}
      <PaymentsTable>
        <p className="heading">View Payments</p>
        <div className="paymentTable">
          <div className="filters">
            <div className="inputs">
              <label htmlFor="text">Customer Name</label>
              <br />
              <input
                type="text"
                placeholder="Kinza"
                value={filters.fullName}
                onChange={(e) =>
                  setFilters({ ...filters, fullName: e.target.value })
                }
              />
            </div>
            <div className="inputs">
              <label htmlFor="status">Payment Status</label>
              <br />
              <select
                name="status"
                id="status"
                value={filters.paymentStatus}
                onChange={(e) =>
                  setFilters({ ...filters, paymentStatus: e.target.value })
                }
              >
                <option value="all">All Statuses</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div className="inputs">
              <label htmlFor="status">Parcel ID</label>
              <br />
              <input
                type="text"
                placeholder="42"
                value={filters.id}
                onChange={(e) => setFilters({ ...filters, id: e.target.value })}
              />
            </div>
          </div>
          <div>
            <button
              className="searchBtn"
              onClick={() => {
                fetchAllOrders(
                  pagination1.page,
                  pagination1.limit,
                  filters.fullName,
                  filters.paymentStatus,
                  filters.id
                );
              }}
            >
              Search
            </button>
          </div>

          <div className="tableDiv">
            <table>
              <thead>
                <tr>
                  <th>Serial #</th>
                  <th>Parcel ID</th>
                  <th>Date</th>
                  <th>Customer Name</th>
                  <th>Amount</th>
                  <th>Payment Status</th>
                  <th>Parcel Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((data, index) => (
                  <tr key={data.id}>
                    <td>{index + 1}</td>
                    <td>{data.id}</td>
                    <td>{data.createdAt}</td>
                    <td>{data.Customer.fullName}</td>
                    <td>{data.deliveryCharge}</td>
                    <td>
                      <span className={`status ${data.paymentStatus}`}>
                        {data.paymentStatus}
                      </span>
                    </td>
                    <td>
                      <span className={`orderStatus ${data.status}`}>
                        {data.status}
                      </span>
                    </td>
                    <td className="iconClass">
                      <MdRemoveRedEye
                        onClick={() => {
                          if (data.status === "delivered") {
                            handleDeliveryOrderInvoice(data.id);
                          } else {
                            alert(
                              "Invoice is Available only for deliverd orders!"
                            );
                          }
                        }}
                        size={20}
                        color="#006769"
                        style={{ cursor: "pointer" }}
                      />
                      {data.paymentStatus === "pending" ? (
                        <button
                          className="completePaymentBtn"
                          onClick={() => handleChangePaymentStatus(data.id)}
                        >
                          Complete Payment
                        </button>
                      ) : (
                        ""
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
                    fetchAllOrders(
                      pagination1.page - 1,
                      pagination1.limit,
                      filters.fullName,
                      filters.paymentStatus,
                      filters.id
                    )
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
                        fetchAllOrders(index + 1, pagination1.limit)
                      }
                    >
                      {index + 1}
                    </PageButton>
                  )
                )}

                <PageNavButton
                  disabled={pagination1.page === pagination1.totalPages}
                  onClick={() =>
                    fetchAllOrders(pagination1.page + 1, pagination1.limit)
                  }
                >
                  <FaChevronRight size={12} />
                </PageNavButton>
              </PaginationNav>
            </PaginationWrapper>
          </div>
        </div>
      </PaymentsTable>

      {/* Manage Refunds & Failed Payments */}
      {/* <RefundPayments>
        <p className="heading">Manage Refunds & Failed Payments</p>
        <div className="paymentTable">
          <table>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Customer name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyRefundPayments.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.customerName}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className={`type ${item.type}`}>{item.type}</span>
                  </td>

                  <td>
                    <span className="action">{item.action}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </RefundPayments> */}
      {/* Invoicing reports */}
      <InvoiceReports>
        <p className="heading">Invoice Reports</p>
        <div className="paymentTable">
          <table>
            <thead>
              <tr>
                <th>serial #</th>
                <th>Parcel ID</th>
                <th>Tracking Number</th>
                <th>Customer Name</th>
                <th>Invoice Generation Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {allInvoicesReport.map((invoice, index) => (
                <tr key={invoice.parcelId}>
                  <td>{index + 1}</td>
                  <td>{invoice.parcelId}</td>
                  <td>{invoice.trackingNumber}</td>
                  <td>{invoice.customerName}</td>
                  <td>{invoice.lastUpdate}</td>
                  <td>{invoice.deliveryCharge}</td>
                  <td>
                    <span className={`status ${invoice.paymentStatus}`}>
                      {invoice.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                  fetchInvoiceReports(pagination2.page - 1, pagination2.limit)
                }
              >
                <FaChevronLeft size={12} />
              </PageNavButton>

              {Array.from({ length: pagination2.totalPages }).map(
                (_, index) => (
                  <PageButton
                    key={index}
                    className={pagination2.page === index + 1 ? "active" : ""}
                    onClick={() =>
                      fetchInvoiceReports(index + 1, pagination2.limit)
                    }
                  >
                    {index + 1}
                  </PageButton>
                )
              )}

              <PageNavButton
                disabled={pagination2.page === pagination2.totalPages}
                onClick={() =>
                  fetchInvoiceReports(pagination2.page + 1, pagination2.limit)
                }
              >
                <FaChevronRight size={12} />
              </PageNavButton>
            </PaginationNav>
          </PaginationWrapper>
        </div>
      </InvoiceReports>
    </Container>
  );
};

export default Billing;
