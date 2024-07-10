import React, { useState } from 'react';
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

// const blog_commentname = commentname.length > maxcommentLength ? `${commentname.substring(0, maxcommentLength)}...` : commentname;

// const blog_commentpara = commentext.length > maxparaLength ? `${commentext.substring(0, maxparaLength)} Read more..` : commentext;
// const BlogsOne = () => {
//     const maxCommentLength = window.innerWidth <= 992 ? MAX_COMMENT_LENGTH_MOBILE : MAX_COMMENT_LENGTH_DESKTOP;
//     const maxParaLength = window.innerWidth <= 992 ? MAX_COMMENT_TEXT_LENGTH_MOBILE : MAX_COMMENT_TEXT_LENGTH_DESKTOP;

//     const [showFullComment, setShowFullComment] = useState(false);

//     const blog_commentname = commentname.length > maxCommentLength ? `${commentname.substring(0, maxCommentLength)}...` : commentname;

//     const truncatedCommentText = commentext.length > maxParaLength ? `${commentext.substring(0, maxParaLength)}...` : commentext;

//     const toggleFullComment = () => {
//         setShowFullComment(!showFullComment);
//     };

// };
export default function Blogs_one() {

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
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                            <h1 className='section1_heading1'>Revealing Remedy of Masala Chai: The Chai History with The Tea Shore</h1>
                            <p className='section1_paragraph1'>ENVIRONMENT AND SUSTAINABILITY, FOOD, HEALTH AND WELLNESS, VEGANISM</p>
                            <div className='row'>
                                <div className='col-lg-9 col-md-7 col-7'>
                                    <p>March 08, 2023  5:16 AM</p>
                                </div>
                                <div className='col-lg-3 col-md-5 col-5 '>
                                    <div className='socialmedia'>
                                        <img src={share} alt={share} className='img-fluid ' />
                                        <img src={blog_instagram} alt={blog_instagram} className='img-fluid ms-3' />
                                        <img src={facebook} alt={facebook} className='img-fluid ms-3' />
                                        <img src={blog_twitter} alt={blog_twitter} className='img-fluid ms-3' />
                                    </div>
                                </div>
                            </div>
                            <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid mb-3' />
                            <p className='section1_paragraph2'>Welcome to the aromatic world of The Tea Shore, where each cup may be a journey through the richness and artwork of their flavors and traditions. In this The Tea Shore’s journey we'll explore the fascinating history and social significance of masala chai.
                            </p>
                            <p className='section1_paragraph2'> Join with them as we dive into the story behind the steaming cups, and discover why masala chai stands as India's most cherished refreshment- The Chai.</p>


                            <h1 className='journey_heading'>The Journey of Chai Masala:</h1>
                            <p className='journey_paragraph1'>At The Tea Shore, they believe in more than just giving us a cup of tea and they are eager to provide an experience that typifies the essence of the tradition, freshness, and purity. Masala chai, with its roots interlinking with the British Tea Exchange, has become an image of comfort and restoration over the globe. As you taste their curated mixes, you're not fair reveling in a refreshment but you're savoring the heritage of a culture that has embraced the chai for centuries.</p>
                            <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid mb-4' />

                            <h1 className='teastore_heading'>Why you should choose THE TEA SHORE?</h1>
                            <p className="teastore_paragraph">The Tea Shore curates a variety of premium teas and crafts them into unique tea blends with all-natural ingredients. Their teas are whole-leaf, tasteful, healthy, and conveniently packaged so that you can enjoy the best cup of tea whenever or wherever you are. They do not use any additives artificial colors or flavors. They intrinsically know what good tea tastes like and how it benefits your health. They source only premium teas directly from different tea gardens across the world and choose the top quality for you.</p>
                            <p className='teastore_paragraph'> As you go on a journey through the chai history with The Tea Shore, keep in mind that each cup tells you a story - a story of tradition, development, and an unwavering commitment to giving you their finest tea experiences. Connect us in celebrating the ageless appeal of masala chai, where each taste is an invitation to savor the richness of smell, taste, and purity with The Tea Shore.</p>
                        </div>




                        <div className='col-lg-4 col-md-4 col-sm-12 d-none d-md-block'>


                            <div className='row'>

                                <div className='d-flex flex-row'>
                                    <h1 className='hotnews_heading'>Hot News</h1>
                                    <img src={hot_news} alt={hot_news} className='img-fluid' />
                                </div>
                                <div className='row mb-2' style={{ alignItems: 'center' }}>
                                    <div className='col-4'>
                                        <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid' />
                                    </div>
                                    <div className='col-8'>
                                        <p className='news_para1'>{hotnews_Para}</p>
                                    </div>
                                </div>
                                <div className='row   mb-2' style={{ alignItems: 'center' }}>
                                    <div className='col-4'>
                                        <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid' />
                                    </div>

                                    <div className='col-8'>
                                        <p className='news_para1'>{hotnews_Para}</p>
                                    </div>
                                </div>

                            </div>


                            <div className='row'>

                                <div className='d-flex flex-row mt-3'>
                                    <h1 className='hotnews_heading'>TRENDING NEWS</h1>
                                    <img src={news} alt={news} className='img-fluid' />
                                </div>

                                <div className='row mb-2' style={{ alignItems: 'center' }}>
                                    <div className='col-4'>
                                        <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid' />
                                    </div>

                                    <div className='col-8'>
                                        <p className='news_para1'>{TrendingNews_para}</p>
                                    </div>
                                </div>

                                <div className='row mb-2' style={{ alignItems: 'center' }}>
                                    <div className='col-4'>
                                        <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid' />
                                    </div>
                                    <div className='col-8'>
                                        <p className='news_para1'>{TrendingNews_para}</p>
                                    </div>
                                </div>


                                <div className='row mb-2' style={{ alignItems: 'center' }}>
                                    <div className='col-4'>
                                        <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid' />
                                    </div>
                                    <div className='col-8'>
                                        <p className='news_para1'>{TrendingNews_para}</p>
                                    </div>
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
