import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  NavContainer,
  HomeSection,
  AboutContainer,
  AboutSection,
  WhoWeAre,
  Missionvision,
  Services,
  Contact,
  Terms,
  Footer,
} from "./style";

import Logo from "../../assets/images/logo.png";
import CoverImg from "../../assets/images/CoverImg.jpg";
import WhiteLogo from "../../assets/images/LogoWhite.png";

import { FaBullseye } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const LandingPage = () => {
  const navigate = useNavigate();
  function setActive(e) {
    document.querySelectorAll(" ul li a").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  return (
    <>
      <Container>
        <NavContainer>
          <nav className="navBar">
            <div className="logoImg">
              <img src={Logo} alt="" />
            </div>
            <div className="list">
              <ul>
                <li>
                  <a
                    href="#home"
                    className="active"
                    onClick={(e) => setActive(e)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => setActive(e)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => setActive(e)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <button className="login" onClick={() => navigate("/auth/login")}>
              Login
            </button>
          </nav>
        </NavContainer>

        <HomeSection id="home">
          <div className="coverImg">
            <img src={CoverImg} alt="" />
            <div className="text">
              <p className="heading">
                Fast, Reliable & Secure Courier Services
              </p>
              <p className="desc">
                Delivering your packages with care and precision. Anytime,
                anywhere!
              </p>
              <div className="tracking">
                <input type="text" placeholder="Enter Tracking Number" />
                <button>Track</button>
              </div>
              <button className="btn" onClick={() => navigate("/auth/login")}>
                Book A Delivery
              </button>
            </div>
          </div>
        </HomeSection>

        <AboutContainer id="about">
          <AboutSection>
            <p className="aboutHeading">About Us</p>
            <WhoWeAre>
              <div className="whoContainer">
                <p className="heading">Who We Are</p>
                <p className="desc1">
                  DevGo Courier Service has been a trusted name in logistics and
                  delivery services since 2010. We pride ourselves <br /> on our
                  commitment to excellence, reliability, and customer
                  satisfaction.
                </p>
                <p className="desc2">
                  Our team of dedicated professionals ensures that every package
                  is handled with care and delivered on time. With <br /> a
                  network spanning across the country and internationally, we
                  are equipped to meet all your delivery needs.
                </p>
              </div>
            </WhoWeAre>
          </AboutSection>
          <Missionvision>
            <p className="heading">Our Mission & Vision</p>
            <div className="cardparent">
              <div className="card">
                <FaBullseye size={20} color="#006769" />
                <p className="boldText">Our Mission</p>
                <p>
                  To deliver parcels with speed, safety, and trust. We are
                  committed to <br /> providing reliable courier services that
                  meet the highest standards of <br />
                  efficiency and customer satisfaction.
                </p>
              </div>
              <div className="card">
                <FaEye size={20} color="#006769" />
                <p className="boldText">Our Vision</p>
                <p>
                  To become the most reliable courier network in the region,
                  known for <br /> innovation, dependability, and exceptional
                  customer service in the <br /> logistics industry.{" "}
                </p>
              </div>
            </div>
          </Missionvision>
          <Services>
            <p className="heading">Our Services</p>
            <div className="cardparent">
              <div className="card">
                <FaBullseye size={20} color="#006769" />
                <p className="boldText">Express Delivery</p>
                <p>
                  We guarantee fast and timely delivery of <br /> your packages
                  to any destination.
                </p>
              </div>
              <div className="card">
                <FaEye size={20} color="#006769" />
                <p className="boldText">Secure Handling</p>
                <p>
                  Your packages are handled with utmost care <br />
                  and security throughout the journey.r
                </p>
              </div>
            </div>
          </Services>
        </AboutContainer>

        <Contact id="contact">
          <p className="heading">Contact Us</p>
          <p className="contact">
            Have questions or need assistance? Our team is here to help you with
            all your courier service needs.
          </p>
          <div className="mail">
            <div className="icon">
              <MdEmail size={18} color="#006769" />
              <span>Email: </span>
            </div>
            <p>support@devgocourier.com</p>
          </div>
          <div className="address">
            <div className="icon">
              <ImLocation size={18} color="#006769" /> <span>Address: </span>
            </div>
            <p>Officers Colony, Rahim Yar Khan, 64200</p>
          </div>
        </Contact>

        <Terms id="terms">
          <p className="heading">Terms & Conditions</p>
          <div className="parentTerms">
            <div>
              <p className="bold">Service Terms</p>
              <p>
                By using DevGo Courier Service, you agree to our terms and
                conditions. Please read them carefully.
              </p>
            </div>
            <div>
              <p className="bold">Shipping Policies</p>
              <p>
                We are not liable for delays caused by weather, natural
                disasters, or other unforeseen circumstances. Insurance is{" "}
                <br /> available for valuable items.
              </p>
            </div>
            <div>
              <p className="bold">Privacy Policy</p>
              <p>
                We respect your privacy and are committed to protecting your
                personal information. Your data will only be used <br /> for
                shipping and delivery purposes.
              </p>
            </div>
          </div>
        </Terms>

        
        <Footer>
          <div className="FooterContent">
            <div className="logo">
              <img src={WhiteLogo} alt="" />
              <p>
                Fast, reliable, and secure courier <br /> services for all your
                delivery needs.
              </p>
            </div>
            <div className="links">
              <p className="highlight">Quick Links</p>
              <ul>
                <li>
                  <a href="#home" onClick={(e) => setActive(e)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => setActive(e)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => setActive(e)}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#terms" onClick={(e) => setActive(e)}>
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact">
              <p className="highlight">Contact Information</p>
              <div className="contactDetails">
                <p>
                  <MdEmail size={18} color="white" />
                  support@devgocourier.com
                </p>
                <p className="address">
                  <ImLocation size={18} color="white" />
                  Officers Colony, Rahim Yar Khan, 64200
                </p>
              </div>
            </div>
          </div>
          <hr className="hrTag" />
          <p className="lastText">
            © 2023 DevGo Courier Service. All rights reserved.
          </p>
        </Footer>
      </Container>
    </>
  );
};

export default LandingPage;
