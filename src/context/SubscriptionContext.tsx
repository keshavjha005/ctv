
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from "sonner";

interface Subscriber {
  id: string;
  email: string;
  name: string;
  subscribedAt: Date;
}

interface SubscriptionContextType {
  subscribers: Subscriber[];
  subscribe: (email: string, name: string) => void;
  unsubscribe: (email: string) => void;
  isSubscribed: (email: string) => boolean;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const useSubscriptionContext = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscriptionContext must be used within a SubscriptionProvider');
  }
  return context;
};

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>(() => {
    const savedSubscribers = localStorage.getItem('subscribers');
    if (savedSubscribers) {
      return JSON.parse(savedSubscribers).map((subscriber: any) => ({
        ...subscriber,
        subscribedAt: new Date(subscriber.subscribedAt)
      }));
    }
    return [];
  });

  // Save subscribers to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('subscribers', JSON.stringify(subscribers));
  }, [subscribers]);

  const subscribe = (email: string, name: string) => {
    if (isSubscribed(email)) {
      toast.error("You are already subscribed to our notifications!");
      return;
    }
    
    const newSubscriber: Subscriber = {
      id: Date.now().toString(),
      email,
      name,
      subscribedAt: new Date()
    };
    
    setSubscribers(prev => [...prev, newSubscriber]);
    toast.success("Thank you for subscribing to our notifications!");
  };

  const unsubscribe = (email: string) => {
    setSubscribers(prev => prev.filter(subscriber => subscriber.email !== email));
    toast.success("You have been unsubscribed from our notifications.");
  };

  const isSubscribed = (email: string) => {
    return subscribers.some(subscriber => subscriber.email === email);
  };

  return (
    <SubscriptionContext.Provider value={{ subscribers, subscribe, unsubscribe, isSubscribed }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
