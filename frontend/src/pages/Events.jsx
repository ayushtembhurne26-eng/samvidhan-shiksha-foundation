import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchRequested } from '../store/slices/eventsSlice'

export default function Events() {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((s) => s.events)

  useEffect(() => {
    dispatch(fetchRequested())
  }, [dispatch])

  if (loading) return <p>Loading events...</p>
  if (error) return <p className="text-red-600">{error}</p>

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-primary">Events</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((ev) => {
          const img = ev.image || 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop'
          return (
          <Link key={ev._id} to={`/events/${ev._id}`} className="bg-white rounded shadow hover:shadow-md transition overflow-hidden">
            <img src={img} alt="event" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{ev.title}</h3>
              <p className="text-sm text-gray-600">{ev.description}</p>
              <p className="text-xs text-gray-500 mt-2">{new Date(ev.date).toLocaleDateString()}</p>
            </div>
          </Link>
        )})}
      </div>
    </div>
  )
}
