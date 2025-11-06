import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  scroll-behavior: smooth;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;
export const NavContainer = styled.div`
  box-sizing: border-box;

  .navBar {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 2px 30px;
    font-family: "semibold";
    background-color: var(--secColor);
    color: var(--dark-teal);
    align-items: center;
    position: fixed;
    top: 0%;
    z-index: 3;
    width: 100%;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid var(--dark-teal);
    @media (max-width: 480px) {
      padding: 2px 10px;
    }
    .logoImg {
      width: 75px;
      height: 60px;
      @media (max-width: 480px) {
        width: 50px;
        height: 45px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .list {
      ul {
        display: flex;
        gap: 70px;
        list-style: none;
        font-family: "regular";
        font-weight: bold;
        @media (max-width: 480px) {
          gap: 20px;
        }
        li {
          @media (max-width: 480px) {
            font-size: 12px;
          }
          a {
            text-decoration: none;
            color: var(--dark-teal);
          }
          a.active {
            color: #005757;
            border-bottom: 2px solid var(--dark-teal);
            padding-bottom: 2px;
          }
        }
      }
    }

    .login {
      background-color: var(--dark-teal);
      color: var(--secColor);
      border: none;
      padding: 8px 17px;
      font-family: "regular";
      border-radius: 5px;
      cursor: pointer;
      @media (max-width: 480px) {
        padding: 5px 10px;
      }
    }
  }
`;

export const HomeSection = styled.div`
  box-sizing: border-box;
  /* border: 2px solid red; */
  box-sizing: border-box;
  scroll-margin-top: 60px;
  margin-top: 5vh;
  .coverImg {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
  }

  .coverImg img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .coverImg::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(8, 134, 134, 0.5);
    z-index: 1;
  }

  .text {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    /* max-width: 800px; */
    line-height: 1.8;
    padding-inline: 30px;
  }

  .heading {
    font-family: "semibold";
    font-size: 28px;
    font-weight: bolder;
    color: var(--secColor);
    @media (max-width: 640px) {
      font-size: 25px;
    }
    @media (max-width: 640px) {
      font-size: 23px;
    }
  }
  .desc {
    font-family: "regular";
    font-size: 17px;
    color: var(--secColor);
    @media (max-width: 640px) {
      font-size: 15.5px;
    }
    @media (max-width: 540px) {
      font-size: 15px;
    }
  }
  .tracking {
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    padding-inline-start: 10px;
    padding-inline-end: 5px;
    width: fit-content;
    align-items: center;
    gap: 10px;
    margin-block: 20px;
    background-color: white;
    margin-inline: auto;
    @media (max-width: 768px) {
      margin-block: 10px;
    }
    @media (max-width: 450px) {
      padding-inline-start: 5px;
      width: 80vw;
    }
    input {
      font-size: 16px;
      border: none;
      min-width: 140px;
      font-family: "regular";
      outline: none;
      @media (max-width: 640px) {
        font-size: 15px;
      }
      @media (max-width: 540px) {
        font-size: 14px;
      }
      @media (max-width: 450px) {
        font-size: 12px;
      }
    }
    button {
      border: none;
      padding: 8px 15px;
      color: var(--secColor);
      font-size: 16px;
      cursor: pointer;
      font-family: "regular";
      background-color: rgba(3, 63, 63, 1);
      border-radius: 5px;
      margin-block: 5px;
      white-space: nowrap;
      @media (max-width: 640px) {
        font-size: 15px;
      }
      @media (max-width: 540px) {
        font-size: 14px;
        margin-block: 4px;
        padding: 8px 12px;
      }
      @media (max-width: 450px) {
        font-size: 12px;
        padding: 8px 5px;
      }
    }
  }
  .parcelStatus {
    margin-top: 30px;
    padding-block: 15px;
    padding-inline: 10px;
    display: flex;
    justify-content: space-between;
    background-color: var(--priColor);
    border-radius: 5px;
    font-family: "regular";
    @media (max-width: 768px) {
      display: block;
      margin-top: 10px;
    }
    @media (max-width: 450px) {
      display: block;
      margin-top: 10px;
    }
    .status {
      display: flex;
      gap: 10px;
      text-transform: capitalize;
      font-family: "regular";
      color: var(--dark-teal);
      @media (max-width: 565px) {
        font-size: 14px;
      }
      @media (max-width: 510px) {
        font-size: 13px;
        gap: 5px;
      }
      .left {
        font-weight: bold;
        color: black;
      }
    }
  }
  .parentProgressLine {
    position: relative;
    z-index: 1;
    font-family: "regular";
    .progressLine {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin: 30px 0;
      z-index: 2;
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;
        margin-left: 20px;
      }
    }
    .progressLine::before {
      content: "";
      position: absolute;
      top: 15px;
      left: 0;
      right: 0;
      height: 4px;
      border-radius: 4px;
      background-color: var(--borderColor);
      z-index: 1;
      @media (max-width: 768px) {
        width: 4px;
        height: 105%;
        top: -10px;
        left: 20px;
      }
    }
    .progressStep {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 2;
      @media (max-width: 768px) {
        flex-direction: row;
        gap: 15px;
      }
      .icon {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-color: var(--secColor);
        border: 4px solid var(--borderColor);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
      }
    }
    .progressStep.stepComplete .icon {
      border-color: green;
      background-color: green;
      color: white;
    }
    .progressStep.stepComplete p {
      color: green;
      font-weight: 600;
    }
    .progressStep.stepActive .icon {
      border-color: green;
      background-color: green;
      color: white;
    }
    .progressStep.stepActive p {
      color: green;
      font-weight: 600;
    }
  }
  .btn {
    background-color: rgba(3, 63, 63, 1);
    color: var(--secColor);
    padding: 10px 17px;
    border: none;
    font-family: "regular";
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    @media (max-width: 640px) {
      font-size: 15px;
      padding: 10px 15px;
    }
    @media (max-width: 540px) {
      font-size: 14px;
      padding: 10px 13px;
    }
    @media (max-width: 450px) {
      font-size: 12px;
      padding: 9px 12px;
    }
  }
`;

