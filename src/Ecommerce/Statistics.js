import React, { useState, useEffect } from 'react';
import './Counter.css'; // Import your CSS file for styling

const Statistic = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter <= value) {
        setDisplayValue(counter);
        counter += Math.ceil(value / 100); // Increment by a fraction of the value for smooth animation
      } else {
        setDisplayValue(value);
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="statistic">
      <div className="value">{displayValue}</div>
      <div className="label">{label}</div>
    </div>
  );
};

const Counter = () => {
  return (
    <div className="counter">
      <h1>Statistics Counter</h1>
      <div className="statistics-container">
        <Statistic value={2} label="Glorious years" />
        <Statistic value={1500} label="Happy clients" />
        <Statistic value={30} label="Vendors" />
        <Statistic value={700} label="Products" />
      </div>
    </div>
  );
};

export default Counter;
