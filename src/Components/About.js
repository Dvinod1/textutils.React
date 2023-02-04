import React,{useState} from 'react'

export default function About(props) {
    
    // const [myStyle,setMyStyle]=  useState({
    //     color:'white',
    //     backgroundColor:'black'
        
   
    // })
    let myStyle={
        color:props.mode==='dark'?'white':'#374c6a',
        backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white',
    }
   
    
    
    return (

       <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#374c6a',}}>
            <h1>About us</h1>
            <div  style={myStyle}>
                <div className="accordion" id="accordionExample" style={myStyle} >
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                               You can analyze your test here a your Required method
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                               It is Free to use from our side, as it is beta mode
                            </div>

                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compactible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              It is created as Browser compatible
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </>
  )
}
