import React, { useEffect, useState } from "react";
import {
  Container,
  CustomerParent,
  Customer,
  PaginationWrapper,
  PaginationInfo,
  PaginationNav,
  PageButton,
  PageNavButton,
  FormDiv,
  AgentParent,
  Agent,
  GuestCustomerParent,
  GuestCustomer,
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
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import UseAdmin from "../useHooks";

const UserManagement = () => {
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const {
    createUser,
    allCustomersGet,
    allGuestCustomersGet,
    allAgentsGet,
    allRestrictedUsersGet,
    updateUser,
    deleteUser,
    blockUser,
    suspendUser,
    unBlockUser,
    unSuspendUser,
  } = UseAdmin();
  const [pagination, setPagination] = useState({
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [allCustomers, setAllCustomers] = useState([]);
  const [allGuestCustomers, setAllGuestCustomers] = useState([]);
  const [allAgents, setAllAgents] = useState([]);
  const [allRestrictedUsers, setAllRestrictedUsers] = useState([]);

  const fetchCustomers = async (page = 1, limit = 10) => {
    const response = await allCustomersGet(page, limit);
    setAllCustomers(response.users);
    setPagination({
      page: response.pagination.currentPage,
      limit: response.pagination.itemsPerPage,
      totalItems: response.pagination.totalCounts,
      totalPages: response.pagination.totalPages,
    });
  };
  useEffect(() => {
    fetchCustomers(pagination.page, pagination.limit);
  }, []);

  const fetchGuestCustomers = async (page = 1, limit = 10) => {
    const response = await allGuestCustomersGet(page, limit);
    setAllGuestCustomers(response.users);
    setPagination2({
      page: response.pagination.currentPage,
      limit: response.pagination.itemsPerPage,
      totalItems: response.pagination.totalCounts,
      totalPages: response.pagination.totalPages,
    });
  };
  useEffect(() => {
    fetchGuestCustomers(pagination2.page, pagination2.limit);
  }, []);

  const fetchAgents = async (page = 1, limit = 10) => {
    const response = await allAgentsGet(page, limit);
    setAllAgents(response.users);
    setPagination3({
      page: response.pagination.currentPage,
      limit: response.pagination.itemsPerPage,
      totalItems: response.pagination.totalCounts,
      totalPages: response.pagination.totalPages,
    });
    // console.log("Fetched Agents:", response);
  };
  useEffect(() => {
    fetchAgents(pagination3.page, pagination3.limit);
  }, []);

  const fetchRestrictedUsers = async (page = 1, limit = 10) => {
    const response = await allRestrictedUsersGet(page, limit);
    setAllRestrictedUsers(response.users);
    setPagination4({
      page: response.pagination.currentPage,
      limit: response.pagination.itemsPerPage,
      totalItems: response.pagination.totalCounts,
      totalPages: response.pagination.totalPages,
    });
  };
  useEffect(() => {
    fetchRestrictedUsers(pagination4.page, pagination4.limit);
  }, []);

  useEffect(() => {
    if (selectedUser) {
      reset({
        fullName: selectedUser.fullName || "",
        email: selectedUser.email || "",
        phoneNumber: selectedUser.phoneNumber || "",
        password: "",
        address: selectedUser.address || "",
        role: selectedUser.role || "",
      });
    }
  }, [selectedUser, reset]);

  const handleCreateUser = async (body) => {
    const payload = {
      fullName: body.fullName,
      email: body.email,
      password: body.password,
      phoneNumber: body.phoneNumber,
      role: body.role,
    };
    // console.log(payload);
    await createUser(payload);
    fetchCustomers();
    fetchGuestCustomers();
    fetchAgents();
    fetchRestrictedUsers();
  };

  const handleUpdateUser = async (id, body) => {
    await updateUser(id, body);
    fetchCustomers();
    fetchGuestCustomers();
    fetchAgents();
    fetchRestrictedUsers();
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    fetchCustomers();
    fetchGuestCustomers();
    fetchAgents();
    fetchRestrictedUsers();
  };

  const handleBlockUser = async (id, body) => {
    await blockUser(id, body);
    fetchCustomers();
    fetchGuestCustomers();
    fetchAgents();
    fetchRestrictedUsers();
  };

  const handleSuspendUser = async (id, body) => {
    await suspendUser(id, body);
    fetchCustomers();
    fetchGuestCustomers();
    fetchAgents();
    fetchRestrictedUsers();
  };
  const handleUnBlockUser = async (id, body) => {
    await unBlockUser(id, body);
    fetchCustomers();
    fetchGuestCustomers();
    fetchAgents();
    fetchRestrictedUsers();
  };

  const handleUnSuspendUser = async (id, body) => {
    await unSuspendUser(id, body);
    fetchCustomers();
    fetchGuestCustomers();
    fetchAgents();
    fetchRestrictedUsers();
  };

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
                <th>Suspicious Character</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allCustomers.map((user) => (
                <tr key={user.id}>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.address}</td>
                  <td>
                    <span className={`character ${user.isSuspicious}`}>
                      {user.isSuspicious ? "Suspicious" : "Not Suspicious"}
                    </span>
                  </td>
                  <td className="btns">
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setShow("viewCustomer");
                      }}
                    >
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
                    <button
                      className="btn3"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <AiFillDelete color="white" size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <PaginationWrapper>
            <PaginationInfo>
              Showing
              {(pagination.page - 1) * pagination.limit + 1}–
              {Math.min(
                pagination.page * pagination.limit,
                pagination.totalItems
              )}
              of {pagination.totalItems}
            </PaginationInfo>

            <PaginationNav>
              <PageNavButton
                disabled={pagination.page === 1}
                onClick={() =>
                  fetchCustomers(pagination.page - 1, pagination.limit)
                }
              >
                <FaChevronLeft size={12} />
              </PageNavButton>

              {Array.from({ length: pagination.totalPages }).map((_, index) => (
                <PageButton
                  key={index}
                  className={pagination.page === index + 1 ? "active" : ""}
                  onClick={() => fetchCustomers(index + 1, pagination.limit)}
                >
                  {index + 1}
                </PageButton>
              ))}

              <PageNavButton
                disabled={pagination.page === pagination.totalPages}
                onClick={() =>
                  fetchCustomers(pagination.page + 1, pagination.limit)
                }
              >
                <FaChevronRight size={12} />
              </PageNavButton>
            </PaginationNav>
          </PaginationWrapper>
        </Customer>

        {show === "addCustomer" && (
          <FormDiv>
            <form onSubmit={handleSubmit(handleCreateUser)}>
              <div className="heading">
                <p>Add Customer</p>
                <RxCross2
                  onClick={() => setShow(false)}
                  style={{ cursor: "pointer" }}
                />
              </div>

              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Name"
                    {...register("fullName", {
                      required: "Name is Required!",
                      minLength: {
                        value: 3,
                        message: "Name should be atleast three characters!",
                      },
                    })}
                  />
                  {errors.fullName && (
                    <p className="errorMsg">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="inputFeild">
                  <label htmlFor="">Email</label>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    {...register("email", {
                      required: "Email is required!",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid Email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="errorMsg">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Phone No"
                    {...register("phoneNumber", {
                      required: "Phone Number is Required!",
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
                  {errors.phoneNumber && (
                    <p className="errorMsg">{errors.phoneNumber.message}</p>
                  )}
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    {...register("password", {
                      required: "Password is Required!",
                      minLength: {
                        value: 6,
                        message:
                          "Password should contain atleast 6 characters long!",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="errorMsg">{errors.password.message}</p>
                  )}
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Role</label>
                  <br />
                  <input
                    type="text"
                    value="customer"
                    {...register("role", {
                      required: "Role is Required!",
                    })}
                  />
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <FaCheck color="darkgreen" size={18} />
                    Add Customer
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
                <p>View Customer</p>
                <RxCross2
                  onClick={() => setShow(null)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Name</label>
                  <br />
                  <input defaultValue={selectedUser.fullName} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Email</label>
                  <br />
                  <input defaultValue={selectedUser.email} disabled />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input defaultValue={selectedUser.phoneNumber} />
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
                  <input defaultValue={selectedUser.address} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Role</label>
                  <br />
                  <input type="text" value="customer" />
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button
                    type="button"
                    onClick={() => handleSuspendUser(selectedUser.id)}
                  >
                    <TbUserOff color="black" size={18} />
                    Suspend Customer
                  </button>
                </div>
                <div className="btn">
                  <button
                    type="button"
                    onClick={() => handleBlockUser(selectedUser.id)}
                  >
                    <MdBlockFlipped color="red" size={18} />
                    Block Customer
                  </button>
                </div>
              </div>
            </form>
          </FormDiv>
        )}

        {show === "editCustomer" && selectedUser && (
          <FormDiv>
            <form
              onSubmit={handleSubmit((data) => {
                handleUpdateUser(selectedUser.id, data);
              })}
            >
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
                  <input
                    {...register("fullName", {
                      required: "Name is Required!",
                      minLength: {
                        value: 3,
                        message: "Name should be atleast three characters!",
                      },
                    })}
                  />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Email</label>
                  <br />
                  <input
                    disabled
                    {...register("email", {
                      required: "Email is required!",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid Email",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input
                    {...register("phoneNumber", {
                      // required: "Phone Number is Required!",
                    })}
                  />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    {...register("password", {})}
                  />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Address</label>
                  <br />
                  <input
                    {...register("address", {
                      // required: "Address is Required!",
                    })}
                  />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Role</label>
                  <br />
                  <input
                    type="text"
                    value="Customer"
                    {...register("role", {})}
                  />
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <FaCheck color="darkgreen" size={18} />
                    Edit/Update Customer
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
              {allAgents.map((agent) => (
                <tr key={agent.id}>
                  <td>{agent.fullName}</td>
                  <td>{agent.email}</td>
                  <td>{agent.phoneNumber}</td>
                  <td>{agent.address}</td>
                  <td className="btns">
                    <button
                      onClick={() => {
                        setSelectedUser(agent);
                        setShow("viewAgent");
                      }}
                    >
                      <GrView className="btn1" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedUser(agent);
                        setShow("editAgent");
                      }}
                    >
                      <FaEdit className="btn2" />
                    </button>
                    <button
                      className="btn3"
                      onClick={() => handleDeleteUser(agent.id)}
                    >
                      <AiFillDelete color="white" size={18} />
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
                  fetchAgents(pagination3.page - 1, pagination3.limit)
                }
              >
                <FaChevronLeft size={12} />
              </PageNavButton>

              {Array.from({ length: pagination3.totalPages }).map(
                (_, index) => (
                  <PageButton
                    key={index}
                    className={pagination3.page === index + 1 ? "active" : ""}
                    onClick={() => fetchAgents(index + 1, pagination3.limit)}
                  >
                    {index + 1}
                  </PageButton>
                )
              )}

              <PageNavButton
                disabled={pagination3.page === pagination3.totalPages}
                onClick={() =>
                  fetchAgents(pagination3.page + 1, pagination3.limit)
                }
              >
                <FaChevronRight size={12} />
              </PageNavButton>
            </PaginationNav>
          </PaginationWrapper>
        </Agent>
        {show === "addAgent" && (
          <FormDiv>
            <form onSubmit={handleSubmit(handleCreateUser)}>
              <div className="heading">
                <p>Add Agent</p>
                <RxCross2
                  onClick={() => setShow(false)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Name"
                    {...register("fullName", {
                      required: "Name is Required!",
                      minLength: {
                        value: 3,
                        message: "Name should be atleast three characters!",
                      },
                    })}
                  />
                  {errors.fullName && (
                    <p className="errorMsg">{errors.fullName.message}</p>
                  )}
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Email</label>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    {...register("email", {
                      required: "Email is required!",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid Email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="errorMsg">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Phone No"
                    {...register("phoneNumber", {
                      required: "Phone Number is Required!",
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
                  {errors.phoneNumber && (
                    <p className="errorMsg">{errors.phoneNumber.message}</p>
                  )}
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    {...register("password", {
                      required: "Password is Required!",
                      minLength: {
                        value: 6,
                        message:
                          "Password should contain atleast 6 characters long!",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="errorMsg">{errors.password.message}</p>
                  )}
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Role</label>
                  <br />
                  <input
                    type="text"
                    value="agent"
                    {...register("role", {
                      required: "Role is Required!",
                    })}
                  />
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <FaCheck color="darkgreen" size={18} />
                    Add Agent
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
                <p>View Agent</p>
                <RxCross2
                  onClick={() => setShow(null)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Name</label>
                  <br />
                  <input defaultValue={selectedUser.fullName} />
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
                  <input defaultValue={selectedUser.phoneNumber} />
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
                  <input defaultValue={selectedUser.address} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Role</label>
                  <br />
                  <input type="text" value="agent" />
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button
                    type="button"
                    onClick={() => handleSuspendUser(selectedUser.id)}
                  >
                    <TbUserOff color="black" size={18} />
                    Suspend Agent
                  </button>
                </div>
                <div className="btn">
                  <button
                    type="button"
                    onClick={() => handleBlockUser(selectedUser.id)}
                  >
                    <MdBlockFlipped color="red" size={18} />
                    Block Agent
                  </button>
                </div>
              </div>
            </form>
          </FormDiv>
        )}
        {show === "editAgent" && selectedUser && (
          <FormDiv>
            <form
              onSubmit={handleSubmit((data) => {
                handleUpdateUser(selectedUser.id, data);
              })}
            >
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
                  <input
                    {...register("fullName", {
                      required: "Name is Required!",
                      minLength: {
                        value: 3,
                        message: "Name should be atleast three characters!",
                      },
                    })}
                  />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Email</label>
                  <br />
                  <input
                    disabled
                    {...register("email", {
                      required: "Email is required!",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid Email",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input
                    {...register("phoneNumber", {
                      // required: "Phone Number is Required!",
                    })}
                  />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    {...register("password", {})}
                  />
                </div>
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Address</label>
                  <br />
                  <input
                    {...register("address", {
                      // required: "Address is Required!",
                    })}
                  />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Role</label>
                  <br />
                  <input type="text" value="agent" {...register("role", {})} />
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <button>
                    <FaCheck color="darkgreen" size={18} />
                    Edit/Update Agent
                  </button>
                </div>
              </div>
            </form>
          </FormDiv>
        )}
      </AgentParent>

      {/* Agent Management*/}
      <GuestCustomerParent>
        <GuestCustomer>
          <div className="firstLine">
            <p className="heading">Guest Customers Management</p>
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
              {allGuestCustomers.map((guest) => (
                <tr key={guest.id}>
                  <td>{guest.fullName}</td>
                  <td>{guest.email}</td>
                  <td>{guest.phoneNumber}</td>
                  <td>{guest.address}</td>
                  <td className="btns">
                    <button
                      onClick={() => {
                        setSelectedUser(guest);
                        setShow("viewguest");
                      }}
                    >
                      <GrView className="btn1" />
                    </button>
                    <button
                      className="btn3"
                      onClick={() => handleDeleteUser(guest.id)}
                    >
                      <AiFillDelete color="white" size={18} />
                    </button>
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
                  fetchGuestCustomers(pagination2.page - 1, pagination2.limit)
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
                      fetchGuestCustomers(index + 1, pagination2.limit)
                    }
                  >
                    {index + 1}
                  </PageButton>
                )
              )}

              <PageNavButton
                disabled={pagination2.page === pagination2.totalPages}
                onClick={() =>
                  fetchGuestCustomers(pagination2.page + 1, pagination2.limit)
                }
              >
                <FaChevronRight size={12} />
              </PageNavButton>
            </PaginationNav>
          </PaginationWrapper>
        </GuestCustomer>

        {show === "viewguest" && selectedUser && (
          <FormDiv>
            <form action="">
              <div className="heading">
                <p>View Guest Customer</p>
                <RxCross2
                  onClick={() => setShow(null)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="inputFields">
                <div className="inputFeild">
                  <label htmlFor="">Name</label>
                  <br />
                  <input defaultValue={selectedUser.fullName} />
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
                  <input defaultValue={selectedUser.phoneNumber} />
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
                  <input defaultValue={selectedUser.address} />
                </div>
                <div className="inputFeild">
                  <label htmlFor="">Role</label>
                  <br />
                  <input type="text" value="guest" />
                </div>
              </div>
            </form>
          </FormDiv>
        )}
      </GuestCustomerParent>

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
              {allRestrictedUsers.map((restrictedUser) => {
                const isSuspended = restrictedUser.isActive === true;
                const isBlocked =
                  restrictedUser.isActive === false &&
                  restrictedUser.suspendedUntil === null;

                return (
                  <tr key={restrictedUser.id}>
                    <td>{restrictedUser.fullName}</td>
                    <td>{restrictedUser.email}</td>
                    <td>{restrictedUser.phoneNumber}</td>
                    <td>{restrictedUser.address}</td>
                    <td>{restrictedUser.role}</td>
                    <td className="btns">
                      {isBlocked && (
                        <button
                          className="btn1"
                          onClick={() => handleUnBlockUser(restrictedUser.id)}
                        >
                          <CgUnblock color="white" size={20} /> Unblock
                        </button>
                      )}

                      {isSuspended && (
                        <button
                          className="btn2"
                          onClick={() => handleUnSuspendUser(restrictedUser.id)}
                        >
                          <IoLockOpenSharp color="white" size={16} /> Unsuspend
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
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
                  fetchRestrictedUsers(pagination4.page - 1, pagination4.limit)
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
                      fetchRestrictedUsers(index + 1, pagination4.limit)
                    }
                  >
                    {index + 1}
                  </PageButton>
                )
              )}

              <PageNavButton
                disabled={pagination4.page === pagination4.totalPages}
                onClick={() =>
                  fetchRestrictedUsers(pagination4.page + 1, pagination4.limit)
                }
              >
                <FaChevronRight size={12} />
              </PageNavButton>
            </PaginationNav>
          </PaginationWrapper>
        </div>
      </SuspendBlock>
    </Container>
  );
};

export default UserManagement;
