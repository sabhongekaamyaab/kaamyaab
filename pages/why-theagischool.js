import Layout from '../components/Layout'
import Link from 'next/link'
import Head from 'next/head'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGraduationCap, faIndustry, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function WhyThe AGI School() {
  const stats = [
    {
      number: "500+",
      label: "Students Placed",
      description: "Successfully placed in top tech companies"
    },
    {
      number: "75L",
      label: "Highest Package",
      description: "Achieved by our students"
    },
    {
      number: "95%",
      label: "Placement Rate",
      description: "Industry-leading success rate"
    },
    {
      number: "50+",
      label: "Students in FAANG",
      description: "Placed in top-tier tech companies"
    }
  ]
  return (
    
    <Layout>
      <div className="why-kaamyaab">
        <section className="hero">
          <h1>Why Choose The AGI School?</h1>
          <p className="subtitle">
            Because all is not good with the current tech education system in India.
          </p>
          <div className="highlight-stat">
            <h2>We have multi-pronged issues in tech education in India.</h2>
          </div>
        </section>
        <section className="problems-section">
          <div className="problems-header">
            <h2>Current Education Landscape</h2>
            <p className="problems-subtitle">The tech education system faces critical challenges</p>
          </div>
          
          <div className="problems-grid">
            <div className="problem-card">
              <div className="problem-stat">65%</div>
              <h3>Service Companies</h3>
              <p>Of all tech hiring is done by IT services companies, limiting exposure to cutting-edge tech roles</p>
            </div>
            
            <div className="problem-card">
              <div className="problem-stat">1990s</div>
              <h3>Outdated Curriculum</h3>
              <p>Most college curricula are stuck in the past, teaching technologies that are rapidly becoming obsolete</p>
            </div>
            
            <div className="problem-card">
              <div className="problem-stat">↑ 3x</div>
              <h3>Skills Gap</h3>
              <p>The gap between industry requirements and graduate capabilities has tripled in the last 5 years</p>
            </div>
          </div>

          <div className="problems-cta">
            <h3>The Challenge?</h3>
            <p>Traditional tech education isn't keeping pace with industry evolution. We need a new approach that prepares students for tomorrow's tech landscape.</p>
          </div>
        </section>

        {/* Current Industry Landscape Section */}

        <section className="industry-trends">
          <div className="trend-header">
            <h2>Add to this, Current Industry Landscape</h2>
            <p className="trend-subtitle">The tech industry is experiencing significant shifts</p>
          </div>
          
          <div className="trends-grid">
            <div className="trend-card">
              <div className="trend-stat">↓ 20%</div>
              <h3>Campus Hiring</h3>
              <p>Tech recruitment for 2024-25 batch shows a significant decline as companies optimize their workforce</p>
            </div>
            
            <div className="trend-card">
              <div className="trend-stat">AI SWE</div>
              <h3>Automation Impact</h3>
              <p>Traditional software jobs are being reshaped by AI tools and automation, requiring new skills and adaptability</p>
            </div>
            
            <div className="trend-card">
              <div className="trend-stat">2025</div>
              <h3>Changing Landscape</h3>
              <p>OpenAI's agentic developers and AI tools are transforming how companies think about technical hiring</p>
            </div>
          </div>

          <div className="trends-cta">
            <h3>The Solution?</h3>
            <p>Focus on high-value skills that AI enhances rather than replaces. Our curriculum adapts to these changes, preparing students for the AI-augmented future of tech.</p>
          </div>
        </section>

        {/* Solutions Section */}

        <section className="solutions-section">
          <div className="solutions-header">
            <h2>The The AGI School Solution</h2>
            <p className="solutions-subtitle">Our three-pronged approach to transform tech education</p>
          </div>
          
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">🎯</div>
              <h3>Industry-Aligned Curriculum</h3>
              <p>Our curriculum is designed by experts from top tech companies, ensuring students learn what matters in the real world. We focus on practical skills, modern technologies, and industry best practices.</p>
            </div>
            
            <div className="solution-card">
              <div className="solution-icon">👨‍🏫</div>
              <h3>Expert Mentorship</h3>
              <p>Learn from professionals who've worked at Google, Amazon, Microsoft, and other tech giants. Our mentors bring real-world experience and insights directly to our students.</p>
            </div>
            
            <div className="solution-card">
              <div className="solution-icon">🛠️</div>
              <h3>Hands-on Training</h3>
              <p>With hundreds of successful placements and ongoing partnerships with leading colleges, we've demonstrated our ability to transform careers and deliver results.</p>
            </div>
          </div>

          <div className="solutions-cta">
            <h3>Ready to Transform Your Tech Education?</h3>
            <p>Join The AGI School and prepare your students for the future of tech</p>
            <Link href="/lead-gen">
              <button className="cta-button">Get Started</button>
            </Link>
          </div>
        </section>

        {/* Our Results */}
        <section className="results-section">
          <div className="results-header">
            <h2>Our Impact</h2>
            <p className="results-subtitle">Real outcomes that speak for themselves</p>
          </div>
          
          <div className="results-grid">
            {stats.map((stat, index) => (
              <div key={index} className="result-card">
                <div className="result-stat">{stat.number}</div>
                <h3>{stat.label}</h3>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="results-cta">
            <h3>Ready to Join Our Success Story?</h3>
            <p>Take the first step towards transforming your students' careers</p>
            <Link href="/lead-gen">
              <button className="cta-button">Get Started</button>
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        .why-kaamyaab {
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero {
          text-align: center;
          padding: 3rem 0;
        }

        .hero h1 {
          font-size: 3rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .subtitle {
          font-size: 1.25rem;
          color: #666;
          max-width: 800px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 3rem 0;
        }

        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-card h2 {
          font-size: 3rem;
          color: #FF3131;
          margin-bottom: 0.5rem;
        }

        .stat-card h3 {
          font-size: 1.25rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .stat-card p {
          color: #666;
          font-size: 1rem;
        }

        .problems-section {
          background: #f8f9fa;
          padding: 4rem 0;
          margin: 2rem 0;
        }

        .problems-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .problems-header h2 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .problems-subtitle {
          font-size: 1.2rem;
          color: #666;
        }

        .problems-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .problem-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .problem-card:hover {
          transform: translateY(-5px);
        }

        .problem-stat {
          font-size: 3rem;
          font-weight: bold;
          color: #FF3131;
          margin-bottom: 1rem;
        }

        .problem-card h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .problem-card p {
          color: #666;
          line-height: 1.6;
        }

        .problems-cta {
          max-width: 800px;
          margin: 4rem auto 0;
          text-align: center;
          padding: 0 2rem;
        }

        .problems-cta h3 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .problems-cta p {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
        }

        .industry-trends {
          background: #f8f9fa;
          padding: 4rem 0;
          margin: 2rem 0;
        }

        .trend-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .trend-header h2 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .trend-subtitle {
          font-size: 1.2rem;
          color: #666;
        }

        .trends-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .trend-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .trend-stat {
          font-size: 3rem;
          font-weight: bold;
          color: #FF3131;
          margin-bottom: 1rem;
        }

        .trend-card h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .trend-card p {
          color: #666;
          line-height: 1.6;
        }

        .trends-cta {
          max-width: 800px;
          margin: 4rem auto 0;
          text-align: center;
          padding: 0 2rem;
        }

        .trends-cta h3 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .trends-cta p {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
        }

        .solutions-section {
          background: #e6f7ef;
          padding: 4rem 0;
          margin: 2rem 0;
        }

        .solutions-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .solutions-header h2 {
          font-size: 2.5rem;
          color: #1a5d1a;
          margin-bottom: 1rem;
        }

        .solutions-subtitle {
          font-size: 1.2rem;
          color: #2e582e;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .solution-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .solution-card:hover {
          transform: translateY(-5px);
        }

        .solution-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .solution-card h3 {
          font-size: 1.5rem;
          color: #1a5d1a;
          margin-bottom: 1rem;
        }

        .solution-card p {
          color: #2e582e;
          line-height: 1.6;
        }

        .solutions-cta {
          max-width: 800px;
          margin: 4rem auto 0;
          text-align: center;
          padding: 0 2rem;
        }

        .solutions-cta h3 {
          font-size: 2rem;
          color: #1a5d1a;
          margin-bottom: 1rem;
        }

        .solutions-cta p {
          font-size: 1.2rem;
          color: #2e582e;
          margin-bottom: 2rem;
        }

        .cta-button {
          background: #1a5d1a;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 4px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background: #154815;
        }

        .results-section {
          background: #fff1f1;
          padding: 4rem 0;
          margin: 2rem 0;
        }

        .results-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .results-header h2 {
          font-size: 2.5rem;
          color: #cc2828;
          margin-bottom: 1rem;
        }

        .results-subtitle {
          font-size: 1.2rem;
          color: #666;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .result-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .result-card:hover {
          transform: translateY(-5px);
        }

        .result-stat {
          font-size: 3rem;
          font-weight: bold;
          color: #FF3131;
          margin-bottom: 1rem;
        }

        .result-card h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .result-card p {
          color: #666;
          line-height: 1.6;
        }

        .results-cta {
          max-width: 800px;
          margin: 4rem auto 0;
          text-align: center;
          padding: 0 2rem;
        }

        .results-cta h3 {
          font-size: 2rem;
          color: #cc2828;
          margin-bottom: 1rem;
        }

        .results-cta p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 2rem;
        }

        @media (max-width: 1024px) {
          .results-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }

          .stat-card h2 {
            font-size: 2.5rem;
          }

          .text-block h2 {
            font-size: 1.75rem;
          }

          .problems-grid {
            grid-template-columns: 1fr;
          }

          .highlight-stat h2 {
            font-size: 3rem;
          }

          .highlight-stat p {
            font-size: 1.25rem;
          }

          .trends-grid {
            grid-template-columns: 1fr;
          }
          
          .trend-header h2 {
            font-size: 2rem;
          }
          
          .trend-stat {
            font-size: 2.5rem;
          }

          .solutions-grid {
            grid-template-columns: 1fr;
          }
          
          .solutions-header h2 {
            font-size: 2rem;
          }

          .results-grid {
            grid-template-columns: 1fr;
          }
          
          .results-header h2 {
            font-size: 2rem;
          }
          
          .result-stat {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </Layout>
  )
}