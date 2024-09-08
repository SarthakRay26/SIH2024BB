import React, { useRef, useEffect, useState } from "react";

const MuseumSection = () => {
  const indianTextRef = useRef(null);
  const museumTextRef = useRef(null);
  const [indianLineWidth, setIndianLineWidth] = useState(0);
  const [museumLineWidth, setMuseumLineWidth] = useState(0);

  useEffect(() => {
    if (indianTextRef.current) {
      setIndianLineWidth(indianTextRef.current.offsetWidth);
    }
    if (museumTextRef.current) {
      setMuseumLineWidth(museumTextRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="relative h-screen bg-cover bg-center mt-14 rounded-xl" style={{ backgroundImage: "url(https://i.ibb.co/wQkxDHw/BG.png)" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-xl">
        <h1
          ref={indianTextRef}
          className="text-5xl md:text-7xl mb-2 StardosStencil-Regular text-[#FA8603]"
        >
          INDIAN
        </h1>
        <div
          className="h-1 bg-[#FA8603] mb-6"
          style={{ width: indianLineWidth }}
        ></div>
        <div
          className="h-1 bg-[#FA8603] mb-6"
          style={{ width: museumLineWidth }}
        ></div>
        <h1
          ref={museumTextRef}
          className="text-5xl md:text-7xl mb-8 StardosStencil-Regular text-[#FA8603]"
        >
          MUSEUM
        </h1>
        <button className="Playfair-font bg-orange-500 hover:bg-orange-600 text-black py-3 px-6 rounded-md text-xl transition duration-300">
          Book A Ticket
        </button>
      </div>
    </div>
  );
};

export default MuseumSection;