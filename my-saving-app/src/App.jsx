import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Status from './pages/Status'
import Points from './pages/Points'
import Settings from './pages/Settings'
import './App.css'

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>홈</Link>
      <Link to="/today" className={location.pathname === '/today' ? 'active' : ''}>오늘의 저축</Link>
      <Link to="/status" className={location.pathname === '/status' ? 'active' : ''}>저축 현황</Link>
      <Link to="/points" className={location.pathname === '/points' ? 'active' : ''}>내 포인트</Link>
      <Link to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>설정</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today" element={<Today />} />
        <Route path="/status" element={<Status />} />
        <Route path="/points" element={<Points />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
