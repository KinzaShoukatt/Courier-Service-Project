import React from 'react'
import { Container, PastDeliveries, Earnings } from "./style";

const HistoryAndEarnings = () => {
    const dummyDeliveries = [
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 5 RYK",
      deliveryAddress: "Street no 1 Lahore",
      status: "Delivered"
    },
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 15 Karachi",
      deliveryAddress: "Street no 1 RYK",
      status: "Delivered"
    },
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 15 Karachi",
      deliveryAddress: "Street no 25 Karachi",
      status: "Delivered"
    
    },
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 15 Islamabad",
      deliveryAddress: "Street no 15 Faislabad",
      status: "Delivered"
    },
  ];
    const dummyEarnings = [
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 5 RYK",
      deliveryAddress: "Street no 1 Lahore",
      status: "Delivered",
      earning: "400",
    },
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 15 Karachi",
      deliveryAddress: "Street no 1 RYK",
      status: "Delivered",
      earning: "240",
    },
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 15 Karachi",
      deliveryAddress: "Street no 25 Karachi",
      status: "Delivered",
      earning: "100",
    
    },
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 15 Islamabad",
      deliveryAddress: "Street no 15 Faislabad",
      status: "Delivered",
      earning: "200",
    },
  ];
  return (
     <Container>
            <p>History & Earnings</p>
            <PastDeliveries>
              <p className="heading">Past Deliveriers</p>
              <div className="AssignedDeliveryTable">
                <table>
                  <thead>
                    <tr>
                      <th>Tracking ID</th>
                      <th>Customer Name</th>
                      <th>Pickup Address</th>
                      <th>Delivery Address</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyDeliveries.map((data) => (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.customer}</td>
                        <td>{data.pickupaddress}</td>
                        <td>{data.deliveryAddress}</td>
                        <td > <button className='action'>{data.status}</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </PastDeliveries>

            <Earnings>
              <p className="heading">All Earnings</p>
              <div className="AssignedDeliveryTable">
                <table>
                  <thead>
                    <tr>
                      <th>Tracking ID</th>
                      <th>Customer Name</th>
                      <th>Pickup Address</th>
                      <th>Delivery Address</th>
                      <th>Status</th>
                      <th>Earning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyEarnings.map((data) => (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.customer}</td>
                        <td>{data.pickupaddress}</td>
                        <td>{data.deliveryAddress}</td>
                        <td > <button className='action'>{data.status}</button></td>
                        <td > {data.earning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Earnings>
    
          </Container>
  )
}

export default HistoryAndEarnings