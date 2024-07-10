import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Apicalls from '../Apicalls';
import store from '../store';
import { storeUser, storeUserError } from '../AuthActions';
import { useNavigate } from 'react-router-dom';
import firstlogo from '../assets/login_second_logo1.png';
import googlelogo from '../assets/google_loginPage.png';

function Register() {
    const [data, setData] = useState({ email: '',companyname: '', companyregnum:'', companycertnum: '', address: '',  password: '', mobile: '', name: '' });
    const [requiredFields, setRequiredFields] = useState({ email: '', password: '', mobile: '', name: '', companyname: '', companycertnum:'', companyregnum:'', address:'' });
    const [errorMessage, setErrorMessage] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);
    const navigate = useNavigate();

    // const signup = () => {
    //     let object = requiredFields;
    //     let isValid = true;
    //     if (!data.email || data.email.trim() === '') {
    //         isValid = false;
    //         object.email = 'red';
    //     } else {
    //         object.email = '';
    //     }
    //     if (!data.password || data.password.trim() === '') {
    //         isValid = false;
    //         object.password = 'red';
    //     } else {
    //         object.password = '';
    //     }
    //     if (!data.mobile || data.mobile.trim() === '') {
    //         isValid = false;
    //         object.mobile = 'red';
    //     } else {
    //         object.mobile = '';
    //     }
    //     if (!data.name || data.name.trim() === '') {
    //         isValid = false;
    //         object.name = 'red';
    //     } else {
    //         object.name = '';
    //     }
    //     data.status = 1;
    //     setRequiredFields(object);
    //     if (isValid) {
    //         setButtonLoading(true);
    //         Apicalls.post('customer', data)
    //             .then((response) => {
    //                 if (response.data.message === 'User already exists') {
    //                     setErrorMessage('Registration failed');
    //                 }
    //                 else if (response.data.ID) {
    //                     navigate('/login', { state: 'register' });
    //                 } else {
    //                     setErrorMessage('Registration failed');
    //                 }
    //             })
    //             .catch((error) => {
    //                 setErrorMessage('Registration failed');
    //             })
    //             .finally(() => {
    //                 setButtonLoading(false);
    //             });
    //     }
    // };

    return (
        <section>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 login_first_section d-flex justify-content-center align-items-center m-5'>
                        <div>
                            <div style={{ textAlign: 'center' }}>
                                <img src={firstlogo} alt={firstlogo} className='img-fluid d-md-none' />
                            </div>
                            <h1 className='welcome'>Welcome to our platform</h1>
                            <h6 className='enteryourdetails'>Please enter your details to Become a Vendor.</h6>

                            <form>
                                <div className='row mt-3'>
                                    <div className='col-lg-6 col-sm-12 '>
                                        <label className='mb-2 mt-2 email'>Name</label>
                                        <br />
                                        <input
                                            type='text'
                                            style={{ borderColor: requiredFields['name'] }}
                                            onChange={(e) => setData({ ...data, name: e.target.value })}
                                            placeholder='Enter Your name'
                                            className='info_only_md_ard_input2'
                                        />
                                    </div>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label className='mb-2 mt-2 email'>Compnay Name</label>
                                        <br />
                                        <input
                                            type='text'
                                            style={{ borderColor: requiredFields['companynamre'] }}
                                            onChange={(e) => setData({ ...data, companyname: e.target.value })}
                                            placeholder='Enter Your Company Name'
                                            className='info_only_md_ard_input2'
                                        />
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label className='mb-2 mt-2 password'>Comapny Registered Number</label>
                                        <br />
                                        <input
                                            type='text'
                                            onChange={(e) => setData({ ...data, companyregnum: e.target.value })}
                                            style={{ borderColor: requiredFields['companyregnum'] }}
                                            placeholder='Company Registered number'
                                            className='info_only_md_ard_input2'
                                        />
                                    </div>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label className='mb-2 mt-2'>Company Certificcate Number</label>
                                        <br />
                                        <input
                                            type='text'
                                            onChange={(e) => setData({ ...data, companycertnum: e.target.value })}
                                            style={{ borderColor: requiredFields['companycertnum'] }}
                                            placeholder='Certificate number'
                                            className='info_only_md_ard_input2'
                                        />
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label className='mb-2 mt-2'>Address</label>
                                        <br />
                                        <input
                                            type='text'
                                            onChange={(e) => setData({ ...data, address: e.target.value })}
                                            style={{ borderColor: requiredFields['address'], marginBottom: '20px' }}
                                            placeholder='Enter Your Address'
                                            className='info_only_md_ard_input2'
                                        />
                                    </div>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label className='mb-2 mt-2'>Mobile</label>
                                        <br />
                                        <input
                                            type='tel'
                                            onChange={(e) => setData({ ...data, mobile: e.target.value })}
                                            style={{ borderColor: requiredFields['mobile'], marginBottom: '20px' }}
                                            placeholder='Enter Your Mobile number'
                                            className='info_only_md_ard_input2'
                                        />
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label className='mb-2 mt-2'>Email</label>
                                        <br />
                                        <input
                                            type='email'
                                            onChange={(e) => setData({ ...data, email: e.target.value })}
                                            style={{ borderColor: requiredFields['email'], marginBottom: '20px' }}
                                            placeholder='Enter Your email'
                                            className='info_only_md_ard_input2'
                                        />
                                    </div>
                                    <div className='col-lg-6 col-sm-12'>
                                        <label className='mb-2 mt-2'>Password</label>
                                        <br />
                                        <input
                                            type='password'
                                            onChange={(e) => setData({ ...data, password: e.target.value })}
                                            style={{ borderColor: requiredFields['password'], marginBottom: '20px' }}
                                            placeholder='Enter Your password'
                                            className='info_only_md_ard_input2'
                                        />
                                    </div>
                                </div>

                                <div style={{ color: 'red' }}>{errorMessage}</div>
                                <Button
                                    variant='success'
                                    // onClick={() => signup()}
                                    disabled={buttonLoading}
                                    size='lg'
                                    className='ps-5 pe-5 btn-lg w-100 mb-3'>
                                    Sign up
                                </Button>

                                <Button variant='' size='lg' className=' btn-lg w-100 signwithgoogle' style={{ border: '1px solid black' }}>
                                    <img src={googlelogo} alt={googlelogo} className='img-fluid' style={{width: '30px'}} />
                                    Sign in with Google
                                </Button>

                                <p className='my-5'>
                                    Already have an account? <span className='signup'>Sign in</span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
