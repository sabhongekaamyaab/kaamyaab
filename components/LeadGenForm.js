import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function LeadGenForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    github: '',
    college: '',
    year: '',
    programming_acumen: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const { data, error } = await supabase
        .from('lead_gen')
        .insert([formData])

      if (error) throw error
      setStatus('success')
      setFormData({
        name: '',
        phone: '',
        github: '',
        college: '',
        year: '',
        programming_acumen: ''
      })
    } catch (error) {
      setStatus('error')
      console.error('Error submitting form:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Join Kaamyaab</h2>
        <p className="form-description">Take the first step towards your dream career</p>
        
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label>GitHub Profile</label>
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            required
            placeholder="Enter your GitHub profile URL"
          />
        </div>

        <div className="form-group">
          <label>College Name</label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
            placeholder="Enter your college name"
          />
        </div>

        <div className="form-group">
          <label>Current Year</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Fourth Year</option>
          </select>
        </div>

        <div className="form-group">
          <label>Programming Acumen</label>
          <select
            name="programming_acumen"
            value={formData.programming_acumen}
            onChange={handleChange}
            required
          >
            <option value="">Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="submit-button"
        >
          {status === 'submitting' ? 'Submitting...' : 'Get Started'}
        </button>

        {status === 'success' && (
          <p className="success-message">Thank you for your submission! We'll be in touch soon.</p>
        )}
        {status === 'error' && (
          <p className="error-message">Something went wrong. Please try again.</p>
        )}
      </form>

      <style jsx>{`
        .form-container {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        form {
          padding: 2rem;
        }
        h2 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 0.5rem;
          margin-top: 0rem;
          padding-top: 0rem;
        }
        .form-description {
          color: #666;
          margin-bottom: 2rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
          font-weight: 500;
        }
        input, select {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #eaeaea;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        input:focus, select:focus {
          outline: none;
          border-color: #0070f3;
          box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.1);
        }
        .submit-button {
          width: 100%;
          padding: 1rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .submit-button:hover {
          background-color: #0060df;
        }
        .submit-button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        .success-message {
          margin-top: 1rem;
          padding: 1rem;
          background-color: #f0fff4;
          color: #2f855a;
          border-radius: 4px;
          text-align: center;
        }
        .error-message {
          margin-top: 1rem;
          padding: 1rem;
          background-color: #fff5f5;
          color: #c53030;
          border-radius: 4px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}