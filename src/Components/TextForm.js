// import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick= ()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert('converted to upperCase','success')
    }

    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert('converted to lowerCase','success')
    }
    const clearText= ()=>{
        let newText=" " 
        setText(newText)
        props.showAlert('Cleared all data','success')
    }
    
    const handleCopy=()=>{
        var text=document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert(' copied to clipboard','success')

    }
    
    const removeExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces removed','success')

    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }

    
    const [text, setText]= useState("");


  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#374c6a'}}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox"  value={text} onChange={handleOnChange}
        style={{backgroundColor:props.mode==='dark'?'#113870':'white',color:props.mode==='dark'?'white':'#374c6a'}}
        rows="8"></textarea>
       </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1"  onClick={handleUpClick}> Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1"  onClick={handleLoClick}> Convert to Lowecase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1"  onClick={clearText}>clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1"  onClick={handleCopy}>copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1"  onClick={removeExtraSpaces}>Remove extra spaces</button>
       
       
    </div>

    
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#374c6a'}}>
        <h2>Your text Summery</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to priview'}</p>
    </div>

    </>
  )
}
