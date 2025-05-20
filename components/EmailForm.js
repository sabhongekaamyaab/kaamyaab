import { useState } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setEmail('')
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="email-form">
      <h2>Stay updated</h2>
      <p>Subscribe to our newsletter to get the latest updates.</p>
      
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      
      {status === 'success' && (
        <p className="success-message">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="error-message">Something went wrong. Please try again.</p>
      )}
      
      <style jsx>{`
        .email-form {
          background-color: #f9f9f9;
          padding: 2rem;
          border-radius: 8px;
          margin: 2rem 0;
        }
        form {
          display: flex;
          margin: 1rem 0;
        }
        input {
          flex: 1;
          padding: 0.8rem;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
        }
        button {
          padding: 0.8rem 1.5rem;
          background-color: #FF3131;
          color: white;
          font-size: 1rem;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #FF3131;
        }
        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        .success-message {
          color: green;
          margin-top: 1rem;
        }
        .error-message {
          color: red;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  )
}