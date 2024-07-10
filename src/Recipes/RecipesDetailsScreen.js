import React, { useEffect, useState } from 'react'
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'

// Images
import blog_instagram from '../assets/blog_instagram.png'
import facebook from '../assets/facebook.png'
import share from '../assets/share.png'
import blog_twitter from '../assets/blog_twitter.png'
import blogtitlepage_img1 from '../assets/blogtitlepage_img1.png'
import news from '../assets/news.png'
import hot_news from '../assets/hot_news.png'
import blogimg2_sample from '../assets/blogimg2_sample.png'
import comment_img from '../assets/comment_img.png'

import author_img from '../assets/footer_logo.png'



const hotnews = "Veganism: A Mindful Lifestyle for Everyone";
const trendingnews = "Revealing Remedy of Masala Chai: The Chai History with The Tea Shore";
const commentname = "ram pinapothula maneypalli";
const commentext = "Evealing Remedy of Masala Chai: The Chai History with The Tea Shore ";


const MAX_DESCRIPTION_LENGTH_MOBILE = 16;
const MAX_DESCRIPTION_LENGTH_DESKTOP = 40;


const MAX_COMMENT_LENGTH_MOBILE = 16;
const MAX_COMMENT_LENGTH_DESKTOP = 40;

const MAX_COMMENT_TEXT_LENGTH_MOBILE = 30;
const MAX_COMMENT_TEXT_LENGTH_DESKTOP = 40;

const maxDescriptionLength = window.innerWidth <= 992 ? MAX_DESCRIPTION_LENGTH_MOBILE : MAX_DESCRIPTION_LENGTH_DESKTOP;

const maxcommentLength = window.innerWidth <= 992 ? MAX_COMMENT_LENGTH_MOBILE : MAX_COMMENT_LENGTH_DESKTOP;

const maxparaLength = window.innerWidth <= 992 ? MAX_COMMENT_TEXT_LENGTH_MOBILE : MAX_COMMENT_TEXT_LENGTH_DESKTOP;

const hotnews_Para = hotnews.length > maxDescriptionLength ? `${hotnews.substring(0, maxDescriptionLength)}...` : hotnews;

const TrendingNews_para = trendingnews.length > maxDescriptionLength ? `${trendingnews.substring(0, maxDescriptionLength)}...` : trendingnews;




