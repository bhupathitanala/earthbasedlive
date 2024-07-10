import store from './store';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About_us from './Ecommerce/About_us';
import Vendors from './Ecommerce/Vendors';
import BasicVichaar from './Ecommerce/BasicVichaar';
import Blogs_detail from './Ecommerce/Blogs_detail';
import Blogs_Title from './Ecommerce/Blogs_Title';
import Contact from './Ecommerce/Contact';
import Product from './Ecommerce/Product';
import Productnew from './Ecommerce/Productnew'; 
import Productnewtest from './Ecommerce/Productnewtest'; 
import Productvariable from './Ecommerce/Productvariable'; //Productvariable
import Productvariabletest from './Ecommerce/Productvariabletest'; //Productvariable
import Shopping from './Ecommerce/Shopping';
import Payment from './Ecommerce/Payment';
import ScrollToTop from './ScrollToTop';





import Header from './Ecommerce/Header';
import Home from './Ecommerce/Home';
import './Ecommerce/Style.css';
import Nutritionist from './Ecommerce/Nutritionist';
import TopPicks from './Ecommerce/TopPicks';
import Firstone from './Ecommerce/Firstone';
import Footer from './Ecommerce/Footer';
import Cart from './Ecommerce/OpenCart';
import UserCart from './stores/UserCart';
import MobilePage from './stores/pages/MobilePage';
import MobileSingle from './stores/singles/MobileSingle';

import Blog_one from './Blogs/Blogs_one'
import Blog_two from './Blogs/Blog_two'
import Blog_three from './Blogs/Blog_three'
import Blog_four from './Blogs/Blog_four'
import Blog_five from './Blogs/Blog_five'
import Blog_six from './Blogs/Blog_six'
import Blog_seven from './Blogs/Blog_seven'
import Blog_eight from './Blogs/Blog_eight'
import Blog_nine from './Blogs/Blog_nine'

import Vichaar_one from './Basic_vichaar/vichaar_one';
import Vichaar_two from './Basic_vichaar/vichaar_two';
import Vichaar_three from './Basic_vichaar/vichaar_three';
import Vichaar_four from './Basic_vichaar/vichaar_four';
import Vichaar_five from './Basic_vichaar/vichaar_five';
import Vichaar_six from './Basic_vichaar/vichaar_six';
import Vichaar_seven from './Basic_vichaar/vichaar_seven';
import Vichaar_eight from './Basic_vichaar/vichaar_eight';
import Vichaar_nine from './Basic_vichaar/vichaar_nine';

import BasicVichaar2 from './Ecommerce/BasicVichaar2';
import Vendor from './Ecommerce/Register-vendor';
// Recipe 


import Recipes from './Ecommerce/Recipes';
import Recipe1 from './Recipes/Recipe1';
import Recipe2 from './Recipes/Recipe2';
import Recipe3 from './Recipes/Recipe3';
import Recipe4 from './Recipes/Recipe4';
import Recipe5 from './Recipes/Recipe5';
import Recipe6 from './Recipes/Recipe6';
import Recipe7 from './Recipes/Recipe7';
import Recipe8 from './Recipes/Recipe8';
import Recipe9 from './Recipes/Recipe9';



import Food from './Categorys/Food';
import Health_Wellness from './Categorys/Health_Wellness';
import Baby_care from './Categorys/Baby_care';
import Beauty from './Categorys/Beauty';
import Cleaning_Essentials from './Categorys/Cleaning_Essentials';
import Greeen_packaging from './Categorys/Greeen_packaging';
import Stationary from './Categorys/Stationary';
import Blog from './Ecommerce/Blog';
import Recepices from './Ecommerce/Recepices';
import Login from './Ecommerce/Login';
import Loginnew from './Ecommerce/Loginnew';
import ForgotPassword from './Ecommerce/ForgotPassword';
import Checkout from './Ecommerce/Checkout';
import Checkoutnew from './Ecommerce/Checkoutnew';
import Guestcheckout from './Ecommerce/Guestcheckout';
import Buycheckout from './Ecommerce/BuyCheckout';
import Infopage from './Ecommerce/Infopage';
import Shipping from './Ecommerce/Shipping';
import Shippingnew from './Ecommerce/Cartmodel';
import Statistics from './Ecommerce/Statistics';
import BMICalculator from "./Ecommerce/BMICalculator";
//Statistics








import Login2 from './Ecommerce/Login2';

import Test from './Ecommerce/Test';
import Products from './Categorys/Products';
import Productsnew from './Categorys/Productsnew'; 
import SearchProducts from './Categorys/SearchProducts'; 
import Productstest from './Categorys/Productstest';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import Register from './Ecommerce/Register';
import Wishlist from './Ecommerce/Wishlist';
import BlogsDetailsScreen from './Blogs/BlogsDetailsScreen';
import BuyProductCheckout from './Ecommerce/BuyProductCheckout';
import RecipesDetailsScreen from './Recipes/RecipesDetailsScreen';
import UserProfile from './Ecommerce/UserProfile';
import Brands from './Categorys/Brands';
import BasicVichaarDetailsScreen from './Blogs/BasicVichaarDetailsScreen';
import RecipiesDetailsScreen from './Blogs/RecipiesDetailsScreen';
import Error404 from './Ecommerce/404';

