import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import PaymentDetails from "./PaymentDetails";
import Confirmation from "./Confirmation";
import "../styles.css"; 

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});

  const nextStep = () => {
    if (validateForm()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    switch (step) {
      case 1:
        if (!formData.firstName) formErrors.firstName = "First Name is required";
        if (!formData.lastName) formErrors.lastName = "Last Name is required";
        if (!formData.email) formErrors.email = "Email is required";
        break;
      case 2:
        if (!formData.address) formErrors.address = "Address is required";
        if (!formData.city) formErrors.city = "City is required";
        break;
      case 3:
        if (!formData.cardNumber) formErrors.cardNumber = "Card Number is required";
        if (!formData.expiryDate) formErrors.expiryDate = "Expiry Date is required";
        if (!formData.cvv) formErrors.cvv = "CVV is required";
        break;
      default:
        break;
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
    setStep(1);
    setErrors({});
  };

  const submitForm = () => {
    if (validateForm()) {
      alert("Form submitted successfully");
      console.log(formData);
      resetForm(); // Reset the form after submission
    }
  };

  return (
    <div className="form-container">
      <h1>Multi-Step Form</h1>
      {step === 1 && (
        <PersonalDetails formData={formData} handleChange={handleChange} errors={errors} />
      )}
      {step === 2 && (
        <AddressDetails formData={formData} handleChange={handleChange} errors={errors} />
      )}
      {step === 3 && (
        <PaymentDetails formData={formData} handleChange={handleChange} errors={errors} />
      )}
      {step === 4 && <Confirmation formData={formData} />}

      <div className="btn-container">
        {step > 1 && <button onClick={prevStep}>Previous</button>}
        {step < 4 && <button onClick={nextStep}>Next</button>}
        {step === 4 && <button onClick={submitForm}>Submit</button>}
      </div>
    </div>
  );
};

export default StepForm;
