import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "components/Header";
import Home from "pages/Home";
import WebServices from "pages/Services/WebDevelopment";
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
            <Route path="/projects" element={<OurProjects />}></Route>
          </Routes>
        </Wrapper>
      </Router>
      <Meeting />
      <Footer />
    </div>
  );
}

export default App;
