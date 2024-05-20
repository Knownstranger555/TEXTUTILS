import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
 
function App() {
  const [mode, setMode] = useState('light'); 
  // Whether dark mode is enablsed or not
  const [alert, setAlert] = useState(null);

   // **alert topic is from diff vdo
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
     
    <Routes>
          <Route path="/about" element={<About mode={mode} />} />          
          <Route path="/" element=
           { <TextForm showAlert={showAlert} heading="TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}/>         
    </Routes>
    </Router>
    </>
  );
}
export default App;

// ********   for costum color exersice
// const removeBodyClasses = ()=>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-success') 
// }

// const toggleMode = (cls)=>{
//   removeBodyClasses();
//   console.log(cls)
//   document.body.classList.add('bg-'+cls)
//   if(mode === 'light'){
//     setMode('dark');
//     document.body.style.backgroundColor = '#042743';
//     showAlert("Dark mode has been enabled", "success"); 
//   }
//   else{
//     setMode('light');
//     document.body.style.backgroundColor = 'white';
//     showAlert("Light mode has been enabled", "success");
//     // document.title = 'TextUtils - Light Mode';
//   }
// }