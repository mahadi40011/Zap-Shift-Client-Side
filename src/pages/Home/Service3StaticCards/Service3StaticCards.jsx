import React from "react";
import liveParcel from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";

const Service3StaticCards = () => {
  const cards = [
    {
      id: 0,
      image: liveParcel,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 1,
      image: safeDelivery,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 2,
      image: safeDelivery,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <div className="home-content py-20 border-y border-dashed  mt-24 space-y-5">
      {cards.map((card) => (
        <div className="flex gap-12 p-8 rounded-3xl shadow bg-white">
          <div>
            <img className="w-48 h-48" src={card.image} alt="" />
          </div>
          <div className="border-l border-dashed"></div>
          <div>
            <h2 className="font-bold text-2xl">{card.title}</h2>
            <p className="font-medium mt-4">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service3StaticCards;