import Privacy_Policy from './Ecommerce/Privacy_Policy';
import Shipping_Policy from './Ecommerce/Shipping_Policy';
// import RecipiesDetailsScreen from './Blogs/RecipiesDetailsScreen';

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ScrollToTop />
          <Firstone />
          <Routes>

            {/* 404 */}
            <Route path='*' element={<Error404 />} />
            <Route exact path="/" element={<Header />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About_us />} />
            <Route path="/privacypolicy" element={<Privacy_Policy />} />
            <Route path="/shippingpolicy" element={<Shipping_Policy />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/basic-vichaar" element={<BasicVichaar />} />
            <Route path="/blogs-detail" element={<Blogs_detail />} />
            <Route path="/blogs-title" element={<Blogs_Title />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productsnew/:id" element={<Products />} />
            <Route path="/products/:id" element={<Productsnew />} />
            <Route path="/searchproducts/:id" element={<SearchProducts />} />
            <Route path="/productstest/:id" element={<Productstest />} />
            {/* <Route path="/product/:id" element={<Product />} /> */}
            <Route path="/product/:id" element={<Productnew />} />
            <Route path="/producttest/:id" element={<Productnewtest />} />
            <Route path="/vproduct/:id" element={<Productvariable />} />
            <Route path="/vproducttest/:id" element={<Productvariabletest />} />
            <Route path='/pcheckout' element={<Checkoutnew />} />
            <Route path='/gcheckout' element={<Guestcheckout />} />
            <Route path='/bcheckout/:id' element={<Buycheckout />} />
            <Route path='/Shipping' element={<Shipping />} />
            <Route path='/Shippingnew/:id' element={<Shippingnew />} />

            <Route path='/Statistics' element={<Statistics />} />
            <Route path='/BMI' element={<BMICalculator />} />








            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/nutritionist" element={<Nutritionist />} />
            <Route path="/toppicks" element={<TopPicks />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/usercart' element={<UserCart />} />
            <Route path='/mobiles' element={<MobilePage />} />
            <Route path='/mobiles/:id' element={<MobileSingle />} />

            <Route path='/Blog/:id' element={<BlogsDetailsScreen />} />
            <Route path='/basicVichaar/:id' element={<BasicVichaarDetailsScreen />} />
            <Route path='/recipies/:id' element={<RecipiesDetailsScreen />} />
            <Route path='/Blog_one' element={<Blog_one />} />
            <Route path='/Blog_two' element={<Blog_two />} />
            <Route path='/Blog_three' element={<Blog_three />} />
            <Route path='/Blog_four' element={<Blog_four />} />
            <Route path='/Blog_five' element={<Blog_five />} />
            <Route path='/Blog_six' element={<Blog_six />} />
            <Route path='/Blog_seven' element={<Blog_seven />} />
            <Route path='/Blog_eight' element={<Blog_eight />} />
            <Route path='/Blog_nine' element={<Blog_nine />} />

            <Route path='/Vichaar_one' element={<Vichaar_one />} />
            <Route path='/Vichaar_two' element={<Vichaar_two />} />
            <Route path='/Vichaar_three' element={<Vichaar_three />} />
            <Route path='/Vichaar_four' element={<Vichaar_four />} />
            <Route path='/Vichaar_five' element={<Vichaar_five />} />
            <Route path='/Vichaar_six' element={<Vichaar_six />} />
            <Route path='/Vichaar_seven' element={<Vichaar_seven />} />
            <Route path='/Vichaar_eight' element={<Vichaar_eight />} />
            <Route path='/Vichaar_nine' element={<Vichaar_nine />} />

            <Route path='/Test' element={<Test />} />
            <Route path='/Recipes' element={<Recipes />} />
            <Route path='/BasicVichaar2' element={<BasicVichaar2 />} />


            {/* Recipe  */}
            <Route path='/Recipe/:id' element={<RecipesDetailsScreen />} />

            <Route path='/Recipe1' element={<Recipe1 />} />
            <Route path='/Recipe2' element={<Recipe2 />} />
            <Route path='/Recipe3' element={<Recipe3 />} />
            <Route path='/Recipe4' element={<Recipe4 />} />
            <Route path='/Recipe5' element={<Recipe5 />} />
            <Route path='/Recipe6' element={<Recipe6 />} />
            <Route path='/Recipe7' element={<Recipe7 />} />
            <Route path='/Recipe8' element={<Recipe8 />} />
            <Route path='/Recipe9' element={<Recipe9 />} />



            <Route path='/food' element={<Food />} />
            <Route path='/health' element={<Health_Wellness />} />
            <Route path='/babycare' element={<Baby_care />} />
            <Route path='/beauty' element={<Beauty />} />
            <Route path='/cleaning' element={<Cleaning_Essentials />} />
            <Route path='/green' element={<Greeen_packaging />} />
            <Route path='/stationery' element={<Stationary />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/recepices' element={<Recepices />} />
            <Route path='/login' element={<Login />} />
            <Route path='/loginnew' element={<Loginnew />} />
            <Route path='/Forgotpassword' element={<ForgotPassword />} />
            <Route path='/checkout/:id' element={<Checkout />} />
            <Route path='/register' element={<Register />} />
            <Route path='/Infopage/:id' element={<Infopage />} />
            
            <Route path="/buyproduct/:id" element={<BuyProductCheckout />} />
            <Route path="/login2/:id" element={<Login2 />} />
            <Route path="/vendor" element={<Vendor />} />

            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/UserProfile/:id" element={<UserProfile />} />
            <Route path="/Brands/:id" element={<Brands />} />
            <Route path="/Payment" element={<Payment />} />


          </Routes>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>

  );
}

export default App;