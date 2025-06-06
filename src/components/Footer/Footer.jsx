import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-spice-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b border-spice-700 pb-2">Indo M & S Venture PVT. LTD</h3>
            <p className="mb-4 text-gray-300">
              Leading importers and exporters of premium Indian spices, connecting global markets with authentic flavors since 2021.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-spice-300" />
                <a
                  href="tel:+918600146527"
                  className="text-white hover:text-spice-400 transition-colors"
                >
                  +91 8600146527
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-spice-300" />
                <div className="clickable">
                  <a
                    href="mailto:indo@indianspices.com"
                    className="text-white hover:text-spice-400 transition-colors relative z-10"
                    style={{ pointerEvents: "auto" }}
                  >
                    indo@indianspices.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2 text-spice-300" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=401,+4th+floor,+Archway+building+sopanbaug+road,+Balewadi,+Pune-411045,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-spice-400 transition-colors"
                >
                  <b>Corporate office:</b> 401, 4th floor, Archway building sopanbaug road, Balewadi, Pune-411045, India
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2 text-spice-300" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bhatshirgaon,+Taluka-Shirala,+District-Sangali,+415408,+Maharashtra,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-spice-400 transition-colors"
                >
                  <b>Registered office:</b> Bhatshirgaon, Taluka-Shirala, District-Sangali, 415408, Maharashtra, India
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b border-spice-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-spice-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-spice-300 transition-colors">About Us</Link></li>
              <li><Link to="/products?category=import" className="hover:text-spice-300 transition-colors">Import Products</Link></li>
              <li><Link to="/products?category=export" className="hover:text-spice-300 transition-colors">Export Products</Link></li>
              <li><Link to="/policy" className="hover:text-spice-300 transition-colors">Policy</Link></li>
              <li><Link to="/contact" className="hover:text-spice-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b border-spice-700 pb-2">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Saturday :</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Lunch Time :</span>
                <span>1:00 PM - 1:40 PM</span>
              </li>
            </ul>
            <p className="mt-4 text-gray-300">We are closed on public holidays.</p>
          </div>

          {/* Social Media Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b border-spice-700 pb-2">Connect With Us</h3>
            <p className="mb-4 text-gray-300">
              Follow us on social media for updates, new product announcements, and industry insights.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-spice-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Indo M & S Venture PVT. LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
