import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Apicalls from '../Apicalls';
import store from '../store';
import { storeUser, storeUserError } from '../AuthActions';
import secondlogo from '../assets/login_second_logo2 .png';
import firstlogo from '../assets/login_second_logo1.png';
import googlelogo from '../assets/google_loginPage.png';
import { jwtDecode } from "jwt-decode";

function Login() {
  const [data, setData] = useState({ email: '', password: '' });
  const [requiredFields, setRequiredFields] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);
  const navigate = useNavigate();

  // Access the previous page link
  const previousPageLink = document.referrer;

  const signin = () => {
    let isValid = true;
    if (!data.email || data.email.trim() === '') {
      isValid = false;
      setRequiredFields((prevFields) => ({ ...prevFields, email: 'red' }));
    } else {
      setRequiredFields((prevFields) => ({ ...prevFields, email: '' }));
    }
    if (!data.password || data.password.trim() === '') {
      isValid = false;
      setRequiredFields((prevFields) => ({ ...prevFields, password: 'red' }));
    } else {
      setRequiredFields((prevFields) => ({ ...prevFields, password: '' }));
    }

    if (isValid) {
      setButtonLoading(true);
      Apicalls.post('customer/login', data)
        .then((response) => {
          if (response.data.message === 'Login successful') {
            store.dispatch(storeUser(response.data.user));

            // Handle cart and wishlist integration here if needed
            // Example:
            // if (Array.isArray(JSON.parse(localStorage.getItem('cart_product_ids')))) {
            //   // Add products to cart API call
            // }

            if (window.history.state.usr === 'register') {
              window.location.href = '/';
            } else {
              const pathAfterDomain = previousPageLink.replace(/^https?:\/\/[^/]+/, "");
              window.location.href = pathAfterDomain;
            }
          } else {
            setErrorMessage('Invalid Credentials');
            store.dispatch(storeUserError());
          }
        })
        .catch((error) => {
          setErrorMessage('Invalid Credentials');
        })
        .finally(() => {
          setButtonLoading(false);
        });
    }
  };

  return (
    <>
      {/* First section */}
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 login_first_section d-flex justify-content-center align-items-center my-5'>
              <div>
                <div style={{ textAlign: 'center' }}>
                  <img src={firstlogo} alt={firstlogo} className='img-fluid d-md-none' />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h1 className='welcome'>Welcome back</h1>
                  <h6 className='enteryourdetails'>Welcome back! Please enter your details.</h6>
                </div>
                <form style={{ fontFamily: 'fantasy' }}>
                  <div className='login_form_center_fields'>
                    <div>
                      <label className='mb-2 mt-2 register_text_naems email'>Email</label>
                      <br />
                      <input type="email" style={{ borderColor: requiredFields.email }} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder='Enter Your email' className='info_only_md_ard_input2' />
                    </div>
                    <div>
                      <label className='mb-2 mt-2 register_text_naems password'>Password</label>
                      <br />
                      <input type="password" onChange={(e) => setData({ ...data, password: e.target.value })} style={{ borderColor: requiredFields['password'] }} placeholder='Enter Your Password' className='info_only_md_ard_input2' />
                    </div>
                  </div>
                  <div className='mt-4'>
                    <div className=' d-flex  justify-content-between'>
                      <div className='d-flex'>
                        <div>
                          <input type="checkbox" />
                          &nbsp; &nbsp;
                        </div>
                        <div>
                          <p className='remember '>Remember for password</p>
                        </div>
                        &nbsp; &nbsp;
                      </div>
                      <div className=''>
                        <p className='remember remember1' style={{ cursor: "pointer" }}
                          onClick={() => {
                            navigate('/Forgotpassword');
                          }}
                        >Forgot Password</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ color: 'red' }}>{errorMessage}</div>
                  <Button variant="success" onClick={signin} disabled={buttonLoading} size="lg" className="ps-5 pe-5 btn-lg w-100 mb-3 ">Sign in</Button>

                  {/* Google OAuthProvider and GoogleLogin */}
                  <GoogleOAuthProvider clientId="939155611260-6uoka8hf6kagk192dhsk4pq4l7o0k13t.apps.googleusercontent.com">
                    <GoogleLogin
                      buttonText="Sign in with Google"
                      onSuccess={(response) => {
                        const decoded = jwtDecode(response.credential);
                        console.log('Google login success:', decoded);

                        const gdata = {
                          name:decoded.name,
                          email:decoded.email,
                        }
                        
                        console.log(gdata)
                        
                        setButtonLoading(true);
                        Apicalls.post('customer/googleLogin', gdata)
                          .then((response) => {
                            if (response.data.message === 'Login successful') {
                              store.dispatch(storeUser(response.data.user));

                              if (window.history.state.usr === 'register') {
                                window.location.href = '/';
                              } else {
                                const pathAfterDomain = previousPageLink.replace(/^https?:\/\/[^/]+/, "");
                                window.location.href = pathAfterDomain;
                              }
                            } else {
                              setErrorMessage('Invalid Credentials');
                              store.dispatch(storeUserError());
                            }
                          })
                          .catch((error) => {
                            setErrorMessage('Invalid Credentials');
                          })
                          .finally(() => {
                            setButtonLoading(false);
                          });

                      }}
                      onFailure={(error) => {
                        console.error('Google login failed:', error);
                        // Handle Google login failure
                      }}
                      cookiePolicy={'single_host_origin'}
                      redirectUri="https://earthbased.store" // Replace with your production URL
                    />
                  </GoogleOAuthProvider>

                  <p className='mt-4'>Don't have an account? <span className='signup' onClick={() => navigate('/register')} disabled={buttonLoading} style={{ cursor: 'pointer' }}>Sign up</span></p>

                </form>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 login_second_section d-none d-md-flex justify-content-center align-items-center'>
              <img src={secondlogo} alt={secondlogo} className='img-fluid' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
