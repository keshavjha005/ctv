
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProfileBoxProps {
  name: string;
  role: string;
  department?: string; // Optional, for faculty
  batch?: string;      // Optional, for students
  timeline?: string;   // Optional, shows year range
  email?: string;      // Optional
  linkedinUrl?: string; // Optional
  imageUrl?: string;   // Optional
}

const ProfileBox = ({
  name,
  role,
  department,
  batch,
  timeline,
  email,
  linkedinUrl,
  imageUrl = "/public/placeholder.svg" // Default image if none provided
}: ProfileBoxProps) => {
  return (
    <motion.div
      whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border border-emerald-200 dark:border-emerald-900 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-white to-emerald-50 dark:from-gray-800 dark:to-gray-900">
        <div className="relative">
          <div className="w-full aspect-square bg-gradient-to-br from-emerald-100 to-teal-300 dark:from-emerald-900 dark:to-teal-800 overflow-hidden">
            <motion.img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="absolute top-0 right-0 p-2">
            <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></div>
          </div>
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="font-bold text-gray-900 dark:text-gray-100 truncate">{name}</h3>
          <p className="text-sm text-emerald-600 dark:text-emerald-400">{role}</p>
          
          {department && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{department}</p>
          )}
          
          {batch && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Batch: {batch}</p>
          )}
          
          {timeline && (
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{timeline}</p>
          )}
          
          <div className="mt-3 flex justify-center space-x-2">
            {email && (
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 dark:hover:bg-emerald-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </Button>
              </motion.a>
            )}
            
            {linkedinUrl && (
              <motion.a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Button>
              </motion.a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileBox;
