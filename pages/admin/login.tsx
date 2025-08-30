import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })
      
      if (!res.ok) throw new Error('Invalid credentials')
      
      const { token } = await res.json()
      localStorage.setItem('adminToken', token)
      router.push('/admin')
    } catch (error) {
      setError('Invalid email or password')
    }
  }

  return (
    <Layout>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Admin Login</h1>
          {error && <div className="error">{error}</div>}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={credentials.email}
              onChange={e => setCredentials({...credentials, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={e => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>

        <style jsx>{`
          .login-container {
            max-width: 400px;
            margin: 4rem auto;
            padding: 2rem;
          }
          .login-form {
            background: #fff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .form-group {
            margin-bottom: 1rem;
          }
          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
          }
          .form-group input {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ddd;
            border-radius: 4px;
          }
          .error {
            color: red;
            margin-bottom: 1rem;
          }
          button {
            width: 100%;
            padding: 0.75rem;
            background: #0E4714;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
        `}</style>
      </div>
    </Layout>
  )
}