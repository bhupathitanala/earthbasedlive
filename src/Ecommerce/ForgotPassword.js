import React, { useState } from 'react';
import secondlogo from '../assets/login_second_logo2 .png';
import firstlogo from '../assets/login_second_logo1.png';
import googlelogo from '../assets/google_loginPage.png';
import { Button } from 'react-bootstrap';
import Apicalls from '../Apicalls';
import store from '../store';
import { storeUser, storeUserError } from '../AuthActions';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [data, setData] = useState({ email: '', otp: '' });
    const [requiredFields, setRequiredFields] = useState({ email: '', otp: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false); // State to track if OTP is sent
    const [otpVerify, setOtpVerify] = useState(false); // State to track if OTP is Verified or not
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(otpSent === false){
            let isValid = true;
            if (!data.email || data.email.trim() === '') {
                isValid = false;
                setRequiredFields((prevFields) => ({ ...prevFields, email: 'red' }));
            } else {
                setRequiredFields((prevFields) => ({ ...prevFields, email: '' }));
            }

            if (isValid) {
                setButtonLoading(true);
                Apicalls.post('customer/forgotpwd', data)
                .then((response) => {
                    if (response.data.message === 'Mail Sent') {
                        setOtpSent(true); // Set OTP sent to true
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
        }else if(otpSent === true && otpVerify === false){
            let isValid = true;
            if (!data.email || data.email.trim() === '') {
                isValid = false;
                setRequiredFields((prevFields) => ({ ...prevFields, email: 'red' }));
            } else {
                setRequiredFields((prevFields) => ({ ...prevFields, email: '' }));
            }
    
            if (!data.otp || data.otp.trim() === '') {
                isValid = false;
                setRequiredFields((prevFields) => ({ ...prevFields, otp: 'red' }));
            } else {
                setRequiredFields((prevFields) => ({ ...prevFields, otp: '' }));
            }
    
            if (isValid) {
                setButtonLoading(true);
                Apicalls.post('customer/verifyOTP', data)
                .then((response) => {
                    if (response.data.message === 'OTP Verified') {
                        setOtpVerify(true); // Set OTP sent to true
                    } else {
                        setErrorMessage('Invalid OTP');
                        store.dispatch(storeUserError());
                    }
                })
                .catch((error) => {
                    setErrorMessage('Invalid OTP');
                })
                .finally(() => {
                    setButtonLoading(false);
                });
            }
        }else if(otpVerify === true && otpSent === true){
            let isValid = true;
            if (!data.password || data.password.trim() === '') {
                isValid = false;
                setRequiredFields((prevFields) => ({ ...prevFields, password: 'red' }));
            } else {
                setRequiredFields((prevFields) => ({ ...prevFields, password: '' }));
            }

            if (!data.cpassword || data.cpassword.trim() === '') {
                isValid = false;
                setRequiredFields((prevFields) => ({ ...prevFields, cpassword: 'red' }));
            } else {
                setRequiredFields((prevFields) => ({ ...prevFields, cpassword: '' }));
            }

            if(data.password !== data.cpassword){
                isValid = false;
                setErrorMessage('Password Mismatch');
                setRequiredFields((prevFields) => ({ ...prevFields, cpassword: 'red' }));
            } else {
                setErrorMessage('');
                setRequiredFields((prevFields) => ({ ...prevFields, cpassword: '' }));
            }


            if (isValid) {
                setButtonLoading(true);
                Apicalls.post('customer/changePassword', data)
                .then((response) => {
                    if (response.data.message === 'Password Changed') {
                        alert('Password changed')
                        navigate("/login")
                    } else {
                        setErrorMessage('Internal Error');
                        store.dispatch(storeUserError());
                    }
                })
                .catch((error) => {
                    setErrorMessage('Internal Error');
                })
                .finally(() => {
                    setButtonLoading(false);
                });
            }
        }
    }

    

    return (
        <>
            {/* First section */}
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 login_first_section d-flex justify-content-center align-items-center my-5">
                            <div hidden={otpVerify}>
                                <div style={{ textAlign: 'center' }}>
                                    <img src={firstlogo} alt={firstlogo} className="img-fluid d-md-none" />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h1 className="welcome">Forgot Password</h1>
                                </div>
                                <form style={{ fontFamily: 'fantasy' }} onSubmit={handleSubmit}>
                                    <div className="login_form_center_fields">
                                        <div>
                                            <label className="mb-2 mt-2 register_text_naems email">Email</label>
                                            <br />
                                            <input
                                                type="email"
                                                disabled={otpSent}
                                                style={{ borderColor: requiredFields.email }}
                                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                                placeholder="Enter Your email"
                                                className="info_only_md_ard_input2"
                                            />
                                        </div>

                                        {otpSent && ( // Render OTP input if OTP is sent
                                            <div>
                                                <label className="mb-2 mt-2 register_text_naems otp">OTP</label>
                                                <br />
                                                <input
                                                    type="number"
                                                    style={{ borderColor: requiredFields.otp }}
                                                    onChange={(e) => setData({ ...data, otp: e.target.value })}
                                                    placeholder="Enter OTP"
                                                    className="info_only_md_ard_input2"
                                                />
                                            </div>
                                        )}

                                        <div className="mt-4" style={{ color: 'red' }}>
                                            {errorMessage}
                                        </div>
                                        {!otpSent && (
                                        <Button variant="success" disabled={buttonLoading}
                                            size="lg" className="ps-5 pe-5 btn-lg w-100 mb-3 ">
                                            Send OTP
                                        </Button>
                                        )}
                                        
                                        {otpSent && (
                                        <Button variant="success" disabled={buttonLoading}
                                            type='submit'
                                            size="lg" className="ps-5 pe-5 btn-lg w-100 mb-3 ">
                                            Verify OTP
                                        </Button>
                                        )}

                                        <p className="mt-4">
                                            Back to 
                                            <span className="signup"
                                                onClick={() => {
                                                    navigate('/login');
                                                }}
                                                disabled={buttonLoading}
                                                style={{ cursor: 'pointer' }} >
                                                &nbsp; Login
                                            </span>
                                        </p>
                                    </div>
                                </form>
                            </div>

                            <div hidden={!otpVerify}>
                                <div style={{ textAlign: 'center' }}>
                                    <img src={firstlogo} alt={firstlogo} className="img-fluid d-md-none" />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h1 className="welcome">Forgot Password</h1>
                                </div>
                                <form style={{ fontFamily: 'fantasy' }} onSubmit={handleSubmit}>
                                    <div className='login_form_center_fields'>
                                        <div>
                                            <label className="mb-2 mt-2 register_text_naems email">Password</label>
                                            <br />
                                            <input
                                                type="password"
                                                style={{ borderColor: requiredFields.password }}
                                                onChange={(e) => setData({ ...data, password: e.target.value })}
                                                placeholder="Enter New Password"
                                                className="info_only_md_ard_input2"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 mt-2 register_text_naems email">Confirm Password</label>
                                            <br />
                                            <input
                                                type="password"
                                                style={{ borderColor: requiredFields.cpassword }}
                                                onChange={(e) => setData({ ...data, cpassword: e.target.value })}
                                                placeholder="Reenter Password"
                                                className="info_only_md_ard_input2"
                                            />
                                        </div>
                                        
                                        <div className="mt-4" style={{ color: 'red' }}>
                                            {errorMessage}
                                        </div>

                                        <Button variant="success" type='submit'
                                            size="lg" className="ps-5 pe-5 btn-lg w-100 mb-3 mt-4 ">
                                            Change Password
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 login_second_section d-none d-md-flex justify-content-center align-items-center">
                            <img src={secondlogo} alt={secondlogo} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ForgotPassword;
