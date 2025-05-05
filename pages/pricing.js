import Layout from '../components/Layout'
import EmailForm from '../components/EmailForm'
import Link from 'next/link'

export default function Pricing() {
  return (
    <Layout title="Pricing | kaamyaab">
      <div className="pricing-container">
        <h1>simple, transparent pricing</h1>
        <p className="description">choose the plan that works best for your business</p>

        <div className="pricing-grid">
          <div className="pricing-card">
            <h2>leap of faith</h2>
            <p>free for the first month, then</p>
            <div className="price">₹10,000<span>/month</span></div>
            <ul>
              <li>2 automation workflows</li>
              <li>basic API integration</li>
              <li>email support</li>
              <li>weekly reports</li>
            </ul>
            <Link href="https://kaamyaab.notion.site/1c928c9863dc8184a92be67196516e1b" className="primary-button">
              get started
            </Link>
          </div>

          <div className="pricing-card featured">
            <div className="featured-label">most popular</div>
            <h2>professional</h2>
            <p>no questions asked, flat</p>
            <div className="price">₹45,000<span>/month</span></div>
            <ul>
              <li>upto 10 automation workflows</li>
              <li>advanced API integration</li>
              <li>daily reports</li>
              <li>custom dashboard</li>
            </ul>
            <Link href="https://kaamyaab.notion.site/1c928c9863dc8184a92be67196516e1b" className="primary-button">
              get started
            </Link>
          </div>

          <div className="pricing-card">
            <h2>enterprise</h2>
            <div className="price">custom</div>
            <ul>
              <li>unlimited workflows</li>
              <li>24/7 dedicated support</li>
              <li>real-time analytics</li>
              <li>custom integration</li>
              <li>on-premise deployment</li>
            </ul>
            <Link href="https://kaamyaab.notion.site/1c928c9863dc8184a92be67196516e1b" className="primary-button">
              get started
            </Link>
          </div>
        </div>

        <div className="email-form-container">
          <EmailForm />
        </div>
      </div>

      <style jsx>{`
        .pricing-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 1rem;
          text-align: center;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .description {
          color: #666;
          font-size: 1.2rem;
          margin-bottom: 3rem;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .pricing-card {
          background: white;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          padding: 2rem;
          position: relative;
          transition: transform 0.3s ease;
        }
        .pricing-card:hover {
          transform: translateY(-5px);
        }
        .featured {
          border: 2px solid #0070f3;
        }
        .featured-label {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #0070f3;
          color: white;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.9rem;
        }
        .price {
          font-size: 2.5rem;
          font-weight: bold;
          margin: 1.5rem 0;
        }
        .price span {
          font-size: 1rem;
          color: #666;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem;
        }
        li {
          padding: 0.5rem 0;
          color: #666;
        }
        .cta-button {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          background-color: #0070f3;
          color: white;
          border-radius: 4px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }
        .cta-button:hover {
          background-color: #0060df;
        }
      `}</style>
    </Layout>
  )
}
