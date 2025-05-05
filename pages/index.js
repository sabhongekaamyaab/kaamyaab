// pages/index.js
import Layout from '../components/Layout'
import EmailForm from '../components/EmailForm'
import Link from 'next/link'
import { getAllPosts } from '../lib/markdown'

export default function Home({ latestPosts }) {
  return (
    <Layout>
      <div className="hero">
        <h1>Make India the AI Research Powerhouse</h1>
        <p className="description">
          Kaamyaab partners with Indian educational institutes to deliver industry-ready, 1-year online courses in AI/ML and Data Structures & Algorithms (DSA). Equip your students with the skills that matter for tomorrow's tech landscape.
        </p>
        <div className="cta-button">
          <Link href="https://kaamyaab.notion.site/1c928c9863dc8184a92be67196516e1b" target="_blank" rel="noopener noreferrer">
            <button className="primary-button">
              Partner With Us
            </button>
          </Link>
        </div>
      </div>
      
      <section className="features">
        <h2>Why Choose Kaamyaab?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Comprehensive Curriculum</h3>
            <p>Our 1-year programs in AI/ML and DSA are designed by industry experts and updated regularly to match the latest trends and requirements.</p>
          </div>
          <div className="feature-card">
            <h3>Hands-on Learning</h3>
            <p>Students learn by doing, with real-world projects, coding assignments, and interactive labs that build practical skills and confidence.</p>
          </div>
          <div className="feature-card">
            <h3>Experienced Tutors</h3>
            <p>Learn from the best! Every teacher has worked at top-tech firms of the world. Think Google, Amazon, Microsoft and more</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Our Offerings</h2>
        <p align="center">Currently, we only offer two subjects that we feel are the most critical in today's job markets. </p>
        <div className="features-grid">
          <div className="feature-card">
            <h3>AI & Machine Learning</h3>
            <p>From Python basics to deep learning, our AI/ML course covers everything students need to build intelligent systems and solve real-world problems.</p>
          </div>
          <div className="feature-card">
            <h3>Data Structures & Algorithms</h3>
            <p>Master the foundations of computer science with a rigorous DSA curriculum, preparing students for coding interviews and competitive programming.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Easy Onboarding</h3>
            <p>We work with your institute to onboard students, set up learning platforms, and provide all necessary resources.</p>
          </div>
          <div className="feature-card">
            <h3>Live & Recorded Sessions</h3>
            <p>Weekly live classes with expert instructors, plus recorded lectures for flexible, self-paced learning.</p>
          </div>
          <div className="feature-card">
            <h3>Progress Tracking</h3>
            <p>Institutes and students get access to dashboards for tracking progress, attendance, and performance analytics.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Ready to Upskill Your Students?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Get in Touch</h3>
            <p>Book a free consultation to discuss how Kaamyaab can add value to your institute's curriculum and student outcomes.</p>
            <div className="cta-button" style={{marginTop: '1rem'}}>
              <Link href="https://calendly.com/sabhongekaamyaab/30min" target="_blank" rel="noopener noreferrer">
                <button className="primary-button">
                  Schedule a Call
                </button>
              </Link>
            </div>
          </div>
          <div className="feature-card">
            <h3>Request a Demo</h3>
            <p>See our platform in action and explore our course content, teaching methodology, and student engagement tools.</p>
          </div>
          <div className="feature-card">
            <h3>Join the Kaamyaab Network</h3>
            <p>Become part of a growing community of forward-thinking institutes committed to excellence in tech education.</p>
          </div>
        </div>
      </section>

      <div className="email-form-container">
        <EmailForm />
      </div>
      
      <style jsx>{`
        .cta-button {
            margin-top: 2rem;
            display: 'inline-block',
            padding: '0.8rem 1.5rem',
            backgroundColor: '#0070f3',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease'
          }
          .cta-button a {
            display: inline-block;
            padding: 1rem 2rem;
            background-color: #0070f3;
            color: white;
            border-radius: 4px;
            font-size: 1.1rem;
            transition: background-color 0.3s ease;
          }
          .cta-button a:hover {
            background-color: #0060df;
          }
        .hero {
          margin-top: 5rem;
          text-align: center;
          padding: 5rem 0;
        }
        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .description {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 2rem;
          color: #666;
        }
        .buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        .button {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .button.primary {
          background-color: #0070f3;
          color: white;
        }
        .button.primary:hover {
          background-color: #0060df;
        }
        .button.secondary {
          background-color: white;
          color: #0070f3;
          border: 1px solid #0070f3;
        }
        .button.secondary:hover {
          background-color: #f0f7ff;
        }
        .features, .latest-posts {
          padding: 3rem 0;
        }
        .features h2, .latest-posts h2 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #eaeaea;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .post-card {
          padding: 1.5rem;
          border: 1px solid #eaeaea;
          border-radius: 8px;
        }
        .post-card h3 {
          margin-top: 0;
        }
        .post-card a {
          color: #333;
          text-decoration: none;
        }
        .center {
          text-align: center;
        }

        // for the current customers grid

        .customers {
            padding: 4rem 0;
            text-align: center;
          }
          .customers h2 {
            margin-bottom: 3rem;
            font-size: 2rem;
            color: #333;
          }
          .logo-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 3rem;
            align-items: center;
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          .logo-item {
            display: flex;
            justify-content: center;
            align-items: center;
            filter: grayscale(100%);
            opacity: 0.6;
            transition: all 0.3s ease;
          }
          .logo-item:hover {
            filter: grayscale(0%);
            opacity: 1;
          }
          .logo-item img {
            max-width: 120px;
            height: auto;
          }
      `}</style>
    
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()
  const latestPosts = allPosts.slice(0, 3)
  
  return {
    props: {
      latestPosts,
    },
  }
}
