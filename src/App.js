import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "components/Header";
import Home from "pages/Home";
import WebServices from "pages/Services/WebDevelopment";
import UIDesignServices from "pages/Services/UIDesignServices";
import SEOService from "pages/Services/SEOService";
import AutomationService from "pages/Services/AutomationService"; 
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import OurProjects from "pages/OurProjects";
import Meeting from "components/common/Meeting";
import Footer from "components/common/Footer";
import Education from "pages/Education";
import Courses from "pages/Courses";
import ContactForm  from "pages/Contact";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <>{children}</>;
};
function App() {
  return (
    <div className="App font-urbanist">
      <Router>
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services/web" element={<WebServices />}></Route>
            <Route path="/services/ui" element={<UIDesignServices />}></Route>
            <Route path="/services/seo" element={<SEOService />}></Route>
            <Route path="/services/automation" element={<AutomationService />}></Route>
            <Route path="/projects" element={<OurProjects />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/contact" element={<ContactForm  />}></Route>
          </Routes>
        </Wrapper>
      </Router>
      <Meeting />
      <Footer />
    </div>
  );
}

export default App;
