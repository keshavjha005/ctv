
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Activities from "./pages/Activities";
import Events from "./pages/Events";
import StudyMaterial from "./pages/StudyMaterial";
import Contact from "./pages/Contact";
import SemesterContent from "./pages/SemesterContent";
import NotFound from "./pages/NotFound";
import { EventProvider } from "./context/EventContext";
import { SubscriptionProvider } from "./context/SubscriptionContext";
import { ThemeProvider } from "./hooks/use-theme";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <EventProvider>
          <SubscriptionProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="gallery" element={<Gallery />} />
                  <Route path="activities" element={<Activities />} />
                  <Route path="events" element={<Events />} />
                  <Route path="study-material" element={<StudyMaterial />} />
                  <Route path="study-material/:semester" element={<SemesterContent />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SubscriptionProvider>
        </EventProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
