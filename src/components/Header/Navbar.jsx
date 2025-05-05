
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Our Products",
    path: "/products",
    submenu: [
      { name: "Import", path: "/products?category=import" },
      { name: "Export", path: "/products?category=export" },
    ],
  },
  { name: "Policy", path: "/policy" },
  { name: "Exports", path: "/exports" },
  { name: "Contact Us", path: "/contact" },
  { name: "Admin", path: "/admin" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navigate = useNavigate();

  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-spice-900 text-white sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4 py-3 md:px-0">
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
          <div className={`md:flex md:items-center ${isOpen ? 'block absolute left-0 right-0 top-full bg-spice-900 shadow-lg' : 'hidden'} md:static md:shadow-none`}>
            <ul className="flex flex-col md:flex-row md:gap-2">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="flex items-center text-white hover:text-spice-100 px-4 py-3 w-full md:w-auto text-left"
                      >
                        {item.name}
                        <span className="ml-1">▼</span>
                      </button>
                      {(activeSubmenu === index || (window.innerWidth >= 768)) && (
                        <ul className="md:absolute md:top-full md:left-0 md:w-48 md:bg-white md:shadow-lg md:text-spice-900 md:rounded md:hidden md:group-hover:block">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <NavLink
                                to={subItem.path}
                                className={({ isActive }) =>
                                  `block px-4 py-2 hover:bg-spice-100 ${isActive ? 'bg-spice-100' : ''}`
                                }
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left px-4 py-3 hover:bg-spice-800"
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
