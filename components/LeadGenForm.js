import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function LeadGenForm() {
  const router = useRouter()
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
      router.push('/thank-you')
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

  // Show thank you splash if submitted
  if (status === 'success') {
    return (
      <div className="agi-leadgen-thankyou">
        <div className="agi-thankyou-splash">
          <span className="agi-thankyou-emoji" role="img" aria-label="Party Popper">🎉</span>
          <h2>Thank you for reaching out!</h2>
          <p>We've received your details.<br />Our team will get in touch soon.</p>
        </div>
        <style jsx>{`
          .agi-leadgen-thankyou {
            background: #e9eae0;
            border-radius: 16px;
            border: 2px solid #0E4714;
            box-shadow: 0 4px 24px rgba(0,0,0,0.07);
            padding: 2rem;
            max-width: 480px;
            margin: 2rem auto;
            text-align: center;
            font-family: 'Instrument Serif', serif;
          }
          .agi-thankyou-emoji {
            font-size: 3rem;
            display: block;
            margin-bottom: 1rem;
          }
          .agi-thankyou-splash h2 {
            color: #0E4714;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
          }
          .agi-thankyou-splash p {
            color: #333;
            font-size: 1.1rem;
            margin-bottom: 0;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="agi-leadgen-form">
      <form
        id="webform968100000000454003"
        action="https://crm.zoho.in/crm/WebToLeadForm"
        name="WebToLeads968100000000454003"
        method="POST"
        acceptCharset="UTF-8"
      >
        <input type="hidden" name="xnQsjsdp" value="4dd7d472e2a10a562f7121a2250fdeb52f4d91c9832058361eb148e1dd5a3490" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="hidden" name="xmIwtLD" value="df12d9a447dd6741b21c6c90efcb806ff7bc252937ae3de27a8f2998a46d213d52e50c4e69d2a948199e6536800fadda" />
        <input type="hidden" name="actionType" value="TGVhZHM=" />
        <input type="hidden" name="returnURL" value="null" />

        <h2 className="agi-form-title">Get in Touch with The AGI School</h2>

        <div className="agi-form-row">
          <label htmlFor="First_Name">First Name</label>
          <input
            type="text"
            id="First_Name"
            name="First Name"
            maxLength={40}
            required
          />
        </div>
        <div className="agi-form-row">
          <label htmlFor="Last_Name">Last Name <span style={{ color: '#0E4714' }}>*</span></label>
          <input
            type="text"
            id="Last_Name"
            name="Last Name"
            maxLength={80}
            required
          />
        </div>
        <div className="agi-form-row">
          <label htmlFor="Company">Organisation (College) <span style={{ color: '#0E4714' }}>*</span></label>
          <input
            type="text"
            id="Company"
            name="Company"
            maxLength={200}
            required
          />
        </div>
        <div className="agi-form-row">
          <label htmlFor="Designation">Position</label>
          <input
            type="text"
            id="Designation"
            name="Designation"
            maxLength={100}
          />
        </div>
        <div className="agi-form-row">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            name="Email"
            maxLength={100}
            autoComplete="off"
          />
        </div>
        <div className="agi-form-row">
          <label htmlFor="Mobile">Mobile</label>
          <input
            type="text"
            id="Mobile"
            name="Mobile"
            maxLength={30}
          />
        </div>
        <div className="agi-form-row">
          <label htmlFor="No_of_Employees">No. of Students (Final Year)</label>
          <input
            type="text"
            id="No_of_Employees"
            name="No of Employees"
            maxLength={9}
          />
        </div>
        <input type="hidden" style={{ display: 'none' }} name="aG9uZXlwb3Q" value="" />

        <div className="agi-form-actions">
          <input
            type="submit"
            id="formsubmit"
            className="agi-form-button"
            value="Submit"
          />
          <input
            type="reset"
            className="agi-form-button agi-form-reset"
            name="reset"
            value="Reset"
          />
        </div>

        <style jsx>{`
          .agi-leadgen-form {
            background: #e9eae0;
            border-radius: 16px;
            border: 2px solid #0E4714;
            box-shadow: 0 4px 24px rgba(0,0,0,0.07);
            padding: 2rem;
            max-width: 480px;
            margin: 2rem auto;
            font-family: 'Instrument Serif', serif;
          }
          .agi-form-title {
            text-align: center;
            color: #0E4714;
            font-size: 1.5rem;
            margin-bottom: 2rem;
            font-weight: 700;
          }
          .agi-form-row {
            display: flex;
            flex-direction: column;
            margin-bottom: 1.25rem;
          }
          .agi-form-row label {
            margin-bottom: 0.5rem;
            color: #0E4714;
            font-weight: 500;
            font-size: 1rem;
          }
          .agi-form-row input {
            padding: 0.75rem 1rem;
            border: 1px solid #eaeaea;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.2s;
          }
          .agi-form-row input:focus {
            border-color: #0E4714;
            outline: none;
          }
          .agi-form-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 2rem;
          }
          .agi-form-button {
            background: #0E4714;
            color: #fff;
            border: none;
            border-radius: 8px;
            padding: 0.75rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
          }
          .agi-form-button:hover {
            background: #145c1c;
          }
          .agi-form-reset {
            background: #eaeaea;
            color: #0E4714;
          }
          @media (max-width: 600px) {
            .agi-leadgen-form {
              padding: 1rem;
              max-width: 100%;
            }
          }
        `}</style>
      </form>
    </div>
  );
}
