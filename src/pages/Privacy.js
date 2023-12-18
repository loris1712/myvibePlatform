// pages/Privacy.js
import React, { useEffect, useState }  from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Privacy.css';
import { useHistory } from 'react-router-dom';

function Privacy() {
  const history = useHistory();

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

    history.push(`/explore?city=${selectedCity}`);
  };

  return (
    <div>
      <Header />
        <div className='home-container'>
          <div className="first-section" id="welcome">
              <div className="first-section-left">
                <div className='title'>
                  <h1>Privacy Policy</h1>
                </div>
                <div className='description'>
                  Protecting your private information is our priority. This Statement of Privacy applies to MyVibe and governs data collection
                  and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to MyVibe include www.myvibe.is.
                  The MyVibe application is a nightlife service application. By using the MyVibe application, you consent to the data practices
                  described in this statement.                
                </div>

                <div className='description'>
                In order to better provide you with products and services offered, MyVibe may collect personally identifiable information, suchas your first and last name, e-mail address, and phone number.               
                </div>

                <h3>Collection of your Personal Information</h3>
                <div className='description'>
                In order to better provide you with products and services offered, MyVibe may collect personally identifiable information, suchas your first and last name, e-mail address, and phone number.               
                </div>
                <div className='description'>
                MyVibe may also collect anonymous demographic information, which is not unique to you, such as your age or gender. 
                </div>
                <div className='description'>
                We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to
                provide certain personal information to us when you elect to use certain products or services. These may include: (a)
                registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for
                special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment
                information when ordering and purchasing products and services. To wit, we will use your information for, but not limited to,
                communicating with you in relation to services and/or products you have requested from us. We also may gather additional
                personal or non-personal information in the future.
                </div>

                <h3>Use of your Personal Information </h3>
                <div className='description'>
                MyVibe collects and uses your personal information to operate and deliver the services you have requested.
                </div>

                <div className='description'>
                MyVibe may also use your personally identifiable information to inform you of other products or services available from
                MyVibe and its affiliates
                </div>

                <h3>Sharing Information with Third Parties</h3>
                <div className='description'>
                MyVibe does not sell, rent or lease its customer lists to third parties.
                </div>
                <div className='description'>
                MyVibe may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide
                customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to
                provide these services to MyVibe, and they are required to maintain the confidentiality of your information.
                </div>
                <div className='description'>
                MyVibe may disclose your personal information, without notice, if required to do so by law or in the good faith belief that suchaction is necessary to: (a) conform to the edicts of the law or comply with legal process served on MyVibe or the site; (b)
protect and defend the rights or property of MyVibe; and/or (c) act under exigent circumstances to protect the personal safety
of users of MyVibe, or the public
                </div>

                <h3>Right to Deletion</h3>
                <div className='description'>
                Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:
                </div>

                <div className='description'>
                <ul>
                  <li>Delete your personal information from our records.</li>
                  <li> • Direct any service providers to delete your personal information from their records. </li>
                </ul>
                Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:
                <li>
                Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product
recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within
the context of our ongoing business relationship with you, or otherwise perform a contract between you and us.
                </li>

                <li>
                Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible
for that activity.
                </li>

                <li>
                Debug to identify and repair errors that impair existing intended functionality.
                </li>

                <li>
                Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another
right provided for by law.
                </li>

                <li>
                Comply with the California Electronic Communications Privacy Act.
                </li>

                <li>
                Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other
applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the
achievement of such research, provided we have obtained your informed consent.
                </li>

                <li>
                Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us.
                </li>

                <li>
                Comply with an existing legal obligation.
                </li>

                <li>
Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you
provided the information.
                </li>
                </div>

                <h3>Children Under Thirteen</h3>
                <div className='description'>
                MyVibe does not knowingly collect personally identifiable information from children under the age of thirteen. If you are
under the age of thirteen, you must ask your parent or guardian for permission to use this application.
                </div>

                <h3>E-mail Communications</h3>
                <div className='description'>
                From time to time, MyVibe may contact you via email for the purpose of providing announcements, promotional offers, alerts,
confirmations, surveys, and/or other general communication.
                </div>
                
                <div className='description'>
If you would like to stop receiving marketing or promotional communications via email from MyVibe, you may opt out of
such communications by clicking on the "unsubscribe" button        
        </div>


                <h3>External Data Storage Sites</h3>
                <div className='description'>
                We may store your data on servers provided by third party hosting vendors with whom we have contracted.
                </div>

                <h3>Changes to this Statement</h3>
                <div className='description'>
                MyVibe reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the
way we treat personal information by sending a notice to the primary email address specified in your account, by placing a
prominent notice on our application, and/or by updating any privacy information. Your continued use of the application and/or
Services available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b)
agreement to abide and be bound by that Policy.
                </div>

                <h3>Contact Information</h3>
                <div className='description'>
                MyVibe welcomes your questions or comments regarding this Statement of Privacy. If you believe that MyVibe has not
adhered to this Statement, please contact MyVibe at: loris@myvibe.is
                </div>
                
                <div className='description'>
                Effective as of August 23, 2023
                </div>


              </div>
          </div>

        </div>
      <Footer />
    </div>
  );
}

export default Privacy;
