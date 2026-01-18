import React from 'react'

export default function Donation() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-primary">Support Education</h1>
      <p className="text-gray-700 max-w-2xl">Your contribution enables workshops, digital literacy, and youth guidance programs. Together, we can educate, organise, and empower.</p>

      <div className="bg-white p-6 rounded shadow flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/70/QR_code_for_mobile_English_Wikipedia.svg"
          alt="UPI QR"
          className="w-48 h-48 object-contain"
        />
        <div className="space-y-3">
          <h2 className="font-semibold text-lg">Donate via UPI</h2>
          <p className="text-sm text-gray-600">Scan the QR to contribute. For receipts or bank details, contact us on WhatsApp.</p>
          <div className="flex gap-3">
            <a href="/contact" className="bg-accent text-white px-4 py-2 rounded">Contact for Details</a>
            <a href="/join" className="bg-primary text-white px-4 py-2 rounded">Volunteer Instead</a>
          </div>
        </div>
      </div>
    </div>
  )
}
