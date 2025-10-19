import React, { useEffect, useState } from "react";
import {
  Heading,
  WeightParent,
  Table,
  FormDiv,
  AgentPricing,
  AgentPricingTable,
} from "./style";

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import UseAdmin from "../useHooks";
const PricingManagement = () => {
  const [show, setShow] = useState(false);
  const [selecteditem, setSelectedItem] = useState(null);
  const [selectedAgent, setSelectedagent] = useState(null);

  const {
    weightBasePrices,
    weightBasePricesGet,
    deletePrice,
    weightBasePricesUpdate,
    agentCommisionGet,
    agentCommisionUpdate,
  } = UseAdmin();
  const [weightbasePrice, setWeightBasePrice] = useState([]);
  const [agentCommision, setAgentCommision] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    register: registerAgent,
    handleSubmit: handleSubmitAgent,
    reset: resetAgent,
    formState: { errors: errorsAgent },
  } = useForm();

  const handleWeightBasePrices = async (body) => {
    await weightBasePrices(body);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await weightBasePricesGet();
      if (response) {
        setWeightBasePrice(response.data);
        console.log(response);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (selecteditem) {
      reset({
        minWeight: selecteditem.minWeight,
        maxWeight: selecteditem.maxWeight,
        charge: selecteditem.charge,
      });
    }
  }, [selecteditem, reset]);

  const handleDeleteprice = async (id) => {
    await deletePrice(id);
  };

  const handlePricesUpdate = async (id, body) => {
    await weightBasePricesUpdate(id, body);
  };
  const fetchAgentCommision = async () => {
    const response = await agentCommisionGet();
    if (response) {
      setAgentCommision(response);
    }
  };
  useEffect(() => {
    fetchAgentCommision();
  }, []);

  useEffect(() => {
    if (selectedAgent) {
      resetAgent({
        agentCommissionPercent: selectedAgent.agentCommissionPercent,
      });
    }
  }, [selectedAgent, resetAgent]);

  const handleAgentcommisionUpdate = async (body) => {
    console.log(body, "body in index");
    await agentCommisionUpdate(body);
    fetchAgentCommision();
  };

  return (
    <>
      <Heading>Pricing Management</Heading>
      <WeightParent>
        <p className="heading">Weight Based Pricing</p>
        <form onSubmit={handleSubmit(handleWeightBasePrices)}>
          <div className="inputFields">
            <div className="childs">
              <label htmlFor="">Enter Minimum Weight</label>
              <br />
              {errors.minWeight && (
                <p className="errorMsg">{errors.minWeight.message}</p>
              )}
              <input
                type="number"
                placeholder="Enter Minimum Weight"
                {...register("minWeight", {
                  required: "Minimum Weight is Required!",
                  min: {
                    value: 6,
                    message: "Minimum weight must be at least 6",
                  },
                  max: {
                    value: 50,
                    message: "Minimum weight cannot exceed 50",
                  },
                })}
              />
            </div>
            <div className="childs">
              <label htmlFor="">Enter Maximum Weight</label>
              <br />
              {errors.maxWeight && (
                <p className="errorMsg">{errors.maxWeight.message}</p>
              )}
              <input
                type="number"
                placeholder="Enter Maximum Weight"
                {...register("maxWeight", {
                  required: "Maximum Weight is Required!",
                  min: {
                    value: 6,
                    message: "Maximum weight must be at least 6",
                  },
                  max: {
                    value: 50,
                    message: "Maximum weight cannot exceed 50",
                  },
                })}
              />
            </div>
            <div className="childs">
              <label htmlFor="">Charges</label>
              <br />
              {errors.charge && (
                <p className="errorMsg">{errors.charge.message}</p>
              )}
              <input
                type="number"
                placeholder="Enter Charges/Rupees"
                {...register("charge", {
                  required: "Charges is  Required!",
                })}
              />
            </div>
          </div>
          <div className="btn">
            <button className="addBtn">Add</button>
          </div>
        </form>
      </WeightParent>
      <Table>
        <p className="heading">Weight Based Pricing List</p>

        <div className="tableDiv">
          <table>
            <thead>
              <tr>
                <th>Minimum Weight</th>
                <th>Maximum Weight</th>
                <th>Charges</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {weightbasePrice.map((item) => (
                <tr key={item.id}>
                  <td>{item.minWeight}</td>
                  <td>{item.maxWeight}</td>
                  <td>{item.charge}</td>
                  <td>
                    <div className="btns">
                      <button
                        type="button"
                        className="btn1"
                        onClick={() => {
                          setSelectedItem(item);
                          setShow(true);
                        }}
                      >
                        <FaEdit size={18} />
                      </button>
                      <button
                        type="button"
                        className="btn2"
                        onClick={() => handleDeleteprice(item.id)}
                      >
                        <AiFillDelete size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {show && (
          <FormDiv>
            <form
              onSubmit={handleSubmit((body) =>
                handlePricesUpdate(selecteditem.id, body)
              )}
            >
              <div className="heading">
                <p>Edit price</p>
                <RxCross2
                  onClick={() => setShow(false)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="parentInput">
                <div className="inputFields">
                  <div className="childs">
                    <label htmlFor="">Enter Minimum Weight</label>
                    <br />
                    {errors.minWeight && (
                      <p className="errorMsg">{errors.minWeight.message}</p>
                    )}
                    <input
                      type="number"
                      placeholder="Enter Minimum Weight"
                      {...register("minWeight", {
                        required: "Minimum Weight is Required!",
                        min: {
                          value: 6,
                          message: "Minimum weight must be at least 6",
                        },
                        max: {
                          value: 50,
                          message: "Minimum weight cannot exceed 50",
                        },
                      })}
                    />
                  </div>
                  <div className="childs">
                    <label htmlFor="">Enter Maximum Weight</label>
                    <br />
                    {errors.maxWeight && (
                      <p className="errorMsg">{errors.maxWeight.message}</p>
                    )}
                    <input
                      type="number"
                      placeholder="Enter Maximum Weight"
                      {...register("maxWeight", {
                        required: "Maximum Weight is Required!",
                        min: {
                          value: 6,
                          message: "Maximum weight must be at least 6",
                        },
                        max: {
                          value: 50,
                          message: "Maximum weight cannot exceed 50",
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="inputFields">
                  <div className="childs">
                    <label htmlFor="">Charges</label>
                    <br />
                    {errors.charge && (
                      <p className="errorMsg">{errors.charge.message}</p>
                    )}
                    <input
                      type="number"
                      placeholder="Enter Charges/Rupees"
                      {...register("charge", {
                        required: "Charges is  Required!",
                      })}
                    />
                  </div>
                </div>
                <div className="btn">
                  <button className="addBtn">Update Price</button>
                </div>
              </div>
            </form>
          </FormDiv>
        )}
      </Table>

      {/* Agent Pricing */}
      <AgentPricing>
        <p className="heading">Agent Pricing</p>

        <form onSubmit={handleSubmitAgent(handleAgentcommisionUpdate)}>
          <div className="inputFeild">
            <label>Enter Price</label>
            <br />

            {errorsAgent.agentCommissionPercent && (
              <p className="errorMsg">
                {errorsAgent.agentCommissionPercent.message}
              </p>
            )}
            <input
              type="number"
              placeholder="Enter agent Commission Percent"
              {...registerAgent("agentCommissionPercent", {
                required: "agent Commission is  Required!",
                valueAsNumber: true,
                max: {
                  value: 100,
                  message: "Commission percent cannot be more than 100%",
                },
                min: {
                  value: 0,
                  message: "Commission percent cannot be Negative",
                },
              })}
            />
          </div>
          <div className="btn">
            <button className="addAgentBtn">Edit/Update Price</button>
          </div>
        </form>
      </AgentPricing>
      <AgentPricingTable>
        <p className="heading">Agent Pricing List</p>
        <div className="tableDiv">
          <table>
            <thead>
              <tr>
                <th>Agent Commision</th>
                <th>Edit Agent Commision</th>
              </tr>
            </thead>
            <tbody>
              {agentCommision && (
                <tr>
                  <td>{`${agentCommision.agentCommissionPercent}%`}</td>
                  <td>
                    <button
                      type="button"
                      className="btn1"
                      onClick={() => setSelectedagent(agentCommision)}
                    >
                      <FaEdit size={18} />
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </AgentPricingTable>
    </>
  );
};

export default PricingManagement;
