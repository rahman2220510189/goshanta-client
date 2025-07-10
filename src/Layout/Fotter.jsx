import { Link } from "react-router-dom";

const Fotter = () => {
    return (
        <div>
              <footer className="bg-[#001829] text-gray-300 py-10 px-6 md:px-20 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">goShanta.Ai</h4>
            <p className="text-sm">
              Discover hidden gems, serene landscapes, and vibrant cultures. Your next adventure starts here.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/guide" className="hover:underline">Travel Guide</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/ai" className="hover:underline">Chat Ai</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
            <p className="text-sm mb-2">Follow us on social media for updates:</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400">📘</a>
              <a href="#" className="hover:text-yellow-400">📷</a>
              <a href="#" className="hover:text-yellow-400">🐦</a>
              <a href="#" className="hover:text-yellow-400">▶️</a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-10">© 2025 goShanta.Ai All rights reserved.</div>
      </footer>
        </div>
    );
};

export default Fotter;