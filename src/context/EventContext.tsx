
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from "sonner";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  isActive: boolean;
  location: string; // Added location property
  time: string;    // Added time property
}

interface EventContextType {
  events: Event[];
  currentEvent: Event | null;
  addEvent: (event: Omit<Event, 'id'>) => void;
  updateEvent: (id: string, event: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
  fetchEvents: () => Promise<void>; // Added fetchEvents method
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>(() => {
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      return JSON.parse(savedEvents).map((event: any) => ({
        ...event,
        date: new Date(event.date)
      }));
    }
    return [
      {
        id: '1',
        title: 'Annual Tech Fest 2025',
        description: 'Join us for the annual tech fest with exciting competitions, workshops, and talks.',
        date: new Date(2025, 4, 15), // May 15, 2025
        location: 'University Main Hall',
        time: '10:00 AM - 5:00 PM',
        isActive: true
      }
    ];
  });

  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);

  // Save events to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
    
    // Set current event based on date
    const now = new Date();
    const activeEvents = events.filter(event => 
      event.isActive && new Date(event.date) >= now
    );
    
    if (activeEvents.length > 0) {
      // Sort by date (closest first)
      activeEvents.sort((a, b) => 
        new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      setCurrentEvent(activeEvents[0]);
    } else {
      setCurrentEvent(null);
    }
  }, [events]);

  const fetchEvents = async (): Promise<void> => {
    // In a real application, this would be an API call
    // For now, we'll just use the events from localStorage
    return Promise.resolve();
  };

  const addEvent = (event: Omit<Event, 'id'>) => {
    const newEvent = {
      ...event,
      id: Date.now().toString()
    };
    setEvents(prev => [...prev, newEvent]);
    toast.success("Event added successfully!");
  };

  const updateEvent = (id: string, updatedEvent: Partial<Event>) => {
    setEvents(prev => 
      prev.map(event => event.id === id ? { ...event, ...updatedEvent } : event)
    );
    toast.success("Event updated successfully!");
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(event => event.id !== id));
    toast.success("Event deleted successfully!");
  };

  return (
    <EventContext.Provider value={{ events, currentEvent, addEvent, updateEvent, deleteEvent, fetchEvents }}>
      {children}
    </EventContext.Provider>
  );
};
