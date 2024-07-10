
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

function Buycheckout() {
    const user = useSelector((state) => state.user.auth.user)
    // console.log(user);
    const razorpay_key_id = process.env.REACT_APP_RAZORPAY_KEY_ID;
    const razorpay_currency = process.env.REACT_APP_RAZORPAY_CURRENCY;


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
    const [addressdata, setAddress] = useState([])
    const [productsinfo, setProductsinfo] = useState([])

    const [showModal, setShowModal] = useState(false);
    const [loading1, setLoading1] = useState(false);

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

    const crypto_secretKey = '69Z9<P*TB>C649Yq"J|C';
    const encrypt = (text, secretKey) => {
        // return CryptoJS.AES.encrypt(text, secretKey).toString();
        const iv = CryptoJS.lib.WordArray.random(16); // Generate a random IV
        const ciphertext = CryptoJS.AES.encrypt(text, secretKey, { iv: iv });
        return iv.toString(CryptoJS.enc.Base64) + ':' + ciphertext;
    };

    // useEffect(() => {
    //     if (user?.ID) {
    //         Promise.all([
    //             Apicalls.get('cart/buyitem/' + user.ID),
    //             // Apicalls.get('address/getaddress/' + user.ID)
    //         ]).then(([productsData]) => {
    //             // productsData.data = productsData.data.map((item) => { item.qty = 1; return item })
    //             console.log(productsData.data)

    //             const cartItemsWithAttributes = productsData.data.map(item => {
    //                 if (item.attributes && typeof item.attributes === 'string') {
    //                     return {
    //                         ...item,
    //                         attributes: JSON.parse(item.attributes),
    //                         // product_data: JSON.parse(item.product_attributes),
    //                     };
    //                 }
    //                 return item;
    //             });
    //             const cartItemsWithQty = productsData.data.map(item => ({
    //                 productID: item.productID,
    //                 vendorID: item.vendorID,
    //                 product_title: item.productTitle,
    //                 qty: item.quantity,
    //                 product_type: item.productType,
    //                 product_price: item.salePrice===0 ? item.price : item.salePrice,
    //                 product_img: item.productImage,
    //                 attributes: item.attributes,
    //                 variables: item.variables,
    //                 variables_quantity: item.variables_quantity
    //             }));
            
    //             // console.log(cartItemsWithQty);
    //             setProductsinfo(cartItemsWithQty)
    //             setCartItems(cartItemsWithAttributes)
                
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    //         Promise.all([
    //             Apicalls.get('address/getaddress/' + user.ID)
    //         ]).then(([addressData]) => {
    //             if(addressData.data.length === 0){
    //                 setShowModal(true); // Show the modal on page load
    //             }
    //             setSelectedAddress(addressData.data[0]);
    //             setAddress(addressData.data)
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    //         localStorage.removeItem('cartItems');
    //     }
    //     else {
    //         navigate('/login')
    //     }
    // }, []);


    const fetchCartItems = async () => {
        try {
            
            let ebcoupon = {};
            
            // Fetch EB coupons
            const EB_couponsdata = await Apicalls.get('coupon/getebcouponsbyproduct');
            if (EB_couponsdata.data.length > 0) {
                ebcoupon = EB_couponsdata.data[0];
            }
    
            // Check if user ID exists
            if (user?.ID) {
                // Fetch cart items and address concurrently
                const [productsData, addressData] = await Promise.all([
                    Apicalls.get('cart/buyitem/' + user.ID),
                    Apicalls.get('address/getaddress/' + user.ID)
                ]);
    
                // Process cart items with attributes
                const cartItemsWithAttributes = await Promise.all(productsData.data.map(async (item) => {
                    // Initialize couponlist and update salePrice
                    item.couponlist = ebcoupon;
                    item.salePrice = (item.salePrice === "" || item.salePrice === 0) ? item.price : item.salePrice;
    
                    // Fetch coupons for the product asynchronously if productID exists
                    if (item.productID) {
                        item.productId = item.productID;
                        return await fetchCouponsForProduct(item); // Await here to wait for fetchCouponsForProduct
                    }
    
                    // Parse attributes if they are in string format
                    if (item.attributes && typeof item.attributes === 'string') {
                        return {
                            ...item,
                            attributes: JSON.parse(item.attributes),
                        };
                    }
                    return item;
                }));
    
                // Prepare cart items with quantity
                const cartItemsWithQty = productsData.data.map(item => ({
                    productID: item.productID,
                    vendorID: item.vendorID,
                    product_title: item.productTitle,
                    qty: item.quantity,
                    product_type: item.productType,
                    product_price: item.salePrice === 0 ? item.price : item.salePrice,
                    product_img: item.productImage,
                    attributes: item.attributes,
                    variables: item.variables,
                    variables_quantity: item.variables_quantity
                }));
    
                // Set state variables
                setProductsinfo(cartItemsWithQty);
                setCartItems(cartItemsWithAttributes);
    
                // Check address data and set state
                if (addressData.data.length === 0) {
                    setShowModal(true); // Show the modal on page load if no address found
                }
                setSelectedAddress(addressData.data[0]);
                setAddress(addressData.data);
            } else {
                // Redirect to login if user ID doesn't exist
                window.location.href = '/login';
            }
    
            // Clear local storage after processing
            localStorage.removeItem('cartItems');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // Set loading to false when fetching finishes
        }
    };
    
    
    
    

    // Define a function to fetch coupons for a product
    const fetchCouponsForProduct = async (item) => {
        try {
            // Prepare the object to send to the API
            let obj = {
                product_id: item.productId,
                product_price: (item.salePrice === 0 ? item.price : item.salePrice * item.quantity)
            };

            // Call the API to fetch coupons for the product
            const productcoupon = await Apicalls.post('coupon/getcouponsbyproduct', obj);
            
            // Check if coupons were returned
            if (productcoupon.data.length > 0) {
                item.couponlist = productcoupon.data[0];
            }
            
            // Return the modified item
            return item;
        } catch (error) {
            console.error(`Error fetching coupons for product ${item.productId}:`, error);
            return item; // Return item with default couponlist (empty object)
        }
    };


    useEffect(() => {
        fetchCartItems();
    }, [user?.ID]);

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
                    // console.log(addressdata.data);
                    alert('Address saved successfully');
                    setShowModal(false);
                    setAddress(prevAddresses => [...prevAddresses, addressdata.data]);
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
        let addressLength = addressdata.length;
        if(addressLength === 0 || selectedAddress === null){
            alert("Please select Address first above.");
        }else if(addressLength > 0){
            if(selectedOption === '0'){
                setLoading(true);
                let order_data = {
                    payment_status: 'success',
                    payment_type:'cod',
                    shipping_charges:shipping_charges,
                    cod_charges:cod_charges,
                    amount: finalamount,
                    coupon_details: groupedProducts,
                    payment_mode:'cod payment',
                    customer_id:user.ID,
                    customer_name: user.fullName,
                    customer_email: user.email,
                    customer_contact: user.phoneNumber,
                    delivery_status:'pending',
                    cart_type: 'buy_cart',
                    customer_address:selectedAddress,
                    product_details:cartItems,
                    productswithqty:productsinfo,
                    razorpay_details: null,
                }
                // console.log(order_data)
                if(finalamount === order_data.amount){
                    Promise.all([
                        Apicalls.post('order/neworderbuyproduct', order_data)
                    ]).then(([data]) => {
                        if (Object.keys(data.data).length > 0) {
                            localStorage.removeItem('couponcode');
                            localStorage.removeItem('ebcode');
                            setLoading(false); // Set loading to false when fetching finishes
                            // alert('Successully Placed order');
                            setShow(true);                                                                
                            setTimeout(() => {
                                
                                window.location.href = '/UserProfile'; // Redirect to UserProfile after 4 seconds
                                
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
                    const jwtToken = await generateJwtToken(); // Generate session token
                    const response = await fetch('https://spotcoders.com/earthbased/payment/createOrder.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${jwtToken}`
                        },
                        body: JSON.stringify({ amount: finalamount }) // amount in INR
                    });
    
                    const data = await response.json();
                    // console.log(data)
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
                                    },
                                    body: JSON.stringify({
                                        razorpay_order_id: response.razorpay_order_id,
                                        razorpay_payment_id: response.razorpay_payment_id,
                                        razorpay_signature: response.razorpay_signature
                                    }),
                                });
    
                                const verifyData = await verifyResponse.json();
                                //alert(verifyData.status)
                                if (verifyData.status === 'success') {
                                    setLoading(true); // Set loading to false when fetching finishes
                                    let order_data = {
                                        payment_status: 'success',
                                        payment_type:'online',
                                        shipping_charges:shipping_charges,
                                        cod_charges:0,                    
                                        amount: finalamount,
                                        coupon_details: groupedProducts,
                                        payment_mode:'razor payment',
                                        customer_id:user.ID,
                                        customer_name: user.fullName,
                                        customer_email: user.email,
                                        customer_contact: user.phoneNumber,
                                        delivery_status:'pending',
                                        cart_type: 'buy_cart',
                                        customer_address:selectedAddress,
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
                                        Apicalls.post('order/neworderbuyproduct', order_data)
                                    ]).then(([data]) => {
                                        if (Object.keys(data.data).length > 0) {
                                            localStorage.removeItem('couponcode');
                                            localStorage.removeItem('ebcode');
                                            setLoading(false); // Set loading to false when fetching finishes                                   
                                            
                                            setTimeout(() => {
                                                setShow(true); 
                                                window.location.href = '/UserProfile'; // Redirect to UserProfile after 4 seconds
                                                
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
                            name: user.fullName,
                            email: user.email,
                            contact: user.phoneNumber,
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


    // Function to calculate subtotal
    const calculateSubtotal = () => {
        const subtotal = cartItems.reduce((total, item) => {
            const itemPrice = item.salePrice === 0 ? item.price : item.salePrice;
            return total + itemPrice * item.quantity;
        }, 0);
        return subtotal.toFixed(2);
    };

    

    // Function to group products by brand
    const groupProductsByBrand = () => {
        const grouped = {};
        cartItems.forEach(product => {
            const brandId = product.vendorID; // Assuming 'brands' is the key for brand ID
            if (!grouped[brandId]) {
                grouped[brandId] = {
                    brandId: brandId,
                    totalSum: 0,
                    vendorName: product.vendorName,
                    product_title: product.productTitle,
                    qty: product.quantity,
                    couponsdata: product.couponlist
                };
            }
            grouped[brandId].totalSum += parseFloat(product.price); // Assuming price is in string format
        });
        return grouped;
    };

    // Calculate totals grouped by brand
    const groupedProducts = groupProductsByBrand();

    // Function to calculate discounted total based on 'ebcode' condition
    const calculateDiscountedTotalall = () => {
        const totalDiscount = Object.values(groupedProducts).reduce((acc, { totalSum, couponsdata, qty }) => {
            let discount = 0; // Initialize discount variable

            // Calculate discount based on coupon type
            if (couponsdata.type === 'Flat') {
                discount = couponsdata.amount*qty;
            } else if (couponsdata.type === 'Percentage') {
                discount = totalSum * ((couponsdata.amount*qty) / 100);
            }

            // Add the calculated discount to the accumulator
            return acc + discount;
        }, 0);

        return totalDiscount.toFixed(2);
    };

    const calculateDiscountedTotalnew = () => {
        const totalDiscount = Object.values(groupedProducts).reduce((acc, { totalSum, couponsdata, qty }) => {
            // Check if applied_for is not equal to "All"
            if (couponsdata.applied_for !== "All") {
                let discount = 0; // Initialize discount variable

                // Calculate discount based on coupon type
                if (couponsdata.type === 'Flat') {
                    discount = couponsdata.amount*qty;
                } else if (couponsdata.type === 'Percentage') {
                    discount = totalSum * ((couponsdata.amount*qty) / 100);
                }

                // Add the calculated discount to the accumulator
                return acc + discount;
            }

            return acc; // If applied_for is "All", return accumulator without adding anything
        }, 0);

        return totalDiscount.toFixed(2);
    };

    // Function to determine which discount calculation to use based on localStorage item 'ebcode'
    const calculateDiscountedTotal = () => {
        if (localStorage.getItem('ebcode') === "true") {
            return calculateDiscountedTotalall();
        } else {
            return calculateDiscountedTotalnew();
        }
    };

    // Calculate total shipping charges based on the discounted subtotal
    let totalShippingCharges = 0; // Initialize totalShippingCharges variable

    if (parseInt(calculateSubtotal()) <= 1000) {
        // totalShippingCharges = parseFloat(totalShippingCharges).toFixed(2);
        totalShippingCharges = cartItems.reduce((total, item) => total + parseFloat(item.shipping_charges), 0).toFixed(2);

    } else {
        totalShippingCharges = 0;
    }

    // console.log(totalShippingCharges)

    // Calculate total COD charges based on the discounted subtotal
    const totalCodCharges = cartItems.reduce((total, item) => {
        return total + parseFloat(item.cod_charges);
    }, 0).toFixed(2);

    const finaldiscount = parseFloat(calculateDiscountedTotal());

    // Calculate final total with the discounted subtotal, shipping charges, and COD charges
    const finalTotal = (
        parseFloat(calculateSubtotal()) -
        parseFloat(calculateDiscountedTotal()) +
        parseFloat(totalShippingCharges) +
        (selectedOption === "0" ? parseFloat(totalCodCharges) : 0)
    ).toFixed(2);

    // Output the final total
    // console.log("Final Total:", finalTotal);

    

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
                            {addressdata.map((ele, index) => (
                            <div key={index} > {/* Adjust flex basis and margin as needed style={{ flexBasis: 'calc(33.33% - 20px)' }}  */}
                                <div className="accordion" id={"accordion" + index}>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id={"heading" + index} style={{ background:"#f7f7f7" }}>
                                            <input
                                                type="radio"
                                                id={`addressRadio${index}`}
                                                name="addressRadio"
                                                value={index}
                                                checked={selectedAddress === ele || index==0}
                                                onChange={(e) => handleRadioChange(e, index)}
                                                style={{marginRight: "10px"}}
                                                className='form-check-input'
                                            />
                                            <label htmlFor={`addressRadio${index}`} className="accordion-button collapsed border border-0" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="false" aria-controls={"collapse" + index} style={{ background:"#F7F7F7", marginRight:"10px" }}>
                                                Address {index + 1} &nbsp;&nbsp;&nbsp;
                                            </label>
                                        </h2>
                                        <div id={"collapse" + index} className="accordion-collapse collapse" aria-labelledby={"heading" + index} data-bs-parent={"#accordion" + index}>
                                            <div className="accordion-body">
                                                <p><strong>Name:</strong> {ele.firstName} {ele.lastName}</p>
                                                <p><strong>Phone:</strong> {ele.phone}</p>
                                                <p><strong>Email:</strong> {ele.email}</p>
                                                <p><strong>Address:</strong> {ele.address}</p>
                                                <p><strong>Pincode:</strong> {ele.pincode}</p>
                                                <p><strong>City:</strong> {ele.city}</p>
                                                <p><strong>State:</strong> {ele.state}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>

                        
                        <div className="address-section">
                            {addressdata.length <= 2 && (
                                <button className="btn1" onClick={() => setShowModal(true)}>+ New Address</button>
                            )}
                        </div>

                        </div>
                    </div>
                    <div className='row'>
                    <div className='col-md-12 only_padding_chechkout'>
                    <div className="accordion" id="addressAccordion">
                        {
                            addressdata.map((addr, index)=>{
                                <>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="false" aria-controls="collapseOne">
                                                Address Details
                                            </button>
                                        </h2>
                                        
                                        <div id={"#collapse" + index} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#addressAccordion">
                                            <div className="accordion-body">
                                                <div className="row mt-3">
                                                    <div className="col-md-6">
                                                        <p><strong>Name:</strong> {addr.firstName} {addr.lastName}</p>
                                                        <p><strong>Phone:</strong> {addr.phone}</p>
                                                        <p><strong>Email:</strong> {addr.email}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p><strong>Address:</strong> {addr.address}</p>
                                                        <p><strong>Pincode:</strong> {addr.pincode}</p>
                                                        <p><strong>City:</strong> {addr.city}</p>
                                                        <p><strong>State:</strong> {addr.state}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </>
                            })
                        }
                        
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
                                                    {Array.isArray(item.attributes) && item.attributes.length > 0 ? (
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
                                    <div className='d-flex justify-content-between'>
                                        <p className='para_text_checkout'>Subtotal</p>
                                        <p className='para_text_checkout'>₹ {cartItems.reduce((total, item) => total + (item.salePrice === 0 ? item.price : item.salePrice) * item.quantity, 0).toFixed(2)}</p>
                                        
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className=''>Discount </p>
                                        <p className='para_text_checkout'>- ₹ {(calculateDiscountedTotal())}</p>
                                    
                                    </div>  
                                    <div className='d-flex justify-content-between'>
                                        <p className='para_text_checkout'>{parseInt(totalShippingCharges) <=1000 ? "Free " : "" }Shipping Charges </p>
                                        {/* <p className='para_text_checkout'>₹ {cartItems.reduce((total, item) => total + item.shipping_charges, 0).toFixed(2)}</p> */}
                                        <p className='para_text_checkout'>₹ { totalShippingCharges }</p>
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
                                    <button className='ind_rupees' onClick={() => buyProductItem(finalTotal, finaldiscount, totalShippingCharges, totalCodCharges)}>Place Order</button>
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
                onHide={handleCloseModal}
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
                            <label htmlFor="name">First Name  *</label>
                            <input type="text" id="name" name="name" placeholder="First Name" className="form-control mb-3" style={{ borderColor: requiredFields['firstName'] }} onChange={(e) => setData({ ...data, firstName: e.target.value })}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lname">Last name</label>
                            <input type="text" id="lname" name="lname" placeholder="Last Name" className="form-control mb-3" onChange={(e) => setData({ ...data, lastName: e.target.value })} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone">Phone *</label>
                            <input type="text" id="phone" name="phone" placeholder="Phone" className="form-control mb-3" style={{ borderColor: requiredFields['phone'] }} onChange={(e) => setData({ ...data, phone: e.target.value })} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" className="form-control mb-3" style={{ borderColor: requiredFields['email'] }} onChange={(e) => setData({ ...data, email: e.target.value })} />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="address">House No, Building, Road, Area  *</label>
                            {/* <input type="text" id="address" name="address" placeholder="Your Address" className="form-control mb-3" /> */}
                            <textarea name="address" id="address" className="form-control mb-3" style={{ borderColor: requiredFields['address'] }} onChange={(e) => setData({ ...data, address: e.target.value })} rows="2" ></textarea>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="city">City *</label>
                            <input type="text" id="city" name="city" placeholder="City" className="form-control mb-3" style={{ borderColor: requiredFields['city'] }} onChange={(e) => setData({ ...data, city: e.target.value })} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="pincode">Pincode *</label>
                            <input type="text" id="pincode" name="pincode" placeholder="Pincode" className="form-control mb-3" style={{ borderColor: requiredFields['pincode'] }} onChange={(e) => setData({ ...data, pincode: e.target.value })} />
                        </div>
                        {/* <div className="col-md-6">
                            <label htmlFor="state">State:</label>
                            <input type="text" id="state" name="state" placeholder="State" className="form-control mb-3" style={{ borderColor: requiredFields['state'] }} onChange={(e) => setData({ ...data, state: e.target.value })} />
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
                        <div className='col-md-6 text-center'>
                            <div style={{ color: 'red' }}>{errorMessage}</div>
                            <button className='next_btn_info' onClick={()=>saveAddress()}>Save Address</button>
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

export default Buycheckout;