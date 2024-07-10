import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import maximizeIcon from '../assets/maximize-2.png';
import CardActions from '@mui/material/CardActions';
import wish_img from '../assets/wish_img.png';
import buycard from '../assets/buycard.png';
import iconcard2 from '../assets/iconcard2.png';
import iconcard3 from '../assets/iconcard3.png';
import flagimg from '../assets/flagimg.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post_url } from '../Apicalls';
import {Link} from 'react-router-dom';

export default function ActionAreaCard({ product, addToCart, handleShowModal, addToWishList }) {
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate()

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    return (
        <Card sx={{ maxWidth: 400, height: '100%', borderRadius: '20px', padding: '4px 0 0px 0' }} component={'div'} className='card_img99' >
            <div className="image_border hover_img" style={{ position: 'relative' }}>
                {product?.sale_price== 0 || (product?.price - product?.sale_price)==0 ?
                    (
                        // <span className="offers" style={{ position: 'absolute', margin: '-15px 0 0 -10px' }}>0%</span>
                        <></>
                    )
                :
                    (
                        // <span className="offers" style={{ position: 'absolute', margin: '-15px 0 0 -10px' }}>{((product.price - product.sale_price) / product.price) * 100}% off</span>
                        <span className="offers" style={{ position: 'absolute', margin: '-15px 0 0 -10px' }}>
                        {(((product.price - product.sale_price) / product.price) * 100).toFixed(2)}%
                        </span>

                    )
                }
                <CardMedia
                    onClick={() => { navigate('/product/' + product.ID) }}
                    component="img"
                    height="180"
                    onMouseOver={() => setIsHovered(true)}
                    onMouseOut={() => setIsHovered(false)}
                    // style={{ padding: '10px', paddingBottom: '0px' }}
                    // image={post_url + (isHovered ? +'hoverimages/'+product.hover_img : +'mainimages/'+product.main_img)}
                    image={`${post_url}${isHovered ? 'productimages/' + product.hover_img : 'productimages/' + product.main_img}`}

                    alt="title"
                    className='img_card22'
                />
                <img src={wish_img} alt={wish_img} className='img-fluid maxmize_wish' onClick={() => addToWishList ? addToWishList(product) : {}} />
                <img src={maximizeIcon} style={{ marginBottom: '30px' }} className='img-fluid maxmize_img_car' onClick={() => handleShowModal ? handleShowModal(product) : {}} />
            </div>
            <CardContent style={{ paddingTop: '0px', }} className='card_desc99' onClick={() => { product?.product_type === 'variable' ? navigate('/vproduct/' + product.ID) : navigate('/product/' + product.ID) }}>
                <Typography gutterBottom component="div"  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} className='card_icons99'>
                    {product?.is_pan_india_available===1 && <div class="shipping-icon-wrapper" style={{ marginLeft: '20px', fontSize: '10px' }}>
                        <span className="icon-text">Pan India</span>
                        <img src={flagimg}
                            alt="Pan India" class="shipping-icon" width={30} height={30} />
                    </div>}
                    {product?.is_cod_available===1 && <div class="shipping-icon-wrapper" style={{ marginLeft: '20px', fontSize: '10px' }}>
                        <span className="icon-text">Cash On Delivery</span>
                        <img src={iconcard3}
                            alt="Free Shipping" class="shipping-icon" width={30} height={30} />
                    </div>}
                    {product?.features?.includes('3') && <div class="shipping-icon-wrapper" style={{ marginLeft: '20px', fontSize: '10px' }}>
                        <span className="icon-text">Above ₹1500</span>
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
                    }}>{product.title}</div>
                    <div className='cardpara2'>
                        {truncateText(product.title, 25)}
                    </div>
                </Typography>
                
            </CardContent>
            <div className='d-flex p-2' style={{ alignSelf: 'flex-end' }}>
            {/* {product.product_type} */}
                
                    {
                        product?.product_type ==='variable' ?
                        (<
                            div className='cardpara3 cardpara3_slick onlupaddinf_price'>
                            ₹{product.price}
                            </div>
                        )
                        :
                        (
                            <div className='cardpara3 cardpara3_slick onlupaddinf_price'>
                            {/* <del>₹{product.price}</del> */}
                            {product?.sale_price > 0 && (product?.price - product?.sale_price!=0) ? 
                                (<del>₹{product?.price}</del>) : '' 
                            }
                            <strong className='ml-2' style={{marginLeft:"10px"}}>₹{product.sale_price}</strong> 
                        </div>
                        )
                    }
                
                {window.location.pathname.split('/')[1] !== 'usercart' && <img src={buycard} alt={buycard} className='buycard shadow' onClick={() => addToCart ? addToCart(product) : {}} style={{ marginLeft: 'auto' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />}
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

    );
}
