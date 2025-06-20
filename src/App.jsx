import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Purpose from './pages/Purpose'
import BoardMembers from './pages/BoardMembers'
import ScholarshipApplication from './pages/ScholarshipApplication'
import MembershipApplication from './pages/MembershipApplication'
import OzanSungurlu from "./pages/OzanSungurlu";
import Donation from "./pages/Donation";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/kurulus-amaci" element={<Purpose />} />
            <Route path="/kurul-uyeleri" element={<BoardMembers />} />
            <Route path="/burs-basvuru" element={<ScholarshipApplication />} />
            <Route path="/uyelik-basvuru" element={<MembershipApplication />} />
            <Route path="/ozan-sungurlu" element={<OzanSungurlu />} />
            <Route path="/donation" element={<Donation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 