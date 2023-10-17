// pages/Home.js
import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }

    const currentPath = window.location.pathname;
    if (currentPath === '/explore') {
      setIsActive(true);
    }else{
      window.addEventListener('scroll', handleScroll);
    }

    // Cleanup dell'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='header'>
      <nav className={`navbar navbar-expand-lg fixed-top desktop ${isActive ? 'active_background' : ''}`}>
        <div className="container-fluid">
            <div className='navbar-logo-div'>
              <img src="../../logotransparent.png" class="img-fluid navbar-logo" alt="Myvibe" />
              <a className="navbar-brand" href="/">myvibe</a>
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
                    <a className="nav-link" href="/#welcome">Welcome</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#features">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/#howitworks">How it works</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/explore?city=New York">Explore</a>
                </li>
            </ul>
            {/*<button className="btn btn-secondary btn-login" type="submit">Explore</button>*/}
            <a href="https://apps.apple.com/it/app/myvibe-is/id6456566019?l=en-GB">
              <button className="btn btn-primary" type="submit">Download App</button>
            </a>
            </div>
        </div>
      </nav>

      <nav className={`navbar navbar-expand-lg fixed-top mobile ${isActive ? 'active_background' : ''}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">myvibe</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="svg-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" fill='white' viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link nav-link2 active" aria-current="page" href="/#welcome">Welcome 
                      <svg xmlns="http://www.w3.org/2000/svg" height="16px" fill='white' viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link2" href="/#features">Features 
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" fill='white' viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link2" href="/#howitworks">How it works 
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" fill='white' viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link2" href="/explore?city=New York">Explore 
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" fill='white' viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> 
                    </a>
                </li>
            </ul>
            <a href="https://apps.apple.com/it/app/myvibe-is/id6456566019?l=en-GB">
              <button className="btn btn-primary btn-create" type="submit">Download App</button>
            </a>
            <a class="navbar-brand navbar-button navbar-button-mobile" href="/explore?city=New York">Explore</a>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;