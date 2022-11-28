import React, { useState } from 'react'

export default function TextForm(props) {

   const handleUpClick = ()=>{
    // console.log("Uppercase was clicked")
    setText("You have clicked on handleUpclicked"+ text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case", "success")

   }

   const handleLoClick = ()=>{
    // console.log("Lowercase was clicked")
    setText("You have clicked on handleLoclicked"+ text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case", "success")

   }

   const handleOnCopy = ()=>{
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard", "success")

   }
   const handleClrClick = ()=>{
    setText("")
    props.showAlert("Text Cleared", "success")
   }

   const handleExtraSpaces = ()=>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces", "success")
   }

   const handleOnChange = (event)=>{
    // console.log("onChange")
    setText(event.target.value)

   }

   const[text, setText] = useState("")


    return (
        <>
        <div className='container' style ={{color: props.mode === 'dark'? 'white': '#322626' }}>
          <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value = {text} onChange = {handleOnChange} style ={{backgroundColor: props.mode === 'dark'? '#322626': 'white', color: props.mode === 'dark'? 'white': 'black' }} id="myBox" rows="8"></textarea>
                
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleOnCopy}>Copy</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove spaces</button>
        </div>


        <div className="container"  style ={{color: props.mode === 'dark'? 'white': 'black' }}>
          <h2>Your text summary</h2>
          <p> {text.split(" ").length - 1} words and {text.length} characterss </p>
          <p> {0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview </h2>
          <p>{text.length>0?text:"Enter your text to preview it here"}</p>
        </div>

        </>
    )
}
