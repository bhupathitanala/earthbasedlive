import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Card } from 'react-bootstrap'

import 'bootstrap-icons/font/bootstrap-icons.css';


import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
// import loaderimg from '../assets/loaderimg.webp';
import loaderimg from '../assets/loader2.gif';//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// loading
import Loader from "./../CommonComponents/Loader";
// import { Link } from 'react-bootstrap/lib/Navbar';
import './Productcart.css'; // Import CSS for styling
import Apicalls, { post_url } from "../Apicalls";
import { useCart } from '../stores/context/CartContext';
import percentage_image from '../assets/percentage_image.png';

const Shoppingcart = ({ toggleModal }) => {
    //console.log(toggleModal)
    const user = useSelector((state) => state.user.auth.user)
    //console.log(user, window.location.pathname.split('/')[2])
    const navigate = useNavigate()

    const [showCartPopup, setShowCartPopup] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [couponcode, setCoupon] = useState('');
    const [couponsdata, setCouponsdata] = useState([]);
    const [filteredCoupons, setFilteredCoupons] = useState([]);
    const [categoryIds, setCategoryIds] = useState([]);
    const [brandIds, setBrandIds] = useState([]);
    const [productIds, setProductIds] = useState([]);
    const [totalcoupons, setTotalcoupons] = useState(0);
    const [brandcoupons, setBrandcoupons] = useState(0);

    const [loading, setLoading] = useState(true); // Loading state

    const { decrementBadgeCount } = useCart();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleGuestLogin = () => {
        // alert("Redirecting to guest login page...");
        // Add logic for redirecting to guest login page
        window.location.href = '/gcheckout'
        closeModal();
    };

    const handleRegularLogin = () => {
        // alert("Redirecting to regular login page...");
        // Add logic for redirecting to regular login page
        window.location.href = '/pcheckout'
        closeModal();
    };


    const [isCoupon, setIsCoupon] = useState(false);
    const [isApply, setIsApply] = useState(false);
    const [discount, setDiscount] = useState(0);

    const opencouponModal = () => {
        setIsCoupon(true);
    };

    const closecouponModal = () => {
        setIsCoupon(false);
    };

    const handleCouponcode = (code) => {
        closecouponModal()
        setCoupon(code)
    };

    const handleApplyCoupon = (code) => {
        setIsApply(true)
        // Logic to apply the coupon code
        // Assuming coupon code is applied successfully
        if (code === 'EB15') {
            setDiscount(0.15); // 15% discount
            //localStorage.setItem('couponcode',code);
        }

    }


    // New coupon code functionality

    const [isnewCoupon, setIsnewCoupon] = useState(false);
    const [isnewApply, setIsnewApply] = useState(false);
    const [newdiscount, setNewDiscount] = useState(0);
    const [allcoupon, setAllcoupon] = useState(false);

    const opennewcouponModal = () => {
        setIsnewCoupon(true);
    };

    const closenewcouponModal = () => {
        setIsnewCoupon(false);
    };

    const handleNewCouponcode = (code) => {
        closenewcouponModal()
        setIsnewCoupon(code)
    };

    const handleApplyNewCoupon = (code) => {
        setIsnewApply(true)
        console.log("coupon codes");
        console.log(code)
        setAllcoupon(true);
        // Logic to apply the coupon code
        // Assuming coupon code is applied successfully
        // if(code === 'EB15'){
        //     setDiscount(0.15); // 15% discount
        //     localStorage.setItem('couponcode',code);
        // }

    }

    //End coupon code funcationality




    // const fetchCartItems = useCallback(async () => {
    //     try {
    //         setLoading(true); // Set loading to true when fetching starts

    //         const allProductIds = [];
    //         if (user?.ID) {
    //             const { data } = await Apicalls.get('cart/items/' + user.ID);
    //             // console.log(data);
    //             // Extract product attributes if they exist
    //             const cartItemsWithAttributes = data.map(item => {
    //                 if (item.attributes && typeof item.attributes === 'string') {
    //                     return {
    //                         ...item,
    //                         attributes: JSON.parse(item.attributes),
    //                         // product_data: JSON.parse(item.product_attributes),
    //                     };
    //                 }
    //                 if (item.ProductID) {
    //                     allProductIds.push(item.ProductID);
    //                     Promise.all([
    //                         Apicalls.post('coupon/getcouponsbyproduct',item.ProductID)
    //                     ]).then(([productcoupon]) => {  
    //                         console.log(productcoupon)
    //                     })
    //                 }                    
    //                 return item;
    //             });

    //             // console.log(cartItemsWithAttributes)
    //             setCartItems(cartItemsWithAttributes);
    //             localStorage.removeItem('cartItems');
    //         } else {
    //             let items_data = JSON.parse(localStorage.getItem('cartItems'));
    //             items_data.map(item => {
    //                 item.salePrice = (item.salePrice==="" || item.salePrice===0) ? item.price : item.salePrice;
    //                 if (item.productId) {                        
    //                     allProductIds.push(item.ProductID);
    //                     // Promise.all([
    //                     //     Apicalls.post('coupon/getcouponsbyproduct',item.ProductID)
    //                     // ]).then(([productcoupon]) => {  
    //                     //     console.log(productcoupon)
    //                     // })
    //                     try {
    //                         const productcoupon = await Apicalls.post('coupon/getcouponsbyproduct', item.productId);
    //                         console.log(productcoupon);
    //                         // Handle productcoupon data here as needed
    //                     } catch (error) {
    //                         console.error(`Error fetching coupons for product ${item.productId}:`, error);
    //                         // Handle error if needed
    //                     }                        
    //                 }                    
    //             })
    //             items_data.salePrice = items_data.salePrice==="" || items_data.salePrice===0 ? items_data.price : items_data.salePrice;

    //             localStorage.setItem('cartItems', JSON.stringify(items_data));
    //             setCartItems(items_data);
    //         }
    //         // console.log(allCategoryIds)
    //         // console.log(allBrandIds)
    //         console.log(allProductIds)
    //         // const { couponslist } = await Apicalls.get('coupon/list');
    //         Promise.all([
    //             Apicalls.post('coupon/getdata',allProductIds)
    //         ]).then(([couponsData]) => {                
    //             setCouponsdata(couponsData.data)
    //         }).catch((err) => {
    //             console.log(err)
    //         })            
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         setLoading(false); // Set loading to false when fetching finishes
    //     }
    // }, [user]);


    const fetchCartItems = useCallback(async () => {
        try {
            setLoading(true); // Set loading to true when fetching starts

            // let allProductIds = [];
            let cartItemsWithAttributes = [];
            let ebcoupon = {};
            const EB_couponsdata = await Apicalls.get('coupon/getebcouponsbyproduct');
            if (EB_couponsdata.data.length > 0) {
                ebcoupon = EB_couponsdata.data[0]
            }
            if (user?.ID) {
                // Fetch cart items from API if user ID exists
                const { data } = await Apicalls.get('cart/items/' + user.ID);

                // Process each item from the fetched data
                cartItemsWithAttributes = await Promise.all(data.map(async (item) => {
                    // Initialize couponlist as an empty object
                    item.couponlist = ebcoupon;

                    // Update salePrice if necessary
                    item.salePrice = (item.salePrice === "" || item.salePrice === 0) ? item.price : item.salePrice;

                    // Fetch coupons for the product asynchronously
                    if (item.productID) {
                        // allProductIds.push(item.productID);
                        item.productId = item.productID;
                        return await fetchCouponsForProduct(item);
                    }

                    if (item.attributes && typeof item.attributes === 'string') {
                        // Parse attributes if they exist
                        return {
                            ...item,
                            attributes: JSON.parse(item.attributes),
                        };
                    }

                    return item;
                }));

                // console.log(cartItemsWithAttributes)

                // Set cart items state with attributes
                setCartItems(cartItemsWithAttributes);
                localStorage.removeItem('cartItems');
            } else {
                // Handle local storage items if user ID does not exist
                let items_data = JSON.parse(localStorage.getItem('cartItems'));

                // Process each item in items_data
                const updatedCartItems = await Promise.all(items_data.map(async (item) => {
                    // Initialize couponlist as an empty object
                    item.couponlist = ebcoupon;
                    item.vendorID = item.vendor_id
                    // Update salePrice if necessary
                    item.salePrice = (item.salePrice === "" || item.salePrice === 0) ? item.price : item.salePrice;

                    // Fetch coupons for the product asynchronously
                    if (item.productId) {
                        //allProductIds.push(item.productId);
                        return await fetchCouponsForProduct(item);
                    } else {
                        return item; // Return item as-is if no productId
                    }
                }));


                // Update local storage with updated items_data
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

                // Update state with updated cart items
                setCartItems(updatedCartItems);
            }

            // Fetch coupons data for all product IDs
            // const { data: couponsData } = await Apicalls.post('coupon/getdata', allProductIds);
            // setCouponsdata(couponsData);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // Set loading to false when fetching finishes
        }
    }, [user]);




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
    }, [fetchCartItems]);


    const goShopping = () => {
        navigate('/products/1');
        toggleModal()
    }

    // Functionality for cart items

    // Function to increment quantity of an item in the cart
    function incrementQuantity(index, cartdata) {
        if (user?.ID) {
            cartItems[index].quantity += 1
            let qty = cartItems[index].quantity
            //console.log(cartItems)
            setCartItems([...cartItems])
            UpdateProductQty(qty, cartdata.ID)

        } else {
            // Increment quantity for non-user
            const updatedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            updatedCartItems[index].quantity += 1;
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            setCartItems(updatedCartItems);
        }
    }

    // Function to decrement quantity of an item in the cart
    function decrementQuantity(index, cartdata) {
        if (user?.ID) {
            if (cartItems[index].quantity > 1) {
                cartItems[index].quantity -= 1
                let qty = cartItems[index].quantity
                //console.log(cartItems)
                setCartItems([...cartItems])
                UpdateProductQty(qty, cartdata.ID)
            }


        } else {
            // Get cart items from session storage
            let updatedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            if (updatedCartItems[index].quantity > 1) {
                // Increment quantity for non-user
                //const updatedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                updatedCartItems[index].quantity -= 1;
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
                setCartItems(updatedCartItems);
            }
        }

    }


    function UpdateProductQty(productQty, cartID) {
        Promise.all([
            Apicalls.put('cart/cartproductupdate/' + cartID, { userId: user.ID, productQty: productQty })
        ]).then(([data]) => {

        }).catch((err) => {
            //console.log('internal server error')
        })


    }


    function deleteCartItem(index, cartItem) {
        //console.log(cartItem)
        decrementBadgeCount()
        if (user?.ID) {
            Promise.all([
                Apicalls.delete('cart/deleteItem/' + cartItem.ID)
            ]).then(([productsData]) => {
                setCartItems(cartItems.filter((cart) => cart.ID !== cartItem.ID))
            }).catch((err) => {
                //console.log(err)
            })
        }
        else {
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            // Check if index is valid
            if (index >= 0 && index < cartItems.length) {
                // Remove the item from the cartItems array using splice
                cartItems.splice(index, 1);

                // Update session storage with the modified cartItems array
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                setCartItems([...cartItems]);
                // Optionally, trigger a re-render of the component to reflect the updated cart items
                // Example: setCartItems([...cartItems]);
            }
        }
    }

    // end add to cart functionality


    const getSubTotal = () => {
        const subtotal = cartItems.reduce((total, item) => total + (item.salePrice === 0 ? item.price : item.salePrice) * item.quantity, 0);

        return subtotal;
    };

    // const calculateDiscountedTotal = () => {
    //     const subtotal = cartItems.reduce((total, item) => total + (item.salePrice === 0 ? item.price : item.salePrice) * item.quantity, 0);
    //     const discountAmount = subtotal * discount;
    //     // return subtotal - discountAmount;
    //     return discountAmount;
    // };

    // const calculateTotal = () => {
    //     const subtotal = cartItems.reduce((total, item) => total + (item.salePrice === 0 ? item.price : item.salePrice) * item.quantity, 0);
    //     const discountAmount = subtotal * discount;
    //     return subtotal - discountAmount;
    //     //return discountAmount;
    // };


    // Function to group products by brand
    // const groupProductsByBrand = () => {
    //     const grouped = {};
    //     let c = 0;
    //     let c1 = 0;
    //     cartItems.forEach(product => {
    //         const brandId = product.vendorID; // Assuming 'brands' is the key for brand ID
    //         if (!grouped[brandId]) {
    //             grouped[brandId] = {
    //                 brandId: brandId,
    //                 totalSum: 0,
    //                 vendorName:product.vendorName,
    //                 product_title:product.productTitle,
    //                 couponsdata:product.couponlist
    //             };

    //             if(product.couponlist.applied_for !== "All"){
    //                 setBrandcoupons(++c)
    //             }else{
    //                 settotalcoupons(++c1)
    //             }
    //         }
    //         grouped[brandId].totalSum += parseFloat(product.price); // Assuming price is in string format
    //     });
    //     return grouped;
    // };



    // const [totalcoupons, setTotalcoupons] = useState(0);
    // const [brandcoupons, setBrandcoupons] = useState(0);

    const groupProductsByBrand = () => {
        const grouped = {};
        let brandCount = 0; // Count for brand coupons
        let allCount = 0; // Count for all coupons

        cartItems.forEach(product => {
            const brandId = product.vendorID; // Assuming 'brands' is the key for brand ID
            const couponList = product.couponlist;

            if (!grouped[brandId]) {
                grouped[brandId] = {
                    brandId: brandId,
                    totalSum: 0,
                    vendorName: product.vendorName,
                    product_title: product.productTitle,
                    qty: product.quantity,
                    couponsdata: couponList
                };
                // Increment coupon counters based on applied_for condition
                if (couponList.applied_for !== "All") {
                    allCount++;
                }
                brandCount++;

            }

            grouped[brandId].totalSum += parseFloat(product.price); // Assuming price is in string format


        });

        // Update state after processing all items
        useEffect(() => {
            setBrandcoupons(brandCount);
            setTotalcoupons(allCount);
        }, [brandCount, allCount]); // Dependency array to ensure this effect runs only when counts change

        return grouped;
    };



    // Calculate totals grouped by brand
    const groupedProducts = groupProductsByBrand();
    //console.log(groupedProducts)

    //const totalSum = Object.values(groupedProducts).reduce((acc, { totalSum }) => acc + totalSum, 0);


    // Calculate discount total
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

        // Calculate total discounted amount by subtracting totalDiscount from totalSum
        // const discountedTotal = Object.values(groupedProducts).reduce((acc, { totalSum }) => {
        //     return acc + totalSum;
        // }, 0) - totalDiscount;

        // return discountedTotal;
        return totalDiscount;
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

        return totalDiscount;
    };



    // Assuming groupedProducts is an array of objects
    // Filter to get unique coupon codes
    const uniqueCodes = [];
    const uniqueProducts = Object.values(groupedProducts).filter(ele => {
        if (!uniqueCodes.includes(ele.couponsdata.code)) {
            uniqueCodes.push(ele.couponsdata.code);
            return true;
        }
        return false;
    });

    // console.log("unique products", uniqueProducts)

    return (
        <>
            {showCartPopup && (
                <div className='Productpage_section1 fkcart' onClick={toggleModal}>
                    <div className="cart-popup" id="fkcart-modal" onClick={(event) => { event.stopPropagation() }}>
                        <div className='fkcart-preview-ui has-zero-state'>
                            <Card className='fkcart-preview-card'>
                                <Card.Body id="card-body-main" className={!Array.isArray(cartItems) || cartItems.length === 0 ? '' : 'card-body-margin-bottom'} style={{ overflow: "auto" }}>

                                    <div class="fkcart-slider-header">
                                        <div class="fkcart-slider-heading fkcart-panel">
                                            <div class="fkcart-title">Your Cart</div>
                                            {/* <div class="fkcart-modal-close" onClick={()=>setShowCartPopup(false)} style={{cursor:"pointer"}}> */}
                                            {/*onClick={()=>setShowCartPopup(false)}*/}
                                            <div class="fkcart-modal-close" onClick={toggleModal} style={{ cursor: "pointer" }}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" class="fkcart-icon-close" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.1518 4.31359L4.22676 4.22676C4.50161 3.9519 4.93172 3.92691 5.2348 4.1518L5.32163 4.22676L12 10.9048L18.6784 4.22676C18.9807 3.92441 19.4709 3.92441 19.7732 4.22676C20.0756 4.5291 20.0756 5.01929 19.7732 5.32163L13.0952 12L19.7732 18.6784C20.0481 18.9532 20.0731 19.3833 19.8482 19.6864L19.7732 19.7732C19.4984 20.0481 19.0683 20.0731 18.7652 19.8482L18.6784 19.7732L12 13.0952L5.32163 19.7732C5.01929 20.0756 4.5291 20.0756 4.22676 19.7732C3.92441 19.4709 3.92441 18.9807 4.22676 18.6784L10.9048 12L4.22676 5.32163C3.9519 5.04678 3.92691 4.61667 4.1518 4.31359L4.22676 4.22676L4.1518 4.31359Z" fill="currentColor"></path>
                                                </svg>    </div>
                                        </div>

                                        <hr></hr>
                                    </div>

                                    {loading ? ( // Render loader if loading is true
                                        // <div className="text-center" style={{justifyContent:"center"}}>
                                        //     <img src={loaderimg} alt="Loading..." width={200} height={200}/>
                                        // </div>
                                        <Loader />
                                    ) : (
                                        // Render cart items or zero state
                                        <>
                                            {!Array.isArray(cartItems) || cartItems.length === 0 ? (
                                                <div className='fkcart-slider-body'>
                                                    <div className="fkcart-zero-state" id="cartid">
                                                        <div className="fkcart-icon-cart">
                                                            <svg data-icon="icon-checkout" width="56" height="56" viewBox="0 0 24 24" class="fkcart-icon-checkout" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2 2.71411C2 2.31972 2.31972 2 2.71411 2H3.34019C4.37842 2 4.97454 2.67566 5.31984 3.34917C5.55645 3.8107 5.72685 4.37375 5.86764 4.86133H20.5709C21.5186 4.86133 22.2035 5.7674 21.945 6.67914L19.809 14.2123C19.4606 15.4413 18.3384 16.2896 17.0609 16.2896H9.80665C8.51866 16.2896 7.39 15.4276 7.05095 14.185L6.13344 10.8225C6.12779 10.8073 6.12262 10.7917 6.11795 10.7758L4.64782 5.78023C4.59738 5.61449 4.55096 5.45386 4.50614 5.29878C4.36354 4.80529 4.23716 4.36794 4.04891 4.00075C3.82131 3.55681 3.61232 3.42822 3.34019 3.42822H2.71411C2.31972 3.42822 2 3.1085 2 2.71411ZM7.49529 10.3874L8.4288 13.8091C8.59832 14.4304 9.16266 14.8613 9.80665 14.8613H17.0609C17.6997 14.8613 18.2608 14.4372 18.435 13.8227L20.5709 6.28955H6.28975L7.49529 10.3874ZM12.0017 19.8577C12.0017 21.0408 11.0426 22 9.85941 22C8.67623 22 7.71708 21.0408 7.71708 19.8577C7.71708 18.6745 8.67623 17.7153 9.85941 17.7153C11.0426 17.7153 12.0017 18.6745 12.0017 19.8577ZM10.5735 19.8577C10.5735 19.4633 10.2538 19.1436 9.85941 19.1436C9.46502 19.1436 9.1453 19.4633 9.1453 19.8577C9.1453 20.2521 9.46502 20.5718 9.85941 20.5718C10.2538 20.5718 10.5735 20.2521 10.5735 19.8577ZM19.1429 19.8577C19.1429 21.0408 18.1837 22 17.0005 22C15.8173 22 14.8582 21.0408 14.8582 19.8577C14.8582 18.6745 15.8173 17.7153 17.0005 17.7153C18.1837 17.7153 19.1429 18.6745 19.1429 19.8577ZM17.7146 19.8577C17.7146 19.4633 17.3949 19.1436 17.0005 19.1436C16.6061 19.1436 16.2864 19.4633 16.2864 19.8577C16.2864 20.2521 16.6061 20.5718 17.0005 20.5718C17.3949 20.5718 17.7146 20.2521 17.7146 19.8577Z" fill="currentColor"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="fkcart-zero-state-title">Your Cart is Empty</div>
                                                        <div className="fkcart-zero-state-text">Fill your cart with amazing items</div>
                                                        <a className="fkcart-primary-button fkcart-shop-button fkcart-modal-close" onClick={() => {
                                                            goShopping()
                                                        }}>Shop Now</a>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    {cartItems.map((item, index) => (
                                                        <Card key={item.ID} className="mb-0">
                                                            <Card.Body>
                                                                <div className='row'>
                                                                    <div className="d-flex">
                                                                        <div className='col-2 d-flex flex-column align-items-center'>
                                                                            <div className='' style={{ position: 'relative', border: '1px solid darkgrey', borderRadius: '3px', marginTop: '3px' }}>
                                                                                <img src={post_url + item.productImage} alt={item.productTitle} style={{ width: "50px", borderRadius: '3px' }} />
                                                                                <FontAwesomeIcon icon={faTimesCircle} style={{ position: 'absolute', top: '-5px', left: '-5px', cursor: 'pointer' }} onClick={() => deleteCartItem(index, item)} />
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-8 bth_text_div d-flex flex-column justify-content-center'>
                                                                            <div className='row' style={{ marginBottom: "5px" }}>
                                                                                <p className=''>{item.productTitle}</p>
                                                                                {/* {
                                                        item?.couponlist ? <small><label>Coupon:</label> {item?.couponlist.code}</small> : ''
                                                    } */}

                                                                                <small><label>Brand:</label> {item.vendorName}</small>
                                                                                {item.productType === "variable" && item.attributes && Array.isArray(item.attributes) && (
                                                                                    <>
                                                                                        {item.attributes.length > 0 ? (
                                                                                            item.attributes.map(({ name, value }, index) => (
                                                                                                name.length > 0 && (
                                                                                                    <small key={index}><label>{name}</label>: {value}</small>
                                                                                                )
                                                                                            ))
                                                                                        ) : ('')}
                                                                                        {/* {(item.sku).length > 0 && (
                                                        <div key={index+1}>
                                                        SKU: {item.sku}
                                                        </div>
                                                        )} */}
                                                                                    </>
                                                                                )}
                                                                            </div>
                                                                            <div className='containerquantity_btn'>
                                                                                <button onClick={() => decrementQuantity(index, item)} className='butt_in_dec butt_in_dec_minus'>-</button>
                                                                                <div className='num_quty'>{item.quantity}</div>
                                                                                <button onClick={() => incrementQuantity(index, item)} className='butt_in_dec butt_in_dec_plus'>+</button>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-2 d-flex flex-column' style={{ textAlign: 'right' }}>
                                                                            <p className='cardpara3'>₹ {item.salePrice === 0 ? item.price : item.salePrice * item.quantity}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    ))}

                                                    <div className="col-12" style={{ position: "fixed", bottom: "0", width: "calc(100% - 12px)", background: "#fff", padding: "10px", borderTop: "1px solid #ddd" }}>
                                                        <div className="col-12">
                                                            <div className='d-flex sub_total_div justify-content-between' style={{ float: "right", marginBottom: "5px" }}>
                                                                <div className='' style={{ background: "#766285", justifyContent: "center", color: "white", padding: "5px 5px 5px 5px" }} onClick={() => {
                                                                    if (!isnewApply) {
                                                                        opennewcouponModal();
                                                                    }
                                                                }}>{allcoupon === true ? uniqueProducts.length : totalcoupons} Coupons applied </div>

                                                            </div>
                                                            <div className='couponcode_div'>
                                                                {/* <p className='couponcode_title'>Got any discount code?</p> */}

                                                                <input
                                                                    type="text"
                                                                    id='coupon_code'
                                                                    name='coupon_code'
                                                                    placeholder='One Coupon available'
                                                                    autoComplete='off'
                                                                    // readOnly
                                                                    onClick={() => {
                                                                        if (!isnewApply) {
                                                                            opennewcouponModal();
                                                                        }
                                                                    }}
                                                                // value={couponcode === '' ? '' : couponcode} 
                                                                />
                                                                <button
                                                                    className='apply_coupon_code_btn'
                                                                    onClick={() => handleApplyCoupon(couponcode)}
                                                                    disabled
                                                                >
                                                                    {allcoupon === true ? 'Applied' : 'Apply'}
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <div className='d-flex sub_total_div justify-content-between'>
                                                                <p className='para_text_checkout'>Sub total</p>
                                                                <p className='para_text_checkout'>
                                                                    ₹ {getSubTotal().toFixed(2)}
                                                                </p>

                                                            </div>
                                                            {isnewApply === false ?
                                                                (
                                                                    <>
                                                                        <div className='d-flex sub_total_div justify-content-between'>
                                                                            <p className=''>Coupon discount</p>
                                                                            {
                                                                                allcoupon === true ?
                                                                                    <p className='para_text_checkout'>
                                                                                        - ₹ {(calculateDiscountedTotalall()).toFixed(2)}
                                                                                    </p>
                                                                                    :
                                                                                    <p className='para_text_checkout'>
                                                                                        - ₹ {calculateDiscountedTotalnew()}
                                                                                    </p>
                                                                            }

                                                                        </div>
                                                                        <div className='d-flex sub_total_div justify-content-between'>
                                                                            <p className='para_text_checkout'>Total</p>
                                                                            <p className='para_text_checkout'>
                                                                                ₹ {allcoupon === true ? (getSubTotal() - calculateDiscountedTotalall()) : (getSubTotal() - calculateDiscountedTotalnew())}
                                                                            </p>

                                                                        </div>
                                                                    </>


                                                                )
                                                                : ''
                                                            }
                                                            {/* <div>
                                    <h2>Coupons Summary</h2>
                                    <ul>
                                        {Object.values(groupedProducts).map(({ brandId, totalSum, vendorName, couponsdata }) => (
                                            <li key={brandId} style={{fontSize:"10px"}}>
                                                Coupon: {couponsdata.code}, Type: {couponsdata.type}, Brand ID: {vendorName}, Purchase Amount: {couponsdata.purchaseAmount}, Total Sum: {totalSum}, Discount: {couponsdata.type==='Flat' ? totalSum-couponsdata.amount : totalSum*(couponsdata.amount/100)}, Status:{totalSum >= couponsdata.purchaseAmount ? 'Available' : 'Not Available'}
                                            </li>
                                        ))}
                                    </ul>
                                    <p>Total Sum of all brands: {totalSum}</p>
                                </div> */}
                                                            <p className='tax_text'>Shipping & taxes may be re-calculated at checkout</p>
                                                        </div>
                                                        <div className="col-12 d-flex justify-content-end">
                                                            {/* <button className="buynow_button_product_page" onClick={() => {
                                            navigate('/shipping')
                                        }}>Proceed to checkout</button> */}
                                                            {/* <button
                                    className="fkcart-checkout"
                                    onClick={() => {
                                        toggleModal()
                                        // setShowCartPopup(false); // Set showCartPopup to false
                                        setTimeout(() => {
                                            // navigate('/pcheckout'); // Navigate to '/shipping' route after a delay
                                            setIsOpen(true)
                                        }, 300); // Adjust the delay as needed
                                    }}
                                > */}
                                                            {
                                                                user?.ID ? (
                                                                    <button
                                                                        className="fkcart-checkout"
                                                                        onClick={() => {
                                                                            toggleModal()
                                                                            // setShowCartPopup(false); // Set showCartPopup to false
                                                                            setTimeout(() => {
                                                                                navigate('/pcheckout'); // Navigate to '/shipping' route after a delay
                                                                            }, 300); // Adjust the delay as needed
                                                                        }}
                                                                    >
                                                                        <svg data-icon="icon-checkout" width="20" height="20" viewBox="0 0 24 24" class="fkcart-icon-checkout" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M2 2.71411C2 2.31972 2.31972 2 2.71411 2H3.34019C4.37842 2 4.97454 2.67566 5.31984 3.34917C5.55645 3.8107 5.72685 4.37375 5.86764 4.86133H20.5709C21.5186 4.86133 22.2035 5.7674 21.945 6.67914L19.809 14.2123C19.4606 15.4413 18.3384 16.2896 17.0609 16.2896H9.80665C8.51866 16.2896 7.39 15.4276 7.05095 14.185L6.13344 10.8225C6.12779 10.8073 6.12262 10.7917 6.11795 10.7758L4.64782 5.78023C4.59738 5.61449 4.55096 5.45386 4.50614 5.29878C4.36354 4.80529 4.23716 4.36794 4.04891 4.00075C3.82131 3.55681 3.61232 3.42822 3.34019 3.42822H2.71411C2.31972 3.42822 2 3.1085 2 2.71411ZM7.49529 10.3874L8.4288 13.8091C8.59832 14.4304 9.16266 14.8613 9.80665 14.8613H17.0609C17.6997 14.8613 18.2608 14.4372 18.435 13.8227L20.5709 6.28955H6.28975L7.49529 10.3874ZM12.0017 19.8577C12.0017 21.0408 11.0426 22 9.85941 22C8.67623 22 7.71708 21.0408 7.71708 19.8577C7.71708 18.6745 8.67623 17.7153 9.85941 17.7153C11.0426 17.7153 12.0017 18.6745 12.0017 19.8577ZM10.5735 19.8577C10.5735 19.4633 10.2538 19.1436 9.85941 19.1436C9.46502 19.1436 9.1453 19.4633 9.1453 19.8577C9.1453 20.2521 9.46502 20.5718 9.85941 20.5718C10.2538 20.5718 10.5735 20.2521 10.5735 19.8577ZM19.1429 19.8577C19.1429 21.0408 18.1837 22 17.0005 22C15.8173 22 14.8582 21.0408 14.8582 19.8577C14.8582 18.6745 15.8173 17.7153 17.0005 17.7153C18.1837 17.7153 19.1429 18.6745 19.1429 19.8577ZM17.7146 19.8577C17.7146 19.4633 17.3949 19.1436 17.0005 19.1436C16.6061 19.1436 16.2864 19.4633 16.2864 19.8577C16.2864 20.2521 16.6061 20.5718 17.0005 20.5718C17.3949 20.5718 17.7146 20.2521 17.7146 19.8577Z" fill="currentColor"></path>
                                                                        </svg>&nbsp;Checkout
                                                                    </button>
                                                                )
                                                                    :
                                                                    (
                                                                        <button
                                                                            className="fkcart-checkout"
                                                                            onClick={() => {
                                                                                openModal()
                                                                            }}
                                                                        >
                                                                            <svg data-icon="icon-checkout" width="20" height="20" viewBox="0 0 24 24" class="fkcart-icon-checkout" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M2 2.71411C2 2.31972 2.31972 2 2.71411 2H3.34019C4.37842 2 4.97454 2.67566 5.31984 3.34917C5.55645 3.8107 5.72685 4.37375 5.86764 4.86133H20.5709C21.5186 4.86133 22.2035 5.7674 21.945 6.67914L19.809 14.2123C19.4606 15.4413 18.3384 16.2896 17.0609 16.2896H9.80665C8.51866 16.2896 7.39 15.4276 7.05095 14.185L6.13344 10.8225C6.12779 10.8073 6.12262 10.7917 6.11795 10.7758L4.64782 5.78023C4.59738 5.61449 4.55096 5.45386 4.50614 5.29878C4.36354 4.80529 4.23716 4.36794 4.04891 4.00075C3.82131 3.55681 3.61232 3.42822 3.34019 3.42822H2.71411C2.31972 3.42822 2 3.1085 2 2.71411ZM7.49529 10.3874L8.4288 13.8091C8.59832 14.4304 9.16266 14.8613 9.80665 14.8613H17.0609C17.6997 14.8613 18.2608 14.4372 18.435 13.8227L20.5709 6.28955H6.28975L7.49529 10.3874ZM12.0017 19.8577C12.0017 21.0408 11.0426 22 9.85941 22C8.67623 22 7.71708 21.0408 7.71708 19.8577C7.71708 18.6745 8.67623 17.7153 9.85941 17.7153C11.0426 17.7153 12.0017 18.6745 12.0017 19.8577ZM10.5735 19.8577C10.5735 19.4633 10.2538 19.1436 9.85941 19.1436C9.46502 19.1436 9.1453 19.4633 9.1453 19.8577C9.1453 20.2521 9.46502 20.5718 9.85941 20.5718C10.2538 20.5718 10.5735 20.2521 10.5735 19.8577ZM19.1429 19.8577C19.1429 21.0408 18.1837 22 17.0005 22C15.8173 22 14.8582 21.0408 14.8582 19.8577C14.8582 18.6745 15.8173 17.7153 17.0005 17.7153C18.1837 17.7153 19.1429 18.6745 19.1429 19.8577ZM17.7146 19.8577C17.7146 19.4633 17.3949 19.1436 17.0005 19.1436C16.6061 19.1436 16.2864 19.4633 16.2864 19.8577C16.2864 20.2521 16.6061 20.5718 17.0005 20.5718C17.3949 20.5718 17.7146 20.2521 17.7146 19.8577Z" fill="currentColor"></path>
                                                                            </svg>&nbsp;Checkout
                                                                        </button>
                                                                    )
                                                            }

                                                            {/* <br />
                                <div className="linkpage">
                                <Link to="#">Continue Shopping</Link>
                            </div> */}
                                                        </div>
                                                        <p className='fkcart-continue-shopping text-center' onClick={toggleModal}>Continue Shopping</p>
                                                    </div>

                                                </>
                                            )}
                                        </>
                                    )}
                                    {/* Check if cartItems is not an array or if it's empty */}

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            )}

            {isOpen && (
                <div className="fkcart" style={{ position: "relative !important", zIndex: 99999, background: "rgba(0, 0, 0, 0.5)" }}>
                    {/* <div className="modal-content col-12 col-sm-4 col-md-2 col-lg-2" style={{ border: "2px solid #BCE3C9", borderRadius: "20px", width: "auto" }}> */}
                    <div className="modal-content col-12 col-sm-4 col-md-2 col-lg-2" style={{  border: "2px solid #BCE3C9", borderRadius: "20px", maxWidth: "400px", maxHeight: "600px", margin:"0 auto",top:"30%", background:"#fff", overflowX: "inherit",padding:"15px" }}>
                        <div className='modal-body'>
                            {/* <span className="close" onClick={closeModal}>&times;</span> */}
                            <p><h3>Select your login option</h3></p>
                            <div>
                                <button className='btn btn-success' onClick={handleGuestLogin} style={{ width: "90%", padding: "10px", margin: "10px" }}>Guest Login</button>
                            </div>
                            <div>
                                <button className='btn btn-primary' onClick={handleRegularLogin} style={{ width: "90%", padding: "10px", margin: "10px" }}>Login</button>
                            </div>

                        </div>
                    </div>
                </div>
            )}


            {/* Coupon Code popup */}

            {/* {isCoupon && (
            <div className="modal fkcart">
            <div className="modal-content col-12 col-sm-4 col-md-2 col-lg-2" style={{border: "2px solid #BCE3C9",borderRadius: "20px", width:"auto"}}>
                <div className='modal-body'>
                    <p><h3>Apply Coupon</h3></p>
                    <div>
                        <button className='btn btn-outline-primary' onClick={()=>handleCouponcode('EB15')} style={{width:"100%",padding:"8px"}}>EB15</button>
                        <small>15% discount coupon</small>
                    </div>
                    
                    
                </div>
            </div>
            </div>
        )} */}


            {/* New Coupon Code popup */}
            {isnewCoupon &&
                <div className="fkcart" style={{ position: "relative !important", zIndex: 99999, background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-content col-12 col-sm-4 col-md-2 col-lg-2" style={{ borderRadius: "20px", maxWidth: "400px", maxHeight: "600px", margin:"0 auto",top:"30%", background:"#fff", overflowX: "inherit",padding:"10px" }}>
                        <div className='modal-body'>
                            <h3>Coupons
                                <span class="fkcart-modal-close" onClick={closenewcouponModal} style={{ cursor: "pointer", float: "right" }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" class="fkcart-icon-close" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.1518 4.31359L4.22676 4.22676C4.50161 3.9519 4.93172 3.92691 5.2348 4.1518L5.32163 4.22676L12 10.9048L18.6784 4.22676C18.9807 3.92441 19.4709 3.92441 19.7732 4.22676C20.0756 4.5291 20.0756 5.01929 19.7732 5.32163L13.0952 12L19.7732 18.6784C20.0481 18.9532 20.0731 19.3833 19.8482 19.6864L19.7732 19.7732C19.4984 20.0481 19.0683 20.0731 18.7652 19.8482L18.6784 19.7732L12 13.0952L5.32163 19.7732C5.01929 20.0756 4.5291 20.0756 4.22676 19.7732C3.92441 19.4709 3.92441 18.9807 4.22676 18.6784L10.9048 12L4.22676 5.32163C3.9519 5.04678 3.92691 4.61667 4.1518 4.31359L4.22676 4.22676L4.1518 4.31359Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                            </h3>
                            {


                                // Map over uniqueProducts array to render each unique coupon
                                uniqueProducts.map((ele, i) => (
                                    <div
                                        key={ele.couponsdata.ID}
                                        style={{
                                            // background: allcoupon === false ? (ele.couponsdata.applied_for === 'All' ? "#766285" : "#4a8e5a") : "#4a8e5a",
                                            padding: "0px 0px 0px 15px",
                                            border: "1px solid #ddd",
                                            marginBottom: "5px",
                                            borderRadius: "40px"
                                        }}
                                        
                                    >
                                        <span style={{float:"right",margin: "10px 20px 3px 3px",background:"#4a8e5a",padding:"5px",borderRadius:"10px",fontWeight:"400",color:"#fff",border:"1px solid #4a8e5a", cursor: ele.couponsdata.applied_for === 'All' ? "pointer" : "inherit"}} onClick={() => {
                                            if (ele.couponsdata.applied_for === 'All') {
                                                setAllcoupon(true);
                                                localStorage.setItem('ebcode', true);
                                            }
                                        }}>
                                            {
                                            allcoupon === true ? "Applied ✓" : "Apply"
                                            }
                                        </span>
                                        <p style={{ marginTop: "15px" }}>
                                            <img src={percentage_image} alt="" style={{ width: "5%", marginBottom: "5px", marginRight: "2px" }} />
                                            <span style={{ fontSize: "15px" }}> {ele.couponsdata.code}

                                                {/* {
                                                    ele.couponsdata.applied_for === 'All' ?
                                                        (<span style={{ fontSize: "10px", display: "flex" }}>{allcoupon === true ? "Coupon Applied" : "Coupon Available"}</span>)
                                                        :
                                                        (<span style={{ fontSize: "10px", display: "flex" }}>Coupon Applied</span>)
                                                } */}
                                            </span>
                                        </p>
                                        <hr />
                                        <p>
                                            {
                                                ele.couponsdata.type === 'Flat' ? <>Flat ₹ {ele.couponsdata.amount} off </> : <>{ele.couponsdata.amount} % off</>
                                            }
                                            <br />
                                            {ele.couponsdata.note}
                                        </p>
                                        {/* Render description using dangerouslySetInnerHTML */}
                                        <div dangerouslySetInnerHTML={{ __html: ele.couponsdata.description }} className='note' />
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>
            }

        </>
    )
}
export default Shoppingcart