import styled from "styled-components";

export const Heading = styled.p`
  color: var(--dark-teal);
  font-family: "semibold";
  font-size: 27px;
`;

export const Container = styled.div``;

export const AboutSectionParent = styled.div`
  /* width: 100%; */
  min-height: 50vh;
  background-color: var(--secColor);
  font-family: "regular";
  color: var(--dark-teal);
  display: flex;
  flex-direction: column;
  margin-block: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  .aboutHeading {
    background-color: var(--dark-teal);
    color: var(--secColor);
    font-family: "semibold";
    font-size: 20px;
    padding: 15px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  form {
    padding: 15px;
    min-height: 100%;
    label {
      font-weight: bold;
      font-size: 18px;
    }
    .aboutdesc {
      min-width: 100%;
      box-sizing: border-box;
      min-height: 30vh;
      border-radius: 5px;
      padding: 5px;
      font-family: "regular";
    }
    .aboutdesc:focus {
      outline: 1px solid #454545ff;
      border: none;
    }
  }
  .aboutBtn {
    button {
      background-color: var(--dark-teal);
      color: var(--secColor);
      padding: 10px 15px;
      cursor: pointer;
      border: none;
      font-family: "regular";
      font-weight: bold;
      border-radius: 8px;
      align-self: flex-end;
    }
  }
`;

export const ContactSectionParent = styled.div`
  /* width: 100%; */
  min-height: 50vh;
  background-color: var(--secColor);
  font-family: "regular";
  color: var(--dark-teal);
  display: flex;
  flex-direction: column;
  margin-block: 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  .contactHeading {
    background-color: var(--dark-teal);
    color: var(--secColor);
    font-family: "semibold";
    font-size: 20px;
    padding: 15px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  form {
    padding: 15px;
    min-height: 100%;
    font-family: "regular";
    label {
      font-weight: bold;
      font-size: 18px;
    }
    .contactdesc {
      min-width: 100%;
      box-sizing: border-box;
      min-height: 20vh;
      padding: 5px;
      border-radius: 5px;
      font-family: "regular";
    }
    .contactdesc:focus {
      outline: 1.8px solid #454545ff;
      border: none;
    }
    .inputFields {
      box-sizing: border-box;
      font-family: "regular";
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding-block: 10px;
      @media (max-width: 480px) {
        gap: 7px;
      }
      .childs {
        flex: 1;
        min-width: 200px;
        label {
          font-size: 18px;
          color: var(--dark-teal);
        }
        input {
          box-sizing: border-box;
          width: 100%;
          font-family: "regular";
          font-size: 15px;
          border-radius: 5px;
          padding: 13px 10px;
          margin-block: 10px;
          border: 1px solid #787777ff;
        }
        input:focus {
          outline: #656565ff;
        }

        @media (max-width: 480px) {
          margin-block: 2px;
        }
      }
    }
  }
  .aboutBtn {
    button {
      background-color: var(--dark-teal);
      color: var(--secColor);
      padding: 10px 15px;
      cursor: pointer;
      border: none;
      font-family: "regular";
      font-weight: bold;
      border-radius: 8px;
      align-self: flex-end;
    }
  }
`;
export const TermsSectionParent = styled.div`
  /* width: 100%; */
  min-height: 50vh;
  background-color: var(--secColor);
  font-family: "regular";
  color: var(--dark-teal);
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  .contactHeading {
    background-color: var(--dark-teal);
    color: var(--secColor);
    font-family: "semibold";
    font-size: 20px;
    padding: 15px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .addBtn {
      background-color: var(--secColor);
      border: none;
      font-family: "regular";
      font-weight: bold;
      padding: 7px 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  form {
    padding: 15px;
    min-height: 100%;
    label {
      font-weight: bold;
      font-size: 18px;
    }
    .termsHeading {
      min-width: 100%;
      box-sizing: border-box;
      padding-block: 13px;
      padding-inline: 5px;
      border-radius: 5px;
      font-family: "regular";
      border: 1px solid #787777ff;
    }
    .termsHeading:focus {
      outline: #656565ff;
    }
    .termsdesc {
      min-width: 100%;
      box-sizing: border-box;
      min-height: 10vh;
      border-radius: 5px;
      padding: 5px;
      font-family: "regular";
    }
    .termsdesc:focus {
      outline: 1.8px solid #454545ff;
      border: none;
    }
  }
  .termBtn {
    display: flex;
    gap: 5px;
    margin-bottom: 25px;
    .updateBtn {
      background-color: var(--dark-teal);
      color: var(--secColor);
      padding: 10px 15px;
      cursor: pointer;
      border: none;
      font-family: "regular";
      font-weight: bold;
      border-radius: 8px;
      align-self: flex-end;
    }
    .deleteBtn {
      background-color: #dc3545;
      color: var(--secColor);
      padding: 10px 15px;
      cursor: pointer;
      border: none;
      font-family: "regular";
      font-weight: bold;
      border-radius: 8px;
      align-self: flex-end;
    }
  }
`;

export const Form = styled.form`
  padding: 15px;
  min-height: 100%;
  .errorMsg {
    color: red;
  }
  label {
    font-weight: bold;
    font-size: 18px;
  }
  .termsHeading {
    min-width: 100%;
    padding-block: 13px;
    box-sizing: border-box;
    border: 1px solid #787777ff;
  }
  .termsHeading:focus {
    outline: #656565ff;
  }
  .termsdesc {
    min-width: 100%;
    box-sizing: border-box;
    outline-color: black;
    outline-width: 0.2px;
    min-height: 10vh;
  }
  .termsdesc:focus {
    outline: 1.8px solid #454545ff;
    border: none;
  }
  .inputFields {
    box-sizing: border-box;
    font-family: "regular";
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-block: 10px;
    @media (max-width: 480px) {
      gap: 7px;
    }
    .childs {
      flex: 1;
      min-width: 200px;
      label {
        font-size: 18px;
        color: var(--dark-teal);
      }
      input {
        box-sizing: border-box;
        width: 100%;
        border: 1px solid var(--borderColor);
        font-family: "regular";
        font-size: 15px;
        border-radius: 5px;
        padding: 13px 10px;
        outline-color: var(--borderColor);
        /* margin-block: 10px; */
        @media (max-width: 480px) {
          margin-block: 2px;
        }
      }
    }
  }

  .addBtn {
    background-color: var(--dark-teal);
    color: var(--secColor);
    padding: 10px 15px;
    cursor: pointer;
    border: none;
    font-family: "regular";
    font-weight: bold;
    border-radius: 8px;
    align-self: flex-end;
  }
`;