export const AboutContainer = styled.div`
  box-sizing: border-box;
  scroll-margin-top: 60px;
`;
export const AboutSection = styled.div`
  font-family: "regular";
  padding-inline: 20px;
  padding-block: 30px;
  background-color: var(--secColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .aboutHeading {
    color: var(--dark-teal);
    font-family: "semibold";
    font-size: 25px;
    border-bottom: 2px solid var(--dark-teal);
    padding-bottom: 10px;
    @media (max-width: 600px) {
      font-size: 22px;
    }
  }
`;
export const WhoWeAre = styled.div`
  display: flex;
  justify-content: center;
  .whoContainer {
    padding-inline: 20px;
    padding-block: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .desc1,
  .desc2 {
    line-height: 2;
    margin-block: 8px;
  }
`;

// export const Missionvision = styled.div`
//   padding-inline: 20px;
//   padding-block: 30px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   .heading {
//     color: var(--dark-teal);
//     font-family: "semibold";
//     font-size: 25px;
//     border-bottom: 2px solid var(--dark-teal);
//     padding-bottom: 10px;
//   }
//   .cardparent {
//     display: flex;
//     justify-content: center;
//     gap: 20px;
//     margin-block: 30px;
//     @media (max-width: 480px) {
//       flex-wrap: wrap;
//     }

//     .card {
//       background-color: var(--secColor);
//       padding-block: 30px;
//       padding-inline: 25px;
//       line-height: 1.6;
//       font-family: "regular";
//       border-radius: 10px;
//       font-size: 15px;
//       color: #444444;
//       box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
//       .boldText {
//         color: var(--dark-teal);
//         font-family: "semibold";
//         font-size: 20px;
//         padding-block: 8px;
//       }
//     }
//   }
// `;

// export const Services = styled.div`
//   padding-inline: 20px;
//   padding-block: 30px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   background-color: var(--secColor);
//   .heading {
//     color: var(--dark-teal);
//     font-family: "semibold";
//     font-size: 25px;
//     border-bottom: 2px solid var(--dark-teal);
//     padding-bottom: 10px;
//   }
//   .cardparent {
//     display: flex;
//     justify-content: center;
//     gap: 20px;
//     margin-block: 30px;
//     @media (max-width: 480px) {
//       flex-wrap: wrap;
//     }

