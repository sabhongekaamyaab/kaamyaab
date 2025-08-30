import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function AdminDashboard() {
  const [emailList, setEmailList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }

    fetchEmails(token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin/login')
  }

  const fetchEmails = async (token: string) => {
    try {
      const response = await fetch('/api/admin/emails', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (!response.ok) throw new Error('Unauthorized')
      const data = await response.json()
      setEmailList(data)
    } catch (error) {
      router.push('/admin/login')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <Layout>
      <div className="admin-dashboard">
        <div className="admin-header">
          <h1>Email List Dashboard</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
        <table className="email-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date Added</th>
            </tr>
          </thead>
          <tbody>
            {emailList.map((entry: any) => (
              <tr key={entry.id}>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{new Date(entry.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <style jsx>{`
          .admin-dashboard {
            padding: 2rem;
          }
          .admin-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
          }
          .logout-button {
            background: #0E4714;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 0.5rem 1rem;
            cursor: pointer;
            transition: background 0.2s;
          }
          .logout-button:hover {
            background: #0a3010;
          }
          .email-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 2rem;
          }
          .email-table th,
          .email-table td {
            padding: 1rem;
            border: 1px solid #eaeaea;
            text-align: left;
          }
          .email-table th {
            background: #f7f7f7;
          }
        `}</style>
      </div>
    </Layout>
  )
}