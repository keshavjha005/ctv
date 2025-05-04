
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Link } from 'react-router-dom';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  description: string;
  category: string;
}

const initialVideos: Video[] = [
  {
    id: '1',
    title: 'Campus TV Introduction',
    thumbnail: '/public/lovable-uploads/e36423e3-96f0-449f-a01f-01d4364ed53f.png',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Learn about our club and how we create amazing content for the campus.',
    category: 'college-events'
  },
  {
    id: '2',
    title: 'Annual Tech Fest Coverage',
    thumbnail: '/public/lovable-uploads/68409509-4d7a-4cf6-8fde-640eccab8668.png',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Watch our coverage of the annual tech fest and exhibitions.',
    category: 'college-events'
  },
  {
    id: '3',
    title: 'Prof. Sharma on Advanced Computing',
    thumbnail: '/public/lovable-uploads/a9be672f-0601-4b08-a117-9c6182bdf2b2.png',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'An insightful lecture on advanced computing by our senior professor.',
    category: 'faculty-introductions'
  },
  {
    id: '4',
    title: 'Meet Dr. Gupta - HOD Computer Science',
    thumbnail: '/public/lovable-uploads/4a22c3da-f665-48a5-9412-d74cad53a2af.png',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Get to know our Computer Science department head and his vision.',
    category: 'faculty-introductions'
  },
  {
    id: '5',
    title: 'Success Story: Alok Verma at Google',
    thumbnail: '/public/lovable-uploads/4a4f57f5-671a-4cb0-8761-a31c77fd4d57.png',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Our alumnus shares his journey from BCE to Google.',
    category: 'alumni-introductions'
  },
  {
    id: '6',
    title: 'Alumni Entrepreneur Panel Discussion',
    thumbnail: '/public/lovable-uploads/e9cbb3b3-e19c-4580-b940-6dc6f071531f.png',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'BCE alumni entrepreneurs discuss building successful startups.',
    category: 'alumni-introductions'
  }
];

const VideoSection = () => {
  const [videos] = useState<Video[]>(initialVideos);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  const filteredVideos = activeCategory === "all" 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  const tabButtonVariants = {
    inactive: { scale: 1 },
    active: { 
      scale: 1.05,
      boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)",
      transition: { type: "spring", stiffness: 300 }
    },
    hover: { 
      scale: 1.03, 
      backgroundColor: "rgba(79, 70, 229, 0.1)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 rounded-full opacity-10 -translate-x-1/3 -translate-y-1/3 animate-spin-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full opacity-10 translate-x-1/3 translate-y-1/3 animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Latest Videos</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out our original content created by talented club members. We cover campus events, interviews, tutorials, and more.
          </p>
        </motion.div>

        {selectedVideo ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl mx-auto mb-12"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <iframe 
                src={`${selectedVideo.url}${isPlaying ? '?autoplay=1' : ''}`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedVideo.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedVideo.description}</p>
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="mt-4 sm:mt-0"
              >
                <Button 
                  onClick={handleCloseVideo}
                  variant="outline"
                  className="border-indigo-500 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-700 dark:hover:bg-indigo-900/30"
                >
                  Back to Videos
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="mb-8">
              <Tabs 
                defaultValue="all" 
                value={activeCategory}
                onValueChange={setActiveCategory}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-1">
                  {[
                    { value: "all", label: "All Videos" },
                    { value: "college-events", label: "College Events" },
                    { value: "faculty-introductions", label: "Faculty Introductions" },
                    { value: "alumni-introductions", label: "Alumni Introductions" }
                  ].map((tab) => (
                    <motion.div
                      key={tab.value}
                      initial="inactive"
                      animate={activeCategory === tab.value ? "active" : "inactive"}
                      whileHover="hover"
                      whileTap="tap"
                      variants={tabButtonVariants}
                      className="relative overflow-hidden rounded-md"
                    >
                      <TabsTrigger 
                        value={tab.value} 
                        className="relative z-10 w-full data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:font-medium"
                      >
                        {tab.label}
                      </TabsTrigger>
                      {activeCategory === tab.value && (
                        <motion.div 
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </TabsList>
                
                <TabsContent value={activeCategory} className="mt-6">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                  >
                    {filteredVideos.length > 0 ? filteredVideos.map((video) => (
                      <motion.div
                        key={video.id}
                        variants={item}
                        whileHover={{ 
                          y: -10,
                          transition: { duration: 0.2 }
                        }}
                        className="group"
                      >
                        <div 
                          className="cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 h-full flex flex-col transform transition-all duration-300 hover:shadow-xl"
                          onClick={() => handleVideoSelect(video)}
                        >
                          <div className="relative overflow-hidden">
                            <div className="aspect-w-16 aspect-h-9">
                              <img 
                                src={video.thumbnail} 
                                alt={video.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <motion.div 
                                whileHover={{ scale: 1.2 }}
                                className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white ml-1">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>
                              </motion.div>
                            </div>
                          </div>
                          <div className="flex flex-col flex-grow p-6 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{video.title}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 flex-grow">{video.description}</p>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="mt-4 w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-md font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                            >
                              Watch Now
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    )) : (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-3 py-8 text-center"
                      >
                        <p className="text-lg text-gray-500 dark:text-gray-400">No videos found in this category. Check back soon!</p>
                      </motion.div>
                    )}
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            >
              <Button 
                asChild
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-none px-6 py-6 h-auto"
              >
                <motion.a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                  Visit Our YouTube Channel
                </motion.a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="border-indigo-500 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-700 dark:hover:bg-indigo-900/30 px-6 py-6 h-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/activities#exclusive-series" className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                    More Videos
                  </Link>
                </motion.div>
              </Button>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
