
import React, { useState, useEffect } from 'react';
import { useEventContext } from '../context/EventContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, FileTextIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Calendar } from "@/components/ui/calendar";

const Events = () => {
  const { events, fetchEvents } = useEventContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Additional events for the events section
  const additionalEvents = [
    {
      id: "event-1",
      title: "Photography Workshop",
      date: "2025-05-15",
      description: "Learn advanced photography techniques from industry experts",
      location: "Media Lab, Block B",
      time: "2:00 PM"
    },
    {
      id: "event-2",
      title: "Radio Broadcasting Competition",
      date: "2025-05-20",
      description: "Show your talent in live radio broadcasting",
      location: "Studio Room, Main Building",
      time: "10:00 AM"
    },
    {
      id: "event-3",
      title: "Campus Film Festival",
      date: "2025-06-10",
      description: "Annual film festival showcasing student productions",
      location: "College Auditorium",
      time: "5:00 PM"
    }
  ];

  // Combine with existing events
  const allEvents = [...events, ...additionalEvents];

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        await fetchEvents();
      } catch (e: any) {
        setError(e.message || 'Failed to load events');
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, [fetchEvents]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  };

  // Function to open PDF notices
  const openPdfNotice = (eventId: string) => {
    // In a real app, this would open the actual PDF
    alert(`Opening event ${eventId} notice in PDF!`);
    // window.open(`/notices/event-${eventId}.pdf`, "_blank");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
          className="w-12 h-12 rounded-full border-4 border-t-emerald-500 border-emerald-200"
        ></motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-red-100 dark:bg-red-900/30 p-6 rounded-lg max-w-md"
          >
            <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Error</h2>
            <p className="text-gray-700 dark:text-gray-300">{error}</p>
            <Button 
              className="mt-4 bg-emerald-500 hover:bg-emerald-600"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Upcoming Events</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto"></div>
      </motion.div>

      {/* Events Calendar Section */}
      <section className="bg-emerald-50 dark:bg-emerald-900/20 py-16 mb-16 rounded-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Events Calendar</h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay up to date with our upcoming events and revisit our past activities
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="pointer-events-auto mx-auto"
              initialFocus
            />
            <div className="mt-4 pt-4 border-t border-dashed border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Club Events</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-teal-400"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Workshops</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* More Upcoming Events Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-emerald-700 dark:text-emerald-400">More Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {additionalEvents.map(event => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                <div className="h-2 bg-gradient-to-r from-teal-400 to-emerald-500"></div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-emerald-700 dark:text-emerald-400">{event.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {format(new Date(event.date), "MMMM dd, yyyy")} • {event.time}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{event.description}</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-500 font-medium mb-3">
                    {event.location}
                  </p>
                  <div className="flex justify-end">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs flex items-center gap-1 border-emerald-500 text-emerald-700 hover:bg-emerald-50"
                      onClick={() => openPdfNotice(event.id)}
                    >
                      <FileTextIcon className="h-3 w-3" />
                      View Notice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Regular Events List */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {events.map(event => (
          <motion.div key={event.id} variants={item}>
            <Card className="h-full bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-200 dark:border-emerald-800 overflow-hidden">
              <CardHeader className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border-b border-emerald-100 dark:border-emerald-800">
                <CardTitle className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">{event.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 line-clamp-2">{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center mb-2 text-emerald-700 dark:text-emerald-300">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">{format(new Date(event.date), 'MMMM dd, yyyy')}</span>
                </div>
                <div className="flex items-center mb-2 text-emerald-700 dark:text-emerald-300">
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-dashed border-emerald-100 dark:border-emerald-800">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Time: {event.time}</span>
                  <div className="flex gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs flex items-center gap-1 border-emerald-500 text-emerald-700 hover:bg-emerald-50"
                        onClick={() => openPdfNotice(event.id)}
                      >
                        <FileTextIcon className="h-3 w-3" />
                        Notice
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button asChild variant="default" size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs">
                        <Link to={`/events/${event.id}`}>Details</Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Events;
