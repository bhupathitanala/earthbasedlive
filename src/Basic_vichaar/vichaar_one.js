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

export default function vichaar_one() {
  return (
   
    <>
      <div className='blogdetails_section1 mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-8 col-sm-12'>
                    <h1 className='section1_heading1'>What is Veganism???</h1>
                    <p className='section1_paragraph1'>VEGAN VICHAAR, VEGANISM</p>
                    <div className='row'>
                        <div className='col-lg-6 col-md-5 col-sm-6'>
                            <p>November 4, 2023 11:57 AM</p> 
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
                    <p className='section1_paragraph2'>Veganism has emerged as a prominent lifestyle choice in recent years, with an increasing number of individuals embracing this ethical and sustainable way of living.
                    </p>
                    <p className='section1_paragraph2'>  But what exactly is veganism, and what motivates people to adopt this plant-based diet? In this blog post, we will explore the concept of veganism, its underlying principles, and the research that supports its health, environmental, and ethical benefits.</p>


                    <h1 className='journey_heading'>What is Veganism?</h1>
                    <p className='journey_paragraph1'>Veganism is more than just a diet; it is a lifestyle that seeks to eliminate the use of animal products in all aspects of life. A vegan diet excludes all animal-derived foods, such as meat, dairy, eggs, and honey. Additionally, it extends to other products like leather, fur, and cosmetics that involve animal testing. Vegans make these choices for a variety of reasons, including ethical, environmental, and health concerns.</p>
                    <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>

                    <h1 className='teastore_heading'>Veganism: Ethics, Health, and Environment</h1>
                    <p className="teastore_paragraph">Veganism is rooted in ethical principles, advocating for animal rights and a reduction in animal suffering. By rejecting the use of animals for food, clothing, and other purposes, vegans aim to minimize their contribution to industries that exploit animals, particularly in factory farming.</p>
                    <p className='teastore_paragraph'>Moreover, research suggests that a well-planned vegan diet offers numerous health benefits. These include a lower risk of heart disease, improved weight management, reduced risk of certain cancers, and better blood sugar control, according to the American Dietetic Association. Environmental concerns also drive the adoption of veganism. Studies indicate that reducing meat and dairy consumption can lower greenhouse gas emissions, preserve natural resources, and contribute to biodiversity conservation.</p>
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
