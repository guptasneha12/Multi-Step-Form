import React from "react";

const PaymentDetails = ({ formData, handleChange, errors }) => {
  return (
    <div className="form-container">
      <h2 className="personal">Payment Details</h2>
      <div className="form-group">
        <label>Card Number</label>
        <input
          type="text"
          value={formData.cardNumber}
          onChange={handleChange("cardNumber")}
        />
        {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
      </div>
      <div className="form-group">
        <label>Expiry Date</label>
        <input
          type="text"
          value={formData.expiryDate}
          onChange={handleChange("expiryDate")}
        />
        {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
      </div>
      <div className="form-group">
        <label>CVV</label>
        <input
          type="text"
          value={formData.cvv}
          onChange={handleChange("cvv")}
        />
        {errors.cvv && <p className="error">{errors.cvv}</p>}
      </div>
    </div>
  );
};

export default PaymentDetails;
