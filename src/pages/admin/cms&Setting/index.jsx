import React, { useEffect, useState } from "react";
import {
  Heading,
  Container,
  AboutSectionParent,
  ContactSectionParent,
  TermsSectionParent,
  Form,
} from "./style";
import "react-quill-new/dist/quill.snow.css";
import UseAdmin from "../useHooks";
import { useForm } from "react-hook-form";

const CMSAndSetting = () => {
  const [pagesGet, setPagesGet] = useState([]);
  const [show, setShow] = useState(false);
  const {
    staticPages,
    updateAboutPage,
    updateContactPage,
    updateTermsPage,
    deleteTerms,
    addterm,
  } = UseAdmin();

  const {
    register: registerAbout,
    handleSubmit: handleSubmitAbout,
    reset: resetAbout,

    formState: { errors: errorsAbout },
  } = useForm();

  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    reset: resetContact,
    formState: { errors: errorsContact },
  } = useForm();

  const {
    register: registerTerms,
    handleSubmit: handleSubmitTerms,
    reset: resetTerms,
    getValues: getValues,
    formState: { errors: errorsTerms },
  } = useForm();

  const {
    register: registerNewTerms,
    handleSubmit: handleSubmitNewTerms,
    reset: resetNewTerms,
    formState: { errors: errorsNewTerms },
  } = useForm();

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

  const handleUpdateAboutPage = async (body) => {
    const payload = {
      id: aboutPage.id,
      title: aboutPage.title,
      content: {
        mainContent: body.mainContent,
      },
    };
    await updateAboutPage(payload);
  };

  const handleUpdateContactPage = async (body) => {
    const payload = {
      id: contactPage.id,
      title: contactPage.title,
      content: {
        email: body.email || contactPage.email,
        address: body.address || contactPage.address,
        mainContent: body.mainContent || contactPage.mainContent,
      },
    };
    await updateContactPage(payload);
  };
  console.log(termPage, "termPage");

  const handleUpdateTermsPage = async (index, id) => {
    const sectionData = getValues(`sections[${index}]`);
    console.log({ id, ...sectionData });
    await updateTermsPage(id, sectionData);
  };

  const handleDeleteTerms = async (id) => {
    await deleteTerms(id);
    // fetchStaticPages();
  };

  const handleAddterm = async (body) => {
    await addterm(body);
    fetchStaticPages();
    setShow(false);
    resetNewTerms();
  };
  return (
    <>
      <Heading>CMS & Setting</Heading>

      <Container>
        <AboutSectionParent>
          <p className="aboutHeading">About Page</p>
          <form onSubmit={handleSubmitAbout(handleUpdateAboutPage)}>
            <div className="aboutContent">
              <label htmlFor="">Description:</label>
              <textarea
                className="aboutdesc"
                name=""
                defaultValue={aboutPage?.content?.mainContent || ""}
                id=""
                {...registerAbout("mainContent", {
                  required: "Content is  Required!",
                })}
              ></textarea>
            </div>
            <div className="aboutBtn">
              <button type="submit">Update</button>
            </div>
          </form>
        </AboutSectionParent>

        <ContactSectionParent>
          <p className="contactHeading">Contact Page</p>
          <form onSubmit={handleSubmitContact(handleUpdateContactPage)}>
            <div className="contactContent">
              <label htmlFor="">Description:</label>
              <textarea
                defaultValue={contactPage?.content?.mainContent || ""}
                className="contactdesc"
                {...registerContact("mainContent", {
                  required: "Content is  Required!",
                })}
              ></textarea>
            </div>
            <div className="inputFields">
              <div className="childs">
                <label htmlFor="">Email</label>
                <br />
                {errorsContact.email && (
                  <p className="errorMsg">{errorsContact.email.message}</p>
                )}
                <input
                  type="email"
                  defaultValue={contactPage?.content?.email || ""}
                  {...registerContact("email", {})}
                />
              </div>
              <div className="childs">
                <label htmlFor="">Address </label>
                <br />
                {errorsContact.address && (
                  <p className="errorMsg">{errorsContact.address.message}</p>
                )}
                <input
                  defaultValue={contactPage?.content?.address || ""}
                  {...registerContact("address", {})}
                />
              </div>
            </div>
            <div className="aboutBtn">
              <button type="submit">Update</button>
            </div>
          </form>
        </ContactSectionParent>

        <TermsSectionParent>
          <div className="contactHeading">
            <p>Terms & Conditions Page</p>
            <button className="addBtn" onClick={() => setShow(true)}>
              Add term
            </button>
          </div>
          {show && (
            <Form onSubmit={handleSubmitNewTerms(handleAddterm)}>
              <>
                <div className="contactContent">
                  <label>Title:</label>
                  {errorsNewTerms.title && (
                    <p className="errorMsg">{errorsNewTerms.title.message}</p>
                  )}
                  <input
                    type="text"
                    className="termsHeading"
                    {...registerNewTerms(`title`, {
                      required: "Title is required!",
                      message: "Title is Required!",
                    })}
                  />

                  <p className="errorMsg"></p>

                  <label>Description:</label>
                  {errorsNewTerms.content && (
                    <p className="errorMsg">{errorsNewTerms.content.message}</p>
                  )}
                  <textarea
                    className="termsdesc"
                    {...registerNewTerms(`content`, {
                      required: "Description is required!",
                      message: "Description is Required!",
                    })}
                  ></textarea>

                  <p className="errorMsg"></p>
                </div>
                <button type="submit" className="addBtn">
                  Add Term
                </button>
              </>
            </Form>
          )}

          <form onSubmit={handleSubmitTerms(handleUpdateTermsPage)}>
            {termPage?.content?.sections?.map((section, index) => (
              <>
                <div key={section.id} className="termSection">
                  <div className="contactContent">
                    <label htmlFor={`title-${index}`}>Title</label>
                    <input
                      type="text"
                      className="termsHeading"
                      id={`title-${index}`}
                      defaultValue={section.title}
                      {...registerTerms(`sections[${index}].title`, {
                        required: "Title is required!",
                      })}
                    />
                    {errorsTerms.sections?.[index]?.title && (
                      <p className="errorMsg">
                        {errorsTerms.sections[index].title.message}
                      </p>
                    )}

                    <label htmlFor={`desc-${index}`}>Description:</label>
                    <textarea
                      id={`desc-${index}`}
                      className="termsdesc"
                      defaultValue={section.content}
                      {...registerTerms(`sections[${index}].content`, {
                        required: "Description is required!",
                      })}
                    ></textarea>
                    {errorsTerms.sections?.[index]?.content && (
                      <p className="errorMsg">
                        {errorsTerms.sections[index].content.message}
                      </p>
                    )}
                  </div>
                  <div className="termBtn">
                    <button
                      type="button"
                      onClick={() => handleUpdateTermsPage(index, section.id)}
                      className="updateBtn"
                    >
                      Update
                    </button>
                    <button
                      className="deleteBtn"
                      type="button"
                      onClick={() => handleDeleteTerms(section.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            ))}
          </form>
        </TermsSectionParent>
      </Container>
    </>
  );
};

export default CMSAndSetting;
