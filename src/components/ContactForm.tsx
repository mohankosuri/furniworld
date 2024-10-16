import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa'; 

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  w-full p-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Your email address will not be published. Required fields are marked*
            </p>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  placeholder="Ex. John Doe"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your Message *</label>
                <textarea
                  placeholder="Enter here.."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-900 text-white px-6 py-2 rounded-full hover:bg-green-800 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-green-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Address</h3>
            <p className="mb-6">8502 Preston Rd. Inglewood, Maine 98380</p>
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p className="mb-2">Phone : +0123-456-789</p>
            <p className="mb-6">Email : example@gmail.com</p>
            <h3 className="text-2xl font-bold mb-4">Open Time</h3>
            <p className="mb-2">Monday - Friday : 10:00 - 20:00</p>
            <p className="mb-6">Saturday - Sunday : 11:00 - 18:00</p>
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <div className="flex mt-4 space-x-3 mb-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
