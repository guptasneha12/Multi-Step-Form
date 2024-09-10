import React from "react";

const Confirmation = ({ formData }) => {
  return (
    <div className="form-container">
      <h2 className="personal">Confirmation</h2>
      <ul>
        <li>
          <strong>First Name:</strong> {formData.firstName}
        </li>
        <li>
          <strong>Last Name:</strong> {formData.lastName}
        </li>
        <li>
          <strong>Email:</strong> {formData.email}
        </li>
        <li>
          <strong>Address:</strong> {formData.address}
        </li>
        <li>
          <strong>City:</strong> {formData.city}
        </li>
        <li>
          <strong>Card Number:</strong> {formData.cardNumber}
        </li>
        <li>
          <strong>Expiry Date:</strong> {formData.expiryDate}
        </li>
        <li>
          <strong>CVV:</strong> {formData.cvv}
        </li>
      </ul>
    </div>
  );
};

export default Confirmation;
