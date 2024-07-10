import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import footer_logo from '../assets/logo.png';
import footer_leaf from '../assets/footer_leaf.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import mailimage from '../assets/gmail.png';
import facebookimage from '../assets/facebook (1).png';
import youtubeimage from '../assets/youtube.png';
import twitterimage from '../assets/twitter.png';
import linkedimage from '../assets/header_images/linkedin.png';
import instagramimage from '../assets/insta.png'
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import payment_img from '../assets/payment_img.png';
function Footer() {
    const [isScrollUpVisible, setIsScrollUpVisible] = useState(false);

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
          if (window.scrollY > 300) {
            setIsScrollUpVisible(true);
          } else {
            setIsScrollUpVisible(false);
          }
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <>
            <footer className='footer_btm'>
                <section className='footerbgcolour m-3 px-2 footer-py-4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-3'   >
                                <div className='d-flex  footer_img_mail' >
                                    <a href='/'> <img src={footer_logo} alt='footer_logo' className="img-fluid footer_img_size" width="60%" /> </a>

                                    <div className="input-container hover_bg d-md-none">
                                        <input required="" placeholder="Your Email..." type="email" />
                                        <button className="invite-btn hover_bg" type="button">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>

                                <p className='footer_green_tag  '><i class="bi bi-telephone-fill"></i>&nbsp;&nbsp;  +91 9646492525</p>
                                <p className='footer_green_tag  '> <i class="bi bi-envelope-fill"></i>&nbsp;&nbsp;  hello@earthbased.store</p>

                                <div className='d-flex footer_social my-4'>
                                    <p>
                                        <a href="https://www.facebook.com/earthbasedstore"   target='blank' className='fb_app' >
                                            <i class="bi bi-facebook"></i>
                                        </a>
                                    </p>
                                    
                                    <p><a href="https://www.instagram.com/earthbasedstore/" target='blank'   
                                    className='insta_app' >   <i class="bi bi-instagram"></i></a>
                                    </p>

                                    <p><a href="#"  target='blank' 
                                    className='twitter_app'>    <i class="bi bi-twitter-x"></i></a>
                                    </p>

                                    <p><a href="https://www.linkedin.com/company/earthbased/?originalSubdomain=in"  target='blank' 
                                    className='linked_app'   >    <i class="bi bi-linkedin"></i></a>
                                    </p>

                                    <p><a href="#" className='you_app' >  <i class="bi bi-youtube"></i></a>
                                    </p>

                                    {/* <p><a href="#"><img src={mailimage} alt={mailimage} className='img-fluid footer_icons' /></a></p>
                                <p><a href="#"><img src={facebookimage} alt={facebookimage} className='img-fluid footer_icons' /></a></p>

                                <p><a href="#"><img src={twitterimage} alt={twitterimage} className='img-fluid footer_icons' /></a></p>
                                <p><a href="#"><img src={youtubeimage} alt={youtubeimage} className='img-fluid footer_icons' /></a></p>
                                <p><a href="#"><img src={linkedimage} alt={linkedimage} className='img-fluid footer_icons' /></a></p>
                                <p><a href="#"><img src={instagramimage} alt={instagramimage} className='img-fluid footer_icons' /></a></p> */}
                                </div>
                            </div>
                            <div className='col-12 col-md-3 d-none d-md-block'>
                                <h5 className='footer_h_tag'><a href="#">Useful Links</a></h5>
                                <p className='footer_p_tag'><a href="/UserProfile">My Account</a></p>
                                <p className='footer_p_tag'><a href="/about">About us</a></p>
                                <p className='footer_p_tag'><a href="/blog">Blogs</a></p>
                                <p className='footer_p_tag'><a href="/nutritionist">Nutritionist</a></p>
                            </div>
                            <div className='col-12 col-md-3 d-none d-md-block'>
                                <h5 className='footer_h_tag'><a href="#">Help & Support</a></h5>
                                <p className='footer_p_tag'><a href="/vendor">Become a Vendor</a></p>
                                <p className='footer_p_tag'><a href="#">Careers</a></p>
                                <h5 className='footer_h_tag'><a href="#">Quick Links</a></h5>
                                <p className='footer_p_tag'><a href="/vendors">Brands</a></p>
                                <p className='footer_p_tag'><a href="#">Sustainability</a></p>
                            </div>
                            <div className='col-12 col-md-3 d-none d-md-block'>
                                <h5 className='footer_h_tag'><a href="#">Terms & Conditions</a></h5>
                                <p className='footer_p_tag'><a href="/privacypolicy">Privacy Policy</a></p>
                                <p className='footer_p_tag'><a href="/shippingpolicy">Shipping Policy</a></p>
                                {/* <p className='footer_p_tag'><a href="#">Terms & Conditions</a></p> */}
                                <img src={payment_img} alt={payment_img} className='img-fluid payment_img_post' style={{height: 'auto'}} />
                                <div style={{ clear:"both" }}></div><br/><br/><br/>
                                <div className="input-container d-none d-md-block">
	                            	<input required="" placeholder="Your Email......" type="email" />
		                            <button className="invite-btn hover_bg" type="button">
		                                Subscribe
		                            </button>
	                        	</div>
                            </div>

                            {/* for sm-devices */}
                            <div className='col-6 d-block d-md-none'>
                                <h5 className='footer_h_tag'><a href="#">Useful Links</a></h5>
                                <p className='footer_p_tag'><a href="/UserProfile">My Account</a></p>
                                <p className='footer_p_tag'><a href="/nutritionist">Nutritionist's Help</a></p>
                                {/* <p className='footer_p_tag'><a href="#">Check Out</a></p> */}
                            </div>

                            <div className='col-6 d-block d-md-none'>
                                <h5 className='footer_h_tag'><a href="#">About Us</a></h5>
                                <p className='footer_p_tag'><a href="/about">About us</a></p>
                                <p className='footer_p_tag'><a href="/blog">Blogs</a></p>
                            </div>

                            <div className='col-6 d-block d-md-none'>
                                <h5 className='footer_h_tag'><a href="#">Terms & Conditions</a></h5>
                                <p className='footer_p_tag'><a href="/privacypolicy">Privacy Policy</a></p>
                                <p className='footer_p_tag'><a href="/shippingpolicy">Shipping Policy</a></p>
                            </div>

                            <div className='col-6 d-block d-md-none'>
                                <h5 className='footer_h_tag'><a href="#">Quick Links</a></h5>
                                <p className='footer_p_tag'><a href="/vendors">Brands</a></p>
                                <p className='footer_p_tag'><a href="#">Sustainability</a></p>
                                {/* <p className='footer_p_tag'><a href="#">New Products</a></p> */}
                                {/* <p className='footer_p_tag'><a href="#">Wishlists</a></p> */}
                            </div>

                            <img src={payment_img} alt={payment_img} className='img-fluid  d-md-none' />
                            <div className='row d-block d-sm-none float-end mb-2'>
                                <img src={footer_leaf} alt='footer_leaf' height="100" style={{width:"auto",float:'right'}}/>
                            </div>
                        </div>  
                        <p className='footer_p_tag   d-md-none center_para mt-3'>
                            {/* <a href="#">Terms & Conditions</a> */}
                        </p>

                        
                    </div>

                </section>

                <div className='stic_leaf_lg d-none d-sm-block'>
                    <img src={footer_leaf} alt='footer_leaf' className="img-fluid" />
                </div>

            </footer>

      

            {/* Scroll to Top Button */}
            { isScrollUpVisible === true ? (
            <button
            className="scrooll_up"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
            ) : '' }

            {/* WhatsApp Contact Icon */}
            <a  className="whatspp_btn"
            href="https://wa.me/9646492525" 
            target="_blank"
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>

        </>
    );
}

export default Footer;