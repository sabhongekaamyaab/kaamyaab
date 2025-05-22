import { useState } from 'react'

export default function LeadGenForm() {
  const [userType, setUserType] = useState('student')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    // Student fields
    github: '',
    college: '',
    year: '',
    programming_acumen: '',
    // College fields
    highest_package: '',
    average_package: '',
    placement_percentage: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/lead-gen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userType,
          formData
        }),
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.message)

      setStatus('success')
      setFormData({
        name: '',
        phone: '',
        college: '',
        github: '',
        year: '',
        programming_acumen: '',
        highest_package: '',
        average_package: '',
        placement_percentage: ''
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
      <div className="toggle-container">
        <p>You're a</p>
        <button
          className={`toggle-button ${userType === 'student' ? 'active' : ''}`}
          onClick={() => setUserType('student')}
          type="button"
        >
          Student
        </button>
        <button
          className={`toggle-button ${userType === 'college' ? 'active' : ''}`}
          onClick={() => setUserType('college')}
          type="button"
        >
          College
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* <h2>Join Kaamyaab</h2>
        <p className="form-description">
          {userType === 'student' 
            ? 'Take the first step towards your dream career'
            : 'Partner with us to transform your institutes tech education'
          }
        </p> */}
        
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={`Enter your full name`}
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

        {userType === 'student' ? (
          <>
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
          </>
        ) : (
          <>
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
              <label>Highest Package (LPA)</label>
              <input
                type="number"
                name="highest_package"
                value={formData.highest_package}
                onChange={handleChange}
                required
                placeholder="Enter highest package offered"
                min="0"
                step="0.1"
              />
            </div>

            <div className="form-group">
              <label>Average Package (LPA)</label>
              <input
                type="number"
                name="average_package"
                value={formData.average_package}
                onChange={handleChange}
                required
                placeholder="Enter average package offered"
                min="0"
                step="0.1"
              />
            </div>

            <div className="form-group">
              <label>Placement Percentage</label>
              <input
                type="number"
                name="placement_percentage"
                value={formData.placement_percentage}
                onChange={handleChange}
                required
                placeholder="Enter placement percentage"
                min="0"
                max="100"
                step="1"
              />
            </div>
          </>
        )}

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
          border-color: #FF3131;
          box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.1);
        }
        .submit-button {
          width: 100%;
          padding: 1rem;
          background-color: #FF3131;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .submit-button:hover {
          background-color: #FF3131;
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
        .toggle-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          padding: 1rem;
          background: #f7f7f7;
          border-radius: 8px 8px 0 0;
        }

        .toggle-button {
          padding: 0.5rem 1.5rem;
          border: 1px solid #eaeaea;
          background: white;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          color: #666;
        }

        .toggle-button.active {
          background: #FF3131;
          color: white;
          border-color: #FF3131;
        }

        .toggle-button:hover:not(.active) {
          border-color: #FF3131;
          color: #FF3131;
        }
      `}</style>
    </div>
  )
}
