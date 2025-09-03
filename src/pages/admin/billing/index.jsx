import React from "react";
import {
  Container,
  PaymentCards,
  PaymentsTable,
  RefundPayments,
  InvoiceReports,
} from "./style";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
const Billing = () => {
  const dummyPayments = [
    {
      id: "TX10001",
      date: "Aug 5, 2025",
      customerName: "Robert Smith",
      amount: "200",
      status: "completed",
      action: (
        <MdRemoveRedEye
          size={20}
          color="#006769"
          style={{ cursor: "pointer" }}
        />
      ),
    },
    {
      id: "TX10002",
      date: "Aug 15, 2025",
      customerName: "Sarah Johnson",
      amount: "400",
      status: "completed",
      action: (
        <MdRemoveRedEye
          size={20}
          color="#006769"
          style={{ cursor: "pointer" }}
        />
      ),
    },
    {
      id: "TX10003",
      date: "Aug 10, 2025",
      customerName: "Michael Brown",
      amount: "300",
      status: "pending",
      action: (
        <MdRemoveRedEye
          size={20}
          color="#006769"
          style={{ cursor: "pointer" }}
        />
      ),
    },
    {
      id: "TX10004",
      date: "Aug 20, 2025",
      customerName: "Michael Brown",
      amount: "500",
      status: "completed",
      action: (
        <MdRemoveRedEye
          size={20}
          color="#006769"
          style={{ cursor: "pointer" }}
        />
      ),
    },
    {
      id: "TX10005",
      date: "Aug 28, 2025",
      customerName: "Jessica Taylor",
      amount: "800",
      status: "pending",
      action: (
        <MdRemoveRedEye
          size={20}
          color="#006769"
          style={{ cursor: "pointer" }}
        />
      ),
    },
    {
      id: "TX10006",
      date: "Aug 30, 2025",
      customerName: "Robert Smith",
      amount: "500",
      status: "completed",
      action: (
        <MdRemoveRedEye
          size={20}
          color="#006769"
          style={{ cursor: "pointer" }}
        />
      ),
    },
    {
      id: "TX10007",
      date: "Aug 31, 2025",
      customerName: "Daniel Walker",
      amount: "150",
      status: "failed",
      action: (
        <MdRemoveRedEye
          size={20}
          color="#006769"
          style={{ cursor: "pointer" }}
        />
      ),
    },
    {
      id: "TX10008",
      date: "Aug 31, 2025",
      customerName: "Walker",
      amount: "150",
      status: "completed",
      action: (
        <MdRemoveRedEye
          size={20}
          color="#006769"
          style={{ cursor: "pointer" }}
        />
      ),
    },
  ];
  const dummyRefundPayments = [
    {
      id: "TX10001",
      date: "Aug 5, 2025",
      customerName: "Robert Smith",
      amount: "200",
      type: "refunded",
      action: "Processed",
    },
    {
      id: "TX10002",
      date: "Aug 15, 2025",
      customerName: "Sarah Johnson",
      amount: "400",
      type: "refundRequested",
      action: "Process",
    },
    {
      id: "TX10003",
      date: "Aug 10, 2025",
      customerName: "Michael Brown",
      amount: "300",
      type: "refunded",
      action: "Processed",
    },
    {
      id: "TX10004",
      date: "Aug 20, 2025",
      customerName: "Michael Brown",
      amount: "500",
      type: "refunded",
      action: "Processed",
    },
    {
      id: "TX10008",
      date: "Aug 31, 2025",
      customerName: "Walker",
      amount: "150",
      type: "failed",
      action: "Retry",
    },
  ];
  const dummyInvoiceReports = [
    {
      id: "#INV-001",
      customerName: "Robert Smith",
      date: "Aug 5, 2025",
      amount: "200",
      status: "paid",
    },
    {
      id: "#INV-002",
      customerName: "Sarah Johnson",
      date: "Aug 15, 2025",
      amount: "400",
      status: "paid",
    },
    {
      id: "#INV-003",
      customerName: "Michael Brown",
      date: "Aug 10, 2025",
      amount: "300",
      status: "pending",
    },
  ];
  return (
    <Container>
      <p className="mainHeading">Payment Management</p>
      <PaymentCards>
        <div className="cardParent">
          <div className="card">
            <FaMoneyBill1Wave size={20} />
            <p className="para1">5000Rs</p>
            <p>Total Revenue</p>
          </div>
          <div className="card">
            <FaCheckCircle size={20} />
            <p className="para1">85%</p>
            <p>Successful Payments</p>
          </div>
          <div className="card">
            <FaExclamationCircle size={20} />
            <p className="para1">20</p>
            <p>Pending Invoices</p>
          </div>
        </div>
      </PaymentCards>
      {/* View Payments */}
      <PaymentsTable>
        <p className="heading">View Payments</p>
        <div className="paymentTable">
          <div className="filters">
            <div className="inputs">
              <label htmlFor="dateRange">Date Range</label>
              <br />
              <select name="dateRange" id="dateRange">
                <option value="last7">Last 7 days</option>
                <option value="last30" selected>
                  Last 30 days
                </option>
                <option value="last90">Last 90 days</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
            <div className="inputs">
              <label htmlFor="status">Status</label>
              <br />
              <select name="status" id="status">
                <option value="all" selected>
                  All Statuses
                </option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed Range</option>
              </select>
            </div>
            <div className="inputs">
              <label htmlFor="status">Search</label>
              <br />
              <input type="text" placeholder="transaction ID" />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Customer name</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyPayments.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.date}</td>
                  <td>{data.customerName}</td>
                  <td>{data.amount}</td>
                  <td>
                    <span className={`status ${data.status}`}>
                      {data.status}
                    </span>
                  </td>
                  <td>{data.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PaymentsTable>
      {/* Manage Refunds & Failed Payments */}
      <RefundPayments>
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
      </RefundPayments>
      {/* Invoicing reports */}
      <InvoiceReports>
        <p className="heading">Invoice Reports</p>
        <div className="paymentTable">
          <table>
            <thead>
              <tr>
                <th>Invoice#</th>
                <th>Customer name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyInvoiceReports.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.customerName}</td>
                  <td>{item.date}</td>
                  <td>{item.amount}</td>
                  <td>
                    <span className={`type ${item.status}`}>{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </InvoiceReports>
    </Container>
  );
};

export default Billing;
