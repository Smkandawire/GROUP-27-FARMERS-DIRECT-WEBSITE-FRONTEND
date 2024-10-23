import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      

      {/* Get In Touch Section */}
      <section className="text-center py-16 bg-white">
        <h1 className="text-4xl font-extrabold text-gray-900">Get In Touch</h1>
        <p className="text-gray-600 mt-4 text-lg">Want to know more about us? Send us a message below!</p>

        {/* Three boxes (placeholders) */}
        <div className="flex justify-center space-x-4 mt-8">
          <div className="bg-green-400 h-32 w-32 rounded-lg shadow-md transition transform hover:scale-105"></div>
          <div className="bg-green-400 h-32 w-32 rounded-lg shadow-md transition transform hover:scale-105"></div>
          <div className="bg-green-400 h-32 w-32 rounded-lg shadow-md transition transform hover:scale-105"></div>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto mt-12 p-6 bg-gray-50 rounded-lg shadow-md">
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Type your message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full mt-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition duration-300">
            Send Message
          </button>

         
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
