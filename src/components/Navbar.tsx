
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/activities", label: "ACTIVITIES" },
    { href: "/events", label: "EVENTS" },
    { href: "/study-material", label: "STUDY MATERIAL" },
    { href: "/contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 shadow-lg backdrop-blur-sm"
          : "bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <motion.div
                className="p-1 rounded-lg shadow-md"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src="/public/lovable-uploads/9dbcbdc2-1954-4fc1-ac5e-df9f8c1a5e59.png"
                  alt="Frontiers - Campus TV and Radio Club Logo"
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="ml-3 flex flex-col"
              >
                <span className="text-lg font-semibold text-white">
                  Campus TV & Radio
                </span>
                <span className="text-xs text-teal-200">FRONTIERS</span>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {links.map((link) => (
                <motion.li 
                  key={link.href}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors hover:text-teal-200 relative ${
                      location.pathname === link.href
                        ? "text-teal-200"
                        : "text-white"
                    } hover:scale-105 inline-block`}
                  >
                    {link.label}
                    {location.pathname === link.href && (
                      <motion.span
                        layoutId="navunderline"
                        className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-teal-200"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            {/* Theme Toggle Button */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                variant="ghost"
                size="icon"
                onClick={toggleTheme} 
                className="ml-2 text-white hover:bg-emerald-600/50 hover:text-teal-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost"
              size="icon"
              onClick={toggleTheme} 
              className="mr-2 text-white hover:bg-transparent hover:text-teal-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              className="text-white hover:bg-transparent hover:text-teal-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="bg-gradient-to-r from-emerald-800 to-teal-800 md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-2 px-4 py-4">
            {links.map((link) => (
              <motion.li 
                key={link.href}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  to={link.href}
                  className={`block py-2 text-base font-medium transition-colors hover:text-teal-200 ${
                    location.pathname === link.href
                      ? "text-teal-200"
                      : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
