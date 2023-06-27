import React, { useState } from "react";
import "./Stepper.css";

const messages = ["Step 1", "Step 2", "Step 3"];

const Stepper = () => {
  const [step, setStep] = useState(0);
  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };
  return (
    <div className="wrapper">
      <div className="stepper">
        <div className="numbers">
          <span className={step >= 0 ? "active" : ""}>1</span>
          <span className={step >= 1 ? "active" : ""}>2</span>
          <span className={step >= 2 ? "active" : ""}>3</span>
        </div>
        <h3 className="rendered-text">Text:{messages[step]}</h3>
        <div className="buttons">
          <button className="btn" onClick={handlePrev}>
            Prev
          </button>
          <button
            className="btn"
            style={{ background: "blue" }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
