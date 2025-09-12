import React from "react";
import {
  Heading,
  WeightParent,
  Table,
  AgentPricing,
  AgentPricingTable,
} from "./style";

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
const PricingManagement = () => {
  const dummyWeightPrice = [
    {
      weight: 1,
      charges: 200,
      action: (
        <div className="btns">
          <button className="btn1">
            <FaEdit size={18} />
          </button>
          <button className="btn2">
            <AiFillDelete size={18} />
          </button>
        </div>
      ),
    },
    {
      weight: 2,
      charges: 200,
      action: (
        <div className="btns">
          <button className="btn1">
            <FaEdit size={18} />
          </button>
          <button className="btn2">
            <AiFillDelete size={18} />
          </button>
        </div>
      ),
    },
    {
      weight: 3,
      charges: 200,
      action: (
        <div className="btns">
          <button className="btn1">
            <FaEdit size={18} />
          </button>
          <button className="btn2">
            <AiFillDelete size={18} />
          </button>
        </div>
      ),
    },
    {
      weight: 4,
      charges: 200,
      action: (
        <div className="btns">
          <button className="btn1">
            <FaEdit size={18} />
          </button>
          <button className="btn2">
            <AiFillDelete size={18} />
          </button>
        </div>
      ),
    },
    {
      weight: 5,
      charges: 200,
      action: (
        <div className="btns">
          <button className="btn1">
            <FaEdit size={18} />
          </button>
          <button className="btn2">
            <AiFillDelete size={18} />
          </button>
        </div>
      ),
    },
    {
      weight: 6,
      charges: 250,
      action: (
        <div className="btns">
          <button className="btn1">
            <FaEdit size={18} />
          </button>
          <button className="btn2">
            <AiFillDelete size={18} />
          </button>
        </div>
      ),
    },
    {
      weight: 7,
      charges: 300,
      action: (
        <div className="btns">
          <button className="btn1">
            <FaEdit size={18} />
          </button>
          <button className="btn2">
            <AiFillDelete size={18} />
          </button>
        </div>
      ),
    },
    {
      weight: 8,
      charges: 350,
      action: (
        <div className="btns">
          <button className="btn1">
            <FaEdit size={18} />
          </button>
          <button className="btn2">
            <AiFillDelete size={18} />
          </button>
        </div>
      ),
    },
    {
      weight: 9,
      charges: 400,
      action: (
        <div className="btns">
          <button className="btn1">
            <FaEdit size={18} />
          </button>
          <button className="btn2">
            <AiFillDelete size={18} />
          </button>
        </div>
      ),
    },
    {
      weight: 10,
      charges: 450,
      action: (
        <div className="btns">
          <button className="btn1">
            <FaEdit size={18} />
          </button>
          <button className="btn2">
            <AiFillDelete size={18} />
          </button>
        </div>
      ),
    },
  ];
  return (
    <>
      <Heading>Pricing Management</Heading>

      <WeightParent>
        <p className="heading">Weight Based Pricing</p>

        <form>
          <div className="inputFeild">
            <label>Enter Weight</label>
            <br />
            <input type="number" placeholder="2"></input>
          </div>
          <div className="btn">
            <button className="addAgentBtn">Add Weight</button>
          </div>
        </form>
      </WeightParent>
      <Table>
        <p className="heading">Weight Based Pricing List</p>
        <div className="tableDiv">
          <table>
            <thead>
              <tr>
                <th>Weight</th>
                <th>Charges</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyWeightPrice.map((item) => (
                <tr key={item.weight}>
                  <td>{item.weight}</td>
                  <td>{item.charges}</td>
                  <td>{item.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Table>

      {/* Agent Pricing */}
      <AgentPricing>
        <p className="heading">Agent Pricing</p>

        <form>
          <div className="inputFeild">
            <label>Enter Price</label>
            <br />
            <input type="number" placeholder="2"></input>
          </div>
          <div className="btn">
            <button className="addAgentBtn">Add/Update Price</button>
          </div>
        </form>
      </AgentPricing>
      <AgentPricingTable>
        <p className="heading">Agent Pricing List</p>
        <div className="tableDiv">
          <table>
            <thead>
              <tr>
                <th>Agent Charges</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>
                  <button className="btn1">
                    <FaEdit size={18} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </AgentPricingTable>
    </>
  );
};

export default PricingManagement;
