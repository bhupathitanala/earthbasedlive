import React, { useState, useEffect } from 'react';
import Apicalls, { post_url } from '../Apicalls';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';

import maximize from '../assets/maximize-2.png';
import buycard from '../assets/buycard.png';
import natural from '../assets/natural.png'
import gmo from '../assets/gmo.png'
import no_presetives from '../assets/no_presettives.png'
import gluten from '../assets/gulten_free.png'
import iconcard2 from '../assets/iconcard2.png';
import iconcard3 from '../assets/iconcard3.png';
import flagimg from '../assets/flagimg.png';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BuyProduct from '../Categorys/BuyProduct';
import ActionAreaCard from '../Ecommerce/MuiCard';


// import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';




const UserCart = () => {

    const [cartItems, setCartItems] = useState([]);
    const user = useSelector((state) => state.user.auth.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (user?.ID) {
            Promise.all([
                Apicalls.get('cart/user/' + user.ID)
            ]).then(([productsData]) => {
                productsData.data = productsData.data.map((item) => { item.userQuantity = 1; return item })
                setCartItems(productsData.data)
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

    const [quantity, setQuantity] = useState(1);
    const increment = (index) => {
        cartItems[index].userQuantity += 1
        console.log(cartItems)
        setCartItems([...cartItems])
    };

    const decrement = (index) => {
        if (cartItems[index].userQuantity > 1) {
            cartItems[index].userQuantity -= 1
            console.log(cartItems)
            setCartItems([...cartItems])
        }
    };

    function deleteCartItem(cartItem) {
        console.log(cartItem)
        if (user?.ID) {
            Promise.all([
                Apicalls.delete('cart/' + cartItem.cartID)
            ]).then(([productsData]) => {
                setCartItems(cartItems.filter((cart) => cart.ID !== cartItem.ID))
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            let cartItemsIds = JSON.parse(localStorage.getItem('cart_product_ids'));
            cartItemsIds = cartItemsIds.filter(id => id !== cartItem.ID)
            localStorage.setItem('cart_product_ids', JSON.stringify(cartItemsIds))
            console.log(cartItems.filter(item => item.ID !== cartItem.ID))
            setCartItems(cartItems.filter(item => item.ID !== cartItem.ID))
        }
    }

    return (
        <>
            <div className='d-none d-md-block'>
                <div className='container my-5'>
                    <h1 className='cart_Heading'> Shopping Cart</h1>
                </div>

                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-2  '>
                                <p><strong>product</strong></p>
                            </div>
                            <div className='col-5'>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <p className=' '><strong>Details</strong></p>

                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <p className=' '><strong>price</strong></p>
                                    </div>
                                </div>

                            </div>
                            <div className='col-4'>

                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <p><strong>Quantity</strong></p>
                                    </div>
                                    <div className='col-12 col-md-6 '>
                                        <p><strong>Remove</strong></p>


                                    </div>
                                </div>
                            </div>
                            <div className='col-1'>
                                <p className=' '> <strong>  Total</strong></p>
                            </div>
                        </div>


                        <hr></hr>
                    </div>
                </section>

                {cartItems.map((item, index) => (

                    <div key={index} className='container'>
                        <div className='row '>
                            <div className='col-2   d-flex flex-column justify-content-center'>
                                {/* <img src={item.image} className=' add_cart_img  img-fluid   ' /> */}
                                <img src={post_url + item.main_img} className='add_cart_img img-fluid' />
                            </div>

                            <div className='col-5 bth_text_div d-flex flex-column justify-content-center'>
                                <div className='row'>
                                    <div className='col-12 col-md-6  ' onClick={() => navigate('/product/' + item.ID)}>
                                        <p className='cardpara2'>{item.heading}</p>
                                        <p className='cardpara1'>{item.title}</p>
                                    </div>
                                    <div className='col-12 col-md-6  '>
                                        <p className='cardpara3'>{item.price}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-4  d-flex flex-column justify-content-center'>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>


                                        {/* <button>  increment</button> */}
                                        {/* <button onClick={incrementCount}>Increment</button> */}
                                        <div className='containerquantity_btn'>
                                            <button onClick={() => decrement(index)} className='butt_in_dec' >-</button>
                                            <div className='num_quty' >{item.userQuantity}</div>
                                            <button onClick={() => increment(index)} className='butt_in_dec'  >+</button>
                                        </div>

                                    </div>
                                    <div className='col-12 col-md-6 trash_icon'>
                                        <i className="bi bi-trash" onClick={() => deleteCartItem(item)} style={{ fontSize: '2em' }}></i>

                                    </div>
                                </div>
                            </div>

                            <div className='col-1  d-flex flex-column justify-content-center'>
                                <p className='cart_page_price'>{(item.price * item.userQuantity)}</p>
                            </div>

                            <hr></hr>
                        </div>
                    </div>

                ))}


            </div>



            <div className='  d-md-none'>
                <div className='container my-5 text-center'>
                    <h1 className='cart_Heading_sm'> Shopping Cart</h1>
                </div>

                <section>
                    <div className='container '>
                        <div className='row  '>
                            <div className='col-6 text-center '>
                                <p><strong>product</strong></p>
                            </div>
                            <div className='col-6  text-center '>

                                <p className=' '><strong>Details</strong></p>


                            </div>

                        </div>


                        <hr></hr>
                    </div>
                </section>

                {cartItems.map((item, index) => (

                    <div key={index} className='container'>
                        <div className='row '>
                            <div className='col-6 mb-4  d-flex flex-column justify-content-center'>
                                {/* <img src={item.image} className=' add_cart_img  img-fluid   ' /> */}
                                <img src={item.main_img} className=' add_cart_img  img-fluid   ' />
                            </div>

                            <div className='col-5  mb-4  bth_text_div d-flex flex-column justify-content-center'>
                                <div className='row'>
                                    <div className='col-12 col-md-6  '>
                                        <p className='cardpara2'>{item.description}</p>
                                        <p className='cardpara1'>{item.title}</p>
                                    </div>
                                    <div className='col-12 col-md-6  '>
                                        <p className='cardpara3'>{item.price}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-4  d-flex flex-column justify-content-center'>


                                <div className='col-6  trash_icon'>
                                    <i className="bi bi-trash" style={{ fontSize: '2em' }}></i>

                                </div>
                            </div>
                            <div className='col-4  d-flex flex-column justify-content-center'>

                                <div className='col-6 '>

                                    <div className='containerquantity_btn'>
                                        <button onClick={() => decrement(index)} className='butt_in_dec' >-</button>
                                        <div className='num_quty' >{quantity}</div>
                                        <button onClick={() => increment(index)} className='butt_in_dec'  >+</button>
                                    </div>
                                </div>

                            </div>

                            <div className='col-4  d-flex flex-column justify-content-center'>
                                <p className='cart_page_price'>{item.price}</p>
                            </div>

                            <hr></hr>
                        </div>
                    </div>

                ))}


            </div>
        </>
    )
}

export default UserCart