//     .card {
//       background-color: var(--priColor);
//       padding-block: 30px;
//       padding-inline: 25px;
//       line-height: 1.6;
//       font-family: "regular";
//       border-radius: 10px;
//       font-size: 15px;
//       color: #444444;
//       transition: all 0.6s;
//       .boldText {
//         color: var(--dark-teal);
//         font-family: "semibold";
//         font-size: 20px;
//         padding-block: 8px;
//       }
//       &:hover {
//         transform: translateY(-5px);
//         box-shadow: 0 2px 6px rgba(36, 36, 36, 0.3);
//       }
//     }
//   }
// `;

export const Contact = styled.div`
  padding-block: 30px;
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--secColor);
  font-family: "regular";
  scroll-margin-top: 60px;
  .heading {
    color: var(--dark-teal);
    font-family: "semibold";
    font-size: 30px;
    border-bottom: 2px solid var(--dark-teal);
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
  .contact {
    padding-top: 40px;
    padding-bottom: 25px;
    color: var(--dark-teal);
  }
  .mail,
  .address {
    display: flex;
    gap: 5px;
    color: #444444;
    line-height: 2;
    @media (max-width: 480px) {
      gap: 2px;
      font-size: 15px;
    }
    @media (max-width: 424px) {
      flex-direction: column;
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3px;
      span {
        font-weight: bold;
        color: black;
      }
    }
  }
`;

export const Terms = styled.div`
  padding-block: 50px;
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secColor);
  font-family: "regular";
  scroll-margin-top: 60px;

  .heading {
    color: var(--dark-teal);
    font-family: "semibold";
    font-size: 30px;
    border-bottom: 2px solid var(--dark-teal);
    @media (max-width: 600px) {
      font-size: 22px;
    }
  }
  .parentTerms {
    padding-top: 40px;
    div {
      margin-block: 25px;
      line-height: 1.8;
      color: #444444;
      .bold {
        color: black;
        font-family: "semibold";
        font-size: 18px;
        @media (max-width: 600px) {
          font-size: 17px;
        }
      }
    }
  }
`;

export const Footer = styled.div`
  padding-block: 30px;
  background-color: var(--dark-teal);
  font-family: "regular";
  padding-inline: 50px;
  color: #e3e0e0ff;

  @media (max-width: 780px) {
    padding-inline: 20px;
    gap: 30px;
  }
  @media (max-width: 420px) {
    padding-inline: 10px;
  }

  .FooterContent {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    @media (max-width: 600px) {
      flex-direction: column;
      /* gap: 10px; */
    }
    .logo {
      img {
        height: 60px;
        width: 60px;
      }
      .firstText {
        @media (max-width: 420px) {
          font-size: 15px;
        }
      }
    }
    .links {
      .highlight {
        font-family: "semibold";
        font-size: 18px;
        color: var(--secColor);
        @media (max-width: 420px) {
          font-size: 16px;
        }
      }
      ul {
        list-style: none;
        padding-top: 15px;
        @media (max-width: 420px) {
          padding-top: 7px;
        }
        li {
          line-height: 1.8;
          a {
            text-decoration: none;
            color: #e3e0e0ff;
            @media (max-width: 420px) {
              font-size: 15px;
            }
          }

          a.active {
            border-bottom: 1.5px solid var(--secColor);
          }
        }
      }
    }
    .contact {
      .highlight {
        font-family: "semibold";
        font-size: 18px;
        color: var(--secColor);
        @media (max-width: 420px) {
          font-size: 16px;
        }
      }
      .contactDetails {
        padding-block: 15px;
        line-height: 2;
        @media (max-width: 420px) {
          padding-top: 7px;
        }

        .mail,
        .address {
          display: flex;
          gap: 5px;
          line-height: 2;
          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3px;
          }

          @media (max-width: 480px) {
            gap: 2px;
            font-size: 15px;
          }
          @media (max-width: 350px) {
            flex-direction: column;
            text-align: center;
          }
        }
      }
    }
  }
  .hrTag {
    margin-top: 20px;
    border: none;
    height: 0.5px;
    background-color: var(--secColor);
  }
  .lastText {
    text-align: center;
    padding-top: 15px;
    @media (max-width: 420px) {
      font-size: 15px;
    }
  }
`;
