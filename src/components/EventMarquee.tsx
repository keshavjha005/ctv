
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EventMarquee = () => {
  // Sample notices/updates - in a real app this would come from a database or API
  const notices = [
    { id: 1, text: "New Photography Workshop on May 15th! Click for details.", pdfUrl: "/notices/photography-workshop.pdf" },
    { id: 2, text: "Radio Broadcasting Competition - Registrations open until May 20th.", pdfUrl: "/notices/radio-competition.pdf" },
    { id: 3, text: "Campus Film Festival coming soon! Check the notice for submission guidelines.", pdfUrl: "/notices/film-festival.pdf" },
    { id: 4, text: "Technical training session on new equipment - May 10th at 2 PM.", pdfUrl: "/notices/tech-training.pdf" },
    { id: 5, text: "Annual general meeting scheduled for all club members - May 25th.", pdfUrl: "/notices/annual-meeting.pdf" }
  ];

  // In a real implementation, these would link to actual PDFs
  const handleNoticeClick = (pdfUrl: string) => {
    // For demonstration purposes, we'll show an alert since PDFs aren't implemented
    alert(`Opening notice PDF: ${pdfUrl}`);
    // In a real app, you might navigate to the PDF or open it in a new tab
    // window.open(pdfUrl, '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/40 dark:to-teal-900/40 py-3 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 bg-teal-400/10 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-emerald-500/10 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        </div>
      </div>
      
      {/* Title */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
          </svg>
          <h3 className="text-sm font-bold text-emerald-700 dark:text-emerald-300">LATEST UPDATES</h3>
        </div>
      
        {/* Marquee content - slowed down animation */}
        <div className="relative overflow-hidden">
          <motion.div
            className="whitespace-nowrap inline-block"
            animate={{
              x: ["100%", "-100%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Increased from 20 to 30 to slow down
                ease: "linear"
              }
            }}
          >
            {notices.map((notice, index) => (
              <span 
                key={notice.id} 
                className="inline-block mx-8 text-emerald-800 dark:text-emerald-200 font-medium hover:text-emerald-600 dark:hover:text-white cursor-pointer"
                onClick={() => handleNoticeClick(notice.pdfUrl)}
              >
                <span className="bg-emerald-600 text-white px-1.5 py-0.5 text-xs rounded mr-2">{index + 1}</span>
                {notice.text}
                {index < notices.length - 1 && 
                  <span className="mx-8 text-emerald-400">•</span>
                }
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventMarquee;
