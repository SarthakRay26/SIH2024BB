import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('https://museum-ticketing-chatbot-77ed536e1a06.herokuapp.com/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="StardosStencil-Regular md:text-7xl text-3xl text-[#FA8603]">
      <div>Events</div>
      
      <div className="flex flex-col items-center">
        <div className="h-1 bg-black w-32 rounded-xl"></div>
        <div className="h-1 bg-black w-24 mt-1 rounded-xl"></div>
      </div>
      <h1 className="text-xl md:text-4xl mt-4 StardosStencil-Regular text-[#000000]">
      "Step Into the Past, Celebrate the Present – Explore Our Events!"
      </h1>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.slice(0, 4).map(event => (
            <div key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{event.name}</h2>
                <p className="text-gray-700 mb-2 text-sm">{event.description}</p>
                <p className="text-gray-700 mb-2 text-sm"><strong>Category:</strong> {event.category}</p>
                <p className="text-gray-700 mb-2 text-sm"><strong>Date:</strong> {event.date}</p>
                <p className="text-gray-700 mb-2 text-sm"><strong>Time:</strong> {event.time}</p>
                <p className="text-gray-700 mb-2 text-sm"><strong>Price:</strong> ₹{event.price}</p>
                <p className="text-gray-700 mb-2 text-sm"><strong>Seats:</strong> {event.seats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;