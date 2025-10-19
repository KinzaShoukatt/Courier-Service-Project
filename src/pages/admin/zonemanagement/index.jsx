import React, { useEffect, useState } from "react";
import {
  Container,
  ServiceAreasParent,
  ServiceAreas,
  FormDiv,
  Listing,
  SetChargesParent,
  SetCharges,
  LastFormDiv,
  LastListing,
} from "./style";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import UseAdmin from "../useHooks";
import { useForm } from "react-hook-form";

const ZoneManagement = () => {
  const { allZonePrices, zonePricesUpdate } = UseAdmin();

  const [allZone, setAllZone] = useState([]);
  const fetchZones = async () => {
    const response = await allZonePrices();
    if (response) {
      setAllZone(response.pricingRules);
      console.log(response);
    }
  };
  useEffect(() => {
    fetchZones();
  }, []);

  const zones = [
    { zoneId: 1, name: "Punjab" },
    { zoneId: 2, name: "Sindh" },
    { zoneId: 3, name: "KPK" },
    { zoneId: 4, name: "Balochistan" },
  ];

  const [selecteditem, setSelectedItem] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (selecteditem) {
      reset({
        zoneId: selecteditem.zoneId,
        baseFare: selecteditem.baseFare,
      });
    }
  }, [selecteditem, reset]);

  const onSubmit = async (id, body) => {
    await zonePricesUpdate(id, body);
    fetchZones();
  };

  return (
    <Container>
      <p className="mainHeading">Zone Management</p>
      {/* <ServiceAreasParent>
        <p className="heading">Define Service Areas</p>
        <ServiceAreas>
          <FormDiv>
            <p className="leftHeading">Add New Service Province</p>
            <form onSubmit={handleAddProvince}>
              <div className="inputFeild">
                <label htmlFor="">Select Province</label>
                <br />
                <select
                  name="zone"
                  id="zone"
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                >
                  <option value="punjab" selected>
                    Punjab
                  </option>
                  <option value="sindh">Sindh</option>
                  <option value="balochistan">Balochistan</option>
                  <option value="khyberPakhtunkhwa">Khyber Pakhtunkhwa</option>
                </select>
              </div>
              <div className="btn">
                <button className="addAgentBtn">
                  Add Province Service Area
                </button>
              </div>
            </form>
          </FormDiv>
          <Listing>
            <p className="rightHeading">Added Provinces</p>
            <table>
              <thead>
                <tr>
                  <th>Province</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {provinces.length === 0 ? (
                  <tr>
                    <td colSpan="2" style={{textAlign: 'center', padding: '20px'}}>
                      No provinces added yet
                    </td>
                  </tr>
                ) :
                (provinces.map((p, i) => (
                  <tr key={i}>
                    <td>{formatProvinceName(p)}</td>
                    <td>
                      <button
                        className="deleteBtn"
                        onClick={() => handleDeleteProvince(p)}
                        title="Remove province"
                      ><AiFillDelete color="white" size={18} /></button>
                    </td>
                  </tr>
                ))
              )}
              </tbody>
            </table>
          </Listing>
        </ServiceAreas>
      </ServiceAreasParent>  */}

      {/* Setcharges */}
      <SetChargesParent>
        <p className="heading">Set Charges Per Province</p>
        <SetCharges>
          <LastFormDiv>
            <p className="leftHeading">Add Province-Based Pricing</p>
            <form
              onSubmit={handleSubmit((body) => onSubmit(selecteditem.id, body))}
            >
              <div className="inputFeild">
                <label htmlFor="">Select Province</label>
                <br />
                {errors.zoneId && (
                  <p className="errorMsg">{errors.zoneId.message}</p>
                )}
                <select
                  {...register("zoneId", {
                    required: "Enter Pickup Zone",
                  })}
                >
                  <option value="">Select Pickup Zone</option>
                  {zones.map((zone) => (
                    <option key={zone.zoneId} value={zone.zoneId}>
                      {zone.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputFeild">
                <label htmlFor="">Base Price</label>
                <br />
                {errors.baseFare && (
                  <p className="errorMsg">{errors.baseFare.message}</p>
                )}
                <input
                  type="number"
                  {...register("baseFare", {
                    required: "Base Fare is Required!",
                  })}
                />
              </div>
              <div className="btn">
                <button className="addAgentBtn">Add Pricing</button>
              </div>
            </form>
          </LastFormDiv>

          <LastListing>
            <p className="rightHeading">Current Province-Based Pricing</p>
            <table>
              <thead>
                <tr>
                  <th>Province</th>
                  <th>Base Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allZone.map((zone) => (
                  <tr key={zone.id}>
                    <td>{zone.Zone.name}</td>
                    <td>{zone.baseFare}</td>
                    <td>
                      <div className="btns">
                        <button
                          type="button"
                          className="editBtn"
                          onClick={() => setSelectedItem(zone)}
                        >
                          <FaEdit color="white" size={18} />
                        </button>
                        {/* <button className="deleteBtn" title="Remove province">
                          <AiFillDelete color="white" size={18} />
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <table>
              <thead>
                <tr>
                  <th>Province</th>
                  <th>Base Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pricing.length === 0 ? (
                  <tr>
                    <td colSpan="2" style={{textAlign: 'center', padding: '20px'}}>
                      No Price added yet
                    </td>
                  </tr>
                ) :
                (pricing.map((p, i) => (
                  <tr key={i}>
                    <td>{formatProvinceName(p.province)}</td>
                    <td>{p.price}</td>
                    <td>
                      <div className="btns">
                      <button className="editBtn" onClick={() => handleEditPricing(i)}><FaEdit color="white" size={18} /> </button>
                      <button
                        className="deleteBtn"
                        onClick={() => handleDeletePricing(i)}
                        title="Remove province"
                      ><AiFillDelete color="white" size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
              </tbody>
            </table> */}
          </LastListing>
        </SetCharges>
      </SetChargesParent>
    </Container>
  );
};

export default ZoneManagement;
