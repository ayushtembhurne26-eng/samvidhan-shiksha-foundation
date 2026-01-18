import React from 'react'

export default function About() {
  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="rounded overflow-hidden shadow">
        <img
          src="https://images.unsplash.com/photo-1519455953755-af066f52f1ea?q=80&w=1600&auto=format&fit=crop"
          alt="Community education"
          className="w-full h-56 object-cover"
        />
      </div>

      <h1 className="text-2xl font-bold text-primary">About Us</h1>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-3">
          <p className="text-gray-700">We are a non-profit, non-political organization working for education and social awareness. Our mission is to enable individuals to learn, organise, and empower their communities.</p>
          <p className="text-gray-700">Guided by the values of the Constitution and the teachings of Dr. B. R. Ambedkar, we conduct workshops, mentorship, and digital literacy programs for youth and women.</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Education for all</li>
            <li>Equality and dignity</li>
            <li>Unity through social awareness</li>
          </ul>
        </div>
        <div className="rounded overflow-hidden shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bhimrao_Ramji_Ambedkar.jpg"
            alt="Dr. B. R. Ambedkar"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  )
}