export default function RecipesDetailsScreen() {

    const maxCommentLength = window.innerWidth <= 992 ? MAX_COMMENT_LENGTH_MOBILE : MAX_COMMENT_LENGTH_DESKTOP;
    const maxParaLength = window.innerWidth <= 992 ? MAX_COMMENT_TEXT_LENGTH_MOBILE : MAX_COMMENT_TEXT_LENGTH_DESKTOP;

    const [showFullComment, setShowFullComment] = useState(false);

    const blog_commentname = commentname.length > maxCommentLength ? `${commentname.substring(0, maxCommentLength)}...` : commentname;

    const truncatedCommentText = commentext.length > maxParaLength ? `${commentext.substring(0, maxParaLength)}...` : commentext;
    const toggleFullComment = () => {
        setShowFullComment(!showFullComment);
    };





    return (
        <>


            <div className='blogdetails_section1 mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='section1_heading1'>How To Make Vegan Broccoli Quinoa Casserole</h1>
                            <p className='section1_paragraph1'>ENVIRONMENT AND SUSTAINABILITY, FOOD, HEALTH AND WELLNESS, VEGANISM</p>
                            <div className='row'>
                                <div className='col-lg-6 col-md-5 col-sm-6'>
                                    <p>March 08, 2023  5:16 AM</p>
                                </div>
                                <div className='col-lg-6 col-md-7 col-sm-6 '>
                                    <div className='socialmedia'>
                                        <img src={share} alt={share} className='img-fluid ' />
                                        <img src={blog_instagram} alt={blog_instagram} className='img-fluid ms-3' />
                                        <img src={facebook} alt={facebook} className='img-fluid ms-3' />
                                        <img src={blog_twitter} alt={blog_twitter} className='img-fluid ms-3' />
                                    </div>
                                </div>
                            </div>
                            {/* <div className='d-flex flex-row '>
                        <p>March 08, 2023  5:16 AM</p>
                        <div className='socialmedia'>
                            <img src={share} alt={share} className='img-fluid '/>
                            <img src={insta} alt={insta} className='img-fluid ms-3'/>
                            <img src={facebook} alt={facebook} className='img-fluid ms-3'/>
                            <img src={twitter} alt={twitter} className='img-fluid ms-3'/>
                        </div>
                    </div> */}
                            <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid  mb-3' />
                            <p className='section1_paragraph2'>Welcome to the aromatic world of The Tea Shore, where each cup may be a journey through the richness and artwork of their flavors and traditions. In this The Tea Shore’s journey we'll explore the fascinating history and social significance of masala chai.
                            </p>
                            <p className='section1_paragraph2'> Join with them as we dive into the story behind the steaming cups, and discover why masala chai stands as India's most cherished refreshment- The Chai.</p>


                            <h1 className='journey_heading'>The Journey of Chai Masala:</h1>
                            <p className='journey_paragraph1'>At The Tea Shore, they believe in more than just giving us a cup of tea and they are eager to provide an experience that typifies the essence of the tradition, freshness, and purity. Masala chai, with its roots interlinking with the British Tea Exchange, has become an image of comfort and restoration over the globe. As you taste their curated mixes, you're not fair reveling in a refreshment but you're savoring the heritage of a culture that has embraced the chai for centuries.</p>
                            <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid mb-3' />

                            <h1 className='teastore_heading'>Why you should choose THE TEA SHORE?</h1>
                            <p className="teastore_paragraph">The Tea Shore curates a variety of premium teas and crafts them into unique tea blends with all-natural ingredients. Their teas are whole-leaf, tasteful, healthy, and conveniently packaged so that you can enjoy the best cup of tea whenever or wherever you are. They do not use any additives artificial colors or flavors. They intrinsically know what good tea tastes like and how it benefits your health. They source only premium teas directly from different tea gardens across the world and choose the top quality for you.</p>
                            <p className='teastore_paragraph'> As you go on a journey through the chai history with The Tea Shore, keep in mind that each cup tells you a story - a story of tradition, development, and an unwavering commitment to giving you their finest tea experiences. Connect us in celebrating the ageless appeal of masala chai, where each taste is an invitation to savor the richness of smell, taste, and purity with The Tea Shore.</p>
                        </div>

                    </div>
                </div>
            </div>



            <div className='container author_container'   >
                <div className='row'>

                    <div className='col-md-6'>
                        <div>
                            <h2 className='purpel_heading'>Description</h2>
                            <p>To Cook: Add water, lentil all seasons, cook 20 minutes, Garnish with green onion and sesame.</p>
                        </div>
                        <div>
                            <h2 className='purpel_heading'>Directions</h2>
                            <p>To Cook: Add water, lentil all seasons, cook 20 minutes, Garnish with green onion and sesame.</p>
                        </div>
                        <div>
                            <h2 className='purpel_heading'>Note's</h2>
                            <p>To Cook: Add water, lentil all seasons, cook 20 minutes, Garnish with green onion and sesame.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className=''>
                            <h3 className='purpel_heading'>Ingredients    </h3>
                            <ul>
                                <li>table spoon of suger</li>
                                <li>table spoon of suger</li>

                            </ul>

                            <h3 className='purpel_heading'>Menu info    </h3>

                            <p>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                            </svg>     Total: 10 mins</p>

                            <hr></hr>
                            <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                            </svg>    Prep: 10 mins</p>
                            <hr></hr>

                            <p> <svg aria-hidden="true" width="16" height="16" class="e-font-icon-svg e-fas-concierge-bell" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M288 130.54V112h16c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h16v18.54C115.49 146.11 32 239.18 32 352h448c0-112.82-83.49-205.89-192-221.46zM496 384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>  Servings: 1</p>

                        </div>

                        <div className='author_div  mt-4'>

                            <h3 className='purpel_heading'>Author   </h3>

                            <div className='d-flex flex-row align-items-center'>
                                <div>
                                    <img src={author_img} alt={author_img} className='img-fluid' />
                                </div>
                                <div>
                                    <h4 className='purpel_heading'>Earthbased</h4>
                                    <p>Best choice to gain your health in this year</p>
                                </div>
                            </div>



                        </div>
                    </div>


                </div>
            </div>



            <div className='blogdetails_section2 mt-5' style={{ background: '#F9F7F080' }}>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                            <h1 className='section2_heading1 text-center mt-4'>leave a comment</h1>
                            <p className='section2_paragraph text-center'>And join the conversation</p>
                            <div className='d-flex flex-row justify-content-center'>
                                <input type="text" placeholder='  write something .....' className='write_something' />
                            </div>
                            <div className='d-flex flex-row justify-content-center'>
                                <button className='comment_button mt-3'>comment</button>
                            </div>


                            <div className='d-flex flex-row justify-content-center mt-5'>
                                <div>
                                    <img src={comment_img} alt={comment_img} className='img-fluid' />
                                </div>
                                <div className='ms-3'>
                                    <h1 className='comment_name'>{blog_commentname}</h1>
                                    <p className='comment_para'>{showFullComment ? commentext : truncatedCommentText}</p>
                                    {commentext.length > maxParaLength &&
                                        <button className='read_more_comment_btn' onClick={toggleFullComment}>
                                            {showFullComment ? "Read less" : "Read more.."}
                                        </button>
                                    }
                                </div>
                                <span className='comment_time'>3 hours ago</span>
                            </div>


                            <div className='d-flex flex-row justify-content-center mt-5'>
                                <div>
                                    <img src={comment_img} alt={comment_img} className='img-fluid' />
                                </div>
                                <div className='ms-3'>
                                    <h1 className='comment_name'>{blog_commentname}</h1>
                                    <p className='comment_para'>{showFullComment ? commentext : truncatedCommentText}</p>
                                    {commentext.length > maxParaLength &&
                                        <button className='read_more_comment_btn' onClick={toggleFullComment}>
                                            {showFullComment ? "Read less" : "Read more.."}
                                        </button>
                                    }
                                </div>
                                <span className='comment_time'>3 hours ago</span>
                            </div>

                            <div className='d-flex flex-row justify-content-center mt-5'>
                                <div>
                                    <img src={comment_img} alt={comment_img} className='img-fluid' />
                                </div>
                                <div className='ms-3'>
                                    <h1 className='comment_name'>{blog_commentname}</h1>
                                    <p className='comment_para'>{showFullComment ? commentext : truncatedCommentText}</p>
                                    {commentext.length > maxParaLength &&
                                        <button className='read_more_comment_btn' onClick={toggleFullComment}>
                                            {showFullComment ? "Read less" : "Read more.."}
                                        </button>
                                    }
                                </div>
                                <span className='comment_time'>3 hours ago</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
