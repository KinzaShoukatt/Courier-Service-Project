import React, { useState } from "react";
import { Heading, Container } from "./style";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";


const CMSAndSetting = () => {
  const [content, setContent] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "list",
    "bullet",
    "link",
    "image",
  ];

  const handleSave = () => {
    console.log(content); 
  };

  return (
    <>
    <Heading>CMS & Setting</Heading>
    <Container>
      <ReactQuill className="textareaDiv"
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
      />
      <button className="btn"
        onClick={handleSave}>
        Save
      </button>
    </Container>
    </>
  
  )
};

export default CMSAndSetting;
