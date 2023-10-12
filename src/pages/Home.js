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
    fetch('https://myvibe-backend.vercel.app/api/cities')
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

    // Reindirizza l'utente alla nuova pagina con il parametro nella query string
    history.push(`/explore?city=${selectedCity}`);
  };

  return (
    <div>
      <Header />
        <div className='home-container'>
          <div className="first-section" id="welcome">
              <div className="first-section-left">
                <div className='subtitle'>
                  <h4>Beta v1.0</h4>
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
                    <select class="form-select main-CTA-select" onChange={handleSelectChange}>
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
                    <div className='icon'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="white" viewBox="0 0 640 512"><path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>
                    </div>
                    <h5>Discover Your Perfect Night</h5>
                    <p>Discover the nightlife scene like never before. Tell us your vibe, and we'll match you with the best spots in town.</p>
                  </div>
                  <div className='service-card transition'>
                    <div className='icon'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="white" viewBox="0 0 512 512"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>
                    </div>
                    <h5>Explore Vibrant Cities</h5>
                    <p>Dive into the pulse of cities worldwide. Explore their unique nightlife scenes, one city at a time.</p>
                  </div>
                  <div className='service-card transition'>
                    <div className='icon'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="white" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
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
                <img src="../../images/explorepage.png" class="img-fluid screenpage transition" alt="Explore Page" />
              </div>

              <div className='col'>

                  <div className='description-device transition' style={{marginTop: '5rem'}}>
                    <img src="../../images/pinMaker.png" class="img-fluid" alt="..." />
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
              <img src="../../images/explorepage.png" class="img-fluid screenpage transition" alt="Explore Page" />
                  <div className='description-device transition'>
                    <p>Use filters on the top <br></br><span className='span'>to customize</span> your search.</p>
                  </div>

                  <div className='description-device transition'>
                    <p>Navigate to 
                      <br></br><span className='span'>Home</span> to search by multiple categories.
                    </p>
                  </div>

                  <div className='description-device transition'>
                    <img src="../../images/pinMaker.png" class="img-fluid" alt="..." />
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
          <div className="row align-items-start home-section" id="testimonials">
              <div className="col">
                <div className='title'>
                  <h3>Testimonials</h3>
                </div>
                <div className='display-flex testimonials-section'>
                  <div className='testimonial-card transition'>
                    <div className='icon'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
                    </div>
                    <p>Dolor sit amet, consectetur adipiscing elit. Enim tempus mattis facilisis massa tincidunt tortor gravida. Accumsan hac a non congue maecenas tellus vel odio varius. Sed posuere.</p>
                    <div className='author'>
                      <div className='author-image'>
                        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="img-thumbnail" alt="..." />
                      </div>
                      <div className='author-information'>
                        <div className='author-name'>
                          Jon Asterious
                        </div>
                        <div className='author-role'>
                          COO of Art
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='testimonial-card transition'>
                    <div className='icon'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
                    </div>
                    <p>Dolor sit amet, consectetur adipiscing elit. Enim tempus mattis facilisis massa tincidunt tortor gravida. Accumsan hac a non congue maecenas tellus vel odio varius. Sed posuere.</p>
                    <div className='author'>
                      <div className='author-image'>
                        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="img-thumbnail" alt="..." />
                      </div>
                      <div className='author-information'>
                        <div className='author-name'>
                          Jon Asterious
                        </div>
                        <div className='author-role'>
                          COO of Art
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='testimonial-card transition'>
                    <div className='icon'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
                    </div>
                    <p>Dolor sit amet, consectetur adipiscing elit. Enim tempus mattis facilisis massa tincidunt tortor gravida. Accumsan hac a non congue maecenas tellus vel odio varius. Sed posuere.</p>
                    <div className='author'>
                      <div className='author-image'>
                        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="img-thumbnail" alt="..." />
                      </div>
                      <div className='author-information'>
                        <div className='author-name'>
                          Jon Asterious
                        </div>
                        <div className='author-role'>
                          COO of Art
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='testimonial-card transition'>
                    <div className='icon'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
                    </div>
                    <p>Dolor sit amet, consectetur adipiscing elit. Enim tempus mattis facilisis massa tincidunt tortor gravida. Accumsan hac a non congue maecenas tellus vel odio varius. Sed posuere.</p>
                    <div className='author'>
                      <div className='author-image'>
                        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="img-thumbnail" alt="..." />
                      </div>
                      <div className='author-information'>
                        <div className='author-name'>
                          Jon Asterious
                        </div>
                        <div className='author-role'>
                          COO of Art
                        </div>
                      </div>
                    </div>
                  </div>
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
                        Question for you?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Viewster is an artist-first platform that allows you to promote your music and build your community, Viewster is an artist-first platform that allows you to promote your music and build your community, Viewster is an artist-first platform that allows you to promote your music and build your community, Viewster is an artist-first platform that allows you to promote your music and build your community, Viewster is an artist-first platform that allows you to promote your music and build your community, Viewster is an artist-first platform that allows you to promote your music and build your community.                      </div>
                      </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className='icon'>
                        </div>
                        Question for you?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className='icon'>
                        </div>
                        Question for you?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
