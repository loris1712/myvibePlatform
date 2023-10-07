// pages/Home.js
import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg fixed-top desktop">
        <div className="container-fluid">
            <div className='navbar-logo-div'>
              <img src="../../logotransparent.png" class="img-fluid navbar-logo" alt="Myvibe" />
              <a className="navbar-brand" href="#">myvibe</a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="svg-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-menu-app" viewBox="0 0 16 16">
                  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0" style={{marginLeft: 'auto', marginRight: '1rem'}}>
                <li className="nav-item">
                    <a className="nav-link" href="#welcome">Welcome</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#features">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#explore">Explore</a>
                </li>
            </ul>
            {/*<button className="btn btn-secondary btn-login" type="submit">Explore</button>*/}
            <button className="btn btn-primary" type="submit">Download App</button>
            </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg fixed-top mobile">
        <div className="container-fluid">
            <a className="navbar-brand navbar-button" href="#">Login</a>
            <a className="navbar-brand" href="#">Viewster</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="svg-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-menu-app" viewBox="0 0 16 16">
                  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link nav-link2 active" aria-current="page" href="#services">Services <p className="nav-link-span">&lt;</p></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link2" href="#steps">How it works <p className="nav-link-span">&lt;</p></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link2" href="#pricing">Pricing <p className="nav-link-span">&lt;</p></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link2" href="#testimonials">Testimonials <p className="nav-link-span">&lt;</p></a>
                </li>
            </ul>
            <button className="btn btn-primary btn-create" type="submit">Create an account</button>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;