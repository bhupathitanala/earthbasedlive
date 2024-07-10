import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Card } from 'react-bootstrap'

import 'bootstrap-icons/font/bootstrap-icons.css';

import Apicalls, { post_url } from "../Apicalls";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Productcart.css'; // Import CSS for styling
// import loaderimg from '../assets/loaderimg.webp';
import loaderimg from '../assets/loader2.gif';//

const Shoppingcart = ({toggleModal}) =>{
    const user = useSelector((state) => state.user.auth.user)
    //console.log(user, window.location.pathname.split('/')[2])
   const navigate = useNavigate()
    
    const [showCartPopup, setShowCartPopup] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    const [loading, setLoading] = useState(true); // Loading state

    const fetchCartItems = useCallback(async () => {
        try {
            setLoading(true); // Set loading to true when fetching starts
            if (user?.ID) {
                const { data } = await Apicalls.get('cart/items/' + user.ID);
                console.log(data);
                // Extract product attributes if they exist
                const cartItemsWithAttributes = data.map(item => {
                    if (item.attributes && typeof item.attributes === 'string') {
                        return {
                            ...item,
                            attributes: JSON.parse(item.attributes),
                            // product_data: JSON.parse(item.product_attributes),
                        };
                    }
                    return item;
                });
                // console.log(cartItemsWithAttributes)
                setCartItems(cartItemsWithAttributes);
                localStorage.removeItem('cartItems');
            } else {
                let items_data = JSON.parse(localStorage.getItem('cartItems'));
                setCartItems(items_data);
                // const cartProductIds = JSON.parse(localStorage.getItem('cart_product_ids'));
                // if (Array.isArray(cartProductIds)) {
                //     const { data } = await Apicalls.post(`products/requiredProducts`, { productIds: cartProductIds });
                //     // Extract product attributes if they exist
                //     const cartItemsWithAttributes = data.map(item => {
                //         if (item.product_attributes && typeof item.product_attributes === 'string') {
                //             return {
                //                 ...item,
                //                 product_attributes: JSON.parse(item.product_attributes).attributes
                //             };
                //         }
                //         return item;
                //     });
                //     setCartItems(cartItemsWithAttributes);
                // }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // Set loading to false when fetching finishes
        }
    }, [user]);
    


    useEffect(() => {
        fetchCartItems();
    }, [fetchCartItems]);

 
    // Functionality for cart items

    // Function to increment quantity of an item in the cart
    function incrementQuantity(index,cartdata) {
        if (user?.ID) {
            cartItems[index].quantity += 1
            let qty = cartItems[index].quantity
            //console.log(cartItems)
            setCartItems([...cartItems])
            UpdateProductQty(qty, cartdata.ID)      
            
        }else{
            // Increment quantity for non-user
            const updatedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            updatedCartItems[index].quantity += 1;
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            setCartItems(updatedCartItems);            
        }        
    }

    // Function to decrement quantity of an item in the cart
    function decrementQuantity(index,cartdata) {
        if (user?.ID) {
            if (cartItems[index].quantity > 1) {
                cartItems[index].quantity -= 1
                let qty = cartItems[index].quantity
                //console.log(cartItems)
                setCartItems([...cartItems])
                UpdateProductQty(qty, cartdata.ID)
            }
                
            
        }else{
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


    function UpdateProductQty(productQty, cartID){
        Promise.all([
            Apicalls.put('cart/cartproductupdate/'+cartID, { userId: user.ID, productQty: productQty })
        ]).then(([data]) => {
            
        }).catch((err) => {
            //console.log('internal server error')
        })

        
    }


    function deleteCartItem(index, cartItem) {
        //console.log(cartItem)
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


    return(
        <>
        <div className='Productpage_section1 mt-5'>
            {showCartPopup && (
                <div className="cart-popup" id="fkcart-modal">
                    <div className='fkcart-preview-ui has-zero-state'>
                    <Card>
                        <Card.Body style={{overflow:"auto"}}>
                            
                        <div class="fkcart-slider-header">
                        <div class="fkcart-slider-heading fkcart-panel">
                            <div class="fkcart-title">Your Cart</div>
                            {/* <div class="fkcart-modal-close" onClick={()=>setShowCartPopup(false)} style={{cursor:"pointer"}}> */}
                            <div class="fkcart-modal-close" onClick={toggleModal} style={{cursor:"pointer"}}>
                                <svg width="20" height="20" viewBox="0 0 24 24" class="fkcart-icon-close" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.1518 4.31359L4.22676 4.22676C4.50161 3.9519 4.93172 3.92691 5.2348 4.1518L5.32163 4.22676L12 10.9048L18.6784 4.22676C18.9807 3.92441 19.4709 3.92441 19.7732 4.22676C20.0756 4.5291 20.0756 5.01929 19.7732 5.32163L13.0952 12L19.7732 18.6784C20.0481 18.9532 20.0731 19.3833 19.8482 19.6864L19.7732 19.7732C19.4984 20.0481 19.0683 20.0731 18.7652 19.8482L18.6784 19.7732L12 13.0952L5.32163 19.7732C5.01929 20.0756 4.5291 20.0756 4.22676 19.7732C3.92441 19.4709 3.92441 18.9807 4.22676 18.6784L10.9048 12L4.22676 5.32163C3.9519 5.04678 3.92691 4.61667 4.1518 4.31359L4.22676 4.22676L4.1518 4.31359Z" fill="currentColor"></path>
                        </svg>    </div>
                        </div>        

                        <hr></hr>
                        </div>

                        {loading ? ( // Render loader if loading is true
                                <div className="text-center" style={{justifyContent:"center"}}>
                                    <img src={loaderimg} alt="Loading..." width={200} height={200}/>
                                </div>
                            ) : (
                                // Render cart items or zero state
                                <div className="fkcart-slider-body">
                                {!Array.isArray(cartItems) || cartItems.length === 0 ? (
                                <div className='fkcart-slider-body'>
                                    <div className="fkcart-zero-state">
                                        <div className="fkcart-icon-cart">
                                            {/* <img src={emptycart} alt="Empty Cart" /> */}
                                            <svg data-icon="icon-checkout" width="56" height="56" viewBox="0 0 24 24" class="fkcart-icon-checkout" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2.71411C2 2.31972 2.31972 2 2.71411 2H3.34019C4.37842 2 4.97454 2.67566 5.31984 3.34917C5.55645 3.8107 5.72685 4.37375 5.86764 4.86133H20.5709C21.5186 4.86133 22.2035 5.7674 21.945 6.67914L19.809 14.2123C19.4606 15.4413 18.3384 16.2896 17.0609 16.2896H9.80665C8.51866 16.2896 7.39 15.4276 7.05095 14.185L6.13344 10.8225C6.12779 10.8073 6.12262 10.7917 6.11795 10.7758L4.64782 5.78023C4.59738 5.61449 4.55096 5.45386 4.50614 5.29878C4.36354 4.80529 4.23716 4.36794 4.04891 4.00075C3.82131 3.55681 3.61232 3.42822 3.34019 3.42822H2.71411C2.31972 3.42822 2 3.1085 2 2.71411ZM7.49529 10.3874L8.4288 13.8091C8.59832 14.4304 9.16266 14.8613 9.80665 14.8613H17.0609C17.6997 14.8613 18.2608 14.4372 18.435 13.8227L20.5709 6.28955H6.28975L7.49529 10.3874ZM12.0017 19.8577C12.0017 21.0408 11.0426 22 9.85941 22C8.67623 22 7.71708 21.0408 7.71708 19.8577C7.71708 18.6745 8.67623 17.7153 9.85941 17.7153C11.0426 17.7153 12.0017 18.6745 12.0017 19.8577ZM10.5735 19.8577C10.5735 19.4633 10.2538 19.1436 9.85941 19.1436C9.46502 19.1436 9.1453 19.4633 9.1453 19.8577C9.1453 20.2521 9.46502 20.5718 9.85941 20.5718C10.2538 20.5718 10.5735 20.2521 10.5735 19.8577ZM19.1429 19.8577C19.1429 21.0408 18.1837 22 17.0005 22C15.8173 22 14.8582 21.0408 14.8582 19.8577C14.8582 18.6745 15.8173 17.7153 17.0005 17.7153C18.1837 17.7153 19.1429 18.6745 19.1429 19.8577ZM17.7146 19.8577C17.7146 19.4633 17.3949 19.1436 17.0005 19.1436C16.6061 19.1436 16.2864 19.4633 16.2864 19.8577C16.2864 20.2521 16.6061 20.5718 17.0005 20.5718C17.3949 20.5718 17.7146 20.2521 17.7146 19.8577Z" fill="currentColor"></path>
                            </svg>
                            </div>
                            {/* <div className="fkcart-zero-state-title">Your Cart is Empty</div> */}
                            <div className="fkcart-zero-state-text">Fill your cart with amazing items</div>
                            {/* <a href="#" className="fkcart-primary-button fkcart-shop-button fkcart-modal-close">Shop Now</a> */}
                        </div>
                    </div>
                    ) : (
                    <>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                {/* <th>Type</th> */}
                                {/* <th>Attributes</th> */}
                                <th>Quantity</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={item.ID}>
                                    {item.productType === "simple" && (
                                        <>
                                        <td>
                                            <img src={post_url + item.productImage} alt={item.productTitle} style={{ width: "50px", marginRight: "20px" }} />
                                        </td>
                                        <td>
                                            {item.productTitle}
                                            <br /><small>Vendor:{item.vendorName}</small>
                                        </td>
                                        <td>₹ {item.salePrice === 0 ? item.price : item.salePrice * item.quantity}</td>
                                        {/* <td>{item.product_type}</td> */}
                                        <td>
                                            <div className='containerquantity_btn'>
                                                <button onClick={() => decrementQuantity(index,item)} className='butt_in_dec'>-</button>
                                                <div className='num_quty'>{item.quantity}</div>
                                                <button onClick={() => incrementQuantity(index,item)} className='butt_in_dec'>+</button>
                                            </div>
                                        </td>
                                        <td>
                                            <i className="bi bi-trash" onClick={() => deleteCartItem(index, item)} style={{ fontSize: '1em', color: 'red', cursor: "pointer" }}></i>
                                        </td>
                                        </>
                                    )}
                                    {item.productType === "variable" && (
                                        // Render variable product specific action
                                        <>
                                        <td>
                                            <img src={post_url + item.productImage} alt={item.productTitle} style={{ width: "50px", marginRight: "20px" }} />
                                        </td>
                                        <td>
                                            {item.productTitle}
                                            <br /><small>Vendor:{item.vendorName}</small>
                                            {/* Render item attributes if they exist */}
                                            {item.attributes && (
                                                <small>
                                                    <br />
                                                    <b><u>Attributes:</u></b>
                                                    {item.attributes.length > 0 ? (
                                                        item.attributes.map(({ name, value }, index) => (
                                                            <div key={index}>
                                                                {name}: {value}
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div>No attributes found</div>
                                                    )}
                                                    <div key={index+1}>
                                                    SKU:
                                                    {item.sku}
                                                    </div>
                                                </small>
                                            )}
                                        </td>
                                        {/* {
                                          item.salePrice === 0 ?  (<td>₹ {(item.price * item.quantity)}</td>) : <td>₹ {(item.salePrice * item.quantity)}</td>
                                        } */}
                                        <td>₹ {item.salePrice === 0 ? item.price : item.salePrice * item.quantity}</td>

                                        {/* <td>{item.product_type}</td> */}
                                        <td>
                                            <div className='containerquantity_btn'>
                                                <button onClick={() => decrementQuantity(index,item)} className='butt_in_dec'>-</button>
                                                <div className='num_quty'>{item.quantity}</div>
                                                <button onClick={() => incrementQuantity(index,item)} className='butt_in_dec'>+</button>
                                            </div>
                                        </td>
                                        <td>
                                            <i className="bi bi-trash" onClick={() => deleteCartItem(index, item)} style={{ fontSize: '1em', color: 'red', cursor: "pointer" }}></i>
                                        </td>
                                        </>
                                    )}                
                                </tr>
                            ))}
                        </tbody>
                    </table>

                        <div className="col-12">
                            <div className='d-flex sub_total_div'>
                                <p className='para_text_checkout'>Sub total</p>
                                <p className='para_text_checkout'>
                                        ₹{cartItems.reduce((total, item) => total + (item.salePrice === 0 ? item.price : item.salePrice) * item.quantity, 0).toFixed(2)}
                                </p>

                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                            {/* <button className="buynow_button_product_page" onClick={() => {
                                        navigate('/shipping')
                                    }}>Proceed to checkout</button> */}
                            <button
                                className="buynow_button_product_page"
                                onClick={() => {
                                    setShowCartPopup(false); // Set showCartPopup to false
                                    setTimeout(() => {
                                        navigate('/pcheckout'); // Navigate to '/shipping' route after a delay
                                    }, 300); // Adjust the delay as needed
                                }}
                            >
                                Proceed to checkout
                            </button>
                        </div>
                    </>
                )}
                                        </div>
                                    )}
                {/* Check if cartItems is not an array or if it's empty */}
                
            </Card.Body>
        </Card>
    </div>
    </div>
)}

           
            </div>
       


    </>
    )
}
export default Shoppingcart