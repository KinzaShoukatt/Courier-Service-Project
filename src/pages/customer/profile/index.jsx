import React, { useState } from "react";
import { Container, Heading, Form } from "./style";
import { FiCamera } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
const UserProfile = () => {
  const [image, setImage] = useState();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }
  return (
    <Container>
      <Heading>User Profile</Heading>
      <Form>
        <div className="imgDiv">
          <input type="file" id="fileInput" accept="image/*" style={{display: "none"}} onChange={handleImageChange}/>
          {image && <img src={image} alt="profile" className="profileImg" />}
          <FiCamera className="uploadIcon"
        onClick={() => document.getElementById("fileInput").click()}
      />
        </div>
        <div className="inputFields">
          <FaUserEdit color="#006769" size={18} />
          <input type="name" placeholder="Enter Your Name" />
        </div>
        <div className="inputFields">
          <MdEmail color="#006769" size={18} />
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div className="inputFields">
          <FaPhone color="#006769" size={16} />
          <input type="contact" placeholder="Enter Your Phone Number" />
        </div>
        <div className="inputFields">
          <FaAddressBook color="#006769" size={16} />
          <input type="address" placeholder="Enter Your Adrress" />
        </div>
        <button className="btn">Update Profile</button>
      </Form>
    </Container>
  );
};

export default UserProfile;
