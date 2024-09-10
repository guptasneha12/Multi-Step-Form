import React from "react";

const AddressDetails = ({ formData, handleChange, errors }) => {
  return (
    <div className="form-container">
      <h2 className="personal">Address Details</h2>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          value={formData.address}
          onChange={handleChange("address")}
        />
        {errors.address && <p className="error">{errors.address}</p>}
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          value={formData.city}
          onChange={handleChange("city")}
        />
        {errors.city && <p className="error">{errors.city}</p>}
      </div>
    </div>
  );
};

export default AddressDetails;
