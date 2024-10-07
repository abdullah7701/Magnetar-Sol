import Header from "components/Header";
import Home from "pages/Home";
import Services from "pages/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App font-urbanist">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
