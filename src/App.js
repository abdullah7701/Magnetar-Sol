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
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
