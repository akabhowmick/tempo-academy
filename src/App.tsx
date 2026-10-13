import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import Pricing from "@/pages/Pricing";
import Schedule from "@/pages/Schedule";
import About from "@/pages/About";
import TeamMember from "@/pages/TeamMember";
import Gallery from "@/pages/Gallery";
import GalleryCategory from "@/pages/GalleryCategory";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import Thanks from "@/pages/Thanks";
import Privacy from "@/pages/Privacy";
import Accessibility from "@/pages/Accessibility";
import Terms from "@/pages/Terms";
import Nondiscrimination from "@/pages/Nondiscrimination";
import TextMessaging from "@/pages/TextMessaging";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:slug" element={<TeamMember />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:slug" element={<GalleryCategory />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/nondiscrimination" element={<Nondiscrimination />} />
        <Route path="/text-messaging" element={<TextMessaging />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
