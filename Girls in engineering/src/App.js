import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Community from "./Pages/Community";
import Resources from "./Pages/Resources";
import Contact from "./Pages/Contact";
import "./index.css";

const App = () => {
return (
<>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/community" element={<Community />} />
<Route path="/resources" element={<Resources />} />
<Route path="/contact" element={<Contact />} />
</Routes>
<Footer />
</>
);
};

export default App;