
import React, { useEffect, useState } from 'react';

import ota_milk_front from '../assets/header_images/ota_milk_front.png'
import Apicalls, { post_url } from '../Apicalls';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import iconcard3 from '../assets/iconcard3.png';
import razorpayimg from '../assets/razorpay.webp';
import loaderimg from '../assets/loader2.gif';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Checkoutnew() {
    const user = useSelector((state) => state.user.auth.user)
    console.log(user)
    const [loading, setLoading] = useState(false); // Loading state
    const [selectedOption, setSelectedOption] = useState("1"); // State to track selected option
    const [cartItems, setCartItems] = useState([]);
    const [pincodes, setPincodes] = useState([])
    const [currentStep, setCurrentStep] = useState('login')
    // const user = useSelector((state) => state.user.auth.user)
    // console.log(user, window.location.pathname.split('/')[2])
    const [isPanIndia, setIsPanIndia] = useState(false)
    const [billingAddressData, setBillingAddressData] = useState({ firstName: '', lastName: '', address: '', pincode: '', city: '', state: '' })
    const [message, setMessage] = useState('')
    const [address, setAddress] = useState([])

    // const [saveCardDetails, setSaveCardDetails] = useState(false); // State to track whether card details should be saved



    useEffect(() => {
        if (user?.ID) {
            Promise.all([
                Apicalls.get('cart/customer/' + user.ID),
                Apicalls.get('address/getaddress/' + user.ID)
            ]).then(([productsData, addressData]) => {
                // productsData.data = productsData.data.map((item) => { item.qty = 1; return item })
                setCartItems(productsData.data)
                setAddress(addressData.data)
            }).catch((err) => {
                console.log(err)
            })
            localStorage.removeItem('cart_product_ids');
        }
        else {
            if (Array.isArray(JSON.parse(localStorage.getItem('cart_product_ids')))) {
                Promise.all([
                    Apicalls.post(`products/requiredProducts`, { productIds: JSON.parse(localStorage.getItem('cart_product_ids')) })
                ]).then(([data]) => {
                    setCartItems(data.data)
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }, []);

    // Function to handle option selection
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [saveCardDetails, setSaveCardDetails] = useState(false); // State to track whether card details should be saved

    // Function to handle checkbox change
    const handleCheckboxChange = () => {
        setSaveCardDetails(!saveCardDetails); // Toggle the state when checkbox is clicked
    };
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [finalAmount, setFinalAmount] = useState()
    const navigate = useNavigate()
    const [payload, setPayload] = useState({})

    // useEffect(() => {
    //     if (window.location.pathname.split('/')[2]) {
    //         Promise.all([
    //             Apicalls.get('products/' + window.location.pathname.split('/')[2])
    //         ]).then(([data]) => {
    //             setFinalAmount(data.data.price)
    //             setProduct(data.data)
    //         }).catch((err) => {
    //             console.log(err)
    //             // navigate('/')
    //         })
    //     }
    //     // else {
    //     //     navigate('/')
    //     // }
    //     // if (!window.history.state.usr?.payload) {
    //     //     navigate('/')
    //     // }
    //     // else {
    //     //     setPayload(window.history.state.usr?.payload)
    //     // }
    // }, [window.location.pathname.split('/')[2]])

    // function buyProductItem() {
    //     if (quantity && finalAmount && selectedOption) {
    //         Promise.all([
    //             Apicalls.post('order', { ...payload, quantity: quantity, finalAmount: finalAmount, coupon: '', paymentType: selectedOption })
    //         ]).then(([data]) => {
    //             if (Object.keys(data.data).length > 0) {
    //                 alert('Successully Placed order')
    //                 navigate('/')
    //             }
    //         }).catch(error => {
    //             console.log(error)
    //         });
    //     }
    // }

    // Razor payment process code

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const buyProductItem = async (finalamount) => {
        // alert(selectedOption)
        if(selectedOption === '0'){
            // setLoading(true);
            // alert("cod")
            let order_data = {
                payment_status: 'success',
                payment_type:'cod',
                amount: finalamount,
                payment_mode:'cod payment',
                customer_id:user.ID,
                customer_name: user.fullName,
                customer_email: user.email,
                customer_contact: user.phoneNumber,
                delivey_status:'pending',
                customer_address:address,
                product_details:cartItems,
                razorpay_details: null,
            }
            console.log(order_data)
            Promise.all([
                Apicalls.post('order/neworder', order_data)
            ]).then(([data]) => {
                if (Object.keys(data.data).length > 0) {
                    //setLoading(false); // Set loading to false when fetching finishes
                    alert('Successully Placed order')
                    window.location.href= '/UserProfile';
                    // navigate('/UserProfile')
                }
            }).catch(error => {
                console.log(error)
            })
        }else if(selectedOption === '1'){
            setLoading(true);
            // alert("online")
            // alert(user.fullName)
            // alert(finalamount)
            // const storage = JSON.parse(localStorage.getItem('user'));
        // const jwtToken = storage.token;

            const res = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );

            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
            }
            
            try {
                const response = await fetch('https://spotcoders.com/earthbased/payment/createOrder.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer ${jwtToken}`
                    },
                    body: JSON.stringify({ amount: finalamount }) // amount in INR
                });

                const data = await response.json();
                if (data.error) {
                    alert(`Error creating order: ${data.error}`);
                    return;
                }

                console.log(data);
                // return;
                setLoading(false);
                const options = {
                    key: 'rzp_test_J0o6xaM2xugXNd', // Enter the Key ID generated from the Dashboard
                    amount: finalamount * 100, // Amount in paise
                    currency: 'INR',
                    name: 'EarthBased',
                    description: 'Test Transaction',
                    image: 'https://earthbased.in/static/media/footer_logo.5c4eee81ce2a5e7c9022.png',
                    order_id: data.orderId,
                    handler: async (response) => {
                        try {
                            const verifyResponse = await fetch('https://spotcoders.com/earthbased/payment/verifyPayment.php', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    // 'Authorization': `Bearer ${jwtToken}`
                                },
                                body: JSON.stringify({
                                    razorpay_order_id: response.razorpay_order_id,
                                    razorpay_payment_id: response.razorpay_payment_id,
                                    razorpay_signature: response.razorpay_signature
                                }),
                            });

                            const verifyData = await verifyResponse.json();
                            console.log(verifyData)
                            if (verifyData.status === 'success') {
                                let order_data = {
                                    payment_status: 'success',
                                    payment_type:'online',
                                    amount: finalamount,
                                    payment_mode:'razor payment',
                                    customer_id:user.ID,
                                    customer_name: user.fullName,
                                    customer_email: user.email,
                                    customer_contact: user.phoneNumber,
                                    delivey_status:'pending',
                                    customer_address:address,
                                    product_details:cartItems,
                                    razorpay_details: JSON.stringify({
                                        razorpay_order_id: response.razorpay_order_id,
                                        razorpay_payment_id: response.razorpay_payment_id,
                                        razorpay_signature: response.razorpay_signature
                                    }),
                                }
                                console.log(order_data)
                                Promise.all([
                                    Apicalls.post('order/neworder', order_data)
                                ]).then(([data]) => {
                                    if (Object.keys(data.data).length > 0) {
                                        alert('Successully Placed order')
                                        // navigate('/UserProfile')
                                        window.location.href= '/UserProfile';
                                    }
                                }).catch(error => {
                                    console.log(error)
                                });
                                // alert('Payment successful!');
                            } else {
                                alert('Payment verification failed: ' + verifyData.message);
                            }
                        } catch (error) {
                            alert(`Error verifying payment: ${error.message}`);
                        }
                    },
                    prefill: {
                        // name: 'SriNath Reddy',
                        // email: 'srinath@earthbased.store',
                        // contact: '9999999999',
                        name: user.fullName,
                        email: user.email,
                        contact: user.phoneNumber,
                    },
                    notes: {
                        address: 'Razorpay Corporate Office',
                    },
                    theme: {
                        color: '#3399cc',
                    },
                };

                const rzp = new window.Razorpay(options);
                rzp.on('payment.failed', (response) => {
                    alert('Payment failed: ' + response.error.description);
                });

                rzp.open();
            } catch (error) {
                alert(`Error opening checkout: ${error.message}`);
            } finally {
                setLoading(false); // Set loading to false when fetching finishes
            }
        } 
        // if (quantity && finalAmount && selectedOption) {
        //     Promise.all([
        //         Apicalls.post('order', { ...payload, quantity: quantity, finalAmount: finalAmount, coupon: '', paymentType: selectedOption })
        //     ]).then(([data]) => {
        //         if (Object.keys(data.data).length > 0) {
        //             alert('Successully Placed order')
        //             navigate('/')
        //         }
        //     }).catch(error => {
        //         console.log(error)
        //     });
        // }
    }


    // end razor payment code

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

    return (
        <>

            


                <div className='container   for_height_gg bg_ligit_checkout'>
                    <div className='row'>

                    <div className='col-md-12 only_padding_chechkout'>
                    <div className="accordion" id="addressAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Address Details
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#addressAccordion">
                                <div className="accordion-body">
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <p><strong>Name:</strong> {address.firstName} {address.lastName}</p>
                                            <p><strong>Phone:</strong> {address.phone}</p>
                                            <p><strong>Email:</strong> {address.email}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p><strong>Address:</strong> {address.address}</p>
                                            <p><strong>Pincode:</strong> {address.pincode}</p>
                                            <p><strong>City:</strong> {address.city}</p>
                                            <p><strong>State:</strong> {address.state}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" >
                        Order Details
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#checkoutAccordion" >
                    <div className="accordion-body">
                        <div className="col-lg-12">
                                
                                {cartItems.map((item, index) => (
                                    <>
                                    <div className='row' key={item.id}>
                                        <div className='col-3 col-md-3 col-lg-3'>
                                            <img className="img-fluid checlout_page_img" src={post_url + 'productimages/' + item.main_img} alt={item.title} />
                                        </div>
                                        <div className='col-5 col-md-5 col-lg-5'>
                                            <p className='checlout_page_name'>{item.title}</p>
                                            {/* <p className='checlout_page_product'>{item.description_short}</p> */}
                                        </div>
                                        <div className='col-4 col-md-4 col-lg-4 justify-content-end' style={{textAlign:"right"}}>
                                            <p className='checlout_page_price'>₹ {item.sale_price * item.qty }</p>
                                            <p className='checlout_page_qty'>Qty: {item.qty}</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    </>
                                ))}
         
                                    
                                   

                                

                                <div className='mt-3'>

                                <div className='d-flex flex-column'>
                                    <div className='d-flex justify-content-between'>
                                        <p className='para_text_checkout'>Subtotal</p>
                                        <p className='para_text_checkout'>₹ {cartItems.reduce((total, item) => total + (item.sale_price * item.qty), 0).toFixed(2)}</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='para_text_checkout'>Shipping <span className='including_txs'>(Including taxes)</span></p>
                                        <p className='para_text_checkout'>₹ {cartItems.reduce((total, item) => total + item.shipping_charges, 0).toFixed(2)}</p>
                                    </div>

                                    
                                </div>
                                </div>
                            </div>



                    </div>
                </div>
            </div>






                    </div>

                    <div className='d-flex flex-column'>
                                    {/* <div className='d-flex justify-content-between'>
                                        <p className='para_text_checkout'>Subtotal</p>
                                        <p className='para_text_checkout'>₹ {cartItems.reduce((total, item) => total + (item.sale_price * item.qty), 0).toFixed(2)}</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='para_text_checkout'>Shipping <span className='including_txs'>(Including taxes)</span></p>
                                        <p className='para_text_checkout'>₹ {cartItems.reduce((total, item) => total + item.shipping_charges, 0).toFixed(2)}</p>
                                    </div>

                                    <hr></hr> */}

                                    <div className='d-flex justify-content-between' >
                                        <p className='para_text_checkout'></p>
                                        {/* <p className='including_txs'>Including $2.24 in taxes</p> */}
                                        <p className='total_price'>Total : ₹ {(cartItems.reduce((total, item) => total + (item.sale_price * item.qty), 0) + cartItems.reduce((total, item) => total + item.shipping_charges, 0)).toFixed(2)}</p>
                                    </div>
                                <hr></hr>
                                <div className=''>
                                    <p> <strong><u>Pay With</u></strong> </p>
                                    <div className='row '>
                                        <div  >
                                           
                                            <input
                                                type="radio"
                                                id="bankTransfer"
                                                value="1"
                                                checked={selectedOption === "1"}
                                                onChange={handleOptionChange}
                                                className='  me-1'

                                            />

                                            <label htmlFor="bankTransfer">
                                                {/* <img src={razorpayimg}
                                    alt="UPI" className="shipping-icon" width={100} height={80} /> */}
                                     Online Payment</label>

                                            <input
                                                type="radio"
                                                id="cod"
                                                value="0"
                                                checked={selectedOption === "0"}
                                                onChange={handleOptionChange}
                                                className='ms-4 me-1'

                                            />
                                            <label htmlFor="bankTransfer"><img src={iconcard3}
                                    alt="Free Shipping" className="shipping-icon" width={25} height={30} /> COD</label>
                                        </div>
                                    </div>
                                </div>



                                <div className='d-flex justify-content-end'>
                                    <button className='ind_rupees' onClick={() => buyProductItem((cartItems.reduce((total, item) => total + (item.sale_price * item.qty), 0) + cartItems.reduce((total, item) => total + item.shipping_charges, 0)).toFixed(2))}>Pay IND Rupees</button>
                                </div>
                                </div>
                </div>

                
                        
                    

                    

                            
                    </div>


                    <div className='row my-4'>
                        {/* <div className='col-lg-6 col-md-12 only_padding_chechkout'>
                            <p className='trms_txt'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                        </div> */}
                    </div>
                </div>

                 {/* Assuming modal is always shown */}
            {/* Render modal header, body, footer here */}
            
            {/* Render loader if loading is true */}
            {loading && (
                <Modal show="true">
                <div className="text-center" style={{ justifyContent: "center" }}>
                    <img src={loaderimg} alt="Loading..." width={200} height={200} />
                </div>
                </Modal>
            )}
        

        </>
    )
}

export default Checkoutnew;