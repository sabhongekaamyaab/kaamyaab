// pages/index.js
import Layout from '../components/Layout'
import EmailForm from '../components/EmailForm'
import SuccessStories from '../components/SuccessStories'
import Link from 'next/link'
import { getAllPosts } from '../lib/markdown'
import ReachOut from '../components/ReachOut'
import PlacementStats from '../components/PlacementStats'
import Image from "next/legacy/image";
import FAQ from '../components/Faq';

export default function Home({ latestPosts }) {
  return (
    
    <Layout>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 style={{color: '#0e4714'}}>Boost Placements with Industry-Ready AI & DSA Training</h1>
            <p className="description">
            Partner with us to deliver cutting-edge AI and DSA courses tailored to the job market. Help your students land top tech roles with our placement-focused curriculum.
            </p>
            <Link href='/get-in-touch'> 
            <button className="primary-button">
              Apply Now
            </button>
            </Link>
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
          Hundreds of students have accelerated their careers with The AGI School. <br></br> Our alumni have landed roles at leading tech companies, with our hands-on curriculum and mentorship.
        </p>
          <div className="success-stories-section">
          <SuccessStories/>
          </div>
      </section>

      <section className="features">
        <h2>Why Choose The AGI School?</h2>
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
            <p>Book a free consultation to discuss how The AGI School can add value to your institute's curriculum and student outcomes.</p>
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
        .hero {
          margin-top: 1rem;
          padding: 2rem 0;
          overflow: hidden;
        }
        
        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 0 1rem;
        }
        
        .hero-text {
          flex: 1;
          text-align: left;
        }
        
        .hero-text h1 {
          font-size: clamp(2rem, 5vw, 3rem);
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #333;
        }
        
        .description {
          font-size: clamp(1rem, 3vw, 1.2rem);
          margin-bottom: 2rem;
          color: #666;
          max-width: 100%;
        }
        
        .hero-image {
          flex: 1;
          max-width: 500px;
          width: 100%;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: auto;
          aspect-ratio: 1;
        }
        
        .features {
          padding: 3rem 1rem;
          overflow: hidden;
        }

        .features h2 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: clamp(1.5rem, 4vw, 2rem);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #eaeaea;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: white;
        }

        .feature-card h3 {
          font-size: clamp(1.1rem, 3vw, 1.25rem);
          margin-bottom: 1rem;
        }

        .feature-card p {
          font-size: clamp(0.9rem, 2vw, 1rem);
          line-height: 1.6;
        }

        .metrics {
          padding: 2rem 1rem;
          background-color: #f7f9fc;
          margin: 0;
          overflow: hidden;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .trust-builder {
          margin-top: 1rem;
          text-align: center;
          padding: 2rem 1rem;
        }

        .trust-builder h2 {
          font-size: clamp(1.5rem, 4vw, 2rem);
          margin-bottom: 1rem;
        }

        .trust-description {
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          max-width: 800px;
          margin: 0 auto 2rem;
        }

        .cta-button {
          margin-top: 1.5rem;
        }

        .primary-button {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          background-color: #0e4714;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column-reverse;
            text-align: center;
            gap: 1.5rem;
          }
          
          .hero-text {
            text-align: center;
          }
          
          .hero-image {
            max-width: 100%;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          br {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }

          .feature-card {
            padding: 1rem;
          }

          .hero {
            padding: 1rem 0;
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
