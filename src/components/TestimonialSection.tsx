
import { motion } from "framer-motion";
import Testimonial from "./Testimonial";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "The Campus TV and Radio Club has been instrumental in helping me develop my media production skills. The hands-on experience I gained here was invaluable for my career.",
      author: "Rahul Kumar",
      position: "Alumni, Batch of 2020",
      image: "/public/lovable-uploads/67b9f2c9-24c8-4ef6-af8a-d29631323bb5.png"
    },
    {
      quote: "Being part of this club has given me confidence and technical skills I never thought I could develop. The mentorship and collaborative environment are truly exceptional.",
      author: "Priya Singh",
      position: "Final Year Student",
    },
    {
      quote: "The club provides excellent opportunities to explore creativity and learn professional broadcasting techniques. I'm grateful for the platform it has provided me.",
      author: "Amit Sharma",
      position: "Alumni, Batch of 2021",
      image: "/public/lovable-uploads/63f69d7c-2626-40b1-8b74-318f48ac82a9.png"
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-teal-300 to-emerald-300 opacity-10 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-300 to-teal-300 opacity-10 translate-x-1/4 translate-y-1/4 animate-spin-slow"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Our Members Say</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from our members about their experiences with the Campus TV and Radio Club.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              animate={{ 
                y: [0, -10, 0], 
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "mirror", 
                duration: 3,
                delay: index * 0.5,
                ease: "easeInOut" 
              }}
              className="h-full"
            >
              <Testimonial {...testimonial} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
