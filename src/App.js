
import './App.css'; 
import Alert from './components/Alert';
import About from './components/About';


import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React,{ useState } from 'react'
 import {
 BrowserRouter as Router,
 Routes,
 Route,
 Link
  } from "react-router-dom";
function App() {
  let head = "Enter Your Text Here"
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState("Null");
  const [ccolor,setCcolor]=useState('Null')
  const [modeChange,setModeChange]=useState('Enable Dark Mode')

 
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
      setModeChange('Disable Dark  Mode');
      }
    else{
      setMode('light');
      
      showAlert("Light mode has been enabled", "success");
      setModeChange('Enable Dark Mode');
     
    }
  }
  const removeClss =()=>{
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-dark')
  }
  const customMode=(cls)=>{
    removeClss()
    document.body.classList.add('bg-'+cls)
    if(document.body.classList.contains('bg-dark')){
      setCcolor('dark')
    }
    else{
      setCcolor('light')
    }
   
   }


  return (
<>
<Router>
<Navbar  title="textutils" about="About TextUtils" customMode={customMode} mode={mode} toggleMode={toggleMode} modeChange={modeChange}/>

<Alert alert={alert} />
<div className="container my-3">
  <Routes>
  <Route exact path='/' element={<TextForm showAlert={showAlert} heading={head} mode={mode} ccolor={ccolor} />
}/>
<Route exact path='/about' element={<About mode={mode}/>}/>
</Routes>
<TextForm showAlert={showAlert} heading={head} mode={mode} ccolor={ccolor} />

</div>
</Router>
</>
  );
}

export default App;
