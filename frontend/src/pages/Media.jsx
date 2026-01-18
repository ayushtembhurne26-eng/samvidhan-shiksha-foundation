import React from 'react'

export default function Media() {
  const images = [
    // Publicly available images; if any fails to load, it will be hidden gracefully
    'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bhimrao_Ramji_Ambedkar.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5a/Dr_Bhimrao_Ambedkar.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0d/Dr._Bhimrao_Ramji_Ambedkar.jpg',
  ]

  const handleError = (e) => {
    e.currentTarget.style.display = 'none'
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-primary">Media</h1>
      <p className="text-gray-700">Moments that inspire education, equality, and unity.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="bg-white rounded shadow overflow-hidden">
            <img src={src} alt="Dr. B. R. Ambedkar" className="w-full h-56 object-cover" onError={handleError} />
            <div className="p-3 text-sm text-gray-600">Dr. B. R. Ambedkar — inspiration to learn, organize, and empower.</div>
          </div>
        ))}
      </div>
    </div>
  )
}
