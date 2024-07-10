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

export default function Blog_three() {
  return (
    <>
    <div className='blogdetails_section1 mt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-md-8 col-sm-12'>
                <h1 className='section1_heading1'>Veganism’s Positive Impact on the Ecosystem: Lessons from COVID-19</h1>
                <p className='section1_paragraph1'>VEGAN VICHAAR</p>
                <div className='row'>
                    <div className='col-lg-6 col-md-5 col-sm-6'>
                        <p>December 7, 2023 10:55 AM</p> 
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
                <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>
                <p className='section1_paragraph2'>The COVID-19 pandemic has brought about significant changes in our day-to-day lives, forcing us to adapt to new circumstances. While the crisis has undoubtedly been challenging, it has also inadvertently taught us valuable lessons about our impact on the environment. As the world retreated indoors, we unintentionally provided nature with a much-needed respite. In this article, we will explore the remarkable positive impact of veganism on our ecosystem, drawing insights from the unexpected ally that COVID-19 has become.
                </p>
                {/* <p className='section1_paragraph2'> Join with them as we dive into the story behind the steaming cups, and discover why masala chai stands as India's most cherished refreshment- The Chai.</p> */}


                <h1 className='journey_heading'>The Unintentional Gift Staying at Home: A Pause for Nature</h1>
                <p className='journey_paragraph1'>During the chaotic lockdowns imposed worldwide, people were confined to their homes, leading to a substantial decrease in human activity. As industries ground to a halt and transportation ceased, a collective sigh of relief emanated from the natural world. The sudden reduction in pollution levels and noise pollution provided a unique opportunity for ecosystems to regenerate.</p>
                <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>

                <h1 className='journey_heading'>Reduced Ecological Footprint: Pandemic Gives the Environment a Chance</h1>
                <p className="teastore_paragraph">Our daily routines often include actions that harm the environment, from driving gas-guzzling cars to consuming products with large carbon footprints. However, the pandemic forced us to pause and reevaluate our lifestyles. Many individuals, abstaining from commutes and embracing a home-based lifestyle, inadvertently reduced their ecological footprints. This sudden change allowed the environment to begin healing and showed us firsthand the positive impact of veganism on our ecosystem.</p>
                <p className='teastore_paragraph'>The pandemic offered an opportunity for many to reconnect with nature. With limited outdoor activities available, individuals turned to gardening, nature walks, and exploring their immediate surroundings. Veganism promotes a mindful and compassionate approach towards our environment, and this forced introspection during the pandemic allowed individuals to witness the beauty and vulnerability of the natural world firsthand.</p>
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
