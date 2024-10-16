 
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube, FaChevronDown } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-green-900 text-white">
      <div className="container mx-auto py-10 px-5">
        <div className="flex justify-between flex-wrap">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
            <div className="bg-yellow-500 rounded-full p-2 w-10 h-10 flex items-center justify-center">
          <span className="text-green-900 text-2xl font-bold">F</span>
        </div>
              <span className="ml-3 text-2xl font-bold">FurniWorld.</span>
            </div>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
          </div>

          {/* Company Links */}
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300">About Us</a></li>
              <li><a href="#" className="text-gray-300">Blog</a></li>
              <li><a href="#" className="text-gray-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-300">Career</a></li>
            </ul>
          </div>

          {/* Customer Services Links */}
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <h3 className="font-bold mb-4">Customer Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300">My Account</a></li>
              <li><a href="#" className="text-gray-300">Track Your Order</a></li>
              <li><a href="#" className="text-gray-300">Return</a></li>
              <li><a href="#" className="text-gray-300">FAQ</a></li>
            </ul>
          </div>

          {/* Information Links */}
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <h3 className="font-bold mb-4">Our Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300">Privacy</a></li>
              <li><a href="#" className="text-gray-300">User Terms & Condition</a></li>
              <li><a href="#" className="text-gray-300">Return Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">+0123-456-789</li>
              <li className="text-gray-300">example@gmail.com</li>
              <li className="text-gray-300">8502 Preston Rd. Inglewood, Maine 98380</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex mt-4 space-x-3 mb-4 ml-3">
              <a href="#" className="bg-yellow-500 p-2 rounded-full text-green-900">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-yellow-500 p-2 rounded-full text-green-900">
                <FaTwitter />
              </a>
              <a href="#" className="bg-yellow-500 p-2 rounded-full text-green-900">
                <FaPinterestP />
              </a>
              <a href="#" className="bg-yellow-500 p-2 rounded-full text-green-900">
                <FaInstagram />
              </a>
              <a href="#" className="bg-yellow-500 p-2 rounded-full text-green-900">
                <FaYoutube />
              </a>
            </div>

      {/* Footer Bottom */}
      <div className="bg-yellow-500 py-4">
        <div className="container mx-auto flex justify-between items-center px-5">
          <p className="text-black font-semibold">Copyright © 2024 Furniture. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <span>English</span>
              <FaChevronDown />
            </div>
            <div className="flex items-center space-x-1">
              <span>USD</span>
              <FaChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
