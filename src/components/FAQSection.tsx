
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What does the Campus TV and Radio Club do?",
    answer: "We showcase campus events, activities, and talents through media, broadcasting, and creative content production. Our club members gain hands-on experience in video production, radio broadcasting, content creation, and digital media."
  },
  {
    question: "How can I join the club?",
    answer: "Joining is simple! We welcome students from all departments. Just fill out the registration form on our Contact page or come to one of our open meetings. No prior experience is necessary—just enthusiasm and willingness to learn."
  },
  {
    question: "What equipment does the club have available?",
    answer: "We have professional-grade video cameras, audio recording equipment, editing software, a green screen studio, and a radio broadcasting setup. All equipment is available for club members to use after completing basic training."
  },
  {
    question: "Do you offer training for beginners?",
    answer: "Absolutely! We regularly conduct workshops and training sessions on video production, audio editing, script writing, broadcasting techniques, and more. Our experienced members mentor newcomers to help them develop skills."
  },
  {
    question: "How can I access the study materials provided by the club?",
    answer: "All study materials are available in our digital library on the Study Material section of our website. You can browse by semester and branch to find notes, previous year question papers, and reference materials."
  }
];

const FAQSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Animation variants for the dancing effect
  const itemVariants = {
    initial: {
      y: 0,
      x: 0,
      rotate: 0,
      scale: 1,
    },
    hover: (i: number) => ({
      y: [-2, 2, -2],
      x: [i % 2 === 0 ? -3 : 3, i % 2 === 0 ? 3 : -3, i % 2 === 0 ? -3 : 3],
      rotate: [i % 2 === 0 ? -1 : 1, i % 2 === 0 ? 1 : -1, i % 2 === 0 ? -1 : 1],
      scale: 1.02,
      transition: {
        y: { repeat: Infinity, repeatType: "mirror", duration: 1.5 },
        x: { repeat: Infinity, repeatType: "mirror", duration: 2 },
        rotate: { repeat: Infinity, repeatType: "mirror", duration: 2.5 },
        scale: { duration: 0.3 }
      }
    }),
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-emerald-300 dark:bg-emerald-700"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1,
              filter: 'blur(40px)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 7,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions about our club? Find answers to the most commonly asked questions below.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onTapStart={() => setHoveredIndex(index)}
                custom={index}
                variants={itemVariants}
                initial="initial"
                animate={hoveredIndex === index ? "hover" : "initial"}
                whileTap="tap"
                className="mb-4"
              >
                <AccordionItem value={`item-${index}`} className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
                  <AccordionTrigger className="px-6 py-4 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
                    <motion.div 
                      className="flex items-center text-left"
                      animate={hoveredIndex === index ? {
                        color: ["#10b981", "#047857", "#10b981"],
                        transition: { duration: 1.5, repeat: Infinity }
                      } : {}}
                    >
                      <motion.span 
                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400"
                        animate={hoveredIndex === index ? {
                          rotate: [0, 360],
                          transition: { duration: 3, repeat: Infinity, ease: "linear" }
                        } : {}}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                      </motion.span>
                      <span className="text-gray-900 dark:text-gray-100 font-medium">{faq.question}</span>
                    </motion.div>
                  </AccordionTrigger>
                  <AnimatePresence>
                    <AccordionContent className="px-6 pb-4">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-600 dark:text-gray-300"
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  </AnimatePresence>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
