// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import RoomDetails from "./components/RoomDetails/RoomDetails";
import { ContactPage } from "./components/Contact/ContactPage";
import { Gallrey } from "./components/gallery/Gallrey";
// import {  motion } from "framer-motion";

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false); // Set loading to false after 3 seconds
  //   }, 8000); // Adjust the delay as needed

  //   return () => clearTimeout(timer); // Cleanup timer
  // }, []);

  return (
    <Router>
      {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/gallery" element={<Gallrey />} />
        </Routes>
    
    </Router>
  );
};

export default App;