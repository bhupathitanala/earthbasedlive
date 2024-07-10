import { React, useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Carousel, Container, Row, Col, Button, Card, Modal, Navbar } from 'react-bootstrap';
import Carousel2 from "react-multi-carousel"
import ActionAreaCard from './../MuiCardnew';
import { useCart } from './../../stores/context/CartContext';
import Apicalls, { post_url } from './../../Apicalls';
// icons & images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import maximizeIcon from './../../assets/maximize-2.png';
import wish_img from './../../assets/wish_img.png';

const HottestProducts = ({hottestProductsData, banners, shopshowModal, setShopshowModal}) => {
	const { addToCart, cardInfo } = useCart()
	const [selectedCard, setSelectedCard] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [showPopup, setShowPopup] = useState(false);

	const user = useSelector((state) => state.user.auth.user)
	const navigate = useNavigate();

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 1200, min: 992 },
			items: 4
		},
		tablet: {
			breakpoint: { max: 992, min: 769 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 768, min: 0 },
			items: 2
		}
	};

	const handleShowModal = (card) => {
		console.log(card);
		if (typeof card.productImages === 'undefined') {
			card.productImages = JSON.stringify([card.main_img]);
		} else {
			card.productImages = JSON.stringify([card.main_img, ...JSON.parse(card.productImages)]);
		}
		setSelectedCard(card);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleClosePopup = () => setShowPopup(false);

	const handleImageClick = (index) => {
		const images = JSON.parse(selectedCard.productImages);
		const clickedImage = images.splice(index, 1)[0];
		images.unshift(clickedImage);
		setSelectedCard({
			...selectedCard,
			productImages: JSON.stringify(images),
		});
	}

	const addToCartItems = (product) => {
		// const updatedCart = [...cartItems, product];
		// setCartItems(updatedCart);
		// // Save updated cart to local storage
		// localStorage.setItem('cartItems', JSON.stringify(updatedCart));
		addToCart(product)
		if (user?.ID) {
			Promise.all([
				Apicalls.post('cart', { userId: user.ID, productId: product.ID, status: 1 })
			]).then(([data]) => {
				if (Object.keys(data.data).length > 0) {
					console.log('Added to clart')
				}
				else {
					console.log('internal server error')
				}
			}).catch((err) => {
				console.log('internal server error')
			})
		}
		else {
			if (localStorage.getItem('cart_product_ids')) {
				var cartProductIds = JSON.parse(localStorage.getItem('cart_product_ids'));
				if (Array.isArray(cartProductIds)) {
					cartProductIds.push(product.ID)
					cartProductIds = Array.from(new Set(cartProductIds));
					localStorage.setItem('cart_product_ids', JSON.stringify(cartProductIds));
				}
				else {
					localStorage.setItem('cart_product_ids', JSON.stringify([product.ID]));
				}
			}
			else {
				localStorage.setItem('cart_product_ids', JSON.stringify([product.ID]))
			}
		}
	};

	function addToWishList(product) {
		if (user?.ID) {
			Promise.all([
				Apicalls.post('wishlist', { userId: user?.ID, productId: product.ID, status: 1 })
			]).then(([data]) => {
				if (Object.keys(data.data).length > 0) {
					console.log('Added to wishlist')
				}
				else {
					console.log('internal server error')
				}
			}).catch((err) => {
				console.log('internal server error')
			})
		}
		else {
			if (localStorage.getItem('wishlist_product_ids')) {
				var cartProductIds = JSON.parse(localStorage.getItem('wishlist_product_ids'));
				if (Array.isArray(cartProductIds)) {
					cartProductIds.push(product.ID)
					cartProductIds = Array.from(new Set(cartProductIds));
					localStorage.setItem('wishlist_product_ids', JSON.stringify(cartProductIds));
				}
				else {
					localStorage.setItem('wishlist_product_ids', JSON.stringify([product.ID]));
				}
			}
			else {
				localStorage.setItem('wishlist_product_ids', JSON.stringify([product.ID]))
			}
		}
	};

	return (
		<>
			{/* Hottest Products Now  */}
			<div className='hello d-block d-lg-block'>
				<div className='container'>
					<h6 className=''>Hottest Products Now</h6>
				</div>
				<div className='container'>
					<div className='row justify-content-center'>
						{hottestProductsData?.length > 0 && hottestProductsData?.map((card, index) => (
							<Col key={card.id} lg={3} md={4} sm={6} xs={9} className='mb-3'>
								<ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} shopshowModal={shopshowModal} setShopshowModal={setShopshowModal} />
							</Col>
						))}
					</div>
				</div>

				<Modal show={showPopup} onHide={handleClosePopup} size="xl">
					<Modal.Header closeButton>
						<Modal.Title>Maximized View</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{selectedCard && (
							<div className="maximized-card row roling_marg">
								<div className='col-md-5 col-xs-12'>
									<img src={post_url + JSON.parse(selectedCard.productImages)[0]} alt={selectedCard.title} className='img-fluid' id="mainImage" />
									{/* <img src={mainImage || selectedCard.image} alt={selectedCard.title} className='img-fluid' id="mainImage" /> */}
								</div>
								<div className='col-md-2'>
									{
										JSON.parse(selectedCard.productImages).map((item, index) => {
											if (index !== 0) {
												return <img src={post_url + JSON.parse(selectedCard.productImages)[index]} alt={selectedCard.title} className='img-fluid' onClick={() => handleImageClick(index)} />
											}
										})
									}
									{/* <img src={selectedCard.image_mini1} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick1(selectedCard.image_mini1)} />
                  					<img src={selectedCard.image_mini2} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick2(selectedCard.image_mini2)} />
                  					<img src={selectedCard.image_mini3} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick3(selectedCard.image_mini3)} />
                  					<img src={selectedCard.image_mini4} alt={selectedCard.title} className='img-fluid' onClick={() => handleMiniImageClick4(selectedCard.image_mini4)} /> */}
								</div>
								<div className='col-md-5 col-xs-12' style={{ overflowY: 'auto', maxHeight: '400px' }}>
									<div>
										<h3 className='pop_up_descriptionfull'>{selectedCard.descriptionfull}</h3>
										<p >{selectedCard.stars}</p>
										<p className="deals_para">₹{selectedCard.price}</p>
										<p className="deals_para1">{selectedCard.stocks}</p>
										<p className="catagerious_para1">Category:  <span className='catagerious_para_in'> {selectedCard.catagerious}</span></p>
									</div>

									<div className="mb-4 row roling_marg">
										<div className='col-6'>

											<button className='add_cart_deals_of_the_day' onClick={() => addToCartItems(selectedCard)}  >Add to cart</button>

										</div>
										<div className='col-6'>
											<button className='buy_now_deals_of_the_day' onClick={() => {
												// if (!user?.ID) {
												//   navigate('/login2/' + selectedCard.ID)
												// }
												// else {
												//   navigate('/Infopage/' + selectedCard.ID)
												// }
											}}></button>
										</div>
									</div>

									{/* <select className='form-control  mt-4'>
										<option value="Delivery Details" className="delivery-option">
										Delivery Details
										</option>
										<option value="saab">Home</option>
										<option value="opel">Office</option>
										<option value="audi">Other</option>
									</select> */}

									<div className='col-12 mt-4'>
										<div className="mt-5 row roling_marg">
										</div>
										<hr className="m-auto" style={{ border: "none", height: "2px", width: "150px", backgroundColor: "#509264" }} />

										<p className="mt-4">{selectedCard.about}</p>
										{/* <p className="mb-5">{selectedCard.about2}</p> */}

									</div>
								</div>
							</div>
						)}
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClosePopup}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>






			<div className='hello top_pick_minus_space d-none d-lg-none'>
				<div className='container'    >
					<h6 className='only_sm_heaiding_h6 '>Hottest Products Now</h6>
				</div>
				<div className='container'>
					<div className='hello'>
						<div className=' d-flex flex-row justify-content-between'>
							<div className='overflow-x-auto' >
								<div className='row roling_marg'>
									<Carousel2 responsive={responsive}>
										{hottestProductsData.map((card) => (
											<Col key={card.id} lg={3} md={10} sm={12} className='mb-5'>
												<div style={{ height: '420px' }}>
													<ActionAreaCard product={card} addToCart={addToCartItems} handleShowModal={handleShowModal} addToWishList={addToWishList} />
												</div>
											</Col>
										))}
									</Carousel2>
								</div>
							</div>
						</div>
					</div>
				</div>



				<Modal show={showPopup} onHide={handleClosePopup} size="xl">
					<Modal.Header closeButton>
						<Modal.Title>Maximized View</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{selectedCard && (
							<div className="maximized-card row roling_marg">
								<div className='col-md-5 col-xs-12'>
									{/* <img src={post_url + JSON.parse(selectedCard.productImages)[0]} alt={selectedCard.title} className='img-fluid' id="mainImage" /> */}
									{/* <img src={mainImage || selectedCard.image} alt={selectedCard.title} className='img-fluid' id="mainImage" /> */}
									<img src={post_url + JSON.parse(selectedCard.productImages)[0]} alt={selectedCard.title} className='img-fluid' id="mainImage" />
								</div>

								<div className='col-md-2 min_ing_contt'>
									{
										JSON.parse(selectedCard.productImages).map((item, index) => {
											if (index !== 0) {
												return <img src={post_url + JSON.parse(selectedCard.productImages)[index]} alt={selectedCard.title} className='img-fluid' onClick={() => handleImageClick(index)} />
											}
										})
									}
									{/* <img src={selectedCard.image_mini1} alt={selectedCard.title} className='img-fluid mini_img_size' onClick={() => handleMiniImageClick1(selectedCard.image_mini1)} />
                  					<img src={selectedCard.image_mini2} alt={selectedCard.title} className='img-fluid  mini_img_size' onClick={() => handleMiniImageClick2(selectedCard.image_mini2)} />
                  					<img src={selectedCard.image_mini3} alt={selectedCard.title} className='img-fluid mini_img_size' onClick={() => handleMiniImageClick3(selectedCard.image_mini3)} />
                  					<img src={selectedCard.image_mini4} alt={selectedCard.title} className='img-fluid mini_img_size' onClick={() => handleMiniImageClick4(selectedCard.image_mini4)} /> */}
								</div>
								<div className='col-md-5 col-xs-12' style={{ overflowY: 'auto', maxHeight: '400px' }}>
									<div>
										<h3 className='pop_up_descriptionfull'>{selectedCard.descriptionfull}</h3>
										<p >{selectedCard.stars}</p>
										<p className="deals_para">₹{selectedCard.price}</p>
										<p className="deals_para1">{selectedCard.quantity}</p>
										<p className="catagerious_para1">Category:  <span className='catagerious_para_in'> {selectedCard.title}</span></p>
									</div>

									<div className="mb-4 row roling_marg">
										<div className='col-6'>

											<button className='add_cart_deals_of_the_day' onClick={() => addToCartItems(selectedCard)}  >Add to cart</button>

										</div>
										<div className='col-6'>
											<button className='buy_now_deals_of_the_day' onClick={() => {
												if (!user?.ID) {
													navigate('/login2/' + selectedCard.ID)
												}
												else {
													navigate('/Infopage/' + selectedCard.ID)
												}
											}}>Buy Now</button>
										</div>
									</div>

									{/* <select className='form-control  mt-4'>
										<option value="Delivery Details" className="delivery-option">
										Delivery Details
										</option>
										<option value="saab">Home</option>
										<option value="opel">Office</option>
										<option value="audi">Other</option>
									</select> */}
									<center>
										<div className="mb-4 row  text-center   roling_marg     " style={{ width: '100%', marginTop: '20px' }}>
											<div className='col-4 d-none d-md-block' style={{ padding: 0 }}>
												<FontAwesomeIcon icon={faBox} />
												<h3 className='deliered_time'>Order Now</h3>
											</div>
											<div className='col-8  d-none d-md-block ' style={{ padding: 0, marginLeft: '-35px' }}>
												<FontAwesomeIcon icon={faTruckFast} />
												<h3 className='deliered_time'>Delivered with in 3 - 5 days</h3>
											</div>
										</div>
									</center>

									<div className='col-12 mt-4'>
										<div className="mt-5 row roling_marg">
											{/* {(selectedCard.featuresData.filter(item => ![1, 2, 3].includes(item.id))).map((item) => {
												return <div className='col-3 justify_con'>
												<img src={post_url + item.icon} alt={post_url + item.icon} />
												<p className="mt-4">{item.title}</p>
												</div>
											})} */}
										</div>
										<hr className="m-auto" style={{ border: "none", height: "2px", width: "150px", backgroundColor: "#509264" }} />

										<p className="mt-4">{selectedCard.about}</p>
										<p className="mb-5">{selectedCard.about2}</p>
									</div>
								</div>
							</div>
						)}
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClosePopup}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
			{/* Ending Hottest Products Now  */}
		</>
	);
}

export default HottestProducts;