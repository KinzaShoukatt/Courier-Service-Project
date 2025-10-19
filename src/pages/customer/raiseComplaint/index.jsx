import React, { useState } from "react";
import { Heading, Container } from "./style";
import UseCustomer from "../useHooks";
const RaiseComplaint = () => {
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    trackingNumber: "",
  });

  const { raiseComplaint } = UseCustomer();
  const handleRaiseComplaint = async (body) => {
    const payload = {
      subject: formData.subject,
      description: formData.description,
      trackingNumber: formData.trackingNumber,
    };
    await raiseComplaint(payload);
  };
  return (
    <>
      <Heading>Raise Complaint</Heading>
      <Container>
        <div className="subject">
          <p>Subject:</p>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>
        <div className="trackingId">
          <label htmlFor="">Tracking ID:</label>
          <br />
          <input
            type="text"
            placeholder="Enter Tracking ID of Parcel"
            value={formData.trackingNumber}
            onChange={(e) =>
              setFormData({ ...formData, trackingNumber: e.target.value })
            }
          />
        </div>
        <div className="description">
          <p>Description:</p>
          <textarea
            name=""
            id=""
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
        </div>

        <button className="submitBtn" onClick={() => handleRaiseComplaint()}>
          Submit
        </button>
      </Container>
    </>
  );
};

export default RaiseComplaint;
