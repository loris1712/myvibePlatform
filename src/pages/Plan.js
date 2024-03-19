// pages/Plan.js
import React, { useEffect, useState }  from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Plan.css';
import { useHistory, useParams } from 'react-router-dom';

function Plan() {
  const history = useHistory();
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [planData, setPlanData] = useState([]);
  const [planDataStops, setPlanDataStops] = useState([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSubtitle, setMessageSubtitle] = useState('');

  const handleRegisterClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const closeSuccessPopup = () => {
    setSuccessPopup(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handleAcceptPlan = async () => {
    if(email){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        try {
          const response = await fetch('https://app-srv-2sljsps3pa-uc.a.run.app/api/acceptPlan', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              idPlan: id,
              email: email, 
            }),
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const responseData = await response.json();
          if(responseData){
            setMessage(responseData.message);
            setMessageSubtitle(responseData.subtitle);
            setShowPopup(false);
            setSuccessPopup(true);
          }
        } catch (error) {
          console.error('There was a problem with your fetch operation:', error);
        }
      }else{
        alert('Invalid email.')
      }
    }
    
  };  

  useEffect(() => {
    fetch('https://app-srv-2sljsps3pa-uc.a.run.app/api/getPlan?idPlan=' + id)
      .then(response => response.json())
      .then(data => {
        setPlanData(data);
      })
      .catch(error => {
        console.error('Error calling API:', error);
      });

      fetch('https://app-srv-2sljsps3pa-uc.a.run.app/api/getPlanStops?idPlan=' + id)
      .then(response => response.json())
      .then(data => {
        setPlanDataStops(data);
      })
      .catch(error => {
        console.error('Error calling API:', error);
      });
  }, [id]);

  function formatDate(dateString) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(dateString);
  
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = months[monthIndex];
    const year = date.getFullYear();
  
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    return `${day} ${month} ${year} at ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  function getDay(dateString) {
    const date = new Date(dateString);
    return date.getDate();
  }
  
  function getMonth(dateString) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(dateString);
    return months[date.getMonth()];
  }

  const openInGoogleMaps = (address) => {
    if (!address) return;

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div>
      <Header />
        <div className='plan-container'>
          {showPopup && (
            <div className='popup'>
              <div className='popup-inner'>
                <div className='popup-close' onClick={closePopup}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                  <input type='email' placeholder='Enter your email' 
                    onChange={handleEmailChange} 
                    value={email}  
                  />
                  <button type='submit' onClick={handleAcceptPlan}>Accept plan</button>
              </div>
            </div>
          )}

          {successPopup && (
            <div className='popup'>
              <div className='popup-inner'>
                <div className='popup-close' onClick={closeSuccessPopup}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                <div className='popup-title'>
                   {message}
                </div>
                <div className='popup-subtitle'>
                  {messageSubtitle}
                </div>
              </div>
            </div>
          )}

          {planData &&
            <div className='plan-body'>
            <div className='plan-row'>
              <div className='col-4'>
                <div className='plan-image-container'>
                  {id===69 ? (
                    <img src="../../images/69plancover.jpeg" className="img-fluid plan-image" alt="Plan Image" />
                  ): (
                    <img src="../../images/you_invited.webp" className="img-fluid plan-image" alt="Plan Image" />
                  )}
                </div>
              </div>
              <div className='col-8 plan-col'>
                <div className='plan-title'>
                  {planData[0]?.title}
                </div>
                <div className='plan-date'>
                {planData[0]?.date_event && 
                  <div className='plan-date-small'>
                    <div className='plan-date-small-month'>
                      {getMonth(planData[0]?.date_event)}
                    </div>
                    <div className='plan-date-small-day'>
                      {getDay(planData[0]?.date_event)}
                    </div>
                  </div>
                }
                  {planDataStops[0]?.time && 
                    <div className='plan-date-normal'>
                      {formatDate(planDataStops[0]?.time)}
                    </div>
                  }
                </div>
                <div className='plan-call-to-action'>
                  <div className='plan-p2'>
                    Click below to accept the plan.
                  </div>
                  <div className='plan-call-to-action-button' onClick={handleRegisterClick}>
                    Acccept plan
                  </div>
                </div>
                <div className='plan-stops'>
                  <div className='plan-h2'>
                    Stops
                  </div>
                  {planDataStops.map((stop, index) => (
                    <div key={index} className='plan-stop'>
                      <div className='plan-stop-order-container'>
                        <div className='plan-stop-order'>
                        {stop.stop_order} 
                        </div>
                        <div className='vertical-line'></div>
                      </div>
                      <div className='plan-stop-info'>
                        <div className='plan-stop-date'>
                          {formatDate(stop.time)} 
                        </div>
                        <div className='plan-stop-name'>
                          {stop.name && stop.name !== '' ? stop.name : 'Address'} 
                        </div>
                        <div className='plan-stop-address' onClick={() => openInGoogleMaps(stop.full_address && stop.full_address !== '' ? stop.full_address : stop.manual_address)}>
                          {stop.full_address && stop.full_address !== '' ? stop.full_address : stop.manual_address} 
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      <Footer />
    </div>
  );
}

export default Plan;
