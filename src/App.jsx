import './App.css'
import Navbar from './component/Navbar'
import ContactUs from './pages/ContactUs'
import './index.css'
import HomePage from './component/HomeOne'
import Footer from './component/Footer'
import AboutPage from './pages/About'
import ServicesPage from './pages/service'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>

      
      <Navbar />
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      {/* <HomePage/> */}
      {/* <ContactUs></ContactUs> */}
      <Footer/>
      </Router>
    </>
  )
}

export default App
