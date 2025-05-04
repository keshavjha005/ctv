
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Define activities
const activities = [
  {
    id: "a1",
    title: "Video Production",
    image: "/public/lovable-uploads/e36423e3-96f0-449f-a01f-01d4364ed53f.png",
    description: "Creating original content for our YouTube channel including campus news, event coverage, interviews, and educational videos.",
    skills: ["Video shooting", "Editing", "Direction", "Scriptwriting"]
  },
  {
    id: "a2",
    title: "Radio Broadcasting",
    image: "/public/lovable-uploads/f24e78e1-ea67-467d-ba71-d53eb881bb8a.png",
    description: "Producing radio content including music shows, interviews, campus news bulletins, and educational programming.",
    skills: ["Voice modulation", "Sound editing", "Script preparation", "Live broadcasting"]
  },
  {
    id: "a3",
    title: "Photography",
    image: "/public/lovable-uploads/63f69d7c-2626-40b1-8b74-318f48ac82a9.png",
    description: "Documenting campus events, creating photo essays, and developing skills in various photography styles.",
    skills: ["Composition", "Lighting", "Post-processing", "Event photography"]
  },
  {
    id: "a4",
    title: "Workshop Sessions",
    image: "/public/lovable-uploads/bd1d6c22-6b93-4787-a9c2-9b409a4ef859.png",
    description: "Regular skill development workshops for members on various aspects of media production.",
    skills: ["Peer learning", "Hands-on training", "Industry exposure", "Technical skills"]
  },
  {
    id: "a5",
    title: "Content Creation",
    image: "/public/lovable-uploads/b9ae19f3-25e0-47b1-990d-4e3185771e2b.png",
    description: "Designing posters, digital content, website materials, and social media posts for club activities.",
    skills: ["Graphic design", "Social media management", "Content strategy", "Visual aesthetics"]
  },
  {
    id: "a6",
    title: "Study Material Compilation",
    image: "/public/lovable-uploads/4ecea806-3515-4970-9158-058fc327647f.png",
    description: "Collecting, organizing, and distributing study materials, notes, and question papers for all courses and semesters.",
    skills: ["Resource management", "Digital archiving", "Content categorization", "Educational resource development"]
  }
];

// Define sessions for juniors
const sessions = [
  {
    id: "s1",
    title: "Induction Session",
    image: "/public/lovable-uploads/56a6e27f-b407-4c4e-a0e5-74b8131ffa3c.png",
    description: "An introduction session for juniors to get familiar with the club."
  },
  {
    id: "s2",
    title: "Video Editing",
    image: "/public/lovable-uploads/e36423e3-96f0-449f-a01f-01d4364ed53f.png",
    description: "A workshop was organised to teach about the video editing and get started with the Adobe Premiere Pro."
  },
  {
    id: "s3",
    title: "Graphic Design",
    image: "/public/lovable-uploads/a9be672f-0601-4b08-a117-9c6182bdf2b2.png",
    description: "An online Session was conducted to teach about Graphic Designing."
  }
];

// Define series content with expanded videos matching the home page style
const seriesVideos = {
  "all": [
    {
      id: "sc1",
      title: "दर्पण Series - Prof. Sharma Interview",
      image: "/public/lovable-uploads/4a22c3da-f665-48a5-9412-d74cad53a2af.png",
      description: "An in-depth interview with Professor Sharma about academic excellence and career guidance for students.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "darpan"
    },
    {
      id: "sc2",
      title: "MANTRAS - Study Techniques",
      image: "/public/lovable-uploads/67b9f2c9-24c8-4ef6-af8a-d29631323bb5.png",
      description: "Effective study techniques and memory hacks for academic success shared by toppers.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "mantras"
    },
    {
      id: "sc3",
      title: "Alumni Interview - Rohit at Microsoft",
      image: "/public/lovable-uploads/39c2b856-3a97-464e-aeb1-7f6cef8b691d.png",
      description: "Our alumnus Rohit shares his journey from BCE to becoming a senior engineer at Microsoft.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "alumni"
    },
    {
      id: "sc4",
      title: "दर्पण Series - Dean's Vision",
      image: "/public/lovable-uploads/4ecea806-3515-4970-9158-058fc327647f.png",
      description: "The Dean of Engineering shares his vision for the future of technical education at BCE.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "darpan"
    },
    {
      id: "sc5",
      title: "MANTRAS - Time Management",
      image: "/public/lovable-uploads/b9ae19f3-25e0-47b1-990d-4e3185771e2b.png",
      description: "Learn effective time management techniques to balance academics, extracurricular activities, and personal life.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "mantras"
    },
    {
      id: "sc6",
      title: "Alumni Interview - Startup Founder",
      image: "/public/lovable-uploads/e9cbb3b3-e19c-4580-b940-6dc6f071531f.png",
      description: "An inspiring conversation with our alumnus who founded a successful tech startup after graduation.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "alumni"
    }
  ],
  "darpan": [
    {
      id: "sc1",
      title: "दर्पण Series - Prof. Sharma Interview",
      image: "/public/lovable-uploads/4a22c3da-f665-48a5-9412-d74cad53a2af.png",
      description: "An in-depth interview with Professor Sharma about academic excellence and career guidance for students.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "darpan"
    },
    {
      id: "sc4",
      title: "दर्पण Series - Dean's Vision",
      image: "/public/lovable-uploads/4ecea806-3515-4970-9158-058fc327647f.png",
      description: "The Dean of Engineering shares his vision for the future of technical education at BCE.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "darpan"
    }
  ],
  "mantras": [
    {
      id: "sc2",
      title: "MANTRAS - Study Techniques",
      image: "/public/lovable-uploads/67b9f2c9-24c8-4ef6-af8a-d29631323bb5.png",
      description: "Effective study techniques and memory hacks for academic success shared by toppers.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "mantras"
    },
    {
      id: "sc5",
      title: "MANTRAS - Time Management",
      image: "/public/lovable-uploads/b9ae19f3-25e0-47b1-990d-4e3185771e2b.png",
      description: "Learn effective time management techniques to balance academics, extracurricular activities, and personal life.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "mantras"
    }
  ],
  "alumni": [
    {
      id: "sc3",
      title: "Alumni Interview - Rohit at Microsoft",
      image: "/public/lovable-uploads/39c2b856-3a97-464e-aeb1-7f6cef8b691d.png",
      description: "Our alumnus Rohit shares his journey from BCE to becoming a senior engineer at Microsoft.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "alumni"
    },
    {
      id: "sc6",
      title: "Alumni Interview - Startup Founder",
      image: "/public/lovable-uploads/e9cbb3b3-e19c-4580-b940-6dc6f071531f.png",
      description: "An inspiring conversation with our alumnus who founded a successful tech startup after graduation.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "alumni"
    }
  ]
};

