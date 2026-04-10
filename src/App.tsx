import './index.css'; 
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About';
import Events from './pages/Events';
import EventsPast from './pages/EventsPast';
import GHC from './pages/GHC';
import Alumni from './pages/Alumni';
import AlumniDirectory from './pages/AlumniDirectory';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/events/upcoming" element={<Events />}/>
        <Route path="/events/past" element={<EventsPast />}/>
        <Route path="/GHC" element={<GHC />}/>
        <Route path="/alumni" element={<Alumni />}/>
        <Route path="/alumni/directory" element={<AlumniDirectory />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>    
      <Footer />
    </Router>
  )
}

export default App
