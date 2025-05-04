
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Event } from "@/context/EventContext";
import { format } from "date-fns";

interface EventNotificationProps {
  event: Event;
}

const EventNotification = ({ event }: EventNotificationProps) => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // If there's a new event and it wasn't dismissed
    if (event && !dismissed) {
      // Delay showing the notification for a better UX
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [event, dismissed]);

  if (dismissed || !show) return null;

  const formattedDate = format(new Date(event.date), "MMMM dd, yyyy");

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md animate-slideUp rounded-lg bg-white p-4 shadow-lg sm:bottom-6 sm:right-6 sm:max-w-lg">
      <div className="flex items-start justify-between">
        <div className="flex-shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-club-primary text-white">
            📣
          </div>
        </div>
        <div className="ml-3 w-0 flex-1">
          <p className="text-sm font-medium text-gray-900">Upcoming Event: {event.title}</p>
          <p className="mt-1 text-sm text-gray-500">{event.description}</p>
          <p className="mt-1 text-xs font-semibold text-gray-700">📅 {formattedDate}</p>
          <div className="mt-2">
            <Button 
              variant="outline" 
              className="mr-2 text-xs"
              onClick={() => window.location.href = "/events"}
            >
              View Details
            </Button>
          </div>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <Button
            variant="ghost"
            size="icon"
            className="inline-flex text-gray-400 hover:text-gray-500"
            onClick={() => setDismissed(true)}
          >
            <span className="sr-only">Close</span>
            <X className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventNotification;
