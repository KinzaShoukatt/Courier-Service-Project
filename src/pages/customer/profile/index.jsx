import React, { useEffect, useState } from "react";
import { Container, Heading, Form } from "./style";
import { FiCamera } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { useForm } from "react-hook-form";
import UseCustomer from "../useHooks";
import { useDispatch } from "react-redux";
import { setProfilePic, setUserName } from "../../../store/userSlice";

const UserProfile = () => {
  const [image, setImage] = useState();
  const [selectedFile, setSelectedFile] = useState();

  const dispatch = useDispatch();

  const {
    getCustomerProfile,
    updateCustomerProfile,
    getCustomerProfilePicture,
  } = UseCustomer();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
  });

  const BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  // const fetchProfilePic = async () => {
  //   const data = await getCustomerProfilePicture();

  //   if (data?.url) {
  //     const fullUrl = `${BASE_URL}${data.url}`;
  //     setImage(fullUrl);
  //     dispatch(setProfilePic(fullUrl));
  //   } else {
  //     const name = localStorage.getItem("UserName");
  //     if (name) dispatch(setUserName(name));
  //   }
  // };

  // useEffect(() => {
  //   fetchProfilePic();
  // }, []);

  useEffect(() => {
    const getProfile = async () => {
      const data = await getCustomerProfile();
      if (data) {
        reset({
          fullName: data.fullName || "",
          email: data.email || "",
          phoneNumber: data.phoneNumber || "",
          address: data.address || "",
        });
        if (data.ProfilePictures?.length > 0) {
          const fullUrl = `${BASE_URL}${data.ProfilePictures[0].url}`;
          setImage(fullUrl);
          dispatch(setProfilePic(fullUrl));
        }
      }
    };
    getProfile();
  }, [reset, dispatch]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);
    const objectUrl = URL.createObjectURL(file);
    setImage(objectUrl);
    dispatch(setProfilePic(objectUrl));
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("address", data.address);

    if (selectedFile) {
      formData.append("profilePicture", selectedFile);
    }

    await updateCustomerProfile(formData);

    // update Redux after successful update
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      dispatch(setProfilePic(objectUrl));
    }
    dispatch(setUserName(data.fullName));
  };

  return (
    <Container>
      <Heading>User Profile</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="imgDiv">
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          {image && <img src={image} alt="profile" className="profileImg" />}
          <FiCamera
            className="uploadIcon"
            onClick={() => document.getElementById("fileInput").click()}
          />
        </div>

        {errors.fullName && (
          <p className="errorMsg">{errors.fullName.message}</p>
        )}
        <div className="inputFields">
          <FaUserEdit color="#006769" size={18} />
          <input
            type="name"
            placeholder="Enter Your Name"
            {...register("fullName", {
              required: "Name is Required!",
              minLength: {
                value: 3,
                message: "Name should be at least three characters",
              },
            })}
          />
        </div>

        {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        <div className="inputFields">
          <MdEmail color="#006769" size={18} />
          <input
            type="email"
            disabled
            placeholder="Enter Your Email"
            {...register("email", { required: "Email is Required!" })}
          />
        </div>

        {errors.phoneNumber && (
          <p className="errorMsg">{errors.phoneNumber.message}</p>
        )}
        <div className="inputFields">
          <FaPhone color="#006769" size={16} />
          <input
            type="contact"
            placeholder="Enter Your Phone Number"
            {...register("phoneNumber", {
              required: "Phone Number is Required!",
            })}
          />
        </div>

        {errors.address && <p className="errorMsg">{errors.address.message}</p>}
        <div className="inputFields">
          <FaAddressBook color="#006769" size={16} />
          <input
            type="address"
            placeholder="Enter Your Address"
            {...register("address")}
          />
        </div>

        <button type="submit" className="btn">
          Update Profile
        </button>
      </Form>
    </Container>
  );
};

export default UserProfile;
