
import React, { useEffect, useState } from 'react';

import ota_milk_front from '../assets/header_images/ota_milk_front.png'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Apicalls from '../Apicalls';




function Infopage() {

    const [selectedOption, setSelectedOption] = useState(""); // State to track selected option

    // Function to handle option selection
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [saveCardDetails, setSaveCardDetails] = useState(false); // State to track whether card details should be saved
    const [pincodes, setPincodes] = useState([])
    const [isPanIndia, setIsPanIndia] = useState(false)
    const [message, setMessage] = useState('')

    // Function to handle checkbox change
    const handleCheckboxChange = () => {
        setSaveCardDetails(!saveCardDetails); // Toggle the state when checkbox is clicked
    };
    const [data, setData] = useState({ firstName: '', lastName: '', address: '', pincode: '', city: '', state: '' })
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.auth.user)
    console.log(user, window.location.pathname.split('/')[2])

    const buyProductItem = () => {
        let isValid = true;
        Object.entries(data).map(([key, value]) => {
            if (value.trim() === '' || !value) {
                isValid = false
            }
        })
        if (isValid) {
            if (!pincodes.includes(data.pincode) && !isPanIndia) {
                setMessage('Not deliver to your pincode')
            }
            else {
                setMessage('')
                const payload = {
                    name: `${data.firstName} ${data.lastName}`,
                    address: JSON.stringify({
                        'h.no': data['h.no'],
                        // village: data.village,
                        pincode: data.pincode,
                        city: data.city,
                        // district: data.district,
                        state: data.state,
                        coupon: ''
                    }),
                    paymentType: data.paymentType === 'cod' ? '0' : '1',
                    productId: window.location.pathname.split('/')[2],
                    userId: user.ID,
                    status: '0'
                };

                // Proceed with buying the product
                navigate('/Checkout/' + window.location.pathname.split('/')[2], { state: { payload: payload } })
            }
        }
    };

    useEffect(() => {
        if (window.location.pathname.split('/')[2]) {
            Promise.all([
                Apicalls.get('products/' + window.location.pathname.split('/')[2])
            ]).then(([data]) => {
                setIsPanIndia(JSON.parse(data.data.features)?.includes('1'))
                setPincodes(JSON.parse(data.data.pincodes))
                setProduct(data)
            }).catch((err) => {
                console.log(err)
                // navigate('/')
            })
        }
        else {
            navigate('/')
        }
    }, [window.location.pathname.split('/')[2]])

    console.log(pincodes, isPanIndia)

    return (
        <  >

            <section className='my-5'>
                <div className='container ' >
                    <div className='row text-center  '>

                        <div className='col-4 onlu_for_line_up_the_btn  z_index_matters'>
                            <button className='laying_page_text' >Login</button>
                        </div>

                        <div className='col-4 onlu_for_line_up_the_btn z_index_matters'>
                            <button className='laying_page_text active_bg_payment' >Billing & Shopping</button>
                        </div>

                        <div className='col-4 onlu_for_line_up_the_btn z_index_matters'>
                            <button className='laying_page_text  ' >Payment</button>
                        </div>

                    </div>
                    <hr className='line-through-buttons' />
                </div>
            </section>

            <section>
                <form>
                    <div className='container for_height_gg sliver_bg '   >
                        <div className='row nee_to_be_center '>



                            <div className='col-md-6 center_need_section '>
                                <div className='   full_name_div  '>
                                    <p className='full_name '>   First Name  </p>
                                    <input className='  info_only_md_ard_input' onChange={(e) => setData({ ...data, firstName: e.target.value })} ></input>
                                </div>


                                <div className='last_div'>
                                    <p className='full_name'>  Last name   </p>
                                    <input className='  info_only_md_ard_input' onChange={(e) => setData({ ...data, lastName: e.target.value })} ></input>
                                </div>



                                <div className='Phone_div '>
                                    <p className='full_name'> Phone *</p>
                                    <input className='  info_only_md_ard_input' onChange={(e) => setData({ ...data, phone: e.target.value })} ></input>
                                </div>

                                <div className='Email_div '>
                                    <p className='full_name'>Email address *</p>
                                    <input className='  info_only_md_ard_input' onChange={(e) => setData({ ...data, email: e.target.value })} ></input>
                                </div>



                            </div>


                            <div className='col-md-6 center_need_section '>
                                <div className='city_div '>
                                    <p className='full_name'>House NO., Building., Road., Area</p>
                                    <input className='  info_only_md_ard_input' onChange={(e) => setData({ ...data, address: e.target.value })} ></input>
                                </div>
                                <div className='Citye_div '>
                                    <p className='full_name'>City</p>
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
                                    <div style={{ color: 'red' }}>{message}</div>
                                    <button className='next_btn_info mt-4' onClick={() => buyProductItem()}>Next</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </form>
            </section>


        </>
    )
}

export default Infopage;