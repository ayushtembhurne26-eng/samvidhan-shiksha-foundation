import React, { useEffect, useState } from 'react'
import api from '../lib/api'
import { useDispatch } from 'react-redux'
import { logout } from '../store/slices/authSlice'

export default function Dashboard() {
  const dispatch = useDispatch()
  const [users, setUsers] = useState([])
  const [uError, setUError] = useState('')
  const [loadingUsers, setLoadingUsers] = useState(false)

  const [evForm, setEvForm] = useState({ title: '', description: '', date: '', location: '' })
  const [evImage, setEvImage] = useState(null)
  const [evMsg, setEvMsg] = useState('')

  const loadUsers = async () => {
    try {
      setLoadingUsers(true)
      const { data } = await api.get('/api/users')
      setUsers(data)
      setUError('')
    } catch (e) {
      setUError(e?.response?.data?.message || e.message)
    } finally {
      setLoadingUsers(false)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  const approveUser = async (id) => {
    await api.patch(`/api/users/${id}/approve`)
    loadUsers()
  }

  const generateCertificate = async (id) => {
    try {
      const res = await api.post(`/api/certificates/${id}/generate`, null, { responseType: 'blob' })
      const url = window.URL.createObjectURL(new Blob([res.data], { type: 'application/pdf' }))
      const a = document.createElement('a')
      a.href = url
      a.download = `certificate-${id}.pdf`
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (e) {
      alert(e?.response?.data?.message || e.message)
    }
  }

  const submitEvent = async (e) => {
    e.preventDefault()
    try {
      const fd = new FormData()
      Object.entries(evForm).forEach(([k, v]) => fd.append(k, v))
      if (evImage) fd.append('image', evImage)
      await api.post('/api/events', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
      setEvMsg('Event created')
      setEvForm({ title: '', description: '', date: '', location: '' })
      setEvImage(null)
    } catch (e2) {
      setEvMsg(e2?.response?.data?.message || e2.message)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
        <button onClick={() => dispatch(logout())} className="text-sm text-red-700 underline">Logout</button>
      </div>

      <section className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Registered Users</h2>
        {loadingUsers && <p>Loading users...</p>}
        {uError && <p className="text-red-600 text-sm">{uError}</p>}
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Mobile</th>
                <th className="py-2 pr-4">Area</th>
                <th className="py-2 pr-4">Role</th>
                <th className="py-2 pr-4">Approved</th>
                <th className="py-2 pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u._id} className="border-b">
                  <td className="py-2 pr-4">{u.name}</td>
                  <td className="py-2 pr-4">{u.mobile}</td>
                  <td className="py-2 pr-4">{u.area}</td>
                  <td className="py-2 pr-4">{u.role}</td>
                  <td className="py-2 pr-4">{u.approved ? 'Yes' : 'No'}</td>
                  <td className="py-2 pr-4 space-x-2">
                    {!u.approved && (
                      <button onClick={() => approveUser(u._id)} className="px-2 py-1 bg-green-600 text-white rounded">Approve</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Create Event</h2>
        <form onSubmit={submitEvent} className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input className="mt-1 w-full border rounded px-3 py-2" value={evForm.title} onChange={(e)=>setEvForm({...evForm, title: e.target.value})} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Date</label>
            <input type="datetime-local" className="mt-1 w-full border rounded px-3 py-2" value={evForm.date} onChange={(e)=>setEvForm({...evForm, date: e.target.value})} required />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Description</label>
            <textarea className="mt-1 w-full border rounded px-3 py-2" rows="3" value={evForm.description} onChange={(e)=>setEvForm({...evForm, description: e.target.value})}></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input className="mt-1 w-full border rounded px-3 py-2" value={evForm.location} onChange={(e)=>setEvForm({...evForm, location: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium">Image</label>
            <input type="file" accept="image/*" className="mt-1 w-full" onChange={(e)=>setEvImage(e.target.files?.[0] || null)} />
          </div>
          <div className="md:col-span-2">
            <button className="bg-secondary text-white px-4 py-2 rounded">Create Event</button>
            {evMsg && <span className="ml-3 text-sm text-gray-700">{evMsg}</span>}
          </div>
        </form>
      </section>
    </div>
  )
}
