// pages/Home.js
import React, { useEffect, useState }  from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  const backgroundImages = [
    'url("https://images.pexels.com/photos/1634278/pexels-photo-1634278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    'url("https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    'url("https://images.pexels.com/photos/1677573/pexels-photo-1677573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
  ];

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".transition");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);

    var randomIndex = Math.floor(Math.random() * backgroundImages.length);
    var selectedImage = backgroundImages[randomIndex];
    document.querySelector(".first-section").style.backgroundImage = selectedImage;
    
  }, []);

  useEffect(() => {
    fetch('https://app-srv-2sljsps3pa-uc.a.run.app/api/cities')
      .then(response => response.json())
      .then(data => {
        setOptions(data);
      })
      .catch(error => {
        console.error('Error calling API:', error);
      });
  }, []);

  const handleSelectChange = event => {
    const selectedCity = event.target.value;
    setSelectedOption(selectedCity);

    history.push(`/explore?city=${selectedCity}`);
  };

  return (
    <div>
      <Header />
        <div className='home-container'>
          <div className="first-section" id="welcome">
              <div className="first-section-left">
                <div className='subtitle'>
                  <h4>Beta v1.1.14</h4>
                </div>
                <div className='title'>
                  <h1>Discover your</h1>
                  <h1>nightlife adventure</h1>
                </div>
                <div className='description'>
                  Discover the perfect spots around you by music, by dresscode, category. <br></br>Plan your nightlife, share it with your friends.
                </div>
                <div className='btns-flex'>
                  {/*<button className="btn btn-primary btn-start" type="submit">Explore</button>
                  <button className="btn btn-secondary btn-login" type="submit">Download app</button>*/}
                  <div className='main-CTA'>
                    <div className='main-CTA-title'>
                      myvibe.is/
                    </div>
                    <select className="form-select main-CTA-select" onChange={handleSelectChange}>
                      <option selected>Select city</option>
                      {options.map(option => (
                        <option key={option.city_id} value={option.city_name}>
                          {option.city_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
          </div>
          <div className="row align-items-start home-section" id="features">
              <div className="col">
                <div className='title'>
                  <h3><span>Features</span></h3>
                </div>
                <div className='description'>
                  Search spots around you filtered by multiple options to find the right match based on your decision.
                </div>
                <div className='display-flex'>
                  <div className='service-card transition'>
                    <div className='icon' style={{ background: '#00ff9a24'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="#00ff9a" viewBox="0 0 640 512"><path d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"/></svg>
                    </div>
                    <h5>Discover Your Perfect Night</h5>
                    <p>Discover the nightlife scene like never before. Tell us your vibe, and we'll match you with the best spots in town.</p>
                  </div>
                  <div className='service-card transition'>
                    <div className='icon' style={{ background: '#00bbff24'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px"fill="#00bbff" viewBox="0 0 576 512"><path d="M302.8 312C334.9 271.9 408 174.6 408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0zM416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3V152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6V503zM15.1 187.3C6 191 0 199.8 0 209.6V480.4c0 17 17.1 28.6 32.9 22.3L160 451.8V200.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49zM384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77V449.4l192 54.9V255z"/></svg>                   
                     </div>
                    <h5>Explore Vibrant Cities</h5>
                    <p>Dive into the pulse of cities worldwide. Explore their unique nightlife scenes, one city at a time.</p>
                  </div>
                  <div className='service-card transition'>
                    <div className='icon' style={{ background: '#0007de24'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="#0007de" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>                    
                    </div>
                    
                    <h5>Find Your Vibe</h5>
                    <p>Get ready to vibe at your favorite spots and discover new ones. Our advanced matching algorithm will recommend exciting places tailored just for you.</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="row align-items-start home-section transition">
            <div className='component-adv'>
              <div className="col">
                <div className='title'>
                  <h1>Find the <span>Pulse</span></h1>
                  <p>Unearth the hidden gems and hottest spots in the world's top cities, ensuring you never miss out on the action.</p>
                </div>
              </div>
              <div className="col">
              </div>
            </div>
          </div>
          <div className="row align-items-start home-section build-your-campaing" id="howitworks">
            <div className='title'>
              <h3>Explore <span>spots around you</span></h3>
            </div>
            <div className='row align-items-start device-section desktop'>
              <div className='col'>
                  <div className='description-device transition'>
                    <p>Use filters on the top <br></br><span className='span'>to customize</span> <br></br>your search.</p>
                  </div>

                  <div className='description-device transition' style={{marginTop: '35rem'}}>
                    <p>Navigate to 
                      <br></br><span className='span'>Home</span> to search by <br></br>multiple categories.
                    </p>
                  </div>
              </div>

              <div className='col' style={{textAlign: 'center'}}>
                <img src="../../images/explorepage.png" className="img-fluid screenpage transition" alt="Explore Page" />
              </div>

              <div className='col'>

                  <div className='description-device transition' style={{marginTop: '5rem'}}>
                    <img src="../../images/pinMaker.png" className="img-fluid" alt="..." />
                    <p>Click on 
                      <br></br><span className='span'>myvibe icon</span> on the map <br></br>to open the place.
                    </p>
                  </div>

                  <div className='description-device transition' style={{marginTop: '20rem'}}>
                    <p>Navigate to 
                      <br></br><span className='span'>Explore</span> to see what is happening <br></br>around you.
                    </p>
                  </div>
              </div>
            </div>

            <div className='row align-items-start device-section mobile'>
              <img src="../../images/explorepage.png" className="img-fluid screenpage transition" alt="Explore Page" />
                  <div className='description-device transition'>
                    <p>Use filters on the top <br></br><span className='span'>to customize</span> your search.</p>
                  </div>

                  <div className='description-device transition'>
                    <p>Navigate to 
                      <br></br><span className='span'>Home</span> to search by multiple categories.
                    </p>
                  </div>

                  <div className='description-device transition'>
                    <img src="../../images/pinMaker.png" className="img-fluid" alt="..." />
                    <p>Click on 
                      <br></br><span className='span'>myvibe icon</span> on the map to open the place.
                    </p>
                  </div>

                  <div className='description-device transition'>
                    <p>Navigate to 
                      <br></br><span className='span'>Explore</span> to see what is happening around you.
                    </p>
                  </div>
            </div>
          </div>
          <div className="row align-items-start home-section">
              <div className="col">
                <div className='title questions-title'>
                  <h3>Frequently asked questions</h3>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div className='icon'>
                        </div>
                        What is MyVibe?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        MyVibe is a mobile app designed to enhance your nightlife experiences. It helps you discover the best nightlife spots in your city, tailored to your preferences.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className='icon'>
                        </div>
                        How does MyVibe work?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      MyVibe uses a sophisticated matching algorithm to recommend nightlife locations based on your preferences. Simply answer a few questions about your vibe, and we'll do the rest.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className='icon'>
                        </div>
                        Is MyVibe available in my city?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      MyVibe is currently available in several major cities. Check the app to see if your city is listed. We're continuously expanding to new locations!
                                            </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapseThree">
                        <div className='icon'>
                        </div>
                        How can I create an account?
                      </button>
                    </h2>
                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Download the MyVibe app from the App Store or Google Play. Follow the on-screen instructions to create your account.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading5">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapseThree">
                        <div className='icon'>
                        </div>
                        Is MyVibe free to use?
                      </button>
                    </h2>
                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Yes, MyVibe is free to download and use. We will offer premium subscription options with enhanced features in the future, but basic functionality is available to all users at no cost at the moment.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading6">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapseThree">
                        <div className='icon'>
                        </div>
                        How do I personalize my nightlife recommendations?
                      </button>
                    </h2>
                    <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      After creating an account, you'll answer a series of questions about your vibe and preferences. Our algorithm will use this information to suggest relevant locations. As you start using the app, providing your feedback on locations, saving places, and “Checking In” to places, MyVibe will do more to personalize your experiences.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading7">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapseThree">
                        <div className='icon'>
                        </div>
                        Can I review and rate nightlife spots on MyVibe?
                      </button>
                    </h2>
                    <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      Yes, you can! We encourage users to share their experiences by leaving reviews and ratings for the places they visit. Your feedback helps others discover great spots. We are different, however, than other platforms, because we do not show these reviews to the public. We use the information you provide to recommend these spots to other nightlife seekers who may be interested. We also remove locations from our database if we receive overwhelming negative feedback.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading8">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapseThree">
                        <div className='icon'>
                        </div>
                        How can I contact customer support?
                      </button>
                    </h2>
                    <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        You can reach our customer support team by tapping the "Support" option in the app's menu. We're here to assist you with any questions or issues.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading9">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapseThree">
                        <div className='icon'>
                        </div>
                          Is my personal information secure with MyVibe?
                        </button>
                    </h2>
                    <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        You can reach our customer support team by tapping the "Support" option in the app's menu. We're here to assist you with any questions or issues.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading10">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapseThree">
                        <div className='icon'>
                        </div>
                          How can nightlife establishments partner with MyVibe?
                        </button>
                    </h2>
                    <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      If you own or manage a nightlife establishment, please click on “Submit Your Business” in the app to explore partnership opportunities and benefits.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading11">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapseThree">
                        <div className='icon'>
                        </div>
                          Can I suggest a new feature or improvement? 
                        </button>
                    </h2>
                    <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      Absolutely! We value user feedback. Feel free to send us your suggestions through the app or website, and we'll consider them for future updates.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading12">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapseThree">
                        <div className='icon'>
                        </div>
                          What should I do if I encounter a bug or technical issue?
                        </button>
                    </h2>
                    <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        If you encounter any technical issues or bugs, please report them to our support team through the app. We'll work to resolve them promptly.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading13">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapseThree">
                        <div className='icon'>
                        </div>
                          What happens to my data if I delete my account?
                        </button>
                    </h2>
                    <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        When you delete your account, your personal data is deleted from our servers as per our privacy policy. Be sure to back up any important information before doing so.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Home;
