// Cartmodel.js

import React, { useState } from 'react';
import './Modalstyle.css'; // Import CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Ordersummary from './Ordersummary';

function Cartmodel() {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentPage(1); // Reset to first page when modal is closed
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Open Cart modal
      </button>

      {showModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              {currentPage === 1 && <OrderDetailsPage onNext={handleNext} />}
              {currentPage === 2 && (
                <AddressFormPage
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                />
              )}
              {currentPage === 3 && (
                <PaymentInfoPage
                  onPrevious={handlePrevious}
                  onClose={closeModal}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


const OrderDetailsPage = ({ onNext }) => {
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




const AddressFormPage = ({ onNext, onPrevious }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Address Form</h2>
      <form>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="form-control"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="form-control"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="form-control"
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={handleChange}
          className="form-control"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="form-control"
        />
      </form>
      <button className="btn btn-primary mr-2" onClick={onPrevious}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={onNext}>
        Next
      </button>
    </div>
  );
};

const PaymentInfoPage = ({ onPrevious, onClose }) => {
  const handlePayment = () => {
    // Handle payment logic
    onClose();
  };

  return (
    <div>
      <h2>Payment Info</h2>
      <p>Total Amount: $1000</p>
      <button className="btn btn-primary mr-2" onClick={onPrevious}>
        Previous
      </button>
      <button className="btn btn-success mr-2" onClick={handlePayment}>
        Pay Now
      </button>
      <button className="btn btn-secondary" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Cartmodel;
