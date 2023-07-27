import React, {useState} from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick =()=>{
        console.log("UpperCase was clicked" + text)
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleLoClick =()=>{
        console.log("LowerCase was clicked" + text)
        let newText=text.toLowerCase()
        setText(newText)
    }
    const handleOnChange =(event)=>{
        console.log("Oncahnge Click")
        setText(event.target.value)
    }

    const handleCopy = () =>{
        var text = document.getElementById('mybox')
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>
            {props.heading} 
            </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange ={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'#042743':'white'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mX-2" onClick={handleUpClick}>Convert into uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert into Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extraspaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h2>Your Text summary</h2>
            <p>{text.split(' ').length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(' ').length} Time Taken to read in Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text in the above text box to preveiw"}</p>
        </div>
        </>
    )
}
