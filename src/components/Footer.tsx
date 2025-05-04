
import { Link } from "react-router-dom";
import { SubscribeForm } from "./SubscribeForm";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white relative overflow-hidden">
      {/* Animated video background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute w-[600px] h-[600px] -top-1/4 -right-1/4 rounded-full bg-gradient-to-br from-emerald-400/10 to-transparent"
        />
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute w-[500px] h-[500px] -bottom-1/4 -left-1/4 rounded-full bg-gradient-to-tr from-teal-400/10 to-transparent"
        />
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      </div>

      {/* Enhanced video animation element */}
      <div className="absolute bottom-0 right-0 w-full h-40 opacity-20 overflow-hidden">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 left-0">
          <motion.path
            d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,202.7C672,224,768,224,864,192C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="rgb(52, 211, 153)"
            animate={{
              d: [
                "M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,202.7C672,224,768,224,864,192C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,138.7C672,117,768,107,864,128C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,202.7C672,224,768,224,864,192C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 left-0">
          <motion.path
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,192C672,203,768,213,864,208C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="rgb(16, 185, 129)"
            animate={{
              d: [
                "M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,192C672,203,768,213,864,208C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,224L48,229.3C96,235,192,245,288,245.3C384,245,480,235,576,224C672,213,768,203,864,218.7C960,235,1056,277,1152,277.3C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,192C672,203,768,213,864,208C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </svg>
        
        {/* Adding more animated elements for "video-like" animations */}
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-teal-400/20"
          animate={{
            y: [-20, 0, -20],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-1/3 w-16 h-16 rounded-full bg-emerald-400/20"
          animate={{
            y: [-15, 5, -15],
            scale: [0.9, 1.1, 0.9],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-40 right-1/4 w-20 h-20 rounded-full bg-teal-300/10"
          animate={{
            y: [-10, 10, -10],
            x: [10, -10, 10],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Animated slogan */}
      <div className="relative z-10 py-4 bg-gradient-to-r from-emerald-800/80 to-teal-700/80 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-xl font-bold tracking-wider text-white"
            animate={{ 
              textShadow: ["0 0 5px rgba(20, 184, 166, 0.5)", "0 0 15px rgba(20, 184, 166, 0.8)", "0 0 5px rgba(20, 184, 166, 0.5)"] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.span 
              className="inline-block mr-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            >
              DISCOVER
            </motion.span>
            <motion.span
              className="inline-block mx-2" 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
            >
              DEVELOP
            </motion.span>
            <motion.span 
              className="inline-block ml-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              DOMINATE
            </motion.span>
          </motion.h3>
        </motion.div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <motion.img
                src="/public/lovable-uploads/9dbcbdc2-1954-4fc1-ac5e-df9f8c1a5e59.png"
                alt="Frontiers - Campus TV and Radio Club Logo"
                className="h-16 w-auto mr-3"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">Campus TV and Radio Club</h3>
                <span className="text-sm text-emerald-300">FRONTIERS</span>
              </div>
            </div>
            <p className="text-sm opacity-80">
              The official media club of Bhagalpur College of Engineering, showcasing campus events, activities, and talent.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white hover:opacity-80">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </div>
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 text-white hover:opacity-80">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </div>
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white hover:opacity-80">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </motion.a>
              <motion.a 
                href="https://telegram.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Telegram"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white hover:opacity-80">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.133.43.131.618-.002.272-.195.433-.53.433-.877v-10.92c0-.527-.397-.957-.921-1.018-.259-.03-.515.05-.731.217l-6.898 5.301c-.262.201-.41.511-.41.839 0 .328.148.637.41.839l2.299 1.767-2.618 1.787c-.343.234-.465.671-.302 1.049.163.378.58.608.989.53l.358-.043 5.773-1.469z" />
                  </svg>
                </div>
              </motion.a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/events", label: "Events" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link to={link.to} className="text-sm hover:text-emerald-300">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2">
              {[
                { to: "/study-material", label: "Study Material" },
                { to: "/activities", label: "Club Activities" },
                { href: "https://bce.ac.in", label: "College Website", external: true }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  {link.external ? (
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm hover:text-emerald-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.to} className="text-sm hover:text-emerald-300">
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Subscribe</h3>
            <p className="text-sm opacity-80">
              Subscribe to get notifications about upcoming events and activities.
            </p>
            <SubscribeForm />

            {/* Enhanced video element animation */}
            <motion.div
              className="mt-4 relative h-24 overflow-hidden rounded-lg bg-gradient-to-r from-teal-900/50 to-emerald-900/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10 text-emerald-300"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  <motion.div 
                    className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [0.8, 1, 0.8] 
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.div>
                <motion.span 
                  className="ml-2 text-sm font-medium text-emerald-200"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  Watch Club Videos
                </motion.span>
              </motion.div>
              
              {/* Multiple animated lines to create video player effect */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-[2px]"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0.5, 1, 0.5],
                  x: ["-100%", "0%", "100%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                style={{
                  background: "linear-gradient(to right, transparent, #5eead4, transparent)"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute bottom-3 left-0 w-1/2 h-[1px]"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0.3, 0.8, 0.3],
                  x: ["0%", "100%", "200%"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1
                }}
                style={{
                  background: "linear-gradient(to right, transparent, #5eead4, transparent)"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute top-5 right-0 w-1/3 h-[1px]"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0.3, 0.6, 0.3],
                  x: ["100%", "0%", "-100%"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 0.5
                }}
                style={{
                  background: "linear-gradient(to right, transparent, #5eead4, transparent)"
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 border-t border-emerald-700/50 pt-8">
          <p className="text-center text-xs opacity-80">
            &copy; {new Date().getFullYear()} Campus TV and Radio Club - Frontiers. All rights reserved. BCE Bhagalpur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
