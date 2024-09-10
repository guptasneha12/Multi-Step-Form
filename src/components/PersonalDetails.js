import React from "react";
import "../styles.css"; 
const PersonalDetails = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <h2 className="personal">Personal Details</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={handleChange("firstName")}
        />
        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={handleChange("lastName")}
        />
        {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
      </div>
      <div>
        <label>Email Add.:</label>
        <input
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
    </div>
  );
};

export default PersonalDetails;
