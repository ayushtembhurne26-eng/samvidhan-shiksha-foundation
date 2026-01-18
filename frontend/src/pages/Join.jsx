import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitRequested, resetStatus } from '../store/slices/joinSlice'

export default function Join() {
  const dispatch = useDispatch()
  const { loading, error, success, user } = useSelector((s) => s.join)
  const [form, setForm] = useState({ name: '', mobile: '', area: '', role: 'Volunteer' })
  const apiBase = import.meta.env.VITE_API_BASE || 'http://localhost:5000'
  const certLink = useMemo(() => (user ? `${apiBase}/api/certificates/${user._id}/generate` : ''), [user, apiBase])

  useEffect(() => () => { dispatch(resetStatus()) }, [dispatch])

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(submitRequested(form))
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold text-primary mb-4">Join / Volunteer</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" value={form.name} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Mobile</label>
          <input name="mobile" value={form.mobile} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Area</label>
          <input name="area" value={form.area} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Role</label>
          <select name="role" value={form.role} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2">
            <option>Volunteer</option>
            <option>Student</option>
            <option>Supporter</option>
          </select>
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        {success && <p className="text-green-700 text-sm">Thank you! You have successfully joined.</p>}
        <div className="flex items-center gap-3">
          <button disabled={loading} className="bg-secondary text-white px-4 py-2 rounded">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          {success && user && (
            <a href={certLink} target="_blank" rel="noreferrer" className="text-sm underline text-primary">Download Certificate</a>
          )}
        </div>
      </form>
    </div>
  )
}
