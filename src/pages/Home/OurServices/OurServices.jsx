import React from 'react';
import image from "../../../assets/service.png"

const OurServices = () => {
  const cards = [
    {
      id: 0,
      title: "Express  & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      id: 1,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      id: 2,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 3,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 4,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 5,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <div className="bg-[#03373D] max-w-[1500px] mx-auto rounded-4xl py-24 px-40">
      <div className="text-center mb-8">
        <h1 className="text-[40px] font-bold mb-4">Our Services</h1>
        <p className="font-medium">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we
          deliver on time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="py-8 px-6 bg-white rounded-3xl text-center space-y-4 shadow-sm border"
          >
            <img className="mx-auto" src={image} alt={card.title} />
            <h2 className="font-bold text-2xl text-gray-800">{card.title}</h2>
            <p className="font-medium text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;