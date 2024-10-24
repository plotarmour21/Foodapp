import React from "react";
import Image from "next/image";
import { FaUtensils } from "react-icons/fa";

const offersData = [
  {
    id: 1,
    title: "50% Off on All Pizzas",
    description: "Enjoy half price on all pizzas. Limited time offer!",
    imageUrl: "https://images.unsplash.com/photo-1601924582971-4a3e7f3c7b7b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free",
    description: "Order any main course and get another one for free!",
    imageUrl: "https://images.unsplash.com/photo-1555992336-03a23c67c9f1?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Free Dessert with Every Meal",
    description: "Get a free dessert with every meal you order.",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];



const Offers = () => {
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold mb-4 text-white">Current Offers</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offersData.map((offer) => (
          <div key={offer.id} className="border p-4 rounded-lg shadow-lg bg-white transform transition duration-500 hover:scale-105">
            <Image
              src={offer.imageUrl}
              alt={offer.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              {offer.title} <FaUtensils />
            </h4>
            <p className="text-gray-600">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
