import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginRequested } from '../store/slices/authSlice'
import { Navigate } from 'react-router-dom'

export default function AdminLogin() {
  const dispatch = useDispatch()
  const { token, loading, error } = useSelector((s) => s.auth)
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')

  if (token) return <Navigate to="/admin" replace />

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(loginRequested({ mobile, password }))
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold text-primary mb-4">Admin Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Mobile</label>
          <input className="mt-1 w-full border rounded px-3 py-2" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input type="password" className="mt-1 w-full border rounded px-3 py-2" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button disabled={loading} className="bg-primary text-white px-4 py-2 rounded">{loading ? 'Signing in...' : 'Login'}</button>
      </form>
    </div>
  )
}
