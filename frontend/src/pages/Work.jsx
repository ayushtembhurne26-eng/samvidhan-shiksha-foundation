import React from 'react'

export default function Work() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-primary">Our Work</h1>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Education programs</li>
        <li>Youth guidance</li>
        <li>Digital literacy</li>
      </ul>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow overflow-hidden">
          <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop" alt="Workshop" className="w-full h-44 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold">Community Workshops</h3>
            <p className="text-sm text-gray-600">Weekly learning circles for students and volunteers.</p>
          </div>
        </div>
        <div className="bg-white rounded shadow overflow-hidden">
          <img src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop" alt="Digital" className="w-full h-44 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold">Digital Literacy</h3>
            <p className="text-sm text-gray-600">Hands-on sessions to build 21st-century skills.</p>
          </div>
        </div>
        <div className="bg-white rounded shadow overflow-hidden">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop" alt="Mentorship" className="w-full h-44 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold">Youth Mentorship</h3>
            <p className="text-sm text-gray-600">Guidance and support for careers and education.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
