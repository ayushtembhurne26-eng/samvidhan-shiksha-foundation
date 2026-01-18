import React from 'react'

export default function Contact() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-primary">Contact</h1>
      <p className="text-gray-700">Mobile: +91 99700 29194</p>
      <p className="text-gray-700">WhatsApp: +91 99700 29194</p>
      <p className="text-gray-700">Email: ayushtembhurne26@gmail.com</p>
      <p className="text-gray-700">Location: Nagpur</p>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold">How can we help?</h2>
        <p className="text-sm text-gray-600 mt-1">Need guidance, want to volunteer, or support an event? Reach out on WhatsApp or email and we’ll respond soon.</p>
      </div>
    </div>
  )
}
