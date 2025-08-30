import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

interface GateFormData {
  email: string
  name: string
  linkedinId?: string
}

interface FormErrors {
  email?: string
  name?: string
  linkedinId?: string
}

interface GatedContentProps {
  children: React.ReactNode
  pageId: string
}

export default function GatedContent({ children, pageId }: GatedContentProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [formData, setFormData] = useState<GateFormData>({
    email: '',
    name: '',
    linkedinId: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // LinkedIn URL validation (optional)
    if (formData.linkedinId) {
      const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/
      if (!linkedinRegex.test(formData.linkedinId)) {
        newErrors.linkedinId = 'Please enter a valid LinkedIn URL'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/gate-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          pageId
        }),
      })

      if (response.ok) {
        sessionStorage.setItem(`gated_${pageId}`, 'true')
        setIsAuthenticated(true)
      } else {
        const data = await response.json()
        setErrors({ email: data.message })
      }
    } catch (error) {
      setErrors({ email: 'An error occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  useEffect(() => {
    const hasAccess = sessionStorage.getItem(`gated_${pageId}`)
    if (hasAccess) {
      setIsAuthenticated(true)
    }
  }, [pageId])

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="gate-form-container">
      <form onSubmit={handleSubmit} className="gate-form" noValidate>
        <h2>Access This Content</h2>
        <p>Please provide your details to view this content</p>
        
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
            required
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            required
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="linkedinId">LinkedIn Profile URL (optional)</label>
          <input
            type="url"
            id="linkedinId"
            name="linkedinId"
            value={formData.linkedinId}
            onChange={handleChange}
            className={errors.linkedinId ? 'error' : ''}
          />
          {errors.linkedinId && <span className="error-message">{errors.linkedinId}</span>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Access Content'}
        </button>
      </form>

      <style jsx>{`
        .gate-form-container {
          max-width: 500px;
          margin: 2rem auto;
          padding: 2rem;
          background: #e9eae0;
          border: 2px solid #0E4714;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }

        .gate-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 500;
          color: #0E4714;
        }

        .form-group input {
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .form-group input.error {
          border-color: #dc3545;
          background-color: #fff8f8;
        }

        .error-message {
          color: #dc3545;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        button {
          background: #0E4714;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        button:hover:not(:disabled) {
          background: #0a3010;
        }

        button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  )
}