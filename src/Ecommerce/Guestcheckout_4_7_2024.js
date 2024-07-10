
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
import "./checkout.css";

function Guestcheckout() {
    
    const [loading, setLoading] = useState(false); // Loading state
    const [selectedOption, setSelectedOption] = useState("1"); // State to track selected option
    const [cartItems, setCartItems] = useState([]);
    const [pincodes, setPincodes] = useState([])
    const [currentStep, setCurrentStep] = useState('login')
    const [isPanIndia, setIsPanIndia] = useState(false)
    const [billingAddressData, setBillingAddressData] = useState({ firstName: '', lastName: '', address: '', pincode: '', city: '', state: '' })
    const [message, setMessage] = useState('')
    const [addressdata, setAddress] = useState([])
    const [productsinfo, setProductsinfo] = useState([])

    const [showModal, setShowModal] = useState(true);
    const [loading1, setLoading1] = useState(false);

    const razorpay_key_id = process.env.REACT_APP_RAZORPAY_KEY_ID;
    const razorpay_currency = process.env.REACT_APP_RAZORPAY_CURRENCY;


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    // Other state variables and useEffect...

    // useEffect(() => {
    //     setShowModal(false); // Show the modal on page load
    // }, []);

    const [selectedAddress, setSelectedAddress] = useState(null);

    const handleRadioChange = (event, index) => {
        setSelectedAddress(addressdata[index]);
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // const [saveCardDetails, setSaveCardDetails] = useState(false); // State to track whether card details should be saved


    const [selectedOption1, setSelectedOption1] = useState({});

    const handleOptionChange1 = (event, index) => {
        const { value } = event.target;
        setSelectedOption1({ ...selectedOption1, [index]: value });
    };


    useEffect(() => {

        // Check if 'buycartItems' exists in localStorage
        const buycartItems = localStorage.getItem('buycartItems');
        let cartItemsdata = []
        if (buycartItems) {
            // 'buycartItems' exists in localStorage
            // console.log('buycartItems exist:', buycartItems);
            cartItemsdata = JSON.parse(localStorage.getItem('buycartItems')) || [];
        } else {
            // 'buycartItems' does not exist in localStorage
            //console.log('buycartItems does not exist');
            cartItemsdata = JSON.parse(localStorage.getItem('cartItems')) || [];
        }
        
        // console.log(cartItemsdata)
        // setCartItems(cartItemsdata)

        
        const cartItemsWithAttributes = cartItemsdata.map(item => {
            item.salePrice = (item.salePrice==='' || item.salePrice===0) ? item.price : item.salePrice;
            if (item.attributes && typeof item.attributes === 'string') {
                return {
                    ...item,
                    attributes: JSON.parse(item.attributes),
                    // product_data: JSON.parse(item.product_attributes),
                    
                };
            }
            return item;
        });
        const cartItemsWithQty = cartItemsdata.map(item => ({
            productID: item.productId,
            vendorID: item.vendor_id,
            product_title: item.productTitle,
            qty: item.quantity,
            product_type: item.productType,
            product_price: item.salePrice===0 ? item.price : item.salePrice,
            product_img: item.productImage,
            attributes: item.attributes,
            variables: item.variables,
            variables_quantity: item.variables_quantity
        }));
    
        // console.log(cartItemsWithQty);
        // console.log(cartItemsWithAttributes);
        setProductsinfo(cartItemsWithQty)
        setCartItems(cartItemsWithAttributes)


    }, []);

    // Function to handle option selection
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // shipping address functionality
        
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

    // Array of state options
    const stateOptions = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", 
        "Chhattisgarh", "Dadra & Nagar Haveli and Daman & Diu", "Goa", "Gujarat", 
        "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
        "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
        "Nagaland", "National Capital Territory of Delhi", "Odisha", "Punjab", 
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Uttarakhand", 
        "Uttar Pradesh", "Tripura", "West Bengal", "Puducherry"
    ];

    // Handle change in select box
    // const handleStateChange = (e) => {
    //     setSelectedState(e.target.value);
    //     // Optionally, you can update your data state here or perform other actions
    // };

    const [errorMessage, setErrorMessage] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);    

    const validateForm = () => {
        const requiredFieldsCopy = { ...requiredFields };
        let isValid = true;
    
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                // Skip validation for lastName field
                if (key === 'lastName') {
                    continue;
                }
    
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
                data.customer_type = 'guest';
                const addressdata = await Apicalls.post('address/saveguestaddress', data);
                // console.log(addressdata.data);
                alert('Address saved successfully');
                setShowModal(false);
                setAddress(addressdata.data);
                setSelectedAddress(addressdata.data);
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



    //end 

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

    const generateJwtToken = async () => {
        const responsetoken = await Apicalls.get('tokens/generateJwttoken');        
        return responsetoken.data;
    }

    const buyProductItem = async (finalamount, couponcode, shipping_charges, cod_charges) => {
        // finalamount = 10;
        if(addressdata === null){
            alert("Please select Address first above.");
        }else {
            if(selectedOption === '0'){
                setLoading(true);
                let order_data = {
                    payment_status: 'success',
                    payment_type:'cod',
                    shipping_charges:shipping_charges,
                    cod_charges:cod_charges,
                    amount: finalamount,
                    coupon_code: couponcode,
                    payment_mode:'cod payment',
                    customer_type:'guest',
                    customer_name: addressdata.firstName,
                    customer_email: addressdata.email,
                    customer_contact: addressdata.phone,
                    delivery_status:'pending',
                    cart_type: 'cart',
                    customer_address:addressdata,
                    product_details:cartItems,
                    productswithqty:productsinfo,
                    razorpay_details: null,
                }
                // console.log(order_data)
                if(finalamount === order_data.amount){
                    Promise.all([
                        Apicalls.post('order/neworderforguest', order_data)
                    ]).then(([data]) => {
                        if (Object.keys(data.data).length > 0) {                        
                            const buycartItems = localStorage.getItem('buycartItems');
                            if (buycartItems) {
                                // 'buycartItems' exists in localStorage, so remove 'buycartItems'
                                localStorage.removeItem('buycartItems');
                            }else{
                                // 'buycartItems' not exists in localStorage, so remove 'cartItems'
                                localStorage.removeItem('cartItems');
                            }
                            localStorage.removeItem('couponcode');
                            setLoading(false); // Set loading to false when fetching finishes
                            // alert('Thank you for shopping.');
                            setShow(true);                                                                
                            setTimeout(() => {
                                
                                window.location.href = '/'; // Redirect to UserProfile after 4 seconds
                                
                            }, 4000);
                        }
                    }).catch(error => {
                        setLoading(false); // Set loading to false when fetching finishes
                        console.log(error)
                    })
                }else{
                    setLoading(false); // Set loading to false when fetching finishes
                    alert("The payment amount is incorrect. Please try again.")
                }
                
            }else if(selectedOption === '1'){
                setLoading(true);
                
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
                    const jwtToken = await generateJwtToken(); // Generate session token
                    const response = await fetch('https://spotcoders.com/earthbased/payment/createOrder.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            // 'Authorization': `Bearer ${jwtToken}`
                            'Authorization': `Bearer ${jwtToken}`
                        },
                        body: JSON.stringify({ amount: finalamount }) // amount in INR
                    });
    
                    const data = await response.json();
                    if (data.error || data.amountCreated != finalamount) {
                        // alert(`Error creating order: ${data.error}`);
                        //console.log(`Error creating order: ${data.error}`);
                        alert(`Error creating order.`);
                        return;
                    }
    
                    // console.log(data);
                    // return;
                    setLoading(false);
                    const options = {
                        key: razorpay_key_id, // Enter the Key ID generated from the Dashboard
                        amount: finalamount * 100, // Amount in paise
                        currency: razorpay_currency,
                        name: 'EarthBased',
                        description: 'Live Transaction',
                        image: 'https://earthbased.store/static/media/footer_logo.d72cb08204191c52b659.png',
                        order_id: data.orderId,
                        handler: async (response) => {
                            try {
                                const verifyResponse = await fetch('https://spotcoders.com/earthbased/payment/verifyPayment.php', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${jwtToken}`
                                        // 'Authorization': `Bearer ${Token}`
                                    },
                                    body: JSON.stringify({
                                        razorpay_order_id: response.razorpay_order_id,
                                        razorpay_payment_id: response.razorpay_payment_id,
                                        razorpay_signature: response.razorpay_signature
                                    }),
                                });
    
                                const verifyData = await verifyResponse.json();
                                if (verifyData.status === 'success') {
                                    setLoading(true); // Set loading to false when fetching finishes
                                    let order_data = {
                                        payment_status: 'success',
                                        payment_type:'online',                                        
                                        shipping_charges:shipping_charges,
                                        cod_charges:0,                    
                                        amount: finalamount,
                                        coupon_code: couponcode,
                                        payment_mode:'razor payment',
                                        customer_type:'guest',
                                        customer_name: addressdata.firstName,
                                        customer_email: addressdata.email,
                                        customer_contact: addressdata.phone,
                                        delivery_status:'pending',
                                        cart_type: 'cart',
                                        customer_address:addressdata,
                                        product_details:cartItems,
                                        productswithqty:productsinfo,
                                        razorpay_details: JSON.stringify({
                                            razorpay_order_id: response.razorpay_order_id,
                                            razorpay_payment_id: response.razorpay_payment_id,
                                            razorpay_signature: response.razorpay_signature
                                        }),
                                    }
                                    // console.log(order_data)
                                    Promise.all([
                                        Apicalls.post('order/neworderforguest', order_data)
                                    ]).then(([data]) => {
                                        if (Object.keys(data.data).length > 0) {
                                            const buycartItems = localStorage.getItem('buycartItems');
                                            if (buycartItems) {
                                                // 'buycartItems' exists in localStorage, so remove 'buycartItems'
                                                localStorage.removeItem('buycartItems');
                                            }else{
                                                // 'buycartItems' not exists in localStorage, so remove 'cartItems'
                                                localStorage.removeItem('cartItems');
                                            }
                                            localStorage.removeItem('couponcode');
                                            setLoading(false); // Set loading to false when fetching finishes                                   
                                            
                                            setTimeout(() => {
                                                setShow(true); 
                                                window.location.href = '/'; // Redirect to UserProfile after 4 seconds
                                                
                                            }, 4000);
                                        }
                                    }).catch(error => {
                                        setLoading(false); // Set loading to false when fetching finishes
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
                            name: addressdata.fullName,
                            email: addressdata.email,
                            contact: addressdata.phone,
                        },
                        notes: {
                            address: 'Razorpay Corporate Office',
                        },
                        theme: {
                            color: '#4A8E5A',
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
        }
         
        
    }


    // end razor payment code


//     // Preprocess the cart items to calculate shipping charges
//     const processedCartItems = cartItems.reduce((acc, item) => {
//         const existingVendorIndex = acc.findIndex(cartItem => cartItem.vendorName === item.vendorName);
//         if (existingVendorIndex !== -1) {
//             acc[existingVendorIndex].total += item.salePrice === 0 ? item.price : item.salePrice * item.quantity;
//         } else {
//             acc.push({
//                 vendorName: item.vendorName,
//                 shipping_charges: item.shipping_charges,
//                 cod_charges: item.cod_charges,
//                 subtotal: item.salePrice === 0 ? item.price * item.quantity : item.salePrice * item.quantity,
//                 total: item.salePrice === 0 ? item.price * item.quantity + item.shipping_charges : item.salePrice * item.quantity + item.shipping_charges
//             });
//         }
//         return acc;
//     }, []);

    

    

//    // Calculate total shipping charges
//     const totalShippingCharges = processedCartItems.reduce((total, item) => total + parseFloat(item.shipping_charges), 0).toFixed(2);

//     // Calculate total COD charges
//     const totalCodCharges = processedCartItems.reduce((total, item) => total + parseFloat(item.cod_charges), 0).toFixed(2);

//     // Calculate final total
//     const finaltotal = (
//         parseFloat(
//             cartItems.reduce(
//                 (total, item) => total + (item.salePrice === 0 ? item.price : item.salePrice) * item.quantity,
//                 0
//             )
//         ) +
//         parseFloat(totalShippingCharges) +
//         (selectedOption === "0" ? parseFloat(totalCodCharges) : 0)
//     ).toFixed(2);

    // Calculate the subtotal with 15% discount applied
    let discount = localStorage.getItem('couponcode');

    // let discount = localStorage.getItem('couponcode');
    // Initialize variables to store total amounts
    let subtotalBeforeDiscount = 0;
    let subtotalAfterDiscount = 0;

    // Calculate total amount before discount
    subtotalBeforeDiscount = cartItems.reduce((total, item) => {
        return total + (item.salePrice === 0 ? item.price : item.salePrice) * item.quantity;
    }, 0);

    // Check if discount is applied and calculate subtotal after discount
    if (discount === 'EB15') {
        // Apply 15% discount
        subtotalAfterDiscount = subtotalBeforeDiscount * 0.85; // Applying 15% discount
    } else {
        // No discount applied
        subtotalAfterDiscount = subtotalBeforeDiscount;
    }

    // Calculate discount amount
    let discountAmount = subtotalBeforeDiscount - subtotalAfterDiscount;

    // console.log("Discount amount:", discountAmount);

    discountAmount = discountAmount.toFixed(2);



    // No discount applied
    // let subtotalAfterDiscount = 0;
    // if (discount === 'EB15') {
    //     // Apply 15% discount
    //     subtotalAfterDiscount = cartItems.reduce((total, item) => {
    //         return total + (item.salePrice === 0 ? item.price : item.salePrice) * item.quantity;
    //     }, 0) * 0.85; // Applying 15% discount
    // } else {
    //     // No discount applied
    //     subtotalAfterDiscount = cartItems.reduce((total, item) => {
    //         return total + (item.salePrice === 0 ? item.price : item.salePrice) * item.quantity;
    //     }, 0);
    // }

    subtotalAfterDiscount = subtotalAfterDiscount.toFixed(2);

    // Preprocess the cart items to calculate shipping charges and COD charges based on the discounted subtotal
    const processedCartItems = cartItems.reduce((acc, item) => {
        const existingVendorIndex = acc.findIndex(cartItem => cartItem.vendorName === item.vendorName);
        if (existingVendorIndex !== -1) {
            acc[existingVendorIndex].total += item.salePrice === 0 ? item.price : item.salePrice * item.quantity;
        } else {
            acc.push({
                vendorName: item.vendorName,
                shipping_charges: item.shipping_charges,
                cod_charges: item.cod_charges,
                subtotal: item.salePrice === 0 ? item.price * item.quantity : item.salePrice * item.quantity,
                total: item.salePrice === 0 ? item.price * item.quantity + item.shipping_charges : item.salePrice * item.quantity + item.shipping_charges
            });
        }
        return acc;
    }, []);

    // Calculate total shipping charges based on the discounted subtotal
    const totalShippingCharges = processedCartItems.reduce((total, item) => {
        return total + parseFloat(item.shipping_charges);
    }, 0).toFixed(2);

    // Calculate total COD charges based on the discounted subtotal
    const totalCodCharges = processedCartItems.reduce((total, item) => {
        return total + parseFloat(item.cod_charges);
    }, 0).toFixed(2);

    // Calculate final total with the discounted subtotal, shipping charges, and COD charges
    const finalTotal = (
        parseFloat(subtotalAfterDiscount) +
        parseFloat(totalShippingCharges) +
        (selectedOption === "0" ? parseFloat(totalCodCharges) : 0)
    ).toFixed(2);



    return (
        <>
            {cartItems.length === 0 ? (
                <>
                    <div className='container for_height_gg bg_ligit_checkout text-center'>
                        <div className='row'>
                            <div className='col-md-12 justify-content-between' style={{ alignItems:"center" }}>
                                <h3>No Items found.</h3>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
            <div className='container for_height_gg bg_ligit_checkout'>
                <div className='row'>
                    <div className='col-md-12 only_padding_chechkout d-flex justify-content-between' style={{ alignItems:"center" }}>
                        
                    
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', margin: "10px 0"}}>
                            
                            <div> {/* Adjust flex basis and margin as needed style={{ flexBasis: 'calc(33.33% - 20px)' }}  */}
                                <div className="accordion" id="accordion1">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading1" style={{ background:"#f7f7f7" }}>
                                            <input
                                                type="radio"
                                                id={`addressRadio1`}
                                                name="addressRadio"
                                                value="0"
                                                checked="true"
                                                style={{marginRight: "10px"}}
                                                className='form-check-input'
                                            />
                                            <label htmlFor="addressRadio1" className="accordion-button collapsed border border-0" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1" style={{ background:"#F7F7F7", marginRight:"10px" }}>
                                                Address &nbsp;&nbsp;&nbsp;
                                            </label>
                                        </h2>
                                        <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordion1">
                                            <div className="accordion-body">
                                                <p><strong>Name:</strong> {addressdata.firstName} {addressdata.lastName}</p>
                                                <p><strong>Phone:</strong> {addressdata.phone}</p>
                                                <p><strong>Email:</strong> {addressdata.email}</p>
                                                <p><strong>Address:</strong> {addressdata.address}</p>
                                                <p><strong>Pincode:</strong> {addressdata.pincode}</p>
                                                <p><strong>City:</strong> {addressdata.city}</p>
                                                <p><strong>State:</strong> {addressdata.state}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        
                        {/* <div className="address-section">
                            {addressdata.length <= 2 && (
                                <button className="btn1" onClick={() => setShowModal(true)}>+ New Address</button>
                            )}
                        </div> */}

                        </div>
                    </div>
                    <div className='row'>
                    <div className='col-md-12 only_padding_chechkout'>
                    <div className="accordion" id="addressAccordion">
                       
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapseOne">
                                                Address Details
                                            </button>
                                        </h2>
                                        
                                        <div id="#collapse11" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#addressAccordion">
                                            <div className="accordion-body">
                                                <div className="row mt-3">
                                                    <div className="col-md-6">
                                                        <p><strong>Name:</strong> {addressdata.firstName} {addressdata.lastName}</p>
                                                        <p><strong>Phone:</strong> {addressdata.phone}</p>
                                                        <p><strong>Email:</strong> {addressdata.email}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p><strong>Address:</strong> {addressdata.address}</p>
                                                        <p><strong>Pincode:</strong> {addressdata.pincode}</p>
                                                        <p><strong>City:</strong> {addressdata.city}</p>
                                                        <p><strong>State:</strong> {addressdata.state}</p>
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
                                        {item.productType === "simple" && (
                                            <>
                                                <div className='col-3 col-md-3 col-lg-3'>
                                                    <img className="img-fluid checlout_page_img" src={post_url + item.productImage} alt={item.productTitle} />
                                                    
                                                </div>
                                                <div className='col-5 col-md-5 col-lg-5'>
                                                    <p className=''>{item.productTitle}</p>
                                                    {/* <p className='checlout_page_product'>{item.description_short}</p> */}
                                                    <small>Brand : {item.vendorName}</small>
                                                    <br />
                                                    {/* <small>Shipping Charges : {item.shipping_charges}</small>
                                                    <br />
                                                    <small>COD Charges : {item.cod_charges}</small>
                                                    <br /> */}
                                                    
                                                </div>
                                                <div className='col-4 col-md-4 col-lg-4 justify-content-end' style={{textAlign:"right"}}>
                                                    <p className='checlout_page_price'>₹ {(item.salePrice === 0 ? item.price : item.salePrice) * item.quantity}</p>
                                                    <p className='checlout_page_qty'>Qty: {item.quantity}</p>
                                                    (<small>{(item.salePrice === 0 ? item.price : item.salePrice)} </small> * <small>{item.quantity}</small>)
                                                </div>
                                            </>
                                        )}
                                        {item.productType === "variable" && (
                                            <>
                                                <div className='col-3 col-md-3 col-lg-3'>
                                                    <img className="img-fluid checlout_page_img" src={post_url + item.productImage} alt={item.productTitle} />
                                                </div>
                                                <div className='col-5 col-md-5 col-lg-5'>
                                                    <p className=''>{item.productTitle}</p>
                                                    <small>Brand : {item.vendorName}</small>
                                                    <br />
                                                    {/* <small>Shipping Charges : {item.shipping_charges}</small>
                                                    <br />
                                                    <small>COD Charges : {item.cod_charges}</small> */}
                                                    <p className='checlout_page_product'>
                                                    {item.attributes.length > 0 ? (
                                                        item.attributes.map(({ name, value }, index) => (
                                                            <div key={index}>
                                                                {
                                                                    (name!='' || value!='' ? (<>{name}: {value}</>) : '')
                                                                }                                                                
                                                            </div>
                                                        ))
                                                    ) : (
                                                        ''
                                                    )}
                                                    </p>
                                                    {/* <p className='checlout_page_product'>{item.description_short}</p> */}
                                                </div>
                                                <div className='col-4 col-md-4 col-lg-4 justify-content-end' style={{textAlign:"right"}}>
                                                    <p className='checlout_page_price'>₹ {(item.salePrice === 0 ? item.price : item.salePrice )* item.quantity}</p>
                                                    <p className='checlout_page_qty'>Qty: {item.quantity}</p>
                                                    (<small>{(item.salePrice === 0 ? item.price : item.salePrice)} </small> * <small>{item.quantity}</small>)
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <hr></hr>
                                    </>
                                ))}
         
                                    
                                   

                                

                                <div className='mt-3'>

                                <div className='d-flex flex-column'>
                                    {/* <div className='d-flex justify-content-between'>
                                        <p className='para_text_checkout'>Subtotal</p>
                                        <p className='para_text_checkout'>₹ {cartItems.reduce((total, item) => total + (item.salePrice === 0 ? item.price : item.salePrice) * item.quantity, 0).toFixed(2)}</p>
                                        
                                    </div> */}
                                    <div className='d-flex justify-content-between'>
                                        <p className='para_text_checkout'>Subtotal</p>
                                        <p className='para_text_checkout'>₹ {cartItems.reduce((total, item) => total + (item.salePrice === 0 ? item.price : item.salePrice) * item.quantity, 0).toFixed(2)}</p>                                        
                                    </div>
                                    { discount === 'EB15' ?
                                        (
                                            <div className='d-flex justify-content-between'>
                                                <p className=''>Discount <small>(15%)</small></p>
                                                <p className='para_text_checkout'>- ₹ {discountAmount}</p>
                                            
                                            </div>
                                        )
                                        : 
                                        ''
                                    }
                                    <div className='d-flex justify-content-between'>
                                        <p className='para_text_checkout'>Shipping Charges</p>
                                        {/* <p className='para_text_checkout'>₹ {cartItems.reduce((total, item) => total + item.shipping_charges, 0).toFixed(2)}</p> */}
                                        <p className='para_text_checkout'>₹ {totalShippingCharges}</p>
                                    </div>
                                    { selectedOption === "0" ?
                                        (
                                        <div className='d-flex justify-content-between'>
                                            <p className='para_text_checkout'>COD Charges</p>
                                            {/* <span className='including_txs'>(Including taxes)</span> */}
                                            {/* <p className='para_text_checkout'>₹ {cartItems.reduce((total, item) => total + item.shipping_charges, 0).toFixed(2)}</p> */}
                                            <p className='para_text_checkout'>₹ {totalCodCharges}</p>
                                        </div>
                                        )
                                        : ''
                                    }

                                    
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

                                    <div className='text-end' >
                                        <p className='para_text_checkout'></p>
                                        {/* <p className='including_txs'>Including $2.24 in taxes</p> */}
                                        {/* <p className='total_price'>Total : ₹ {(cartItems.reduce((total, item) => total + (item.salePrice === 0 ? item.price : item.salePrice)*quantity, 0) + cartItems.reduce((total, item) => total + item.shipping_charges, 0)).toFixed(2)}</p> */}
                                        {/* <p className='total_price mb-0'>Total : ₹ {(parseFloat(cartItems.reduce((total, item) => total + (item.salePrice === 0 ? item.price : item.salePrice) * item.quantity, 0)) + parseFloat(totalShippingCharges) + (selectedOption === "0" ? parseFloat(totalCodCharges) : 0)).toFixed(2)} </p> */}
                                        <p className='total_price mb-0'>Total : ₹ {finalTotal} </p>
                                        <p style={{ color:"#ccc" }}>
                                            <small>(Including all taxes)</small>
                                        </p>
                                    </div>
                                <hr></hr>
                                <p> <strong><u>Payment</u></strong> </p>
                                <div className='row d-flex' style={{ alignItems:"center"}}>
                                    <div className='col-md-12'>
                                            
                                    <label class="control control--radio d-block">Online Payment
                                        <input type="radio" name="radio" id="bankTransfer" value="1" checked={selectedOption === "1"} onChange={handleOptionChange}/>
                                        <div class="control__indicator"></div>
                                    </label>

                                    <label class="control control--radio d-block">Cash On Delivery
                                        <input type="radio" name="radio"  id="cod" value="0" checked={selectedOption === "0"} onChange={handleOptionChange}/>
                                        <div class="control__indicator"></div>
                                    </label>

                                    <p>
                                        <a href="/privacypolicy">By continuing, you agree to EarthBased Conditions of Use and privacy policy.</a>
                                    </p>
                                        {/* <div>
                                           
                                            <input
                                                type="radio"
                                                id="bankTransfer"
                                                value="1"
                                                checked={selectedOption === "1"}
                                                onChange={handleOptionChange}
                                                className='me-1'
                                            />

                                            <label htmlFor="bankTransfer">Online Payment</label>

                                            <input
                                                type="radio"
                                                id="cod"
                                                value="0"
                                                checked={selectedOption === "0"}
                                                onChange={handleOptionChange}
                                                className='ms-4 me-1'
                                            />

                                            <label htmlFor="bankTransfer"><img src={iconcard3} alt="Free Shipping" className="shipping-icon" width={25} height={30} />
                                                Cash On Delivery
                                            </label>
                                        </div> */}

                                        






                                    </div>
                                </div>



                                <div className='d-flex justify-content-end'>
                                    <button className='ind_rupees' onClick={() => buyProductItem(finalTotal, discount, totalShippingCharges, totalCodCharges)}>Place Order</button>
                                    {/* <button className='ind_rupees' onClick={() => {
                                        const total = (parseFloat(cartItems.reduce((total, item) => total + (item.salePrice === 0 ? item.price : item.salePrice) * item.quantity, 0)) + parseFloat(totalShippingCharges) + parseFloat(totalCodCharges)).toFixed(2);
                                        //console.log('Total amount:', total);
                                        // You can use 'total' for further processing or display
                                    }}>Pay IND Rupees</button> 
                                    */}

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
            {/* {loading && (
                <Modal show="true">
                <div className="text-center" style={{ justifyContent: "center" }}>
                    <img src={loaderimg} alt="Loading..." width={200} height={200} />
                </div>
                </Modal>
            )} */}


            <Modal
                show={showModal}
                // onHide={handleCloseModal}
                dialogClassName="modal-90w" // Responsive modal width
                aria-labelledby="example-custom-modal-styling-title"
            >
                {addressdata.length === 0 ? 
                    (
                        <Modal.Header>
                            <Modal.Title>Shipping Address</Modal.Title>
                        </Modal.Header>
                    )
                    :
                    (
                        <Modal.Header closeButton>
                            <Modal.Title>Shipping Address</Modal.Title>
                        </Modal.Header>
                    )

                }
                <Modal.Body>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="name">First Name *</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            placeholder="First Name" 
                            className="form-control mb-3" 
                            style={{ borderColor: requiredFields['firstName'] }} 
                            onChange={(e) => setData({ ...data, firstName: e.target.value })}
                            autoComplete="firstName" // Autocomplete for first name
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName">Last name</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            placeholder="Last Name" 
                            className="form-control mb-3" 
                            onChange={(e) => setData({ ...data, lastName: e.target.value })}
                            autoComplete="lastName" // Autocomplete for last name
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone">Phone *</label>
                        <input 
                            type="tel" // Use type="tel" for phone numbers
                            id="phone" 
                            name="phone" 
                            placeholder="Phone" 
                            className="form-control mb-3" 
                            style={{ borderColor: requiredFields['phone'] }} 
                            onChange={(e) => setData({ ...data, phone: e.target.value })}
                            autoComplete="phone" // Autocomplete for phone
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email">Email *</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Your Email" 
                            className="form-control mb-3" 
                            style={{ borderColor: requiredFields['email'] }} 
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            autoComplete="email" // Autocomplete for email
                        />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="address">House No, Building, Road, Area *</label>
                        <textarea 
                            name="address" 
                            id="address" 
                            className="form-control mb-3" 
                            style={{ borderColor: requiredFields['address'] }} 
                            onChange={(e) => setData({ ...data, address: e.target.value })} 
                            rows="2" 
                            autoComplete="address" // Autocomplete for street address
                        ></textarea>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="city">City *</label>
                        <input 
                            type="text" 
                            id="city" 
                            name="city" 
                            placeholder="City" 
                            className="form-control mb-3" 
                            style={{ borderColor: requiredFields['city'] }} 
                            onChange={(e) => setData({ ...data, city: e.target.value })}
                            autoComplete="city" // Autocomplete for city
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="pincode">Pincode *</label>
                        <input 
                            type="text" 
                            id="pincode" 
                            name="pincode" 
                            placeholder="Pincode" 
                            className="form-control mb-3" 
                            style={{ borderColor: requiredFields['pincode'] }} 
                            onChange={(e) => setData({ ...data, pincode: e.target.value })}
                            autoComplete="pincode" // Autocomplete for postal code
                        />
                    </div>
                    {/* <div className="col-md-6">
                        <label htmlFor="state">State:</label>
                        <input 
                            type="text" 
                            id="state" 
                            name="state" 
                            placeholder="State" 
                            className="form-control mb-3" 
                            style={{ borderColor: requiredFields['state'] }} 
                            onChange={(e) => setData({ ...data, state: e.target.value })}
                            autoComplete="state" // Autocomplete for state
                        />
                    </div> */}
                    <div className="col-md-6">
                        <label htmlFor="state">State:</label>
                        <select
                            id="state"
                            name="state"
                            className="form-select mb-3"
                            style={{ borderColor: requiredFields['state'] }} // Assuming requiredFields is defined elsewhere
                            value={data.state}
                            onChange={(e) => setData({ ...data, state: e.target.value })}
                            autoComplete="state" // Autocomplete for state
                        >
                            <option value="">Select a state...</option>
                            {stateOptions.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>
                </div>

                </Modal.Body>
                <Modal.Footer>
                        <div className='col-md-6 text-end'>
                            <div style={{ color: 'red' }}>{errorMessage}</div>
                            <button className='next_btn_info hover_bg' onClick={()=>saveAddress()}>Save Address</button>
                        </div>
                    
                    {/* <Button variant="primary" onClick={handleCloseModal}>
                        Save Address
                    </Button> */}
                </Modal.Footer>
            </Modal>

            {/* Render loader if loading is true */}
            {loading && (
                <Modal show="true">
                    <div className="text-center" style={{ justifyContent: 'center' }}>
                        <img src={loaderimg} alt="Loading..." width={200} height={200} />
                    </div>
                </Modal>
            )}
                </>
            )}


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank You</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you for shopping.
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Guestcheckout;