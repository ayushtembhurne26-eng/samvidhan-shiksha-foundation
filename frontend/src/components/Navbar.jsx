import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-primary' : 'text-gray-700 hover:text-primary'}`

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-primary font-bold text-lg">Samvidhan Shiksha Foundation</span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/work" className={navLinkClass}>Our Work</NavLink>
          <NavLink to="/events" className={navLinkClass}>Events</NavLink>
          <NavLink to="/join" className={navLinkClass}>Join</NavLink>
          <NavLink to="/donation" className={navLinkClass}>Donation</NavLink>
          <NavLink to="/media" className={navLinkClass}>Media</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink to="/admin" className={navLinkClass}>Admin</NavLink>
        </nav>
      </div>
    </header>
  )
}
