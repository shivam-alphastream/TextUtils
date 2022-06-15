import React, {useState} from 'react'

export default function TextForm(props) {

    const upperclick = ()=> {
        console.log("upper case was clicked.")
        setText(text.toUpperCase());
    }

    const handleOnChange= (event)=> {
        setText(event.target.value)
    }
    const lowerclick = ()=> {
        setText(text.toLowerCase());
    }
    const clearText = ()=> {
        setText('');
    }
    const copyText = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.write(text.value);
    }

    const extraSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text,setText]=useState("Enter text here");
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value = {text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={upperclick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2 my-1" onClick={lowerclick}>Convert to lower case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={extraSpace}>remove extra space</button>
    </div>
    <div className="container my-2">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
        <p>This text will take {0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
