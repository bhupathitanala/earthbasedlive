import { useEffect, useState } from "react"
import Apicalls, { post_url }  from "../Apicalls";
import { useNavigate } from "react-router-dom";
import store from "../store";
import example_bloag_2 from '../assets/example_bloag_2.png';
import { storeUser, storeUserError } from "../AuthActions";
import ota_milk_front from '../assets/header_images/ota_milk_front.png'
import { useSelector } from "react-redux";

export default function BuyProductCheckout() {
    const [data, setData] = useState({ email: '', password: '' })
    const [requiredFields, setRequiredFields] = useState({ email: '', password: '' })
    const [currentStep, setCurrentStep] = useState('login')
    const [errorMessage, setErrorMessage] = useState('')
    const [message, setMessage] = useState('')
    const [buttonLoading, setButtonLoading] = useState(false)
    const [selectedOption, setSelectedOption] = useState("1");
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [finalAmount, setFinalAmount] = useState()
    const [payload, setPayload] = useState({})
    const [pincodes, setPincodes] = useState([])
    const user = useSelector((state) => state.user.auth.user)
    console.log(user, window.location.pathname.split('/')[2])
    const [isPanIndia, setIsPanIndia] = useState(false)
    const [billingAddressData, setBillingAddressData] = useState({ firstName: '', lastName: '', address: '', pincode: '', city: '', state: '' })

    const [saveCardDetails, setSaveCardDetails] = useState(false); // State to track whether card details should be saved

    // Function to handle checkbox change
    const handleCheckboxChange = () => {
        setSaveCardDetails(!saveCardDetails); // Toggle the state when checkbox is clicked
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };


    useEffect(() => {
        if (window.location.pathname.split('/')[2]) {
            Promise.all([
                Apicalls.get('products/' + window.location.pathname.split('/')[2])
            ]).then(([data]) => {
                setFinalAmount(data.data.price)
                setIsPanIndia(JSON.parse(data.data.features)?.includes('1'))
                setPincodes(JSON.parse(data.data.pincodes))
                setProduct(data.data)
            }).catch((err) => {
                console.log(err)
                // navigate('/')
            })
        }
        else {
            // navigate('/')
        }
        if (user?.ID) {
            setCurrentStep('billingAndShipping')
        }
    }, [window.location.pathname.split('/')[2]])

    function buyProductItem() {
        if (quantity && finalAmount && selectedOption) {
            Promise.all([
                Apicalls.post('order', { ...payload, quantity: quantity, finalAmount: finalAmount, coupon: '', paymentType: selectedOption })
            ]).then(([data]) => {
                if (Object.keys(data.data).length > 0) {
                    alert('Successully Placed order')
                    navigate('/')
                }
            }).catch(error => {
                console.log(error)
            });
        }
    }

    function handleBillingAndShipping() {
        let isValid = true;
        Object.entries(billingAddressData).map(([key, value]) => {
            if (value.trim() === '' || !value) {
                isValid = false
            }
        })
        if (isValid) {
            if (!pincodes.includes(billingAddressData.pincode) && !isPanIndia) {
                setMessage('Not deliver to your pincode')
            }
            else {
                setMessage('')
                const payload = {
                    name: `${billingAddressData.firstName} ${billingAddressData.lastName}`,
                    address: JSON.stringify({
                        'h.no': billingAddressData['h.no'],
                        // village: data.village,
                        pincode: billingAddressData.pincode,
                        city: billingAddressData.city,
                        // district: data.district,
                        state: billingAddressData.state,
                        coupon: ''
                    }),
                    paymentType: billingAddressData.paymentType === 'cod' ? '0' : '1',
                    productId: window.location.pathname.split('/')[2],
                    userId: user.ID,
                    status: '0'
                };
                setPayload(payload)
                setCurrentStep('checkout')
            }
        }
    }

    const signin = () => {
        let object = requiredFields;
        let isValid = true;
        if (!data.email || data.email.trim() === '') {
            isValid = false
            object.email = 'red'
        }
        else {
            object.email = ''
        }
        if (!data.password || data.password.trim() === '') {
            isValid = false
            object.password = 'red'
        }
        else {
            object.password = ''
        }
        console.log(isValid, object)
        setRequiredFields(object)
        if (isValid) {
            setButtonLoading(true)
            Promise.all(
                [
                    Apicalls.post('customer/login', data)
                ]
            ).then(([data]) => {
                console.log(data.data.message === 'Login successful')
                if (data.data.message === 'Login successful') {
                    console.log(data)
                    store.dispatch(storeUser(data.data.user))
                    setCurrentStep('billingAndShipping')
                }
                else {
                    setErrorMessage('Invalid Credentials')
                    store.dispatch(storeUserError())
                }
            }).catch((error) => {
                setErrorMessage('Invalid Credentials')
            }).finally(() => {
                setButtonLoading(false)
            })
        }
    }

    return <>
        <section className='my-5'>
            <div className='container ' >
                <div className='row text-center  '>

                    <div className='col-4 onlu_for_line_up_the_btn  z_index_matters'>
                        <button className={`laying_page_text ${currentStep === 'login' ? 'active_bg_payment' : ''}`} >Login</button>
                    </div>

                    <div className='col-4 onlu_for_line_up_the_btn z_index_matters'>
                        <button className={`laying_page_text ${currentStep === 'billingAndShipping' ? 'active_bg_payment' : ''}`} >Billing & Shopping</button>
                    </div>

                    <div className='col-4 onlu_for_line_up_the_btn z_index_matters'>
                        <button className={`laying_page_text ${currentStep === 'checkout' ? 'active_bg_payment' : ''}`} >Payment</button>
                    </div>

                </div>
                <hr className='line-through-buttons' />
            </div>
        </section>

        {(() => {
            switch (currentStep) {
                case 'login':
                    return <section>
                        <div className="container for_height_gg ">
                            <div className="login_sg">
                                <div className="row need_to_be_center">
                                    <div className="col-md-12 col-lg-6 center_need_section">
                                        <div>
                                            <img src={example_bloag_2} alt={example_bloag_2} className='  img-fluid' />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6 d-block d-lg-none">
                                        <p className="login_para">If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
                                    </div>
                                    <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                                        <div className=''>
                                            <p className='full_name '>Username or email *</p>
                                            <input className='  info_only_md_ard_input2' onChange={(e) => setData({ ...data, email: e.target.value })} ></input>
                                        </div>
                                        <div className='mt-4'>
                                            <p className='full_name '>Password </p>
                                            <input className='  info_only_md_ard_input2' onChange={(e) => setData({ ...data, password: e.target.value })} ></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4 d-flex ">
                                    <div className="col-md-12 col-lg-6 d-none d-lg-block">
                                        <p className="login_para">If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
                                    </div>
                                    <div className="col-md-12 col-lg-6 ">
                                        <button className='next_btn_info ' onClick={() => signin()}>Login</button>
                                        <input
                                            className='check_box_size ms-4'
                                            type="checkbox"
                                            id="saveCardDetails"
                                            checked={saveCardDetails}
                                            onChange={handleCheckboxChange}
                                        />  &nbsp;
                                        <label className='save_account' htmlFor="saveCardDetails"> Remember me</label>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                case 'billingAndShipping':
                    return <section>
                        <form>
                            <div className='container for_height_gg sliver_bg '   >
                                <div className='row nee_to_be_center '>



                                    <div className='col-md-6 center_need_section '>
                                        <div className='   full_name_div  '>
                                            <p className='full_name '>   First Name  </p>
                                            <input className='  info_only_md_ard_input' onChange={(e) => setBillingAddressData({ ...billingAddressData, firstName: e.target.value })} ></input>
                                        </div>


                                        <div className='last_div'>
                                            <p className='full_name'>  Last name   </p>
                                            <input className='  info_only_md_ard_input' onChange={(e) => setBillingAddressData({ ...billingAddressData, lastName: e.target.value })} ></input>
                                        </div>



                                        <div className='Phone_div '>
                                            <p className='full_name'> Phone *</p>
                                            <input className='  info_only_md_ard_input' onChange={(e) => setBillingAddressData({ ...billingAddressData, phone: e.target.value })} ></input>
                                        </div>

                                        <div className='Email_div '>
                                            <p className='full_name'>Email address *</p>
                                            <input className='  info_only_md_ard_input' onChange={(e) => setBillingAddressData({ ...billingAddressData, email: e.target.value })} ></input>
                                        </div>



                                    </div>


                                    <div className='col-md-6 center_need_section '>
                                        <div className='city_div '>
                                            <p className='full_name'>House NO., Building., Road., Area</p>
                                            <input className='  info_only_md_ard_input' onChange={(e) => setBillingAddressData({ ...billingAddressData, address: e.target.value })} ></input>
                                        </div>
                                        <div className='Citye_div '>
                                            <p className='full_name'>City</p>
                                            <input className='  info_only_md_ard_input' onChange={(e) => setBillingAddressData({ ...billingAddressData, city: e.target.value })} ></input>
                                        </div>

                                        <div className='Pincode_div '>
                                            <p className='full_name'>Pincode *</p>
                                            <input className='  info_only_md_ard_input' onChange={(e) => setBillingAddressData({ ...billingAddressData, pincode: e.target.value })} ></input>
                                        </div>

                                        <div className='State_div '>
                                            <p className='full_name'>State *</p>
                                            <input className='  info_only_md_ard_input' onChange={(e) => setBillingAddressData({ ...billingAddressData, state: e.target.value })} ></input>
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
                                            <button className='next_btn_info mt-4' onClick={() => handleBillingAndShipping()}>Next</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </form>
                    </section>
                case 'checkout':
                    return <section>


                        <div className='container   for_height_gg bg_ligit_checkout'>
                            <div className='row'>
                                <div className='col-md-6 only_padding_chechkout only_for_sm_payment_checkout order-2 order-md-1'>
                                    <h3 className='payment_heading_sm_divice'>Payment</h3>
                                    <hr></hr>

                                    <div>
                                        <div className='mt-3'>
                                            <p> <strong>Pay With:</strong> </p>
                                            <div className='row '>
                                                <div  >
                                                    <input
                                                        type="radio"
                                                        id="creditCard"
                                                        value="1"
                                                        checked={selectedOption === "1"}
                                                        onChange={handleOptionChange}
                                                        className='  me-1'


                                                    />
                                                    <label htmlFor="creditCard"> Card</label>

                                                    <input
                                                        type="radio"
                                                        id="paypal"
                                                        value="2"
                                                        checked={selectedOption === "2"}
                                                        onChange={handleOptionChange}
                                                        className='ms-4 me-1'

                                                    />
                                                    <label className='me-4' htmlFor="bank">Bank</label>

                                                    <input
                                                        type="radio"
                                                        id="bankTransfer"
                                                        value="3"
                                                        checked={selectedOption === "3"}
                                                        onChange={handleOptionChange}
                                                        className='  me-1'

                                                    />

                                                    <label htmlFor="bankTransfer">UPI</label>

                                                    <input
                                                        type="radio"
                                                        id="cod"
                                                        value="0"
                                                        checked={selectedOption === "0"}
                                                        onChange={handleOptionChange}
                                                        className='  me-1'

                                                    />
                                                    <label htmlFor="bankTransfer">COD</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-3'>
                                            <p> <strong>Card Number</strong> </p>
                                            <input className='  only_md_ard_input' placeholder='  1234 - 5678 - 9012'></input>
                                        </div>

                                        <div className='mt-3 row'>
                                            <div className='col-6'>

                                                <p> <strong>Expiration Date</strong> </p>
                                                <input className='check_out_card_input' placeholder='  MM/YY'></input>
                                            </div>
                                            <div className='col-6   '>

                                                <p> <strong>CVV</strong> </p>
                                                <input className='check_out_card_input' placeholder='  123 '></input>

                                            </div>
                                        </div>


                                        <div className=' my-4'>
                                            <input
                                                type="checkbox"
                                                id="saveCardDetails"
                                                checked={saveCardDetails}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className='save_details' htmlFor="saveCardDetails">Save Card Details</label>
                                        </div>



                                        <button className='ind_rupees '>Pay IND Rupees</button>

                                    </div>
                                    <br />


                                </div>




                                <div className='col-md-6 only_padding_chechkout order-1  order-md-2'>
                                    <h3 className='payment_heading_sm_divice'>  Order Summary</h3>
                                    <hr></hr>

                                    <div>
                                        <div className='row'>
                                            <div className='col-3 col-md-3 col-lg-3'>
                                                <img class="img-fluid  checlout_page_img" src={post_url+product.main_img} alt={product.heading} />

                                            </div>
                                            <div className='col-6 col-md-5  col-lg-5'>
                                                <p className='checlout_page_name'>{product.heading}</p>
                                                <p className='checlout_page_product'>{product.title}</p>
                                            </div>
                                            <div className='col-3 col-md-4  col-lg-3'>
                                                <p className='checlout_page_price'>₹{finalAmount}</p>
                                                <p className='checlout_page_qty'>Qty: {quantity}</p>
                                            </div>

                                        </div>
                                        <hr></hr>


                                        <div className=' d-flex  sub_total_div'>
                                            <input className='gift_input' style={{ width: '100%', paddingRight: '10px' }} type='number' placeholder='Enter qunatity' value={quantity} onChange={(e) => {
                                                setQuantity(e.target.value);
                                                setFinalAmount(product.price * e.target.value)
                                            }}></input>
                                        </div>

                                        <hr></hr>
                                        <div className=' d-flex  sub_total_div'>
                                            <input className='gift_input' placeholder='    Gift or discount code'></input>
                                            <button className='apply_btn_gift'>Apply</button>
                                        </div>
                                        <hr></hr>


                                        <div className='  d-flex  sub_total_div'>

                                            <p className='para_text_checkout'>Subtotal</p>
                                            <p className='para_text_checkout'>₹{finalAmount}</p>


                                        </div>
                                        <div className='  d-flex  sub_total_div'>

                                            <p className='para_text_checkout'>Shipping</p>
                                            <p className='para_text_checkout'>₹0.00</p>


                                        </div>

                                        <hr></hr>

                                        <div className='  d-flex  sub_total_div'>

                                            <p className='para_text_checkout'>Total
                                                {/* <br></br> <span className='including_txs'>Including $2.24 in taxes</span>  */}
                                            </p>
                                            <p className='total_price'>₹{finalAmount}</p>


                                        </div>


                                        <button className='ind_rupees ' onClick={() => buyProductItem()}>Place Order</button>


                                    </div>

                                </div>

                            </div>


                            <div className='row my-4'>
                                <div className='col-lg-6 col-md-12 only_padding_chechkout'>
                                    <p className='trms_txt'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                </div>
                            </div>
                        </div>

                    </section>
            }
        })()
        }
    </>
}