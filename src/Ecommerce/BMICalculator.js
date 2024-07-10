import React, { useState } from "react";
import "./BmiStyle.css";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight === "" || heightFeet === "" || heightInches === "") return;
    const totalHeight = parseInt(heightFeet) * 12 + parseInt(heightInches);
    const heightInMeters = totalHeight * 0.0254;
    const bmiValue = (
      (parseInt(weight) / (heightInMeters * heightInMeters)) *
      703
    ).toFixed(2);
    setBMI(bmiValue);
  };

  const resetCalculator = () => {
    setWeight("");
    setHeightFeet("");
    setHeightInches("");
    setBMI(null);
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label>Weight (lbs):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Height (ft):</label>
        <input
          type="number"
          value={heightFeet}
          onChange={(e) => setHeightFeet(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Height (in):</label>
        <input
          type="number"
          value={heightInches}
          onChange={(e) => setHeightInches(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={calculateBMI}>Calculate BMI</button>
        <button onClick={resetCalculator}>Reset</button>
      </div>
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
