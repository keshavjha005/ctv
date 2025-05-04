
import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  image?: string;
}

const Testimonial = ({ quote, author, position, image }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-full"
    >
      <div className="flex flex-1 flex-col rounded-xl border border-indigo-200 bg-white p-6 shadow-md backdrop-blur-sm dark:border-indigo-700/30 dark:bg-gray-800/80">
        <div className="mb-4 flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="h-5 w-5 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="flex-1">
          <p className="mb-4 italic text-gray-600 dark:text-gray-300">"{quote}"</p>
        </div>
        <div className="mt-4 flex items-center">
          {image ? (
            <img
              src={image}
              alt={author}
              className="mr-4 h-10 w-10 rounded-full object-cover border-2 border-indigo-300 dark:border-indigo-600"
            />
          ) : (
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white">
              {author.charAt(0)}
            </div>
          )}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-100">{author}</h4>
            <p className="text-sm text-indigo-500 dark:text-indigo-400">{position}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
