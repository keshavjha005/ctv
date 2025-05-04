
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EventNotification from "./EventNotification";
import { useEventContext } from "@/context/EventContext";
import CursorEffect from "./CursorEffect";
import TestimonialSection from "./TestimonialSection";

const Layout = () => {
  const { currentEvent } = useEventContext();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <CursorEffect />
      <Navbar />
      {currentEvent && <EventNotification event={currentEvent} />}
      <main className="flex-1">
        <Outlet />
      </main>
      {isHomePage && (
        <>
          <TestimonialSection />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
