import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-orange-500 py-10">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        {/* Location Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <a
            href="https://www.google.com/maps/place/Indian+Museum/@22.5578858,88.3511268,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02771160347adf:0x9fd70619f94d0bac!8m2!3d22.5578858!4d88.3511268!16zL20vMDM3NGtu?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.ibb.co/Gs9gJYw/Kolkata-City-Map-of-India-Vintage-Poster-for-Sale-by-de-MAP-1-2x.png"
              alt="Kolkata Map"
              className="w-48 mx-auto mb-4"
            />
          </a>
        </div>

        {/* Quick Links Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          {/* Add your quick links here */}
          <ul>
            <li>
              <a href="#" className="text-white hover:text-orange-400">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-orange-400">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-orange-400">
                Link 3
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="flex justify-center space-x-4">
            {/* Social Media Icons */}

            <a href="#" className="text-white hover:text-orange-400">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-8"></div>
    </footer>
  );
};

export default Footer;
