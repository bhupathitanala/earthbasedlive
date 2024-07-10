import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Apicalls from '../Apicalls';
import store from '../store';
import { storeUser, storeUserError } from '../AuthActions';
import { useNavigate } from 'react-router-dom';
import firstlogo from '../assets/login_second_logo1.png';
import googlelogo from '../assets/google_loginPage.png';
import secondlogo from '../assets/login_second_logo2 .png';

function Register() {
    const [data, setData] = useState({ email: '', password: '', mobile: '', name: '' });
    const [requiredFields, setRequiredFields] = useState({ email: '', password: '', mobile: '', name: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);
    const navigate = useNavigate();

    const signup = () => {
        let object = requiredFields;
        let isValid = true;
        if (!data.email || data.email.trim() === '') {
            isValid = false;
            object.email = 'red';
        } else {
            object.email = '';
        }
        if (!data.password || data.password.trim() === '') {
            isValid = false;
            object.password = 'red';
        } else {
            object.password = '';
        }
        if (!data.mobile || data.mobile.trim() === '') {
            isValid = false;
            object.mobile = 'red';
        } else {
            object.mobile = '';
        }
        if (!data.name || data.name.trim() === '') {
            isValid = false;
            object.name = 'red';
        } else {
            object.name = '';
        }
        data.status = 1;
        setRequiredFields(object);
        if (isValid) {
            setButtonLoading(true);
            Apicalls.post('customer', data)
                .then((response) => {
                    if (response.data.message === 'User already exists') {
                        setErrorMessage('Registration failed');
                    }
                    else if (response.data.ID) {
                        store.dispatch(storeUser(response.data))
                        // navigate('/login', { state: 'register' });
                        // navigate('/');
                        window.location.href = '/UserProfile';
                    } else {
                        setErrorMessage('Registration failed');
                    }
                })
                .catch((error) => {
                    setErrorMessage('Registration failed');
                })
                .finally(() => {
                    setButtonLoading(false);
                });
        }
    };

    return (
        <section>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 login_first_section d-flex justify-content-center align-items-center my-5'>
                        <div>
                            <div style={{ textAlign: 'center' }}>
                                <img src={firstlogo} alt={firstlogo} className='img-fluid d-md-none' />
                            </div>
                            <h1 className='welcome'>Welcome to our platform</h1>
                            <h6 className='enteryourdetails'>Please enter your details to sign up.</h6>

                            <form className=' '>
                                <div className='register_form_center_fields'>
                                    <div>
                                        <label className='mb-2 mt-2 register_text_naems'>Name</label>
                                        <br />
                                        <input
                                            type='text'
                                            onChange={(e) => setData({ ...data, name: e.target.value })}
                                            style={{ borderColor: requiredFields['name'] }}
                                            placeholder='Enter Your Name'
                                            className='info_only_md_ard_input2'
                                        />
                                    </div>
                                    <div>
                                        <label className='mb-2 mt-2 register_text_naems'>Mobile Number</label>
                                        <br />
                                        <input
                                            type='tel'
                                            onChange={(e) => setData({ ...data, mobile: e.target.value })}
                                            style={{ borderColor: requiredFields['mobile'] }}
                                            placeholder='Enter Your Mobile Number'
                                            className='info_only_md_ard_input2'
                                        />
                                    </div>
                                    <div>
                                        <label className='mb-2 mt-2 email register_text_naems'>Email</label>
                                        <br />
                                        <input
                                            type='email'
                                            style={{ borderColor: requiredFields['email'] }}
                                            onChange={(e) => setData({ ...data, email: e.target.value })}
                                            placeholder='Enter Your email'
                                            className='info_only_md_ard_input2'
                                        />
                                    </div>
                                    <div>
                                        <label className='mb-2 mt-2 password register_text_naems'>Password</label>
                                        <br />
                                        <input
                                            type='password'
                                            onChange={(e) => setData({ ...data, password: e.target.value })}
                                            style={{ borderColor: requiredFields['password'], marginBottom: '20px' }}
                                            placeholder='Enter Your Password'
                                            className='info_only_md_ard_input2'
                                        />
                                    </div>
                                </div>



                                <div style={{ color: 'red' }}>{errorMessage}</div>
                                <Button
                                    variant='success'
                                    onClick={() => signup()}
                                    disabled={buttonLoading}
                                    size='lg'
                                    className='ps-5 pe-5 btn-lg w-100 mb-3'>
                                    Sign up
                                </Button>

                                {/* <Button variant='' size='lg' className='ps-5 pe-5 btn-lg w-100 signwithgoogle' style={{ border: '1px solid black' }}>
                                    <img src={googlelogo} alt={googlelogo} className='img-fluid googleimage_siza' />
                                    Sign up with Google
                                </Button> */}

                                <p className='my-3'>
                                    Already have an account? <span className='signup' onClick={() => {
                                        navigate('/login')
                                    }} style={{ cursor: 'pointer' }}>Sign in</span>
                                </p>
                            </form>

                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 login_second_section d-none d-md-flex justify-content-center align-items-center'>
                            <img src={secondlogo} alt={secondlogo} className='img-fluid' />
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
