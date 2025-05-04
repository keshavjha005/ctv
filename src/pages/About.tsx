
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProfileBox from "@/components/ProfileBox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <motion.div 
            className="relative mb-12 inline-block"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">About</span> Our Club
            </h1>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-600"></div>
          </motion.div>
          
          <div className="mt-12 grid gap-12 md:grid-cols-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-l-4 border-emerald-500"
            >
              <motion.h2 
                className="text-2xl font-bold text-gray-900 dark:text-gray-100"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                WE ARE THE MEDIA CLUB OF BHAGALPUR COLLEGE OF ENGINEERING
              </motion.h2>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="mt-4 space-y-4 text-gray-600 dark:text-gray-300"
              >
                <motion.p variants={item}>
                  This is the BCE Bhagalpur's official Club. The aim of the club is to showcase all the events, 
                  club activities, talents and college life at BCE Bhagalpur. It is a soul initiative of 
                  Campus TV and Radio Club (Frontiers) of Bhagalpur College Of Engineering. 
                </motion.p>
                <motion.p variants={item}>
                  Our club provides a platform for students to explore and develop skills in media 
                  production, broadcasting, content creation, and technical operation of audio-visual equipment.
                </motion.p>
                <motion.p variants={item}>
                  We produce original video series, conduct interviews with distinguished alumni, 
                  document campus events, and provide radio broadcasting services for the campus community.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Leadership Section with Profile Boxes */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Our Leadership</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-600"></div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Direction & Guidance</h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ProfileBox 
                name="Dr. OP ROY"
                role="Director"
                department="Principal, BCE Bhagalpur"
                imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
              />
              
              <ProfileBox 
                name="Prof. Shashank Shekhar"
                role="Chairperson"
                department="H.O.D. of English"
                imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
              />
              
              <ProfileBox 
                name="Dr. Jane Smith"
                role="Vice-Chairperson"
                department="Department of Media Studies"
                imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
              />
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Club Secretaries</h3>
            
            <Tabs defaultValue="2023" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="2023">2023 Batch</TabsTrigger>
                <TabsTrigger value="2022">2022 Batch</TabsTrigger>
                <TabsTrigger value="2021">2021 Batch</TabsTrigger>
                <TabsTrigger value="2020">2020 Batch</TabsTrigger>
              </TabsList>
              
              <TabsContent value="2023" className="mt-4 space-y-4">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <ProfileBox 
                    name="Priya Sharma"
                    role="Secretary"
                    batch="2023"
                    email="priya.sharma@example.com"
                    linkedinUrl="https://linkedin.com/in/priya-sharma"
                    imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
                  />
                  
                  <ProfileBox 
                    name="Rajesh Kumar"
                    role="Deputy Secretary"
                    batch="2023"
                    email="rajesh.kumar@example.com"
                    linkedinUrl="https://linkedin.com/in/rajesh-kumar"
                    imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
                  />
                  
                  <ProfileBox 
                    name="Nisha Singh"
                    role="Deputy Secretary"
                    batch="2023"
                    email="nisha.singh@example.com"
                    linkedinUrl="https://linkedin.com/in/nisha-singh"
                    imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="2022" className="mt-4 space-y-4">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <ProfileBox 
                    name="Ankit Patel"
                    role="Secretary"
                    batch="2022"
                    email="ankit.patel@example.com"
                    linkedinUrl="https://linkedin.com/in/ankit-patel"
                    imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
                  />
                  
                  <ProfileBox 
                    name="Sneha Gupta"
                    role="Deputy Secretary"
                    batch="2022"
                    email="sneha.gupta@example.com"
                    linkedinUrl="https://linkedin.com/in/sneha-gupta"
                    imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
                  />
                  
                  <ProfileBox 
                    name="Rahul Verma"
                    role="Deputy Secretary"
                    batch="2022"
                    email="rahul.verma@example.com"
                    linkedinUrl="https://linkedin.com/in/rahul-verma"
                    imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="2021" className="mt-4 space-y-4">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <ProfileBox 
                    name="lovable Jha"
                    role="Secretary"
                    batch="2021"
                    email="lovable.jha@example.com"
                    linkedinUrl="https://linkedin.com/in/lovable-jha"
                    imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
                  />
                  
                  <ProfileBox 
                    name="Aman Kumar"
                    role="Deputy Secretary"
                    batch="2021"
                    email="aman.kumar@example.com"
                    linkedinUrl="https://linkedin.com/in/aman-kumar"
                    imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
                  />
                  
                  <ProfileBox 
                    name="Anshika Singh"
                    role="Deputy Secretary"
                    batch="2021"
                    email="anshika.singh@example.com"
                    linkedinUrl="https://linkedin.com/in/anshika-singh"
                    imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="2020" className="mt-4 space-y-4">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <ProfileBox 
                    name="Vikash Singh"
                    role="Secretary"
                    batch="2020"
                    email="vikash.singh@example.com"
                    linkedinUrl="https://linkedin.com/in/vikash-singh"
                    imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
                  />
                  
                  <ProfileBox 
                    name="Meera Sharma"
                    role="Deputy Secretary"
                    batch="2020"
                    email="meera.sharma@example.com"
                    linkedinUrl="https://linkedin.com/in/meera-sharma"
                    imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
                  />
                  
                  <ProfileBox 
                    name="Rohan Gupta"
                    role="Deputy Secretary"
                    batch="2020"
                    email="rohan.gupta@example.com"
                    linkedinUrl="https://linkedin.com/in/rohan-gupta"
                    imageUrl="/public/lovable-uploads/00c7b88d-c3d3-4460-a245-30451d624675.png"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Student Leadership Tabs (Batch-wise) */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Student Leadership</h3>
            
            <Tabs defaultValue="2k23" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="2k23">Coordinators from 2k23 Batch</TabsTrigger>
                <TabsTrigger value="2k22">Coordinators from 2k22 Batch</TabsTrigger>
                <TabsTrigger value="2k21">Coordinators from 2k21 Batch</TabsTrigger>
                <TabsTrigger value="2k20">Coordinators from 2k20 Batch</TabsTrigger>
              </TabsList>
              
              <TabsContent value="2k23" className="mt-4 space-y-4">
                <motion.div 
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                >
                  {[
                    { name: "Rahul Kumar", email: "rahul.k@example.com", linkedinUrl: "https://linkedin.com/in/rahul-kumar" },
                    { name: "Priya Singh", email: "priya.s@example.com", linkedinUrl: "https://linkedin.com/in/priya-singh" },
                    { name: "Amit Sharma", email: "amit.s@example.com", linkedinUrl: "https://linkedin.com/in/amit-sharma" },
                    { name: "Neha Gupta", email: "neha.g@example.com", linkedinUrl: "https://linkedin.com/in/neha-gupta" },
                    { name: "Rajesh Verma", email: "rajesh.v@example.com", linkedinUrl: "https://linkedin.com/in/rajesh-verma" },
                    { name: "Kavita Patel", email: "kavita.p@example.com", linkedinUrl: "https://linkedin.com/in/kavita-patel" },
                    { name: "Vikash Jain", email: "vikash.j@example.com", linkedinUrl: "https://linkedin.com/in/vikash-jain" },
                    { name: "Anjali Mishra", email: "anjali.m@example.com", linkedinUrl: "https://linkedin.com/in/anjali-mishra" },
                    { name: "Ravi Tiwari", email: "ravi.t@example.com", linkedinUrl: "https://linkedin.com/in/ravi-tiwari" },
                    { name: "Meena Kumari", email: "meena.k@example.com", linkedinUrl: "https://linkedin.com/in/meena-kumari" }
                  ].map((person, index) => (
                    <motion.div key={index} variants={item}>
                      <ProfileBox 
                        name={person.name}
                        role="Coordinator"
                        batch="2023"
                        timeline="2023-2027"
                        email={person.email}
                        linkedinUrl={person.linkedinUrl}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="2k22" className="mt-4 space-y-4">
                <motion.div 
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                >
                  {[
                    { name: "Aditya Raj", email: "aditya.r@example.com", linkedinUrl: "https://linkedin.com/in/aditya-raj" },
                    { name: "Sneha Kumari", email: "sneha.k@example.com", linkedinUrl: "https://linkedin.com/in/sneha-kumari" },
                    { name: "Rohit Singh", email: "rohit.s@example.com", linkedinUrl: "https://linkedin.com/in/rohit-singh" },
                    { name: "Preeti Gupta", email: "preeti.g@example.com", linkedinUrl: "https://linkedin.com/in/preeti-gupta" },
                    { name: "Ankit Kumar", email: "ankit.k@example.com", linkedinUrl: "https://linkedin.com/in/ankit-kumar" },
                    { name: "Swati Sharma", email: "swati.s@example.com", linkedinUrl: "https://linkedin.com/in/swati-sharma" },
                    { name: "Ajay Verma", email: "ajay.v@example.com", linkedinUrl: "https://linkedin.com/in/ajay-verma" },
                    { name: "Sapna Patel", email: "sapna.p@example.com", linkedinUrl: "https://linkedin.com/in/sapna-patel" },
                    { name: "Vivek Jain", email: "vivek.j@example.com", linkedinUrl: "https://linkedin.com/in/vivek-jain" },
                    { name: "Pooja Mishra", email: "pooja.m@example.com", linkedinUrl: "https://linkedin.com/in/pooja-mishra" }
                  ].map((person, index) => (
                    <motion.div key={index} variants={item}>
                      <ProfileBox 
                        name={person.name}
                        role="Coordinator"
                        batch="2022"
                        timeline="2022-2026"
                        email={person.email}
                        linkedinUrl={person.linkedinUrl}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="2k21" className="mt-4 space-y-4">
                <motion.div 
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                >
                  {[
                    { name: "Saurav Kumar", email: "saurav.k@example.com", linkedinUrl: "https://linkedin.com/in/saurav-kumar" },
                    { name: "Riya Singh", email: "riya.s@example.com", linkedinUrl: "https://linkedin.com/in/riya-singh" },
                    { name: "Gaurav Sharma", email: "gaurav.s@example.com", linkedinUrl: "https://linkedin.com/in/gaurav-sharma" },
                    { name: "Nisha Gupta", email: "nisha.g@example.com", linkedinUrl: "https://linkedin.com/in/nisha-gupta" },
                    { name: "Sanjay Verma", email: "sanjay.v@example.com", linkedinUrl: "https://linkedin.com/in/sanjay-verma" },
                    { name: "Manisha Patel", email: "manisha.p@example.com", linkedinUrl: "https://linkedin.com/in/manisha-patel" },
                    { name: "Alok Jain", email: "alok.j@example.com", linkedinUrl: "https://linkedin.com/in/alok-jain" },
                    { name: "Divya Mishra", email: "divya.m@example.com", linkedinUrl: "https://linkedin.com/in/divya-mishra" },
                    { name: "Deepak Tiwari", email: "deepak.t@example.com", linkedinUrl: "https://linkedin.com/in/deepak-tiwari" },
                    { name: "Sangeeta Kumari", email: "sangeeta.k@example.com", linkedinUrl: "https://linkedin.com/in/sangeeta-kumari" }
                  ].map((person, index) => (
                    <motion.div key={index} variants={item}>
                      <ProfileBox 
                        name={person.name}
                        role="Coordinator"
                        batch="2021"
                        timeline="2021-2025"
                        email={person.email}
                        linkedinUrl={person.linkedinUrl}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="2k20" className="mt-4 space-y-4">
                <motion.div 
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                >
                  {[
                    { name: "Vikram Kumar", email: "vikram.k@example.com", linkedinUrl: "https://linkedin.com/in/vikram-kumar" },
                    { name: "Sonam Singh", email: "sonam.s@example.com", linkedinUrl: "https://linkedin.com/in/sonam-singh" },
                    { name: "Mohan Sharma", email: "mohan.s@example.com", linkedinUrl: "https://linkedin.com/in/mohan-sharma" },
                    { name: "Jyoti Gupta", email: "jyoti.g@example.com", linkedinUrl: "https://linkedin.com/in/jyoti-gupta" },
                    { name: "Rakesh Verma", email: "rakesh.v@example.com", linkedinUrl: "https://linkedin.com/in/rakesh-verma" },
                    { name: "Sunita Patel", email: "sunita.p@example.com", linkedinUrl: "https://linkedin.com/in/sunita-patel" },
                    { name: "Rajiv Jain", email: "rajiv.j@example.com", linkedinUrl: "https://linkedin.com/in/rajiv-jain" },
                    { name: "Mamta Mishra", email: "mamta.m@example.com", linkedinUrl: "https://linkedin.com/in/mamta-mishra" },
                    { name: "Suresh Tiwari", email: "suresh.t@example.com", linkedinUrl: "https://linkedin.com/in/suresh-tiwari" },
                    { name: "Rekha Kumari", email: "rekha.k@example.com", linkedinUrl: "https://linkedin.com/in/rekha-kumari" }
                  ].map((person, index) => (
                    <motion.div key={index} variants={item}>
                      <ProfileBox 
                        name={person.name}
                        role="Coordinator"
                        batch="2020"
                        timeline="2020-2024"
                        email={person.email}
                        linkedinUrl={person.linkedinUrl}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>

        {/* Vision Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Our Vision</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-600"></div>
          
          <motion.div 
            className="mt-8 bg-gradient-to-r from-emerald-800 to-teal-700 text-white p-8 rounded-lg shadow-lg transform"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <p className="text-white text-lg">
              We envision a vibrant campus media ecosystem where students can express their creativity,
              develop professional media skills, and document the rich tapestry of campus life at 
              BCE Bhagalpur. Our goal is to provide a platform for student voices while creating valuable
              educational resources and fostering a sense of community through our media productions.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {["Creativity", "Education", "Documentation", "Innovation", "Community"].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <span className="text-white font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
