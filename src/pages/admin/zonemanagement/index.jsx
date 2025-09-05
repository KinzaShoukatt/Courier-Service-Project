import React, { useState } from "react";
import {
  Container,
  ServiceAreasParent,
  ServiceAreas,
  FormDiv,
  Listing,
  SetChargesParent,
  SetCharges,
  LastFormDiv,
  LastListing

} from "./style";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
const ZoneManagement = () => {
  // provinces States
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("punjab");

  //pricing States
  const [pricing, setPricing] = useState([]);
  const [selectedPricingProvince, setSelectedPricingProvince] = useState("punjab");
  const [price, setPrice] = useState("");

  //editMode States
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddProvince = (e) => {
    e.preventDefault();
    if (provinces.includes(selectedProvince)) {
      alert('This province has already been added.');
      return;
    }

    setProvinces([...provinces, selectedProvince]);
  };

  const handleDeleteProvince = (province) => {
    // Remove the province from the list
    setProvinces(provinces.filter((p) => p !== province));
  };

  const handleAddPricing = (e) => {
    e.preventDefault();
    if(!price){
      alert("Please Enter the base Price");
      return
    }

    if(editMode) {
      const updated = [...pricing];
      updated[editIndex] = {
        provine: selectedPricingProvince, price,
      };
      setPricing(updated);
      setEditMode(false);
  setEditIndex(null);
    }
    else{
      const newEntry = {province: selectedPricingProvince, price};
  setPricing([...pricing, newEntry]);
    }
  setPrice("");
  };

  const handleDeletePricing = (index) => {
    // Remove the province from the list
    setPricing(pricing.filter((_, i) => i !== index));
  };

  const handleEditPricing = (index) => {
    const item = pricing[index];
    // Remove the province from the list
    setSelectedPricingProvince(item.province);;
    setPrice(item.price);
    setEditMode(true);
    setEditIndex(index);
  };

  const formatProvinceName = (province) => {
    // Convert province value to formatted name
    switch (province) {
      case "punjab":
        return "Punjab";
      case "sindh":
        return "Sindh";
      case "balochistan":
        return "Balochistan";
      case "khyberPakhtunkhwa":
        return "Khyber Pakhtunkhwa";
      default:
        return province;
    }
  };

  return (
    <Container>
      <p className="mainHeading">Zone Management</p>
      <ServiceAreasParent>
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
      </ServiceAreasParent>
      {/* Setcharges */}
      <SetChargesParent>
        <p className="heading">Set Charges Per Province</p>
        <SetCharges>
          <LastFormDiv>
            <p className="leftHeading">Add Province-Based Pricing</p>
            <form onSubmit={handleAddPricing}>
              <div className="inputFeild">
                <label htmlFor="">Select Province</label>
                <br />
                <select
                  name="zone"
                  id="zone"
                  value={selectedPricingProvince}
                  onChange={(e) => setSelectedPricingProvince(e.target.value)}
                >
                  <option value="punjab">
                    Punjab
                  </option>
                  <option value="sindh">Sindh</option>
                  <option value="balochistan">Balochistan</option>
                  <option value="khyberPakhtunkhwa">Khyber Pakhtunkhwa</option>
                </select>
              </div>
              <div className="inputFeild">
                <label htmlFor="">Base Price</label>
                <br />
                
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div className="btn">
                <button className="addAgentBtn">
                  Add Pricing
                </button>
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
            </table>
          </LastListing>
        </SetCharges>
      </SetChargesParent>
    </Container>
  );
};

export default ZoneManagement;
