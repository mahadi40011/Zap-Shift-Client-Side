import React from "react";
import image from "../../../assets/bookingIcon.png";

const HowItWorks = () => {
  const cards = [
    {
      id: 0,
      title: "Booking Pick & Drop",
      description:
        "Door-to-door pickup and delivery service—fast, simple, and reliable.",
    },
    {
      id: 1,
      title: "Cash On Delivery",
      description:
        "Receive products first, pay later—secure COD service for customers.",
    },
    {
      id: 2,
      title: "Delivery Hub",
      description:
        "Centralized hubs ensuring smooth, quick, and organized parcel movement.",
    },
    {
      id: 3,
      title: "Booking SME & Corporate",
      description:
        "Smart delivery solutions tailored for small businesses and corporate needs.",
    },
  ];

  return (
    <div className="home-content grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cards.map((card) => (
        <div key={card.id} className="p-8 shadow rounded">
          <img className="w-14 h-14" src={image} alt={card.title} />
          <h2 className="font-bold text-xl mt-6 mb-4">{card.title}</h2>
          <p className="font-medium ]">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
