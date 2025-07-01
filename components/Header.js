import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/">
            <img src="/assets/logo.png" alt="The AGI School India" width="120" height="40" style={{objectFit: 'contain'}} />
          </Link>
        </div>
        
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {/* <li>
            <Link href="/how-we-work">
              How We Work
            </Link>
          </li> */}
          <li>
            <Link href="why-theagischool">
              Why The AGI School?
            </Link>
          </li>
          <li>
            <Link href="/ai-course">
              AI Course
            </Link>
          </li>
          <li>
            <Link href="/dsa-course">
              DSA Course
            </Link>
          </li>
          {/* <li>
            <Link href="/success-stories">
              Success Stories
            </Link>
          </li> */}
          <li>
            <Link href="https://thisweekinaiclub.substack.com">
              AI Newsletter
            </Link>
          </li>
          <li>
            <Link href="/about">
              About Us
            </Link>
          </li>
          {/* <li>
            <Link href="/pricing">
              Pricing
            </Link>
          </li> */}
          <li>
            <Link href="/get-in-touch">
              <button style={{
                background: '#0e4714',
                color: 'white',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Apply Now
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      
      <style jsx>{`
        header {
          padding: 1rem 0;
          border-bottom: 1px solid #eaeaea;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .logo a {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }
        .nav-links li a {
          color: #333;
          text-decoration: none;
        }
        .nav-links li a:hover {
          color: #666;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 25px;
          height: 2px;
          background-color: #333;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: white;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            text-align: center;
          }
          .nav-links.active {
            display: flex;
          }
          nav {
            position: relative;
          }
          .logo {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </header>
  )
}


