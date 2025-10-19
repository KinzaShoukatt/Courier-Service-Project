import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Container, ImgDiv, Heading, Para, Form, LastText } from "./style";
import LogoImg from "../../assets/images/logo.png";
import UseAuth from "../useHook";
import { showError, showSuccess } from "../../utils/toast";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const { verifyOtp, resendOtp } = UseAuth();
  const location = useLocation();
  const email = location.state?.email;
  const type = location.state?.type;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const inputsRef = useRef([]);

  const [time, setTime] = useState(60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  const onSubmit = async (data) => {
    const otp = Object.values(data).join("");
    console.log("otp: ", otp);
    console.log("type: ", type);
    await verifyOtp({ otp, type, email });
  };

  const handleKeyUp = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
    if (e.key === "Backspace" && value === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleResend = async () => {
    try {
      const response = await resendOtp({ email, type: "resend_otp" });
      if (response?.message.includes("sent")) {
        showSuccess(response.message || "OTP resent successfully!");
        reset();
        inputsRef.current[0]?.focus();
        setTime(60);
        setIsActive(true);
      } else {
        showError(
          response?.message || "Failed to resend OTP, please try again"
        );
      }
    } catch (error) {
      showError("Something Went wrong, please try again later!");
    }
  };

  return (
    <Container>
      <ImgDiv>
        <img src={LogoImg} alt="logo" />
      </ImgDiv>
      <Heading>Enter OTP Here!</Heading>
      <Para>
        We Sent an OTP to Your Email <br /> <strong>{email}</strong>
      </Para>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputFields">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              className="box"
              type="text"
              maxLength="1"
              {...register(`digit${i + 1}`, {
                required: "Kindly Enter OTP",
                pattern: { value: /^[0-9]$/, message: "Only digits allowed" },
              })}
              ref={(el) => {
                register(`digit${i + 1}`).ref(el);
                inputsRef.current[i] = el;
              }}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              onKeyUp={(e) => handleKeyUp(e, i)}
            />
          ))}
        </div>

        {Object.values(errors).length > 0 && (
          <p className="errorMsg">{Object.values(errors)[0].message}</p>
        )}

        <p className="time">00 : {time < 10 ? `0${time}` : time}</p>
        <button
          type="button"
          className="btn"
          onClick={handleResend}
          disabled={time > 0}
          style={{
            opacity: time > 0 ? 0.5 : 1,
            cursor: time > 0 ? "not-allowed" : "pointer",
          }}
        >
          Resend OTP
        </button>
        <button type="submit" className="btn">
          Continue
        </button>
        <LastText>
          <p>
            Go Back to
            <strong onClick={() => navigate("/auth/login")}>Login</strong>
          </p>
        </LastText>
      </Form>
    </Container>
  );
};

export default VerifyOtp;
