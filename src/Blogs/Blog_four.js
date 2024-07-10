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

function Blog_four() {
  return (
    <>
    <div className='blogdetails_section1 mt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-md-8 col-sm-12'>
                <h1 className='section1_heading1'>Embracing Vegan Living: One Switch at a Time with Vegan Vichar</h1>
                <p className='section1_paragraph1'>VEGAN VICHAAR</p>
                <div className='row'>
                    <div className='col-lg-6 col-md-5 col-sm-6'>
                        <p>December 5, 2023 10:51 AM</p> 
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
                <p className='section1_paragraph2'>Hey there, It's Vegan Vichar, and today, we're delving into the world of compassionate living. Join me as we explore the concept of "Do as much as you can - one switch at a time.
                </p>
                {/* <p className='section1_paragraph2'> Join with them as we dive into the story behind the steaming cups, and discover why masala chai stands as India's most cherished refreshment- The Chai.</p> */}


                <h1 className='journey_heading'>Start Small, Make It Easy</h1>
                <p className='journey_paragraph1'>Let's kick things off by discussing how starting small can lead to big changes. Dive into the simplicity of switching from dairy to plant-based milk and explore the ripple effects it can create in your life. By making this one small change, you're not only taking a step towards better health but also reducing your carbon footprint and showing kindness to animals.</p>
                <p className='journey_paragraph1'>It might seem daunting to completely overhaul your diet overnight, but the beauty of transitioning to a vegan lifestyle is that you can take it at your own pace. Gradually incorporating plant-based alternatives, such as almond milk or oat milk, into your routine can make the transition much easier and more sustainable. Plus, with the growing popularity of vegan milk options, you'll have a wide array of flavors and brands to choose from.</p>
                <img src={blogtitlepage_img1} alt={blogtitlepage_img1} className='img-fluid'/>

                <h1 className='journey_heading'>Vegan Skincare and Home Essentials</h1>
                <p className="teastore_paragraph">Embracing a vegan lifestyle extends beyond dietary choices to include skincare and household essentials. Look for cruelty-free and vegan options that are free from animal-derived ingredients and haven't been tested on animals. Many brands display certifications from organizations like PETA or the Vegan Society, making it easier to make informed choices.</p>
                <p className='teastore_paragraph'> From skincare routines to cleaning products, opting for vegan alternatives reduces harm to animals and the planet. Remember, progress, not perfection, is key. Every small switch, whether in diet, skincare, or household items, contributes to a more sustainable and compassionate world. Start with one aspect, like incorporating more plant-based meals, and gradually transition to cruelty-free and environmentally friendly alternatives. Share your journey and experiences to inspire others to make changes in their lives too.</p>
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

export default Blog_four