import React from 'react';

const MuseumSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('src/components/ui/BG.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-8">INDIAN MUSEUM</h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md text-xl transition duration-300">
          Book A Ticket
        </button>
      </div>
    </div>
  );
};

export default MuseumSection;
