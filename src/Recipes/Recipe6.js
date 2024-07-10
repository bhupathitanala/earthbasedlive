import React from 'react'
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



export default function Recipe6() {
  return (
    <>
    
    <div className='blogdetails_section1 mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-8 col-sm-12'>
                    <h1 className='section1_heading1'>Revealing Remedy of Masala Chai: The Chai History with The Tea Shore</h1>
                    <p className='section1_paragraph1'>ENVIRONMENT AND SUSTAINABILITY, FOOD, HEALTH AND WELLNESS, VEGANISM</p>
                    <div className='row'>
                        <div className='col-lg-6 col-md-5 col-sm-6'>
                            <p>March 08, 2023  5:16 AM</p> 
                        </div>
                        <div className='col-lg-6 col-md-7 col-sm-6 '>
                        <div className='socialmedia'>
                            <img src={share} alt={share} className='img-fluid '/>
                            <img src={blog_instagram} alt={blog_instagram} className='img-fluid ms-3'/>
                            <img src={facebook} alt={facebook} className='img-fluid ms-3'/>
                            <img src={blog_twitter} alt={blog_twitter} className='img-fluid ms-3'/>
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
                    <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>
                    <p className='section1_paragraph2'>Welcome to the aromatic world of The Tea Shore, where each cup may be a journey through the richness and artwork of their flavors and traditions. In this The Tea Shore’s journey we'll explore the fascinating history and social significance of masala chai. 
                    </p>
                    <p className='section1_paragraph2'> Join with them as we dive into the story behind the steaming cups, and discover why masala chai stands as India's most cherished refreshment- The Chai.</p>


                    <h1 className='journey_heading'>The Journey of Chai Masala:</h1>
                    <p className='journey_paragraph1'>At The Tea Shore, they believe in more than just giving us a cup of tea and they are eager to provide an experience that typifies the essence of the tradition, freshness, and purity. Masala chai, with its roots interlinking with the British Tea Exchange, has become an image of comfort and restoration over the globe. As you taste their curated mixes, you're not fair reveling in a refreshment but you're savoring the heritage of a culture that has embraced the chai for centuries.</p>
                    <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>

                    <h1 className='teastore_heading'>Why you should choose THE TEA SHORE?</h1>
                    <p className="teastore_paragraph">The Tea Shore curates a variety of premium teas and crafts them into unique tea blends with all-natural ingredients. Their teas are whole-leaf, tasteful, healthy, and conveniently packaged so that you can enjoy the best cup of tea whenever or wherever you are. They do not use any additives artificial colors or flavors. They intrinsically know what good tea tastes like and how it benefits your health. They source only premium teas directly from different tea gardens across the world and choose the top quality for you.</p>
                    <p className='teastore_paragraph'> As you go on a journey through the chai history with The Tea Shore, keep in mind that each cup tells you a story - a story of tradition, development, and an unwavering commitment to giving you their finest tea experiences. Connect us in celebrating the ageless appeal of masala chai, where each taste is an invitation to savor the richness of smell, taste, and purity with The Tea Shore.</p>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 d-none d-md-block'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='d-flex flex-row'>
                                <h1 className='hotnews_heading'>Hot News</h1>
                                <img src={hot_news} alt={hot_news} className='img-fluid'/>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <div className='d-flex flex-row justify-content-center'>
                                <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-sm-12'>
                        <p className='news_para1 mt-2 text-center'>Veganism: A Mindful Lifestyle for Everyone</p>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <div className='d-flex flex-row justify-content-center'>
                                <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-sm-12'>
                        <p className='news_para1 mt-2 text-center'>Veganism: A Mindful Lifestyle for Everyone</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='d-flex flex-row mt-3'>
                                <h1 className='hotnews_heading'>TRENDING NEWS</h1>
                                <img src={news} alt={news} className='img-fluid'/>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <div className='d-flex flex-row justify-content-center'>
                                <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-sm-12'>
                        <p className='news_para1 mt-2 text-center'>Revealing Remedy of Masala Chai: The Chai History with The Tea Shore</p>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <div className='d-flex flex-row justify-content-center'>
                                <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-sm-12'>
                        <p className='news_para1 mt-2 text-center'>Veganism’s Positive Impact on the Ecosystem: Lessons from COVID-19</p>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <div className='d-flex flex-row justify-content-center'>
                                <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-sm-12'>
                        <p className='news_para1 mt-2 text-center'>Embracing Vegan Living: One Switch at a Time with Vegan Vichar</p>
                        </div>
                    </div>

                    {/* <div className='d-flex flex-row'>
                        <h1 className='hotnews_heading'>Hot News</h1>
                        <img src={hot_news} alt={hot_news} className='img-fluid'/>
                    </div>
                    <div className='d-flex flex-row'>
                        <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                        <p className='news_para1 mt-2'>Veganism: A Mindful Lifestyle for Everyone</p>
                    </div>
                    <div className='d-flex flex-row'>
                        <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid mt-2'/>
                        <p className='news_para1 mt-3'>Veganism: A Mindful Lifestyle for Everyone</p>
                    </div> */}

                    


                    {/* <div className='d-flex flex-row mt-3'>
                        <h1 className='hotnews_heading'>TRENDING NEWS</h1>
                        <img src={news} alt={news} className='img-fluid'/>
                    </div>
                    <div className='d-flex flex-row'>
                        <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid'/>
                        <p className='news_para1 mt-2'>Revealing Remedy of Masala Chai: The Chai History with The Tea Shore</p>
                    </div>
                    <div className='d-flex flex-row'>
                        <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid mt-2'/>
                        <p className='news_para1 mt-3'>Veganism’s Positive Impact on the Ecosystem: Lessons from COVID-19</p>
                    </div>
                    <div className='d-flex flex-row'>
                        <img src={blogimg2_sample} alt={blogimg2_sample} className='img-fluid mt-2'/>
                        <p className='news_para1 mt-3'>Embracing Vegan Living: One Switch at a Time with Vegan Vichar</p>
                    </div> */}
                </div>
            </div>
        </div>
     </div>


     <div className='blogdetails_section2 mt-5' style={{background:'#F9F7F080'}}>
        <div className="container">
            <div className='row'>
                <div className='col-lg-8 col-md-8 col-sm-12'>
                    <h1 className='section2_heading1 text-center mt-4'>leave a comment</h1>
                    <p className='section2_paragraph text-center'>And join the conversation</p>
                    <div className='d-flex flex-row justify-content-center'>
                        <input type="text" placeholder='| write something .....' className='write_something'/>
                    </div>
                    <div  className='d-flex flex-row justify-content-center'>
                        <button className='comment_button mt-3'>comment</button>
                    </div>

                    <div className='d-flex flex-row justify-content-center mt-5'>
                        <img src={comment_img} alt={comment_img} className='img-fluid'/>
                        <div className='ms-4' >
                            <h1 className='comment_name'>Teja Mallipudi</h1>
                            <p className='comment_para'>And join the conversation</p>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-center mt-4'>
                        <img src={comment_img} alt={comment_img} className='img-fluid'/>
                        <div className='ms-4' >
                            <h1 className='comment_name'>ram pinapothula </h1>
                            <p className='comment_para'>And join the conversation</p>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-center mt-4'>
                        <img src={comment_img} alt={comment_img} className='img-fluid'/>
                        <div className='ms-4'>
                            <h1 className='comment_name'>Satya</h1>
                            <p className='comment_para'>And join the conversation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
