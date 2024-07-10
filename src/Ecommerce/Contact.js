import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import contact from '../assets/contact.png'
// import Contactpage_Flower from '../assets/flower03.png'
import Contactpage_Flower from '../assets/ginko-leaf.png'
import contact_mob from '../assets/contact_mob.png'
import Firstone from './Firstone';
import Footer from './Footer';
import { Toaster, toast } from 'react-hot-toast';
import Apicalls from '../Apicalls';


function Contact() {
  const [data, setData] = useState({ email: '', name: '', message: '' })
  const inputRefs = useRef({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactInfo, setContactInfo] = useState({})
  const [requiredFields, setRequiredFields] = useState({ email: '', name: '', message: '' })

  useEffect(() => {
    Promise.all(
      [
        Apicalls.get('about')
      ]
    ).then(([data]) => {
      data.data['address'] = JSON.parse(data.data.address ?? {})
      setContactInfo(data.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  function query() {
    let isValid = true;

    if (!data.name || data.name.trim() === '') {
      isValid = false
      setRequiredFields((prevFields) => ({ ...prevFields, name: 'red', email: '', message: '', }));
      inputRefs.current['name'].focus();
      return;
    } else {
      setRequiredFields((prevFields) => ({ ...prevFields, name: '' }));
    }

    if (!data.email || data.email.trim() === '') {
      isValid = false
      setRequiredFields((prevFields) => ({ ...prevFields, name: '', email: 'red', message: '' }));
      inputRefs.current['email'].focus();
      return;
    } else {
      if (!validateEmail(data.email)) {
        isValid = false;
        setRequiredFields((prevFields) => ({ ...prevFields, name: '', email: 'red', message: '' }));
        inputRefs.current['email'].focus();
        return;
      } else {
        setRequiredFields((prevFields) => ({ ...prevFields, name: '', email: '', message: '' }));
      }
    }

    if (!data.message || data.message.trim() === '') {
      isValid = false
      setRequiredFields((prevFields) => ({ ...prevFields, message: 'red' }));
      inputRefs.current['message'].focus();
      return;
    } else {
      setRequiredFields((prevFields) => ({ ...prevFields, message: '' }));
    }
    
    if (isValid) {
      setIsSubmitting(true);
      Promise.all(
        [
          Apicalls.post('customer/contactmail', data)
        ]
      ).then(([data]) => {
        // if (Object.keys(data.data).length > 1) {
        //   console.log('Successfully added')
        // }
        // else {
        //   console.log('error occurred while adding')
        // }
        toast.success("Thank you! Your response has been received.", { duration: 3000 });
      }).catch((error) => {
        toast.error("An error occurred. Please try again later.");
      }).finally(()=> {
        setIsSubmitting(false);
        setData({name: '', email: '', message: ''});
      })
    }
  }

  return (

    <>

      {/* <Firstone/> */}

      <div className="section1 d-none d-md-block">
        <Container>
        </Container>
      </div>

      <div className='container  d-block d-md-none contactsec1Mob' >
        <div className='row'>
          <div className="col-12 ">
            <h1 className='text-center m-5 contact_heading2' >Contact us</h1>
          </div>
        </div>
      </div>

      <div className="contact_head ">
        <div className='container'>
          <div className='row'>
            <div className="col-lg-5 col-md-12 col-sm-12 d-none d-md-block">
              <div className="d-flex flex-row">
                <img src={contact} alt={contact} className="img-fluid contact_img   pt-5 pb-5 d-none d-lg-block" />
 
              </div>
            </div>

            <div className='col-lg-7 col-md-12 col-sm-12'>
              <div className='row'>
                <div className="col-lg-8 col-md-12 col-sm-12  d-none d-md-none d-lg-block">
                  <h1 className="contact_heading">Contact Us</h1>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 form-secmob'>
                  {/* <img src={Contactpage_Flower} alt={contact} className="img-fluid  d-none d-lg-block d-xl-block" /> */}
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 form-secmob'>
                  <form className="form mobform">
                    <div className=" d-block d-md-none ">
                      <div class="d-flex flex-row justify-content-center">
                        <img src={contact_mob} alt={contact_mob} className="img-fluid contact_img " />
                      </div>
                    </div>
                    <label className='form-label'>Full Name</label>
                    <input type="text" style={{ borderColor: requiredFields.name }} ref={ref => inputRefs.current['name'] = ref} disabled={isSubmitting} name="name" onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} className=" feld_style" required />
                    <p className="mt-2 contact_name">E-mail</p>
                    <input type="text" style={{ borderColor: requiredFields.email }} ref={ref => inputRefs.current['email'] = ref} disabled={isSubmitting} name="email" onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} className="field feld_style" required />
                    <p className="mt-2 contact_name">Message</p>
                    <textarea rows={5} style={{ borderColor: requiredFields.message, outline: '0' }} ref={ref => inputRefs.current['message'] = ref} disabled={isSubmitting} name="message" onChange={(e) => setData({ ...data, message: e.target.value })} value={data.message} className="field feld_style" required />
                    <Button variant='success' onClick={() => { query() }} disabled={isSubmitting} className="button buttonmob">Contact Us</Button>
                  </form>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 d-none d-md-block d-lg-block">
                  <form className="form ">
                    <h5 className="heading5">Phone</h5>
                    <p className='contact_pararaph'>+91 {contactInfo?.phone_no}</p>
                    <h5 className="heading5">Contact</h5>
                    <p className='contact_pararaph'>{contactInfo?.email}</p>
                    <h5 className="heading5">Address</h5>
                    {/* <p className='contact_pararaph'>Flat B, 37-2-14, Vijayasindhu Residency, Market St, Urban, Kakinada, Andhra Pradesh, 533005</p> */}
                    <p className='contact_pararaph'>{contactInfo?.address?.['hNo']}, {contactInfo?.address?.['village']}, {contactInfo?.address?.['state']}-{contactInfo?.address?.['pincode']}</p>
                    {/* <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
                        <g clip-path="url(#clip0_1_3037)">
                          <path d="M27.875 13.9376C27.875 6.24015 21.635 0.00012207 13.9375 0.00012207C6.24003 0.00012207 0 6.24015 0 13.9376C0 20.8941 5.09672 26.6602 11.7598 27.7058V17.9664H8.22095V13.9376H11.7598V10.867C11.7598 7.37393 13.8406 5.44446 17.0242 5.44446C18.5486 5.44446 20.144 5.71667 20.144 5.71667V9.14661H18.3866C16.6553 9.14661 16.1152 10.221 16.1152 11.3243V13.9376H19.9807L19.3628 17.9664H16.1152V27.7058C22.7783 26.6602 27.875 20.8941 27.875 13.9376Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_3037">
                            <rect width="27.875" height="27.875" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className='ms-3' width="20" height="20" viewBox="0 0 28 28" fill="none">
                        <path d="M13.9795 2.51021C17.7034 2.51021 18.1444 2.52654 19.6089 2.59187C20.97 2.65176 21.705 2.88042 22.195 3.07097C22.8429 3.32141 23.3111 3.62629 23.7956 4.11084C24.2856 4.60083 24.5851 5.0636 24.8355 5.71147C25.0261 6.20147 25.2547 6.94189 25.3146 8.29753C25.3799 9.7675 25.3963 10.2085 25.3963 13.927C25.3963 17.6509 25.3799 18.0919 25.3146 19.5564C25.2547 20.9175 25.0261 21.6525 24.8355 22.1425C24.5851 22.7904 24.2802 23.2586 23.7956 23.7431C23.3056 24.2331 22.8429 24.5325 22.195 24.783C21.705 24.9735 20.9646 25.2022 19.6089 25.2621C18.139 25.3274 17.698 25.3438 13.9795 25.3438C10.2556 25.3438 9.81458 25.3274 8.35005 25.2621C6.98897 25.2022 6.25398 24.9735 5.76399 24.783C5.11611 24.5325 4.6479 24.2277 4.16335 23.7431C3.67336 23.2531 3.37393 22.7904 3.12349 22.1425C2.93293 21.6525 2.70427 20.9121 2.64439 19.5564C2.57905 18.0865 2.56272 17.6455 2.56272 13.927C2.56272 10.2031 2.57905 9.76206 2.64439 8.29753C2.70427 6.93645 2.93293 6.20147 3.12349 5.71147C3.37393 5.0636 3.67881 4.59539 4.16335 4.11084C4.65335 3.62085 5.11611 3.32141 5.76399 3.07097C6.25398 2.88042 6.99441 2.65176 8.35005 2.59187C9.81458 2.52654 10.2556 2.51021 13.9795 2.51021ZM13.9795 0.000366211C10.1957 0.000366211 9.72202 0.0166992 8.23572 0.0820312C6.75486 0.147363 5.73677 0.386914 4.85479 0.729907C3.93469 1.08923 3.15615 1.56289 2.38306 2.34143C1.60452 3.11453 1.13086 3.89307 0.771533 4.80772C0.42854 5.69514 0.188989 6.70779 0.123657 8.18865C0.0583252 9.6804 0.0419922 10.1541 0.0419922 13.9379C0.0419922 17.7217 0.0583252 18.1953 0.123657 19.6816C0.188989 21.1625 0.42854 22.1806 0.771533 23.0626C1.13086 23.9827 1.60452 24.7612 2.38306 25.5343C3.15615 26.3074 3.93469 26.7865 4.84934 27.1404C5.73677 27.4834 6.74941 27.7229 8.23027 27.7883C9.71658 27.8536 10.1902 27.8699 13.974 27.8699C17.7579 27.8699 18.2315 27.8536 19.7178 27.7883C21.1987 27.7229 22.2168 27.4834 23.0988 27.1404C24.0134 26.7865 24.7919 26.3074 25.565 25.5343C26.3381 24.7612 26.8172 23.9827 27.1711 23.068C27.5141 22.1806 27.7537 21.1679 27.819 19.6871C27.8843 18.2008 27.9007 17.7271 27.9007 13.9433C27.9007 10.1595 27.8843 9.68584 27.819 8.19954C27.7537 6.71868 27.5141 5.70059 27.1711 4.8186C26.8281 3.89307 26.3545 3.11453 25.5759 2.34143C24.8028 1.56834 24.0243 1.08923 23.1096 0.735352C22.2222 0.392358 21.2096 0.152808 19.7287 0.0874756C18.237 0.0166992 17.7633 0.000366211 13.9795 0.000366211Z" fill="black" />
                        <path d="M13.9801 6.77844C10.0275 6.77844 6.8208 9.98516 6.8208 13.9377C6.8208 17.8903 10.0275 21.097 13.9801 21.097C17.9327 21.097 21.1394 17.8903 21.1394 13.9377C21.1394 9.98516 17.9327 6.77844 13.9801 6.77844ZM13.9801 18.5818C11.4158 18.5818 9.33608 16.502 9.33608 13.9377C9.33608 11.3735 11.4158 9.29373 13.9801 9.29373C16.5444 9.29373 18.6241 11.3735 18.6241 13.9377C18.6241 16.502 16.5444 18.5818 13.9801 18.5818Z" fill="black" />
                        <path d="M23.0928 6.49551C23.0928 7.42105 22.3415 8.16692 21.4214 8.16692C20.4959 8.16692 19.75 7.4156 19.75 6.49551C19.75 5.56997 20.5013 4.8241 21.4214 4.8241C22.3415 4.8241 23.0928 5.57542 23.0928 6.49551Z" fill="black" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter ms-3 socialicon" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                      </svg>
                    </div> */}
                  </form>
                </div>


                <div className="col-lg-6 col-md-12 col-sm-12 d-block d-md-none" style={{ background: 'white' }}>
                  <div className="form contactinfomob">
                  <h5 className="heading5">Phone</h5>
                    <p className='contact_pararaph'>+91 {contactInfo?.phone_no}</p>
                    <h5 className="heading5">Contact</h5>
                    <p className='contact_pararaph'>{contactInfo?.email}</p>
                    <h5 className="heading5">Address</h5>
                    {/* <p className='contact_pararaph'>Flat B, 37-2-14, Vijayasindhu Residency, Market St, Urban, Kakinada, Andhra Pradesh, 533005</p> */}
                    <p className='contact_pararaph'>{contactInfo?.address?.['hNo']}, {contactInfo?.address?.['village']}, {contactInfo?.address?.['state']}-{contactInfo?.address?.['pincode']}</p>
                   {/* <div class="mb-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
                        <g clip-path="url(#clip0_1_3037)">
                          <path d="M27.875 13.9376C27.875 6.24015 21.635 0.00012207 13.9375 0.00012207C6.24003 0.00012207 0 6.24015 0 13.9376C0 20.8941 5.09672 26.6602 11.7598 27.7058V17.9664H8.22095V13.9376H11.7598V10.867C11.7598 7.37393 13.8406 5.44446 17.0242 5.44446C18.5486 5.44446 20.144 5.71667 20.144 5.71667V9.14661H18.3866C16.6553 9.14661 16.1152 10.221 16.1152 11.3243V13.9376H19.9807L19.3628 17.9664H16.1152V27.7058C22.7783 26.6602 27.875 20.8941 27.875 13.9376Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_3037">
                            <rect width="27.875" height="27.875" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className='ms-4' width="20" height="20" viewBox="0 0 28 28" fill="none">
                        <path d="M13.9795 2.51021C17.7034 2.51021 18.1444 2.52654 19.6089 2.59187C20.97 2.65176 21.705 2.88042 22.195 3.07097C22.8429 3.32141 23.3111 3.62629 23.7956 4.11084C24.2856 4.60083 24.5851 5.0636 24.8355 5.71147C25.0261 6.20147 25.2547 6.94189 25.3146 8.29753C25.3799 9.7675 25.3963 10.2085 25.3963 13.927C25.3963 17.6509 25.3799 18.0919 25.3146 19.5564C25.2547 20.9175 25.0261 21.6525 24.8355 22.1425C24.5851 22.7904 24.2802 23.2586 23.7956 23.7431C23.3056 24.2331 22.8429 24.5325 22.195 24.783C21.705 24.9735 20.9646 25.2022 19.6089 25.2621C18.139 25.3274 17.698 25.3438 13.9795 25.3438C10.2556 25.3438 9.81458 25.3274 8.35005 25.2621C6.98897 25.2022 6.25398 24.9735 5.76399 24.783C5.11611 24.5325 4.6479 24.2277 4.16335 23.7431C3.67336 23.2531 3.37393 22.7904 3.12349 22.1425C2.93293 21.6525 2.70427 20.9121 2.64439 19.5564C2.57905 18.0865 2.56272 17.6455 2.56272 13.927C2.56272 10.2031 2.57905 9.76206 2.64439 8.29753C2.70427 6.93645 2.93293 6.20147 3.12349 5.71147C3.37393 5.0636 3.67881 4.59539 4.16335 4.11084C4.65335 3.62085 5.11611 3.32141 5.76399 3.07097C6.25398 2.88042 6.99441 2.65176 8.35005 2.59187C9.81458 2.52654 10.2556 2.51021 13.9795 2.51021ZM13.9795 0.000366211C10.1957 0.000366211 9.72202 0.0166992 8.23572 0.0820312C6.75486 0.147363 5.73677 0.386914 4.85479 0.729907C3.93469 1.08923 3.15615 1.56289 2.38306 2.34143C1.60452 3.11453 1.13086 3.89307 0.771533 4.80772C0.42854 5.69514 0.188989 6.70779 0.123657 8.18865C0.0583252 9.6804 0.0419922 10.1541 0.0419922 13.9379C0.0419922 17.7217 0.0583252 18.1953 0.123657 19.6816C0.188989 21.1625 0.42854 22.1806 0.771533 23.0626C1.13086 23.9827 1.60452 24.7612 2.38306 25.5343C3.15615 26.3074 3.93469 26.7865 4.84934 27.1404C5.73677 27.4834 6.74941 27.7229 8.23027 27.7883C9.71658 27.8536 10.1902 27.8699 13.974 27.8699C17.7579 27.8699 18.2315 27.8536 19.7178 27.7883C21.1987 27.7229 22.2168 27.4834 23.0988 27.1404C24.0134 26.7865 24.7919 26.3074 25.565 25.5343C26.3381 24.7612 26.8172 23.9827 27.1711 23.068C27.5141 22.1806 27.7537 21.1679 27.819 19.6871C27.8843 18.2008 27.9007 17.7271 27.9007 13.9433C27.9007 10.1595 27.8843 9.68584 27.819 8.19954C27.7537 6.71868 27.5141 5.70059 27.1711 4.8186C26.8281 3.89307 26.3545 3.11453 25.5759 2.34143C24.8028 1.56834 24.0243 1.08923 23.1096 0.735352C22.2222 0.392358 21.2096 0.152808 19.7287 0.0874756C18.237 0.0166992 17.7633 0.000366211 13.9795 0.000366211Z" fill="black" />
                        <path d="M13.9801 6.77844C10.0275 6.77844 6.8208 9.98516 6.8208 13.9377C6.8208 17.8903 10.0275 21.097 13.9801 21.097C17.9327 21.097 21.1394 17.8903 21.1394 13.9377C21.1394 9.98516 17.9327 6.77844 13.9801 6.77844ZM13.9801 18.5818C11.4158 18.5818 9.33608 16.502 9.33608 13.9377C9.33608 11.3735 11.4158 9.29373 13.9801 9.29373C16.5444 9.29373 18.6241 11.3735 18.6241 13.9377C18.6241 16.502 16.5444 18.5818 13.9801 18.5818Z" fill="black" />
                        <path d="M23.0928 6.49551C23.0928 7.42105 22.3415 8.16692 21.4214 8.16692C20.4959 8.16692 19.75 7.4156 19.75 6.49551C19.75 5.56997 20.5013 4.8241 21.4214 4.8241C22.3415 4.8241 23.0928 5.57542 23.0928 6.49551Z" fill="black" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter ms-4 socialicon" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                      </svg>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer/> */}






      <div className='container-fluid' >
        <div className='row'>
          <div className='col-lg-12 for_map' style={{ width: '100%', }}>
            <iframe
              title="Google Maps"
              width="100%"
              height="350"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d488522.9974221458!2d82.234917!3d16.945706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3827d62f450d07%3A0x413719407095a5e1!2sEarthBased.Store!5e0!3m2!1sen!2sus!4v1713243940799!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
      </div>



    
      <Toaster position="top-center" />
    </>

  );
}

export default Contact;