
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Apicalls from '../Apicalls';

function Shipping() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.auth.user);

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        pincode: '',
        city: '',
        state: ''
    });

    const [requiredFields, setRequiredFields] = useState({
        firstName: '',
        phone: '',
        email: '',
        address: '',
        pincode: '',
        city: '',
        state: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);

    // useEffect(() => {
    //     if (!user?.ID) {
    //         navigate('/login');
    //     }
    // }, [navigate, user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const validateForm = () => {
        const requiredFieldsCopy = { ...requiredFields };
        let isValid = true;

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                if (!data[key] || data[key].trim() === '') {
                    requiredFieldsCopy[key] = 'red';
                    isValid = false;
                } else {
                    requiredFieldsCopy[key] = '';
                }
            }
        }

        setRequiredFields(requiredFieldsCopy);
        return isValid;
    };

    const saveAddress = async () => {
        try {
            if (validateForm()) {
                setButtonLoading(true);
                data.customer_id = user.ID;

                const addressdata = await Apicalls.post('address/saveaddress', data);
                console.log(addressdata.data);
                alert('Address saved successfully');
                navigate('/pcheckout');
            } else {
                console.log('Invalid data');
            }
        } catch (error) {
            console.error('Error while saving address:', error);
            // Handle error here
        } finally {
            setButtonLoading(false);
        }
    };

    return (
        <  >
                
            <div className='container for_height_gg sliver_bg'>
            <form style={{ fontFamily: 'fantasy' }}>
                <center><h2><u>Shipping Address</u></h2></center>
                <br />
                <div className='row nee_to_be_center'>
                            <div className='col-md-6 center_need_section '>
                                <div className='   full_name_div  '>
                                    <p className='full_name '>   First Name  *</p>
                                    <input className='  info_only_md_ard_input' style={{ borderColor: requiredFields['firstName'] }} onChange={(e) => setData({ ...data, firstName: e.target.value })} ></input>
                                </div>


                                <div className='last_div'>
                                    <p className='full_name'>  Last name   </p>
                                    <input className='  info_only_md_ard_input' onChange={(e) => setData({ ...data, lastName: e.target.value })} ></input>
                                </div>

                                <div className='Phone_div '>
                                    <p className='full_name'> Phone *</p>
                                    <input className='  info_only_md_ard_input' style={{ borderColor: requiredFields['phone'] }} onChange={(e) => setData({ ...data, phone: e.target.value })} ></input>
                                </div>

                                <div className='Email_div '>
                                    <p className='full_name'>Email address *</p>
                                    <input className='  info_only_md_ard_input' style={{ borderColor: requiredFields['email'] }} onChange={(e) => setData({ ...data, email: e.target.value })} ></input>
                                </div>

                            </div>


                            <div className='col-md-6 center_need_section '>
                                <div className='city_div '>
                                    <p className='full_name'>House NO., Building., Road., Area  *</p>
                                    <input className='  info_only_md_ard_input' onChange={(e) => setData({ ...data, address: e.target.value })} ></input>
                                </div>
                                <div className='Citye_div '>
                                    <p className='full_name'>City *</p>
                                    <input className='  info_only_md_ard_input' onChange={(e) => setData({ ...data, city: e.target.value })} ></input>
                                </div>

                                <div className='Pincode_div '>
                                    <p className='full_name'>Pincode *</p>
                                    <input className='  info_only_md_ard_input' onChange={(e) => setData({ ...data, pincode: e.target.value })} ></input>
                                </div>

                                <div className='State_div '>
                                    <p className='full_name'>State *</p>
                                    <input className='  info_only_md_ard_input' onChange={(e) => setData({ ...data, state: e.target.value })} ></input>
                                </div>
                            </div>


                            <div className='row   ' >
                                <div className='col-md-6 text-center'>
                                    <div className='mt-4 '>
                                        {/* <input
                                            className='check_box_size'
                                            type="checkbox"
                                            id="saveCardDetails"
                                            checked={saveCardDetails}
                                            onChange={handleCheckboxChange}
                                        />  &nbsp; */}
                                        {/* <label className='save_account  ' htmlFor="saveCardDetails"> Create an account?</label> */}
                                    </div>
                                </div>

                                <div className='col-md-6 text-center'>
                                <div style={{ color: 'red' }}>{errorMessage}</div>
                                    <button className='next_btn_info mt-4' onClick={()=>saveAddress()}>Save Address</button>
                                </div>

                            </div>

                        </div>
                </form>
                    </div>
           


        </>
    )
}

export default Shipping;