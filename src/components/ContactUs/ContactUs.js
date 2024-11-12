import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactUs = () => {
  // State to track form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  // State to track errors and submission status
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Clear error message for the specific field being edited
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Simple email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message cannot be empty';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true); // Show loading state
      setTimeout(() => {
        alert('Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
        });
        setErrors({});
        setIsSubmitting(false); // End loading state
      }, 2000);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="text-center py-16 bg-white">
        <h1 className="text-4xl font-extrabold text-gray-900">Get In Touch</h1>
        <p className="text-gray-600 mt-4 text-lg">Want to know more about us? Send us a message below!</p>

        <div className="flex justify-center space-x-4 mt-8">
          <div className="bg-green-400 h-32 w-32 rounded-lg shadow-md transition transform hover:scale-105"></div>
          <div className="bg-green-400 h-32 w-32 rounded-lg shadow-md transition transform hover:scale-105"></div>
          <div className="bg-green-400 h-32 w-32 rounded-lg shadow-md transition transform hover:scale-105"></div>
        </div>

        <div className="max-w-xl mx-auto mt-12 p-6 bg-gray-50 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            {/* Full Name */}
            <div className="relative">
              <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                title="Enter your full name"
                className={`w-full pl-10 pr-4 py-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300`}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Email Address */}
            <div className="relative">
              <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                title="Enter a valid email address"
                className={`w-full pl-10 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Subject */}
            <div className="relative">
              <i className="fas fa-tag absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                title="Enter the subject of your message"
                className={`w-full pl-10 pr-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300`}
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div className="relative">
              <i className="fas fa-comments absolute left-3 top-3 text-gray-500"></i>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message"
                title="Enter your message here"
                rows="5"
                className={`w-full pl-10 pr-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full mt-6 py-3 ${isSubmitting ? 'bg-gray-400' : 'bg-green-600'} text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition duration-300 transform ${isSubmitting ? 'cursor-not-allowed' : 'hover:scale-105'}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;