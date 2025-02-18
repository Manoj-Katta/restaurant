import React from "react";

const Footer = () => {
  return (
    <footer className="p-8">
      {/* Top Section */}
      <div className="flex justify-center items-center gap-6">
        <img src="/2-B65tPBiO.png" alt="Delicious Food" className="w-xl h-auto rounded-lg" />
        <div>
          <h3 className="font-bold text-4xl">Food Is Always Good</h3>
          <p className="font-bold text-lg text-gray-700">
            Enjoy fresh and healthy meals delivered right to your doorstep.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col mt-6 justify-center items-center">
        <p className="text-4xl font-bold p-4">Our Services</p>
        <ul className="flex flex-wrap gap-6 text-2xl font-bold">
          <li>✅ Online Booking</li>
          <li>🍔 Fast Food</li>
          <li>🥗 Healthy Food</li>
          <li>🚚 Delivery</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
