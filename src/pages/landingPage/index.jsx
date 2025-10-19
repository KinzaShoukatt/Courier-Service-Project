import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { IoMdCheckmark } from "react-icons/io";

import { FaTruckFast } from "react-icons/fa6";
import { RiTruckFill } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa6";
import UseLandingPage from "./useHooks";

const LandingPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { trackParcels, staticPages } = UseLandingPage();
  const [pagesGet, setPagesGet] = useState([]);
  const [inputTrackingNumber, setInputTrackingNumber] = useState("");

  function setActive(e) {
    document.querySelectorAll(" ul li a").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  }

  const location = useLocation();
  const TrackingNumber = location?.state?.TrackingNumber;
  const ParcelStatus = location?.state?.ParcelStatus;

  const handleTrackParcels = async () => {
    setShow(false);
    const response = await trackParcels(inputTrackingNumber);
    if (response && response.trackingNumber) {
      setShow(true);
    }
  };
  const Statuses = [
    {
      key: "order_placed",
      label: "Order Placed",
      icon: <IoMdCheckmark size={25} />,
    },
    { key: "picked_up", label: "Picked Up", icon: <IoMdCheckmark size={25} /> },
    { key: "in_transit", label: "In Transit", icon: <FaTruckFast size={25} /> },
    {
      key: "out_for_delivery",
      label: "Out for Delivery",
      icon: <RiTruckFill size={25} />,
    },
    { key: "delivered", label: "Delivered", icon: <FaBoxOpen size={25} /> },
  ];

  const fetchStaticPages = async () => {
    const response = await staticPages();
    if (response) {
      const pagesArray = Object.entries(response).map(([slug, data]) => ({
        slug,
        ...data,
      }));
      setPagesGet(pagesArray);
    }
  };
  useEffect(() => {
    fetchStaticPages();
  }, []);

  const aboutPage = pagesGet.find((p) => p.slug === "about-us");
  const contactPage = pagesGet.find((p) => p.slug === "contact-us");
  const termPage = pagesGet.find((p) => p.slug === "terms-and-conditions");

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
                <input
                  className="inp"
                  type="text"
                  placeholder="PK-3ABEC351ECDDC"
                  value={inputTrackingNumber}
                  onChange={(e) => setInputTrackingNumber(e.target.value)}
                />
                <button className="btn" onClick={handleTrackParcels}>
                  Track Package
                </button>
              </div>
              {show && (
                <>
                  <div className="parcelStatus">
                    <div className="status">
                      <p className="left">Parcel Status:</p>
                      <p>{ParcelStatus}</p>
                    </div>
                    <div className="status">
                      <p className="left">Tracking ID:</p>
                      <p>{TrackingNumber}</p>
                    </div>
                  </div>
                  <div className="parentProgressLine">
                    <div className="progressLine">
                      {Statuses.map((status, index) => {
                        const activeIndex = Statuses.findIndex(
                          (s) => s.key === ParcelStatus
                        );
                        let stepClass = "progressStep stepPending";

                        if (index < activeIndex)
                          stepClass = "progressStep stepComplete"; // green completed
                        if (index === activeIndex)
                          stepClass = "progressStep stepActive"; // current step

                        return (
                          <div key={status.key} className={stepClass}>
                            <div className="icon">{status.icon}</div>
                            <p>{status.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
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
                <p className="desc1">{aboutPage?.content?.mainContent || ""}</p>
              </div>
            </WhoWeAre>
          </AboutSection>
          {/* <Missionvision>
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
          </Missionvision> */}
          {/* <Services>
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
          </Services> */}
        </AboutContainer>

        <Contact id="contact">
          <p className="heading">Contact Us</p>
          <p className="contact">{contactPage?.content?.mainContent || ""}</p>
          <div className="mail">
            <div className="icon">
              <MdEmail size={18} color="#006769" />
              <span>Email: </span>
            </div>
            <p>{contactPage?.content?.email || ""}</p>
          </div>
          <div className="address">
            <div className="icon">
              <ImLocation size={18} color="#006769" /> <span>Address: </span>
            </div>
            <p>{contactPage?.content?.address || ""}</p>
          </div>
        </Contact>

        <Terms id="terms">
          <p className="heading">Terms & Conditions</p>
          <div className="parentTerms">
            {termPage?.content?.sections?.map((section, index) => (
              <div>
                <p className="bold">{section.title}</p>
                <p>{section.content}</p>
              </div>
            ))}
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
                  {contactPage?.content?.email || ""}
                </p>
                <p className="address">
                  <ImLocation size={18} color="white" />
                  {contactPage?.content?.address || ""}
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
