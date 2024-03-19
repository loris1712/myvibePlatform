// pages/Plan.js
import React, { useEffect, useState }  from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/PlanManagement.css';
import { useHistory, useParams } from 'react-router-dom';

function PlanManagement() {
  const history = useHistory();
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [planData, setPlanData] = useState([]);
  const [planDataStops, setPlanDataStops] = useState([]);
  const [planDataParticipants, setPlanDataParticipants] = useState([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSubtitle, setMessageSubtitle] = useState('');
  const [participantEmail, setParticipantEmail] = useState('');
  const [deleteButton, setShowDeleteButton] = useState('');

  const handleConfirmPopup = (email) => {
    setSuccessPopup(true);
    setParticipantEmail(email);
    setMessage("Are you sure to remove this participant? " + email);
    setShowDeleteButton(true);
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
  
  const handleDelete = async (email) => {
    fetch('https://app-srv-2sljsps3pa-uc.a.run.app/api/deleteParticipant', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setMessage(data.message);
      setMessageSubtitle(data.subtitle);
      setShowPopup(false);
      setSuccessPopup(true);
      setShowDeleteButton(false);
        fetch('https://app-srv-2sljsps3pa-uc.a.run.app/api/getFullPlanDetails?idPlan=' + id)
        .then(response => response.json())
        .then(data => {
          setPlanDataParticipants(data.participants);
        })
        .catch(error => {
          console.error('Error calling API:', error);
        });
    })
    .catch(error => {
      console.error('Error:', error);
      setMessage('Error deleting participant');
    });
  };

  const handleUnlock = async (email) => {
    fetch('https://app-srv-2sljsps3pa-uc.a.run.app/api/unlockPlan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, plan_id: id })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem('userEmail', email);
      setShowPopup(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setMessage('Error deleting participant');
    });
  };

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');

    const unlockPlan = async () => {
      try {
        const result = await handleUnlock(userEmail);
        // Decidi se mostrare il popup in base al risultato di handleUnlock.
        // Ad esempio, se handleUnlock restituisce true per un'operazione riuscita, 
        // non mostrare il popup.
        if (!result) {
          setShowPopup(true);
        }
      } catch (error) {
        console.error('Errore durante lo sblocco del piano:', error);
        // Qui puoi decidere se mostrare il popup in caso di errore.
        setShowPopup(true);
      }
    };

    if(!userEmail){
      setShowPopup(true);
    }else{
      unlockPlan();
    }
  }, []);

  useEffect(() => {
    fetch('https://app-srv-2sljsps3pa-uc.a.run.app/api/getFullPlanDetails?idPlan=' + id)
      .then(response => response.json())
      .then(data => {
        setPlanData(data.plan);
        setPlanDataStops(data.planStops);
        setPlanDataParticipants(data.participants);
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

  return (
    <div>
      <Header />
        <div className='plan-container'>
          {showPopup && (
            <div className='popup'>
              <div className='popup-inner'>
                <div className='popup-title'>
                   This is the management dashboard of {planData[0]?.title}
                </div>
                <div className='popup-subtitle'>
                  Please type the host email to proceed
                </div>
                  <input type='email' placeholder='Enter your email' 
                    onChange={handleEmailChange} 
                    value={email}  
                  />
                  <button type='submit' onClick={() => handleUnlock(email)}>Enter</button>
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
                {deleteButton &&
                    <button type='submit' onClick={() => handleDelete(participantEmail)}>Remove participant</button>
                  }
              </div>
            </div>
          )}

          {planData &&
            <div className='plan-body-management'>
            <div className='plan-row'>
            <div className='col-6 plan-col'>
                <div className='plan-title'>
                  {planData[0]?.title}
                </div>
                <div className='plan-date'>
                  <div className='plan-date-small'>
                    <div className='plan-date-small-month'>
                      {getMonth(planData[0]?.date_event)}
                    </div>
                    <div className='plan-date-small-day'>
                      {getDay(planData[0]?.date_event)}
                    </div>
                  </div>
                  <div className='plan-date-normal'>
                    {formatDate(planDataStops[0]?.time)}
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
                        <div className='plan-stop-address'>
                          {stop.full_address && stop.full_address !== '' ? stop.full_address : stop.manual_address} 
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='col-6 plan-partecipants'>
                <div className='plan-h2'>
                  {planDataParticipants.length} Participants
                </div>
                <div className='plan-stops plan-partipants-container'>
                  {planDataParticipants.map((participant, index) => {
                    return (
                      <div key={index} className='plan-participant'>
                        <div className='plan-participant-icon'>
                          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="28" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                        </div>
                        <div className='plan-participant-address'>
                          {participant.email}
                        </div>
                        <div className='plan-partecipants-buttons'>
                          <div className='plan-participant-button' onClick={() => handleConfirmPopup(participant.email)}>
                            Remove
                          </div>
                        </div>
                      </div>
                    );
                  })}
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

export default PlanManagement;
