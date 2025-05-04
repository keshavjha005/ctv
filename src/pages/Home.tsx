
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEventContext } from "@/context/EventContext";
import { format } from "date-fns";
import VideoSection from "@/components/VideoSection";
import { motion } from "framer-motion";
import EventMarquee from "@/components/EventMarquee";
import { useState } from "react";

const Home = () => {
  const { events } = useEventContext();
  
  // Get the most recent upcoming event
  const upcomingEvent = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

  // Functions for opening PDFs
  const openBrochure = () => {
    // In a real app, this would open the actual PDF
    alert("Opening club brochure PDF!");
    // window.open("/brochures/club-brochure.pdf", "_blank");
  };

  // Text animation variants
  const textContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const textChild = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      {/* Hero Section with enhanced overlay */}
      <section className="relative h-screen w-full bg-college-bg bg-cover bg-center bg-no-repeat">
        {/* Enhanced color overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-teal-600/50 to-emerald-700/40 backdrop-blur-[2px]"></div>
        
        {/* Animated particles in the background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-teal-300/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
          <div className="overflow-hidden mb-4">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15,
                  delay: 0.2
                }}
                className="relative inline-block"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">
                  CAMPUS TV AND RADIO CLUB
                </span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-400 to-emerald-500"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                ></motion.span>
              </motion.div>
            </motion.h1>
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="overflow-hidden mt-2"
          >
            <motion.span 
              className="block text-3xl md:text-4xl font-bold"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
              animate={{
                textShadow: [
                  "0 2px 4px rgba(0,0,0,0.3)",
                  "0 4px 8px rgba(0,0,0,0.5)",
                  "0 2px 4px rgba(0,0,0,0.3)",
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              BCE BHAGALPUR
            </motion.span>
          </motion.div>
          
          {/* Add slogan with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-6 mb-4"
          >
            <h2 className="text-xl font-bold tracking-wider text-white">
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-emerald-300"
                animate={{ 
                  textShadow: ["0 0 5px rgba(20, 184, 166, 0.5)", "0 0 15px rgba(20, 184, 166, 0.8)", "0 0 5px rgba(20, 184, 166, 0.5)"] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                "DISCOVER,DEVELOP,DOMINATE"
              </motion.span>
            </h2>
          </motion.div>
          
          {/* Animated description text */}
          <motion.p 
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="mb-8 max-w-3xl text-lg opacity-90 mt-4"
          >
            {Array.from("Showcasing campus events, activities, and talent through media, broadcasting, and creative content.").map((char, index) => (
              <motion.span key={index} variants={textChild} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white border-none shadow-lg hover:shadow-xl transition-all"
              >
                <Link to="/about">Know more about the club</Link>
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.2)"
              }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                variant="outline" 
                className="backdrop-blur-sm bg-white/20 border-white text-white shadow-lg transition-all hover:bg-white/30"
              >
                <Link to="/study-material">
                  <motion.span
                    animate={{
                      color: ["rgb(255, 255, 255)", "rgb(134, 239, 172)", "rgb(255, 255, 255)"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Access Study Material
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={openBrochure} 
                className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Enhanced animated scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Event Marquee - Slowed down animation */}
      <EventMarquee />

      {/* Latest Event Section */}
      {upcomingEvent && (
        <section className="bg-white dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Upcoming Event</h2>
              <div className="mt-2 h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="mx-auto max-w-3xl"
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="p-1 bg-gradient-to-r from-teal-400 to-emerald-600">
                  <div className="bg-white dark:bg-gray-800 p-6 sm:p-8">
                    <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{upcomingEvent.title}</h3>
                        <p className="mt-1 text-lg text-gray-600 dark:text-gray-400">
                          {format(new Date(upcomingEvent.date), "MMMM dd, yyyy")}
                        </p>
                        <p className="mt-3 text-gray-700 dark:text-gray-300">{upcomingEvent.description}</p>
                      </div>
                      <div className="mt-6 sm:mt-0">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white">
                            <Link to="/events">View All Events</Link>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Video Section */}
      <VideoSection />

      {/* Features Section with enhanced animations */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">What We Offer</h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-teal-400 to-emerald-500 mx-auto"></div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  </svg>
                ),
                title: "Education",
                description: "Access to study materials, notes, and question papers from previous semesters for all branches."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                ),
                title: "Creativity",
                description: "Original video series, interviews, documentaries, and radio programs produced by our talented members."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Documentation",
                description: "Regular workshops, events, and training sessions to develop skills in media production and broadcasting."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -15, 
                  transition: { duration: 0.3 } 
                }}
              >
                <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-emerald-50 dark:from-gray-800 dark:to-gray-900">
                  <div className="h-2 bg-gradient-to-r from-teal-400 to-emerald-500"></div>
                  <CardContent className="p-6">
                    <motion.div 
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400"
                      whileHover={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 0.9, 1.1, 1],
                        transition: { 
                          duration: 1,
                          times: [0, 0.2, 0.5, 0.8, 1],
                        }
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(16, 185, 129, 0)",
                          "0 0 20px rgba(16, 185, 129, 0.5)",
                          "0 0 0 rgba(16, 185, 129, 0)"
                        ],
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop"
                        }
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <motion.h3 
                      className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100"
                      whileHover={{ 
                        color: "#10b981", 
                        scale: 1.05,
                        transition: { duration: 0.2 } 
                      }}
                    >
                      {feature.title}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
