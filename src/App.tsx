import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Ensure this file exists
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import RoomDetails from "./components/RoomDetails/RoomDetails";
import { ContactPage } from "./components/Contact/ContactPage";
import { Gallrey } from "./components/gallery/Gallrey";
// import Example from "./a";

const App = () => {
  return (
    <Router>
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



