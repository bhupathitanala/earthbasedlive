import React, { useState } from 'react';

const OrderSummary = ({ onNext }) => {
  // State to manage accordion open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle accordion state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='h-screen w-full'>
      <div className="accordion">
        <div className="accordion-header" onClick={toggleAccordion}>
          <h2>Order Summary</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`accordion-icon ${isOpen ? 'open' : ''}`}
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
        {isOpen && (
          <div className="accordion-content">
            {/* Include your order summary information data here */}
            <p>Product: Laptop</p>
            <p>Quantity: 1</p>
            <button className="btn btn-primary" onClick={onNext}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
