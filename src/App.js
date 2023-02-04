// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';

// import React from 'react';
// import {
//   BrowserRouter, Router,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {

  const [mode,setMode]=useState('light');//wheather dark mode is available or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({msg:message,
    type:type})
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode=(cls)=>{
    removeBodyClasses()
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#374c6a'
      showAlert('Dark mode enabled','success')
     
        }
        
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert('light mode enabled','success')

    }
  }

  return (
    <>
   <Navbar tittle="textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}  />
    <TextForm heading="Try TextUtils-word counter,character counter,copy text" showAlert={showAlert} mode={mode}/>
            <About  mode={mode}/>
    </>
  )
} 

export default App;


