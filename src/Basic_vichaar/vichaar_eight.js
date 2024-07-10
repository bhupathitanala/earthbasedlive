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

export default function vichaar_eight() {
  return (
    <>
    <div className='blogdetails_section1 mt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-md-8 col-sm-12'>
                <h1 className='section1_heading1'>Veganism and Protein</h1>
                <p className='section1_paragraph1'>VEGAN VICHAAR</p>
                <div className='row'>
                    <div className='col-lg-6 col-md-5 col-sm-6'>
                        <p>November 14, 2023 7:49 PM</p> 
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
                <p className='section1_paragraph2'>In recent years, veganism has gained immense popularity as a lifestyle choice that promotes ethical eating, environmental consciousness, and personal well-being.  
                </p>
                <p className='section1_paragraph2'>While some individuals may have concerns about meeting their protein needs on a plant-based diet, the truth is that a well-planned vegan lifestyle can provide all the essential amino acids required for optimal health.</p>


                <h1 className='journey_heading'>Debunking Protein Myths</h1>
                <p className='journey_paragraph1'>One of the prevailing myths surrounding veganism revolves around the misconception that plant-based diets lack sufficient protein sources. However, this notion is unfounded as the plant kingdom boasts a rich variety of protein-rich foods. Legumes, including beans, lentils, and peas, stand as excellent sources of plant-based protein, offering around 15-20 grams of protein per cooked cup. </p>
                <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>

                <h1 className='journey_heading'>Meeting Protein Requirements on a Vegan Diet</h1>
                <p className="teastore_paragraph">The recommended daily protein intake for adults typically stands at 0.8 grams per kilogram of body weight. By incorporating a diverse array of plant-based protein sources into their meals, vegans can easily meet these requirements. For instance, a 150-pound individual would aim for approximately 54 grams of protein per day. </p>
                <p className='teastore_paragraph'>Moreover, athletes and individuals with high physical demands can thrive on a vegan diet, as evidenced by the outstanding performances of endurance athletes like Scott Jurek and Patrik Baboumian, who fuel their bodies solely with plant-based foods.</p>
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
