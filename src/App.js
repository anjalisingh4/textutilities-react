import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState (null);
  const [modebtn, setModeBtn] = useState ("Dark Mode");

  const showAlert = (message, type) =>{
    setAlert({
      msg :message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#322626'
      showAlert("Dark mode enabled", "success")
      setModeBtn("Light Mode")
      
    } else {

      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success")
      setModeBtn("Dark Mode")
      
    }


  }
  return (
    <>
        
          <Navbar title = "TextUtils" aboutText = "ABOUT" mode = {mode} modebtn ={modebtn} toggleMode ={toggleMode}/>
          <Alert alert = {alert}/>
          <div className="container">
           <BrowserRouter>
           
          <Routes> 
           <Route path="/about" element={<About />} /> 
          
           < Route path="/" element= {<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} /> } /> 
            </Routes>
            
             </BrowserRouter> 
        </div>
        
          
    </>
  );
}

export default App;

