import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'phone') {
      const phoneValue = value.replace(/[^0-9+]/g, '');
      setFormData({
        ...formData,
        [id]: phoneValue,
      });
    } else if (id === 'email') {
      const emailValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
      setFormData({
        ...formData,
        [id]: emailValue,
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\+?[0-9]{10,15}$/;
    return re.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { email: '', phone: '', password: '' };

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log('Form submitted:', formData);
      // Do not navigate, just add a #
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center p-0.5">
      <style>
        {`
          .react-tel-input .country-list {
            bottom: 26px !important;
          }
        `}
        {`
          .react-tel-input .form-control {
            border-radius: 70px !important;
         }
        `}
        {`
          .react-tel-input .flag-dropdown {
            border-radius: 70px !important;
          }
        `}
        {`
          .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus {
            background-color: transparent !important;
          }
          .react-tel-input .flag-dropdown.open .selected-flag {
            background: transparent !important;
          }
        `}
      </style>

      <div className="fixed top-0 left-0 w-full bg-transparent p-4">
        <div className="flex items-center 2xl:px-[35px] xl:px-[35px] lg:px-[35px] md:px-[35px] sm:px-[0px] pt-2">
          <img src="/images/Logo.png" alt="Logo" className="w-[40px] h-[25px]" />
          <div className="text-white text-[25px] ml-2">Corpus</div>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 p-4">
            <p className="text-[16px] text-white sm:mb-0.5 md:mb-4 lg:mb-4 xlmb-4: 2xl:mb-4 ">GET YOUR ACCESS LINK.</p>
            <h2 className=" sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] text-white leading-[28px] sm:leading-[28px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px] pb-1">
              Experience the new way to work.
            </h2>
            <p className="text-white text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px]">Please fill out this form and we'll send you a link.</p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-[#004851] rounded-lg p-4 md:p-6 shadow-[0_0_20px_rgba(255,255,255,0.7)] w-full max-w-md mx-auto">
              <form onSubmit={(e) => { e.preventDefault(); }}>
                <div className="mb-3">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="fullName">
                    Full Name *
                  </label>
                  <input
                    className="shadow appearance-none border-0 rounded-full w-full py-1.5 px-3 text-black bg-[#cababa] leading-tight focus:outline-none focus:shadow-outline"
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="companyName">
                    Company Name
                  </label>
                  <input
                    className="shadow appearance-none border-0 rounded-full w-full py-1.5 px-3 text-black bg-[#cababa] leading-tight focus:outline-none focus:shadow-outline"
                    id="companyName"
                    type="text"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="jobTitle">
                    Job Title
                  </label>
                  <input
                    className="shadow appearance-none border-0 rounded-full w-full py-1.5 px-3 text-black bg-[#cababa] leading-tight focus:outline-none focus:shadow-outline"
                    id="jobTitle"
                    type="text"
                    placeholder="e.g. RevOps, GTM Lead, Head of Sales"
                    value={formData.jobTitle}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                    E-mail *
                  </label>
                  <input
                    className="shadow appearance-none border-0 rounded-full w-full py-1.5 px-3 text-black bg-[#cababa] leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="e.g. sarah@yourcompany.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-white text-xs italic">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number *
                  </label>
                  <PhoneInput
                    country={'us'}
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                    inputStyle={{ width: '100%', backgroundColor: '#cababa' }}
                    containerClass="react-tel-input"
                  />
                  {errors.phone && <p className="text-white text-xs italic">{errors.phone}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    style={{ cursor: 'pointer' }}
                    className="bg-[#80b2c7] hover:bg-[#78a6b9] text-white font-bold py-1.5 px-4 focus:outline-none focus:shadow-outline w-[48%] rounded-full text-sm md:text-base"
                    type="submit"
                    onClick={(e) => { e.preventDefault(); }}
                  >
                    Secure Early Access
                  </button>
                  <button
                    style={{ cursor: 'pointer' }}
                    className="bg-[#80b2c7] hover:bg-[#78a6b9] text-white font-bold py-1.5 px-4 focus:outline-none focus:shadow-outline w-[48%] rounded-full text-sm md:text-base"
                    type="button"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    type="button"
                    onClick={goToHome}
                    className="text-white text-sm font-bold mx-auto"
                    style={{ cursor: 'pointer' }}
                  >
                    Back to Home
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
