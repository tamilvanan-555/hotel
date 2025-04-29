import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About Quick Stay</h1>
        <p className="text-lg text-gray-600 mb-12">
          At Quick Stay, we aim to revolutionize the way you experience hotel bookings. We believe that your travel experience should be seamless, stress-free, and personalized. Whether you're traveling for business, leisure, or a weekend getaway, Quick Stay ensures that you'll find the perfect room at the best price.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Wide Range of Hotels</h3>
            <p className="text-gray-600">With Quick Stay, you have access to a vast selection of hotels, ranging from cozy boutique properties to large, luxurious resorts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Easy-to-Use Platform</h3>
            <p className="text-gray-600">Our user-friendly website makes hotel booking easy, quick, and hassle-free. Choose your destination, check-in/check-out dates, and filter options based on your needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">24/7 Customer Support</h3>
            <p className="text-gray-600">Our dedicated customer support team is always available to assist you with any issues or inquiries, ensuring that your stay is as comfortable as possible.</p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600 mt-4">
            Our mission is simple: to provide you with the best accommodation options that cater to your preferences, offering comfort, convenience, and value for money. We’re committed to making your travel experience memorable, whether you're booking a quick weekend escape or a long-term stay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
