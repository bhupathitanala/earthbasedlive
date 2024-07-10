import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import maximizeIcon from '../assets/maximize-2.png';
import maximizeIcon from '../assets/expand.png';
import CardActions from '@mui/material/CardActions';
import wish_img from '../assets/wish_img.png';
import buycard from '../assets/buycard.png';
import cartIcon from '../assets/cart.svg';
import iconcard2 from '../assets/iconcard2.png';
import iconcard3 from '../assets/iconcard3.png';
import flagimg from '../assets/flagimg.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Shoppingcart from './Shoppingcart';
import { useSelector } from "react-redux";
import Apicalls, { post_url } from "../Apicalls";
import StarRating from "./StarRating";
import { useCart } from '../stores/context/CartContext.jsx';

export default function ActionAreaCard({ product, addToCart, handleShowModal, addToWishList, setshopshowModal }) {
    // console.log(product)
    const user = useSelector((state) => state.user.auth.user)
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate()
    const { badgeCount, incrementBadgeCount } = useCart();

    // const [shopshowModal, setShopshowModal] = useState(false);
    // Your component code here

    // const toggleModal = () => {
    //     setShopshowModal(!shopshowModal);
    // };
    

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };


    // Function to add item to cart
        function addToCart(item) {
            // Create a cart item object with product ID, quantity, and attributes
            console.log(item)
            
            incrementBadgeCount();

            // setShowCartPopup(true);
            // setShopshowModal(true);
                

            let cartItem = {};
            // Create a cart item object with required product details
            
            if(item.product_type === 'simple'){
                cartItem = {
                    productId: item.ID, // Assuming item.id is the product ID
                    productTitle: item.title, // Assuming item.title is the product title
                    productImage: item.main_img.startsWith('/') ? 'productimages/'+item.main_img.substring(1) : 'productimages/'+item.main_img, // Remove leading '/' if exists
                    productType: item.product_type, // Assuming item.main_img is the product main_image
                    attributes: [], // Assuming item.attributes is the attributes array
                    image: "", // Assuming item.image is the image URL
                    price: item.price , // Assuming item.price is the product price
                    salePrice: item.sale_price, // Assuming item.sale_price is the sale price
                    quantity: 1, // Assuming item.quantity is the available quantity
                    sku: item.sku || "", // Assuming item.sku is the product SKU
                    cod_charges: item.cod_charges || "", // Assuming item.cod_charges is the COD charges
                    shipping_charges: item.shipping_charges || 0, // Assuming item.shipping_charges is the shipping charges
                    others: [],
                    vendor_id:item.vendor_id,
                    vendorName:item.vendorName
                    
                };
            
            }
            
            
            if (user?.ID) {
                cartItem.userId = user.ID
                Promise.all([
                    Apicalls.post('cart/additem', cartItem)
                ]).then(([data]) => {
                    // setShowCartPopup(true);
                    setshopshowModal(true);
                    if (Object.keys(data.data).length > 0) {
                        //alert("added")
                        
                        // fetchCartItems();
                        //navigate('/usercart')
                        console.log('Cart Added Successfully.')
                    }
                    else {
                        console.log('internal server error')
                    }
                }).catch((err) => {
                    // setShowCartPopup(true);
                    setshopshowModal(true);
                    console.log('internal server error')
                })
                localStorage.removeItem('cartItems');
            }else{
                // Get existing cart items from session storage or initialize as empty array
                let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

                // Check if cartItem with the same productId and attributes exists in the existing cartItems
                const existingCartItem = cartItems.find(item => 
                    item.productId === cartItem.productId && JSON.stringify(item.attributes) === JSON.stringify(cartItem.attributes)
                );

                // If existingCartItem is not undefined, a matching item exists, so do not add it again
                if (!existingCartItem) {
                    // Add the new cartItem to the cartItems array
                    cartItems.push(cartItem);

                    // Store the updated cartItems back to session storage
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                }
                setshopshowModal(true);
            }
            

        }



            // end

    return (
        <>
        <Card sx={{ maxWidth: 400, height: '100%', borderRadius: '20px', padding: '4px 0 0px 0' }} component={'div'} className='card_img99' >
            <div className="image_border hover_img img-hover-zoom" style={{ position: 'relative' }} onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
                {/* {product?.sale_price== 0 || (product?.price - product?.sale_price)==0 ?
                    (
                        <></>
                    )
                :
                    (
                        <span className="offers" style={{ position: 'absolute', margin: '-15px 0 0 -10px' }}>
                        {(((product.price - product.sale_price) / product.price) * 100).toFixed(2)}%
                        </span>

                    )
                } */}
                <CardMedia
                    onClick={() => { product?.product_type === 'variable' ? navigate('/vproduct/' + product.ID) : navigate('/product/' + product.ID) }}
                    component="img"
                    height="250"
                    // style={{ padding: '10px', paddingBottom: '0px' }}
                    // image={post_url + (isHovered ? +'hoverimages/'+product.hover_img : +'mainimages/'+product.main_img)}
                    image={`${post_url}${isHovered ? 'productimages/' + product.hover_img : 'productimages/' + product.main_img}`}

                    alt="title"
                    className='img_card22'
                    style={{objectFit:"cover"}}
                />
                <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' onClick={() => addToWishList ? addToWishList(product) : {}} />
                {/* <img src={maximizeIcon} className='img-fluid maxmize_img_car' onClick={() => handleShowModal ? handleShowModal(product) : {}} /> */}
                <img src={maximizeIcon} style={{ /*marginBottom: '30px'*/ }} className='img-fluid maxmize_img_car' onClick={() => { product?.product_type === 'variable' ? navigate('/vproduct/' + product.ID) : navigate('/product/' + product.ID) }} />
            </div>
            <CardContent style={{ paddingTop: '0px', }} className='card_desc99' onClick={() => { product?.product_type === 'variable' ? navigate('/vproduct/' + product.ID) : navigate('/product/' + product.ID) }}>
                <Typography gutterBottom component="div"  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} className='card_icons99'>
                    {product?.is_pan_india_available===1 && <div class="shipping-icon-wrapper" style={{ marginLeft: '20px', fontSize: '10px' }}>
                        <span className="icon-text icon-text-card">Pan India</span>
                        <img src={flagimg}
                            alt="Pan India" class="shipping-icon" width={30} height={30} />
                    </div>}
                    {product?.is_cod_available===1 && <div class="shipping-icon-wrapper" style={{ marginLeft: '20px', fontSize: '10px' }}>
                        <span className="icon-text icon-text-card">Cash On Delivery</span>
                        <img src={iconcard3}
                            alt="Free Shipping" class="shipping-icon" width={30} height={30} />
                    </div>}
                    {product?.features?.includes('3') && <div class="shipping-icon-wrapper" style={{ marginLeft: '20px', fontSize: '10px' }}>
                        <span className="icon-text icon-text-card">Above ₹ 1500</span>
                        <img src={iconcard2} alt="COD"
                            class="shipping-icon" width={30} height={30} />
                    </div>}
                </Typography>
                <Typography component={'div'} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    <div className='cardpara1 cardpara1_slick' style={{
                        maxHeight: '3em', // Adjust as needed
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>{product.subCategoryName}</div>
                    <div className='cardpara2'>
                        {truncateText(product.title, 25)}
                    </div>
                </Typography>
                
                <p className='star_size'>{'⭐'.repeat(product.rating)}</p>
            </CardContent>

            <div className='d-flex p-2' style={{ alignSelf: 'flex-end', position: 'relative', marginBottom: '0px',height:"40px",marginTop:"-10px" }}>
            {/* {product.product_type} */}
                
                    {
                        product?.product_type ==='variable' ?
                        (
                            <div className='cardpara3 cardpara3_slick onlupaddinf_price'>
                                ₹ {product.price}{product.price-product.max_price!=0 ? (<><span>-</span>₹ {product.max_price}</>) : ''}
                            </div>
                        )
                        :
                        (
                            <div className='cardpara3 cardpara3_slick onlupaddinf_price'>
                            {/* <del>₹{product.price}</del> */}
                            {product?.sale_price > 0 && (product?.price - product?.sale_price!=0) ? 
                                (<del>₹ {product?.price}</del>) : '' 
                            }
                            &nbsp; ₹ {product.sale_price}
                            {/* <strong className='ml-2' style={{marginLeft:"10px"}}>₹{product.sale_price}</strong>  */}
                        </div>
                        )
                    }
                
                {/* {window.location.pathname.split('/')[1] !== 'usercart' && <img src={buycard} alt={buycard} className='buycard shadow hover_bg' onClick={() => addToCart ? addToCart(product) : {}} style={{ marginLeft: 'auto' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />} */}
                {/* {window.location.pathname.split('/')[1] !== 'usercart' && <FontAwesomeIcon icon={faShoppingCart} className='buycard shadow hover_bg' onClick={() => addToCart ? addToCart(product) : {}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />} */}
                    <div className='d-none d-md-block'>
                    {
                        product.product_type === 'simple' ? (
                            <button className='buycard' onClick={() => addToCart(product)}>
                                <FontAwesomeIcon icon={faShoppingCart} /> Add
                            </button>
                        ) : (
                            <Link className='buycard' to={`https://earthbased.store/vproduct/${product.ID}`} style={{textDecoration:"none"}}><FontAwesomeIcon icon={faShoppingCart} /> Add</Link>
                        )
                    }
                    </div>
            </div>
            <div className='d-block d-md-none'>
                    {
                        product.product_type === 'simple' ? (
                            <button className='' style={{ background:"#DEF9EC", color:"#29A56C", padding:"8px", width:"100%",display:"block",textAlign:"center", border:"0"}} onClick={() => addToCart(product)}>
                                <FontAwesomeIcon icon={faShoppingCart} /> Add
                            </button>
                        ) : (
                            <Link className='' style={{textDecoration:"none", background:"#DEF9EC", color:"#29A56C", padding:"8px", width:"100%",display:"block",textAlign:"center"}} to={`https://earthbased.store/vproduct/${product.ID}`} ><FontAwesomeIcon icon={faShoppingCart} /> Add</Link>
                        )
                    }
                    </div>
            {/* <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Your Cart</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                </div>
            </div> */}
        </Card>
        {/* {shopshowModal && <Shoppingcart toggleModal={toggleModal} />} */}
        </>
        
    );
}
