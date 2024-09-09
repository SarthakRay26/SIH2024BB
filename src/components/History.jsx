import React from "react";

const History = () => {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center  rounded-xl mt-[20px]"
        style={{ backgroundImage: "url(https://i.ibb.co/C8vQjHV/just-1.png)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-xl">
          <h1 className="text-2xl md:text-7xl StardosStencil-Regular text-[#FA8603] mt-[-50px]">
            HISTORY
          </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl Playfair-font text-[#FFFFFF] mt-[100px]">
            Indian Museum in collaboration with the Tribal 
            <br />
            Cooperative Marketing Development Federation of 
            <br />
            India Limited (TRIFED), organised “Aadi Chitra” an 
            <br />
            exhibition of exquisite Tribal paintings on the 
            <br />
            occasion of “Janjatiya Gaurav Diwas” to commemorate 
            <br />
            the birth anniversary of Bhagwan Birsa Munda.
          </p>
        </div>
      </div>
    </>
  );
};

export default History;
