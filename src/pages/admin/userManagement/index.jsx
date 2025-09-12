import React, { useState } from "react";
import {
  Container,
  CustomerParent,
  Customer,
  FormDiv,
  AgentParent,
  Agent,
  SuspendBlock,
} from "./style";
import { IoMdAdd } from "react-icons/io";

import { GrView } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

import { TbUserOff } from "react-icons/tb";
import { MdBlockFlipped } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { CgUnblock } from "react-icons/cg";
import { IoLockOpenSharp } from "react-icons/io5";

const UserManagement = () => {
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const dummyCustomer = [
    {
      name: "Malaika",
      email: "Malaika123@gmail.com",
      phoneNo: "03128778490",
      Address: "Street No. 5, RYK",
    },
    {
      name: "Laiba",
      email: "Laiba1423@gmail.com",
      phoneNo: "03128774679",
      Address: "Street No. 10, RYK",
    },
    {
      name: "Ayna Wakeel",
      email: "Ayna123@gmail.com",
      phoneNo: "03568978490",
      Address: "Street No. 5, London",
    },
    {
      name: "Mahnoor",
      email: "Mahnoor4503@gmail.com",
      phoneNo: "03128778490",
      Address: "Street No. 50 ,UK",
    },
  ];
  const dummySuspendBlockUser = [
    {
      name: "Saba Rafiqque",
      email: "Saba123@gmail.com",
      phoneNo: "03128778490",
      Address: "Street No. 5, RYK",
      role: "Customer",
      action: (
        <>
          <button className="btn1">
            <CgUnblock color="white" size={20} />
            UnBlock
          </button>
          <button className="btn2">
            <IoLockOpenSharp color="white" size={16} />
            UnSuspend
          </button>
        </>
      ),
    },
    {
      name: "Mahnoor",
      email: "Mahnoor4503@gmail.com",
      phoneNo: "03128778490",
      Address: "Street No. 50 ,UK",
      role: "Agent",
      action: (
        <>
          <button className="btn1">
            <CgUnblock color="white" size={20} />
            UnBlock
          </button>
          <button className="btn2">
            <IoLockOpenSharp color="white" size={16} />
            UnSuspend
          </button>
        </>
      ),
    },
  ];
  const dummyAgent = [
    {
      name: "Saba",
      email: "Saba123@gmail.com",
      phoneNo: "03128778490",
      Address: "Street No. 5, RYK",
    },
    {
      name: "Laiba",
      email: "Laiba1423@gmail.com",
      phoneNo: "03128774679",
      Address: "Street No. 10, RYK",
    },
    {
      name: "Ayna Wakeel",
      email: "Ayna123@gmail.com",
      phoneNo: "03568978490",
      Address: "Street No. 5, London",
    },
    {
      name: "Mahnoor",
      email: "Mahnoor4503@gmail.com",
      phoneNo: "03128778490",
      Address: "Street No. 50 ,UK",
    },
  ];
  return (
    <Container>
      <p className="mainHeading">User Management</p>
      
      {/* Customer Management */}
      <CustomerParent>
        <Customer>
          <div className="firstLine">
            <p className="heading">Customer Management</p>
            <button
              className={`btn ${show === "addCustomer" ? "active" : ""}`}
              onClick={() => setShow("addCustomer")}
            >
              <IoMdAdd size={18} color="white" />
              <p>Add Cutomer</p>
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyCustomer.map((user) => (
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNo}</td>
                  <td>{user.Address}</td>
                  <td className="btns">
                    <button onClick={() => {
                      setSelectedUser(user);
                      setShow("viewCustomer")
                    }}>
                      <GrView className="btn1" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setShow("editCustomer");
                      }}
                    >
                      <FaEdit className="btn2" />
                    </button>
                    <button className="btn3">
                      <AiFillDelete color="white" size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Customer>
        
        {show === "addCustomer" && (
          <FormDiv>
            <form action="">
              <div className="heading">
                <p>Customer Form</p>
                <RxCross2
                  onClick={() => setShow(false)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Name</label>
                  <br />
                  <input type="text" placeholder="Enter Name" />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Email</label>
                  <br />
                  <input type="email" placeholder="Enter Email" />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input type="text" placeholder="Enter Phone No" />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Password</label>
                  <br />
                  <input type="password" placeholder="Enter Password" />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Role</label>
                  <br />
                  <input type="text" value="Customer" />
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <TbUserOff color="black" size={18} />
                    Suspend Customer
                  </button>
                </div>
                <div className="btn">
                  <button>
                    <MdBlockFlipped color="red" size={18} />
                    Block Customer
                  </button>
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <FaCheck color="darkgreen" size={18} />
                    Add/Update Customer
                  </button>
                </div>
              </div>
            </form>
          </FormDiv>
        )}
        {show === "viewCustomer" && selectedUser && (
          <FormDiv>
            <form action="">
              <div className="heading">
                <p>Edit Customer</p>
                <RxCross2
                  onClick={() => setShow(null)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Name</label>
                  <br />
                  <input defaultValue={selectedUser.name} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Email</label>
                  <br />
                  <input defaultValue={selectedUser.email} />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input defaultValue={selectedUser.phoneNo} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Password</label>
                  <br />
                  <input type="password" placeholder="Enter Password" />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Address</label>
                  <br />
                  <input defaultValue={selectedUser.Address} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Role</label>
                  <br />
                  <input type="text" value="Customer" />
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <TbUserOff color="black" size={18} />
                    Suspend Customer
                  </button>
                </div>
                <div className="btn">
                  <button>
                    <MdBlockFlipped color="red" size={18} />
                    Block Customer
                  </button>
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <FaCheck color="darkgreen" size={18} />
                    Add/Update Customer
                  </button>
                </div>
              </div>
            </form>
          </FormDiv>
        )}
        {show === "editCustomer" && selectedUser && (
          <FormDiv>
            <form action="">
              <div className="heading">
                <p>Edit Customer</p>
                <RxCross2
                  onClick={() => setShow(null)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Name</label>
                  <br />
                  <input defaultValue={selectedUser.name} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Email</label>
                  <br />
                  <input defaultValue={selectedUser.email} />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input defaultValue={selectedUser.phoneNo} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Password</label>
                  <br />
                  <input type="password" placeholder="Enter Password" />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Address</label>
                  <br />
                  <input defaultValue={selectedUser.Address} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Role</label>
                  <br />
                  <input type="text" value="Customer" />
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <TbUserOff color="black" size={18} />
                    Suspend Customer
                  </button>
                </div>
                <div className="btn">
                  <button>
                    <MdBlockFlipped color="red" size={18} />
                    Block Customer
                  </button>
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <FaCheck color="darkgreen" size={18} />
                    Add/Update Customer
                  </button>
                </div>
              </div>
            </form>
          </FormDiv>
        )}
      </CustomerParent>

      {/* Agent Management*/}
      <AgentParent>
        <Agent>
          <div className="firstLine">
            <p className="heading">Agent Management</p>
            <button
              className={`btn btn2 ${show === "addAgent" ? "active" : ""}`}
              onClick={() => setShow("addAgent")}
            >
              <IoMdAdd size={18} color="white" />
              <p>Add Agent</p>
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyAgent.map((agent) => (
                <tr key={agent.name}>
                  <td>{agent.name}</td>
                  <td>{agent.email}</td>
                  <td>{agent.phoneNo}</td>
                  <td>{agent.Address}</td>
                  <td className="btns">
                    <button onClick={() => {
                      setSelectedUser(agent);
                      setShow("viewAgent")
                    }}>
            <GrView className="btn1" />
          </button>
          <button onClick={() => {
            setSelectedUser(agent);
            setShow("editAgent")
          }}>
            <FaEdit className="btn2" />
          </button>
          <button className="btn3">
            <AiFillDelete color="white" size={18} />
          </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Agent>
        {show === "addAgent" && (
          <FormDiv>
            <form action="">
              <div className="heading">
                <p>Agent Form</p>
                <RxCross2
                  onClick={() => setShow(false)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Name</label>
                  <br />
                  <input type="text" placeholder="Enter Name" />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Email</label>
                  <br />
                  <input type="email" placeholder="Enter Email" />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input type="text" placeholder="Enter Phone No" />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Password</label>
                  <br />
                  <input type="password" placeholder="Enter Password" />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Role</label>
                  <br />
                  <input type="text" value="Agent" />
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <TbUserOff color="black" size={18} />
                    Suspend Agent
                  </button>
                </div>
                <div className="btn">
                  <button>
                    <MdBlockFlipped color="red" size={18} />
                    Block Agent
                  </button>
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <FaCheck color="darkgreen" size={18} />
                    Add/Update Agent
                  </button>
                </div>
              </div>
            </form>
          </FormDiv>
        )}
        {show === "viewAgent" && selectedUser && (
          <FormDiv>
            <form action="">
              <div className="heading">
                <p>Edit Agent</p>
                <RxCross2
                  onClick={() => setShow(null)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Name</label>
                  <br />
                  <input defaultValue={selectedUser.name} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Email</label>
                  <br />
                  <input defaultValue={selectedUser.email} />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input defaultValue={selectedUser.phoneNo} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Password</label>
                  <br />
                  <input type="password" placeholder="Enter Password" />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Address</label>
                  <br />
                  <input defaultValue={selectedUser.Address} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Role</label>
                  <br />
                  <input type="text" value="Agent" />
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <TbUserOff color="black" size={18} />
                    Suspend Agent
                  </button>
                </div>
                <div className="btn">
                  <button>
                    <MdBlockFlipped color="red" size={18} />
                    Block Agent
                  </button>
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <FaCheck color="darkgreen" size={18} />
                    Add/Update Agent
                  </button>
                </div>
              </div>
            </form>
          </FormDiv>
        )}
        {show === "editAgent" && selectedUser && (
          <FormDiv>
            <form action="">
              <div className="heading">
                <p>Edit Agent</p>
                <RxCross2
                  onClick={() => setShow(null)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Name</label>
                  <br />
                  <input defaultValue={selectedUser.name} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Email</label>
                  <br />
                  <input defaultValue={selectedUser.email} />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input defaultValue={selectedUser.phoneNo} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Password</label>
                  <br />
                  <input type="password" placeholder="Enter Password" />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Address</label>
                  <br />
                  <input defaultValue={selectedUser.Address} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Role</label>
                  <br />
                  <input type="text" value="Agent" />
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <TbUserOff color="black" size={18} />
                    Suspend Agent
                  </button>
                </div>
                <div className="btn">
                  <button>
                    <MdBlockFlipped color="red" size={18} />
                    Block Agent
                  </button>
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <FaCheck color="darkgreen" size={18} />
                    Add/Update Agent
                  </button>
                </div>
              </div>
            </form>
          </FormDiv>
        )}
      </AgentParent>

      {/* Suspended Block Users */}
      <SuspendBlock>
        <div className="firstLine">
          <p className="heading">Suspended And Block Users</p>
        </div>
        <div className="tableDiv">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Address</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummySuspendBlockUser.map((users) => (
                <tr key={users.role}>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>{users.phoneNo}</td>
                  <td>{users.Address}</td>
                  <td>{users.role}</td>
                  <td className="btns">{users.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SuspendBlock>
    </Container>
  );
};

export default UserManagement;
