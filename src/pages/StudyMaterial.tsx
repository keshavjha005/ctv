
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const semesters = [
  { id: 1, name: "Semester 1" },
  { id: 2, name: "Semester 2" },
  { id: 3, name: "Semester 3" },
  { id: 4, name: "Semester 4" },
  { id: 5, name: "Semester 5" },
  { id: 6, name: "Semester 6" },
  { id: 7, name: "Semester 7" },
  { id: 8, name: "Semester 8" }
];

const StudyMaterial = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Study Material
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            Access semester-wise question papers, notes, and other study resources.
          </motion.p>
        </div>

        {/* Study Resources */}
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Semester-wise Resources</h2>
          <p className="mb-6 text-gray-600">
            Select your semester to access branch-specific question papers and notes. All materials are available in PDF format for easy download.
          </p>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {semesters.map((semester, index) => (
              <motion.div
                key={semester.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Link to={`/study-material/${semester.id}`}>
                  <Card className="semester-card overflow-hidden transition-all hover:shadow-lg">
                    <div className="aspect-video bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{semester.name}</span>
                    </div>
                    <CardContent className="p-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
                      <p className="text-gray-600 dark:text-gray-300">
                        Access question papers and notes for each branch.
                      </p>
                      <div className="mt-4 space-y-2 branch-list">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Available branches:</p>
                        <ul className="list-disc pl-5 text-sm text-gray-500 dark:text-gray-400">
                          <li>Computer Science (CSE)</li>
                          <li>Mechanical Engineering</li>
                          <li>Electronics & Communication (ECE)</li>
                          <li>Electrical Engineering (EE)</li>
                          <li>Civil Engineering</li>
                        </ul>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white">
                          View Materials
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Resources */}
        <div>
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Additional Resources</h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div variants={itemVariants} whileHover={{ y: -8 }}>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardContent className="p-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Previous Year Papers</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">A comprehensive collection of previous year question papers for all subjects.</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Access Collection
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -8 }}>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardContent className="p-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Recommended Books</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">List of recommended textbooks and reference materials for each course.</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        View List
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -8 }}>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardContent className="p-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-teal-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Lecture Notes</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">Compiled lecture notes for key subjects across all branches.</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-gradient-to-r from-blue-400 to-teal-500 hover:from-blue-500 hover:to-teal-600 text-white">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Access Notes
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Request Material Section */}
        <div className="mt-16 rounded-lg bg-gradient-to-r from-blue-700 to-teal-600 p-8 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold">Don't see the material you need?</h2>
            <p className="mt-4 opacity-90">
              If you're looking for specific study materials that aren't listed here, let us know and we'll try to add them.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="mt-6 bg-white text-blue-700 hover:bg-blue-50">
                <Link to="/contact">Request Material</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;
