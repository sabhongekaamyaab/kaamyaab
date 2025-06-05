import Layout from '../components/Layout';
import LeadGenForm from '../components/LeadGenForm';
import SuccessStoriesSection from '../components/SuccessStoriesLeadGen';

export default function LeadGen() {
  return (
    <Layout title="Join The AGI School - Start Your Placement Journey">
      <div className="lead-gen-container">
        <div className="content-grid">
          {/* Left Section - Content */}
          <div className="content-section">
            <div className="content-header">
              <h1>Start Your Placements Journey with The AGI School</h1>
              <p className="description">
                Join our community of successful tech professionals and take the first step towards your dream career.
                Our structured approach and expert mentorship have helped hundreds of students land their dream jobs.
              </p>
            </div>
            
            <div className="stories-section">
              <h2>Success Stories</h2>
              <p className="stories-subtitle">See how The AGI School has transformed careers</p>
              <SuccessStoriesSection />
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="form-section">
            <LeadGenForm />
          </div>
        </div>
      </div>

      <style jsx>{`
        .lead-gen-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 1rem;
        }
        .content-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .content-section {
          padding-right: 2rem;
        }
        .content-header {
          margin-bottom: 3rem;
        }
        h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .description {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
        }
        .stories-section {
          margin-top: 2rem;
        }
        .stories-section h2 {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 0.5rem;
        }
        .stories-subtitle {
          color: #666;
          margin-bottom: 2rem;
        }
        .form-section {
          position: sticky;
          top: 2rem;
        }
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .content-section {
            padding-right: 0;
          }
          .form-section {
            position: static;
          }
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          .description {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </Layout>
  );
}
