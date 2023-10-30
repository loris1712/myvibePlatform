// pages/Home.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className="row align-items-start footer-first-section">
          <div className='footer-logo'>
            <img src="../../logocompletedverticaltransparent.png" class="img-fluid footer-logo-img" alt="MyVibe" />
          </div>
          <div className='title'>
            Start your <br></br>Nightlife Adventure now
          </div>
          <div className='footer-button'>
            <a href="https://apps.apple.com/it/app/myvibe-is/id6456566019?l=en-GB">
              <button className="btn btn-primary" type="submit">Download App</button>
            </a>
          </div>
        </div>
        <div className="footer-second-section">
          <div className="footer-infos">
            <div className='footer-copyright'>
              <p>© 2023 MyVibe, Inc</p>
              <a href='#' className=''>Terms</a>
              <a href='#' className=''>Privacy</a>
            </div>

            <div className='footer-social'>
              <div className='icon2'>
                <a href='https://www.instagram.com/myvibe.is/' target='blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="#fff" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
              </div>
              <div className='icon2'>
                <a href='https://www.tiktok.com/@myvibeglobal?lang=it-IT' target='blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="#fff" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                </a>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;