import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './stores/context/CartContext.jsx'
import { BrowserRouter   } from 'react-router-dom';

import AMPProvider from './AMPContext';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
      // <React.StrictMode>
      // {/* <> */}
      //  {/* <BrowserRouter>  */}
      //  <CartProvider>
      //    <App/>
      //   </CartProvider>
      //  {/* </BrowserRouter> */}
      // {/* </> */}
      // </React.StrictMode>

<>
<CartProvider>
<AMPProvider>
  <App/>
</AMPProvider>
 </CartProvider>
 </>

    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
