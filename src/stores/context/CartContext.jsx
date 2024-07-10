import { createContext, useContext, useState, useEffect } from "react";
import Apicalls, { post_url } from '../../Apicalls';
import useJwtToken from "../../getToken"; // Adjust path as needed

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cardInfo, setcardInfo] = useState([]);
  const [badgeCount, setBadgeCount] = useState(0);
  const { jwtToken } = useJwtToken(); // Use the hook here

  // Retrieve session data from localStorage
  // const sessionData = JSON.parse(localStorage.getItem('persist:counter'));

  // // Check if sessionData exists and contains user information
  // if (sessionData?.user) {
  //   try {
  //     // Parse the user object from session data
  //     const userObject = JSON.parse(sessionData.user);
  
  //     // Access the ID value from the user object
  //     const userID = userObject?.auth?.user?.ID;
  
  //     if (userID !== undefined) {
  //       console.log(userID); // This will log the ID value to the console
  //     } else {
  //       console.log("User ID is not available in the session data.");
  //     }
  //   } catch (error) {
  //     console.error("Error parsing user data from session:", error);
  //   }
  // } else {
  //   console.log("Session data or user information is missing.");
  // }
  



  const incrementBadgeCount = () => {
    setBadgeCount(prevCount => prevCount + 1);
  };

  const decrementBadgeCount = () => {
    setBadgeCount(prevCount => Math.max(0, prevCount - 1));
  };

  const addToCart = (item) => {
    // setcardInfo([...cardInfo, { ...item, quantity: 1 }]);
    setcardInfo((prevItems) => {
      const exists = prevItems.find(product => product.ID === item.ID);
      if (exists) {
        // Increment quantity if product exists
        return prevItems.map(product =>
          product.ID === item.ID ? { ...product, quantity: product.quantity + 1 } : item
        );
      }
      // Add new product to cart
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (item) => {
    setcardInfo(cardInfo.filter((apple) => apple !== item));
  };

   const cartCount = () => {
        
    const sessionData = JSON.parse(localStorage.getItem('persist:counter'));

    // Check if sessionData exists and contains user information
    if (sessionData?.user) {
      try {
        // Parse the user object from session data
        const userObject = JSON.parse(sessionData.user);

        // Access the ID value from the user object
        const userID = userObject?.auth?.user?.ID;

        if (userID !== undefined) {
          // console.log(userID); // This will log the ID value to the console
          Apicalls.get('cart/items/' + userID).then((data) => {                
            setBadgeCount(data.data.length)
          }).catch((err) => {
              console.log(err);
          })
        } else {
          // console.log("User ID is not available in the session data.");
          let items_data = JSON.parse(localStorage.getItem('cartItems'));
          // console.log(items_data)
            if(items_data === null){
              setBadgeCount(0)
            }else{
              setBadgeCount(items_data.length)
            }
        }
      } catch (error) {
        console.error("Error parsing user data from session:", error);
      }
    } else {
      console.log("Session data or user information is missing.");
      
    }


        
        
    }

    useEffect(() => {
        cartCount();
    }, [badgeCount])

  return (
    <CartContext.Provider value={{ cardInfo, addToCart, removeFromCart, badgeCount, incrementBadgeCount, decrementBadgeCount, jwtToken }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
