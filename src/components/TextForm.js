import React, { useState } from "react";
// console.log(useState("Enter"));

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("Uppercase was clicked!" + text);
    let newText = text.toUpperCase();
    setText(newText);
    if (text.length > 0) {
      props.showAlert("Converted into Uppercase!", "success");
    } else props.showAlert("Please enter some text!", "warning");
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked!" + text);
    let newText = text.toLowerCase();
    setText(newText);
    if (text.length > 0) {
      props.showAlert("Converted into Lowercase!", "success");
    } else props.showAlert("Please enter some text!", "warning");
  };
  const handleClearClick = () => {
    // console.log("Lowercase was clicked!" + text);
    let newText = "";
    setText(newText);
    if (text.length > 0) {
      props.showAlert("Text cleared!", "success");
    } else props.showAlert("Please enter some text!", "warning");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    // if (text.length === 0) {
    //   props.showAlert("Please enter text", "warning");
    // } else props.showAlert("Text copied!", "success");
    text.select();
    navigator.clipboard.writeText(text.value);

    props.showAlert("Text copied!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if (text.length > 0) {
      props.showAlert("Extra spaces removed!", "success");
    } else props.showAlert("Please enter some text!", "warning");
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div
          className="mb-3"
          style={{
            color: props.mode === "light" ? "#042743" : "white",
          }}
        >
          {/* <label for="myBox" class="form-label"></label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#042743",
              color: props.mode === "light" ? "#042743" : "white",
            }}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert into Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert into Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-5"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <h1>Text Summary</h1>
        <p>
          Total lenght is: {text.length} characters
          <br></br>
          Total number of words:
          {text.split(" ").length > 1 ? text.split(" ").length - 1 : 0}
          {/* {text.split(" ").length} */}
        </p>
        <p>{(1 / 150) * text.split(" ").length} Minutes of read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter text in above Box to preview it here."}
        </p>
      </div>
    </>
  );
}
