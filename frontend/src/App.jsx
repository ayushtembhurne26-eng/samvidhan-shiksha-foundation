import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import Join from './pages/Join'
import Donation from './pages/Donation'
import Media from './pages/Media'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import Dashboard from './pages/Dashboard'
import { useSelector } from 'react-redux'

export default function App() {
  const token = useSelector((s) => s.auth.token)
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/join" element={<Join />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={token ? <Dashboard /> : <Navigate to="/admin/login" replace />}
            />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}
