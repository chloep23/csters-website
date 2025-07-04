import './index.css'; 
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About';
import Events from './pages/Events';
import GHC from './pages/GHC';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/GHC" element={<GHC />}/>
        <Route path="/alumni" element={<Alumni />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  )
}

export default App
