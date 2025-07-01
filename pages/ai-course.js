import Layout from '../components/Layout'
import Link from 'next/link'

export default function DSACourse() {
  return (
    <Layout>
      <div className="dsa-course">
        <section className="hero">
          <div className="hero-content">
            <h1>AI & ML Engineering Program</h1>
            <p className="subtitle">
              Master AI Development in 1 Year with Industry Experts
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">12</span>
                <span className="stat-label">Months</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Hours</span>
              </div>
              <div className="stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>
            <Link href='/get-in-touch'><button className="cta-button">Apply Now</button></Link>
          </div>
        </section>

        <section className="course-content">
          <h2>Program Structure</h2>
          <div className="modules-grid">
            <div className="module-card">
              <div className="module-header">
                <span className="module-number">01</span>
                <h3>Foundations of AI</h3>
              </div>
              <ul className="module-topics">
                <li>Python Programming</li>
                <li>Linear Algebra & Statistics</li>
                <li>Neural Networks Basics</li>
                <li>Deep Learning Fundamentals</li>
              </ul>
            </div>

            <div className="module-card">
              <div className="module-header">
                <span className="module-number">02</span>
                <h3>Advanced AI Concepts</h3>
              </div>
              <ul className="module-topics">
                <li>Transformers Architecture</li>
                <li>Large Language Models</li>
                <li>Computer Vision</li>
                <li>Natural Language Processing</li>
              </ul>
            </div>

            <div className="module-card">
              <div className="module-header">
                <span className="module-number">03</span>
                <h3>AI Engineering</h3>
              </div>
              <ul className="module-topics">
                <li>MLOps & DevOps</li>
                <li>Model Deployment</li>
                <li>System Design for AI</li>
                <li>AI Infrastructure</li>
              </ul>
            </div>

            <div className="module-card">
              <div className="module-header">
                <span className="module-number">04</span>
                <h3>Industry Projects</h3>
              </div>
              <ul className="module-topics">
                <li>Capstone Project</li>
                <li>Real-world Applications</li>
                <li>Industry Mentorship</li>
                <li>Portfolio Building</li>
              </ul>
            </div>
          </div>
        </section>

        <style jsx>{`
          .dsa-course {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .hero {
            padding: 4rem 0;
            text-align: center;
            background: linear-gradient(135deg,rgb(247, 62, 106) 0%, #0e4714 100%);
            border-radius: 16px;
            color: white;
            margin: 2rem 0;
          }

          .hero-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          h1 {
            font-size: 3rem;
            color: #FFFFFF;
            margin-bottom: 1rem;
          }

          .subtitle {
          color: #FFFFFF;
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.9;
          }

          .hero-stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin: 2rem 0;
          }

          .stat {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            color: #FFFFFF;
          }

          .stat-label {
            font-size: 1rem;
            opacity: 0.9;
          }

          .cta-button {
            background: #FFFFFF;
            color: black;
            border: none;
            padding: 1rem 3rem;
            font-size: 1.1rem;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.3s ease;
          }

          .cta-button:hover {
            transform: translateY(-2px);
          }

          .course-content {
            padding: 4rem 0;
          }

          .course-content h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #333;
          }

          .modules-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }

          .module-card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }

          .module-card:hover {
            transform: translateY(-5px);
          }

          .module-header {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          .module-number {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1CB5E0;
            margin-right: 1rem;
          }

          .module-header h3 {
            font-size: 1.25rem;
            color: #333;
          }

          .module-topics {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .module-topics li {
            padding: 0.5rem 0;
            color: #666;
            border-bottom: 1px solid #eee;
          }

          .module-topics li:last-child {
            border-bottom: none;
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 2rem;
            }

            .hero-stats {
              gap: 1.5rem;
            }

            .stat-number {
              font-size: 2rem;
            }

            .modules-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </Layout>
  )
}