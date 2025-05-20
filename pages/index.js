// pages/index.js
import Layout from '../components/Layout'
import EmailForm from '../components/EmailForm'
import SuccessStories from '../components/SuccessStories'
import Link from 'next/link'
import { getAllPosts } from '../lib/markdown'
import ReachOut from '../components/ReachOut'
import PlacementStats from '../components/PlacementStats'
import Image from 'next/image';
import FAQ from '../components/Faq';

export default function Home({ latestPosts }) {
  return (
    
    <Layout>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Make India the AI Research Powerhouse</h1>
            <p className="description">
              Equip your students with 1-year online courses in AI/ML and DSA that matter for tomorrow's tech landscape.
            </p>
            <div className="email-form-container">
              <ReachOut />
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <Image
                src="/assets/index/hero.png" // Add your image to public folder
                alt="AI Education Illustration"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <section className="metrics">
        <PlacementStats/>
      </section>
  
      <section className="trust-builder">
        <h2>Trusted by Students Nationwide</h2>
        <p className="trust-description">
          Hundreds of students have accelerated their careers with Kaamyaab. <br></br> Our alumni have landed roles at leading tech companies, with our hands-on curriculum and mentorship.
        </p>
          <div className="success-stories-section">
          <SuccessStories/>
          </div>
      </section>

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

      {/* <section className="features">
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
      </section> */}

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
            <ReachOut/>
          </div>
        </div>
      </section>

      <div className='faq-section'>
        <FAQ />
      </div>

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
            background-color: #FF3131;
            color: white;
            border-radius: 4px;
            font-size: 1.1rem;
            transition: background-color 0.3s ease;
          }
          .cta-button a:hover {
            background-color: #FF3131;
          }
        .hero {
          margin-top: 1rem;
          padding: 4rem 0;
        }
        
        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 4rem;
          padding: 0 2rem;
        }
        
        .hero-text {
          flex: 1;
          text-align: left;
        }
        
        .hero-text h1 {
          font-size: 3rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #333;
        }
        
        .description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: #666;
          max-width: 100%;
          margin-left: 0;
        }
        
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        @media (max-width: 1024px) {
          .hero-content {
            gap: 2rem;
          }
          
          .hero-text h1 {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            text-align: center;
          }
          
          .hero-text {
            text-align: center;
          }
          
          .description {
            margin: 0 auto 2rem;
          }
          
          .hero-image {
            order: -1;
            margin-bottom: 2rem;
          }
        }
        .trust-builder{
          margin-top: 1rem;
          text-align: center;
          padding: 1rem 0;
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
          background-color: #FF3131;
          color: white;
        }
        .button.primary:hover {
          background-color: #FF3131;
        }
        .button.secondary {
          background-color: white;
          color: #FF3131;
          border: 1px solid #FF3131;
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
        .metrics {
          padding: 2rem 0;
          background-color: #f7f9fc;
          margin: -2rem 0 2rem 0;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .metric-card {
          text-align: center;
          padding: 1.5rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .metric-card:hover {
          transform: translateY(-5px);
        }

        .metric-card h3 {
          font-size: 2.5rem;
          color: #FF3131;
          margin: 0 0 0.5rem 0;
          font-weight: 700;
        }

        .metric-card p {
          font-size: 1.1rem;
          color: #666;
          margin: 0;
        }

        .image-wrapper {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
        }
        
        .image-wrapper :global(img) {
          border-radius: 10px;
        }
        
        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .metric-card h3 {
            font-size: 2rem;
          }
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
