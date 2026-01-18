import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section
        className="rounded-lg shadow overflow-hidden relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1509098681029-b45e9c845022?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black/50">
          <div className="container py-16 text-white">
            <h1 className="text-3xl md:text-4xl font-extrabold">Educate. Organise. Empower.</h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-gray-200">“I measure the progress of a community by the degree of progress which women have achieved.” – Dr. B. R. Ambedkar</p>
            <div className="mt-6 flex gap-3">
              <Link to="/join" className="inline-block bg-accent text-white px-5 py-2 rounded font-medium">Join as Volunteer</Link>
              <Link to="/donation" className="inline-block bg-white text-primary px-5 py-2 rounded font-medium">Support Education</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded shadow text-center">
          <div className="text-3xl font-bold text-primary">100+</div>
          <div className="text-sm text-gray-600">Volunteers mobilized</div>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <div className="text-3xl font-bold text-primary">50+</div>
          <div className="text-sm text-gray-600">Workshops & events</div>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <div className="text-3xl font-bold text-primary">5000+</div>
          <div className="text-sm text-gray-600">People reached</div>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold text-lg">Objective</h3>
          <p className="text-sm text-gray-600">Education, equality, and social awareness through community action.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold text-lg">Upcoming Events</h3>
          <p className="text-sm text-gray-600">See what’s happening next in your area.</p>
          <Link to="/events" className="text-secondary text-sm">View events →</Link>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold text-lg">Volunteer</h3>
          <p className="text-sm text-gray-600">Be part of a non-profit, non-political initiative.</p>
          <Link to="/join" className="text-secondary text-sm">Register →</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-700">“I found purpose teaching digital literacy to women in my area.”</p>
          <div className="mt-2 text-sm font-semibold">— Neha, Volunteer</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-700">“The workshops changed how I see my future.”</p>
          <div className="mt-2 text-sm font-semibold">— Rahul, Student</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-700">“Transparent, driven, and community-first.”</p>
          <div className="mt-2 text-sm font-semibold">— Community Partner</div>
        </div>
      </section>
    </div>
  )
}
