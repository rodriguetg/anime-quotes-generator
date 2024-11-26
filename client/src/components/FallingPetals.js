import React from 'react';
import './FallingPetals.css';

const FallingPetals = () => {
  return (
    <div className="petals-container">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="petal"></div>
      ))}
    </div>
  );
};

export default FallingPetals;
