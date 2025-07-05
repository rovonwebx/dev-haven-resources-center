
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDateTime = (date: Date) => {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Copyright */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">DHRC</h3>
            <p className="text-sm text-gray-600">
              © 2025 Dev Haven Resources Center. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Created by Rishi Rohan Kalapala
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-sm text-gray-600 hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="block text-sm text-gray-600 hover:text-blue-600">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Real-time update */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Last Updated</h3>
            <p className="text-sm text-gray-600">
              {formatDateTime(currentTime)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Updates in real-time
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
