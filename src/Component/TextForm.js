import React , {useState} from "react";

export default function TextForm(props) {
  const[text,setText]=useState("")
  const handleUpClick=()=>{
    //console.log("up clicked")
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick=()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }  

  const handleclear=()=>{
    let newText = "";
    setText(newText)
  } 
  
  const handleCopy =() =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

  }

  const handleExtraSpaces =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))

  }

  const handleOnChange=(event)=>{
   // console.log("onchange")
   setText(event.target.value)
  }
  return (
    <>
    <div className="container" >
    
      <div className="mb-3 mt-5">
          <h3>{props.Heading}</h3>
        <textarea
          className="form-control"
          id="myBox"
          value = {text}
          onChange ={handleOnChange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert To Upercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert To Lowercase</button>
        <button className="btn btn-primary my-3 " onClick={handleclear}>Clear Text</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}>Remove Extra Space</button>
        
      </div>
    </div>
    <div className="container">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Word {text.length} Character</p>
      <p>{0.008 * text.split(" ").length} Minutes</p>
      <h3>Preview</h3>
      <p>{text}</p>

    </div>
    </>
  );
}
