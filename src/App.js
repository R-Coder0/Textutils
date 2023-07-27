import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const [mode, setMode] = useState('light'); //wheather dark mode is enable or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enable", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enable", "primary")
    }
  }
  return (
    <>
      {/* <Router> */}
        <NavBar title="R-Coder" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm heading=" Enter the text to analyze" mode={mode} />
          {/* <Routes>
            <Route path="/about" element={<About/>}>
              
            </Route> */}
            {/* <Route path="/" element={<TextForm heading=" Enter the text to analyze" mode={mode} />}>
            </Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
