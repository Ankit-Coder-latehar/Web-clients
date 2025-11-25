import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Ppc from "./Pages/Ppc";
import Seo from "./Pages/Seo";
import WebDesignHero from "./components/WebDesign/Herosect";
import Web from "./Pages/web";
import Solutions from "./Pages/Solutions";
import Industry from "./Pages/Industry";
import Education from "./Pages/Education";


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ppc" element={<Ppc />} />
            <Route path="/seo" element={<Seo/>} />
            <Route path="/webdesign" element={<Web/>} />
            <Route path="/solutions" element={<Solutions/>} />
            <Route path="/industry" element={<Industry/>} />
            <Route path="/education" element={<Education/>} />







             
          </Routes>
        </main>
      </div>
    </Router>
  );
}

