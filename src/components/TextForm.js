import React,{useState} from 'react';
export default function TextForm(props){
    
    
    
    const handleUpClick=() => {
        console.log("uppercase was clicked");
        // setText("you have clicked on up button" +text); 
         let newText=text.toUpperCase();
         setText(newText);
         props.showAlert("converted to upperclick","success")
    }
    const handleLoClick=() => {
        console.log("lower was clicked");
        // setText("you have clicked on up button" +text); 
         let newText=text.toLowerCase();
         setText(newText);
         props.showAlert("converted to lowerclick","success")
    }
    
    const handleClearClick=() => {
        console.log("clear was clicked");
        // setText("you have clicked on up button" +text); 
         let newText=" ";
         setText(newText);
         props.showAlert("converted to lclear","success")
    }
    
    
    const handleOnChange=( event ) =>{
        console.log("on change ");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('Enter something to analyse');
    //   text="newone" ;// this is thewrong way 
    // setText("new one is here ");




//     return (
//         <div>
//         <h1>{props.heading} </h1>
//       <div className="mb-3">

// <textarea className ="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8">
// </textarea>
// {/* value = {text} se default value yhi rhegi us area ki */}
//       </div> 
//       <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
//       </div>
//     )




return (   <>
            <div className="container" style ={{color :props.mode==='dark' ?'white' :'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
    
    <textarea className ="form-control" value = {text} onChange={handleOnChange} style ={{backgroundColor :props.mode==='dark'?'grey':'white' ,color :props.mode==='dark' ?'white' :'black'}} 
    id="myBox" rows="8">
        {/* two curly brace one for js and objects in js  */}
    </textarea>
    {/* value = {text} se default value yhi rhegi us area ki */}
          </div> 
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>CLEAR</button>
          </div>
          <div className="container my-3" style ={{color :props.mode==='dark' ?'white' :'black'}} > 
          <h2> Your text summary </h2>
          <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
          <p>{.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length}Minutes to read</p>
          <h2> Preview</h2>

          {/* optimise way  */}
          <p>{text.length>0 ?text:"enter something in the textbox above to preview it "}</p>
          </div>
          </>
       )


}