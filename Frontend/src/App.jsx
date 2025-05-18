import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About/About';
import Chatbot from './Chatbot/Chatbot';
import ItineraryBoard from "./Itinerary/Itinerary"
import Map from './Map/Map';
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Destination from './Destinations/Destinations';
import Footer from './Footer/Footer'

function App() {
 

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/itinerary" element={<ItineraryBoard />} />
        <Route path="/map" element={<Map />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/destinations" element={<Destination />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
