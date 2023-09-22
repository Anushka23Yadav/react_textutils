import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar(props) {


  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
              <Link className="navbar-brand" to="/">{props.title}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <Link className="nav-item">
                          <Link className="nav-link" aria-current="page" to ="/">Home</Link>
                      </Link>
                      <Link className="nav-item">
                          <Link className="nav-link" to ="/about">{props.about}</Link>
                      </Link>
                  </ul>
                  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeChange}</label>
                  </div> 
              </div>
          </div>
          <div className="style-switcher" id="colorChange">
        <h4 className={`text-${props.mode==='light'?'dark':'light'}`}> Theme colors</h4>
        <div className="colors">
            <span className="color-1" onClick={()=>{props.customMode('danger')}}></span>
            <span className="color-2" onClick={()=>{props.customMode('light')}} ></span>
            <span className="color-3" onClick={()=>{props.customMode('success')}}></span>
            <span className="color-4" onClick={()=>{props.customMode('info')}}></span>
            <span className="color-5" onClick={()=>{props.customMode('dark')}}></span>
        </div>
    </div>
   
      </nav>
     
      </div>
  )
}
