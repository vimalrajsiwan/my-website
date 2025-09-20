import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./component/Header";
import Footer from "./component/Footer";
import PageNotFound from "./pages/PageNotFound";
import logo from "./logo.svg";

import "./App.css";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Wildcard Route for 404 */}
        <Route path="*" element={<PageNotFound />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
