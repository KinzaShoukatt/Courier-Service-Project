import React from "react";
import { Heading, Container } from "./style";
const RaiseComplaint = () => {
  
  return (
    <>
      <Heading>Raise Complaint</Heading>
      <Container>
        <div className="subject">
          <p>Subject:</p>
          <input type="text" />
        </div>
        <div className="description">
            <p>Description:</p>
            <textarea name="" id=""></textarea>
        </div>
        <div className="trackingId">
          <label htmlFor="">Tracking ID:</label><br />
          <input type="text" placeholder="Enter Tracking ID of Parcel"/>
        </div>
        <button className="submitBtn">Submit</button>
      </Container>
    </>
  );
};

export default RaiseComplaint;
