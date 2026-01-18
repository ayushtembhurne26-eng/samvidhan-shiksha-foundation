import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-8">
      <div className="container py-6 text-sm text-gray-600">
        <p>“This is a non-profit, non-political organization working for education and social awareness.”</p>
        <p className="mt-2">© {new Date().getFullYear()} Samvidhan Shiksha Foundation</p>
      </div>
    </footer>
  )
}