const Activities = () => {
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  
  const handleVideoSelect = (video: any) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };
  
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
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Activities Heading */}
        <div className="mb-12 text-center">
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Club Activities
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore the various activities and initiatives run by our club members.
          </motion.p>
        </div>

        {/* Vision Section - Similar to About Club */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="p-8 sm:p-12">
              <div className="max-w-4xl mx-auto">
                <motion.h2 
                  className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our Vision
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="font-semibold block text-blue-800 dark:text-blue-300 mb-4"
                    >
                      WE ARE THE MEDIA CLUB OF BHAGALPUR COLLEGE OF ENGINEERING
                    </motion.span>
                    
                    This is the BCE Bhagalpur's official Club. The aim of the club is to showcase all the events, club activities, talents and college life at BCE Bhagalpur. It is a soul initiative of Campus TV and Radio Club (Frontiers) of Bhagalpur College Of Engineering.
                  </p>
                  
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Our club provides a platform for students to explore and develop skills in media production, broadcasting, content creation, and technical operation of audio-visual equipment.
                  </p>
                  
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    We produce original video series, conduct interviews with distinguished alumni, document campus events, and provide radio broadcasting services for the campus community.
                  </p>
                  
                  <div className="mt-8 flex items-center justify-center">
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block text-2xl md:text-3xl font-bold mb-2 px-4 py-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600"
                        animate={{
                          textShadow: [
                            "0 0 5px rgba(56, 189, 248, 0.3)",
                            "0 0 20px rgba(56, 189, 248, 0.5)",
                            "0 0 5px rgba(56, 189, 248, 0.3)"
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        DISCOVER · DEVELOP · DOMINATE
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Activities */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Core Activities</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  transition: { type: "spring", stiffness: 300 }
                }}
                animate={{ 
                  y: [0, -10, 0], 
                  transition: { 
                    repeat: Infinity, 
                    duration: 4 + index * 0.5, 
                    ease: "easeInOut" 
                  } 
                }}
              >
                <Card className="overflow-hidden transition-all duration-500 hover:shadow-xl bg-gradient-to-b from-white to-blue-50">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-blue-900">{activity.title}</h3>
                    <p className="mb-4 text-gray-600">{activity.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {activity.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sessions for Juniors */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Sessions for Juniors</h2>
          <p className="mb-6 text-gray-600">Workshops are regularly organised by the club for the new comers to learn about Photo editing, Video Editing, Graphic Design, and many more.</p>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {sessions.map((session) => (
              <motion.div
                key={session.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Card className="overflow-hidden transition-all hover:shadow-xl bg-gradient-to-b from-white to-blue-50">
                  <div className="aspect-video overflow-hidden">
                    <motion.img 
                      src={session.image} 
                      alt={session.title} 
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-blue-900">{session.title}</h3>
                    <p className="text-gray-600">{session.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Exclusive Series - Now formatted like the Video Section from home */}
        <div id="exclusive-series" className="relative py-16 overflow-hidden bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl mb-20">
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Exclusive Series</h2>
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
                        { value: "darpan", label: "दर्पण Series" },
                        { value: "mantras", label: "MANTRAS" },
                        { value: "alumni", label: "Alumni Series" }
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
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                      >
                        {seriesVideos[activeCategory as keyof typeof seriesVideos].map((video) => (
                          <motion.div
                            key={video.id}
                            variants={itemVariants}
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
                                    src={video.image} 
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
                        ))}
                      </motion.div>
                    </TabsContent>
                  </Tabs>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-center mt-10"
                >
                  <motion.a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-none px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15 5-3-5-3z" />
                      </svg>
                      Visit Our YouTube Channel
                    </div>
                  </motion.a>
                </motion.div>
              </>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 p-8 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Interested in joining our club?</h2>
            <p className="mt-4 text-lg opacity-90">
              We're always looking for passionate students to join our team. Whether you're interested in 
              video production, radio broadcasting, photography, or content creation, there's a place for you!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="mt-6 bg-white text-blue-700 hover:bg-blue-50">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
