import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../lib/api'

export default function EventDetail() {
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true
    api.get(`/api/events/${id}`)
      .then(res => { if (mounted) setEvent(res.data) })
      .catch(e => setError(e?.response?.data?.message || e.message))
    return () => { mounted = false }
  }, [id])

  if (error) return <p className="text-red-600">{error}</p>
  if (!event) return <p>Loading...</p>

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-primary">{event.title}</h1>
      {event.image && <img src={event.image} alt="event" className="w-full max-h-96 object-cover rounded" />}
      <p className="text-gray-700">{event.description}</p>
      <p className="text-sm text-gray-600">Date: {new Date(event.date).toLocaleString()}</p>
      <p className="text-sm text-gray-600">Location: {event.location || 'TBA'}</p>
    </div>
  )
}
