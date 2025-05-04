
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type UploadCTAProps = {
  uploadUrls: {
    questionPapers: string;
    notes: string;
  };
};

const UploadCTA = ({ uploadUrls }: UploadCTAProps) => {
  return (
    <div className="mt-12 rounded-lg bg-gradient-to-r from-emerald-800 to-teal-700 p-8 text-white relative overflow-hidden shadow-xl">
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-0 right-0 w-64 h-64 rounded-full bg-teal-500/10"
        />
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-emerald-500/10"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl text-center relative z-10">
        <motion.h2 
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Have materials to share?
        </motion.h2>
        <motion.p 
          className="mt-4 opacity-90"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          If you have notes, question papers, or other study materials to contribute, please share them with us.
          Your contribution helps your fellow students!
        </motion.p>
        <div className="mt-6 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:shadow-lg hover:from-teal-600 hover:to-emerald-600 text-white border-none sm:w-auto">
              <a href={uploadUrls.questionPapers} target="_blank" rel="noopener noreferrer">
                Upload Question Papers
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg hover:from-emerald-600 hover:to-teal-600 text-white border-none sm:w-auto">
              <a href={uploadUrls.notes} target="_blank" rel="noopener noreferrer">
                Upload Notes
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UploadCTA;
