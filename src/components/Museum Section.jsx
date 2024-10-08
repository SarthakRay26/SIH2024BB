import React, { useRef, useEffect, useState } from "react";

const MuseumSection = () => {
  const indianTextRef = useRef(null);
  const museumTextRef = useRef(null);
  const [indianLineWidth, setIndianLineWidth] = useState(0);
  const [museumLineWidth, setMuseumLineWidth] = useState(0);

  // Function to handle smooth scrolling when clicking the button
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Enables smooth scrolling
        block: "start",     // Aligns the target section to the top
      });
    }
  };

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
          className="text-5xl md:text-8xl StardosStencil-Regular text-[#FA8603]"
        >
          INDIAN
        </h1>
        <div
          className="h-1 bg-[#FA8603] mb-2"
          style={{ width: indianLineWidth }}
        ></div>
        <div
          className="h-1 bg-[#FA8603]"
          style={{ width: museumLineWidth }}
        ></div>
        <h1
          ref={museumTextRef}
          className="text-5xl md:text-8xl mb-8 StardosStencil-Regular text-[#FA8603]"
        >
          MUSEUM
        </h1>
        <button
          onClick={() => scrollToSection("book-ticket")} // Scroll to the section with ID 'book-ticket'
          className="Playfair-font bg-orange-500 hover:bg-orange-600 text-black py-3 px-6 rounded-md text-xl transition duration-300"
        >
          Book A Ticket
        </button>
      </div>
    </div>
  );
};

export default MuseumSection;
