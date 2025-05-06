import Layout from '../components/Layout'

export default function Privacy() {
  return (
    <Layout title="Privacy Policy | kaamyaab">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p>KAAMYAAB INDIA ("we," "our," "us") values your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website https://kaamyaab.in and use any of our educational offerings.</p>
        <div className="content">
          <section>
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Usage data and analytics</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Communicate with you about our services</li>
              <li>Ensure the security of our platform</li>
            </ul>
          </section>

          <section>
            <h2>3. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section>
            <h2>4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Email: hello@kaamyaab.in</p>
          </section>

          <section>
            <h2>5. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            <p>Last updated: 3rd April, 2025</p>
          </section>
        </div>
      </div>

      <style jsx>{`
        .privacy-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .content {
          background: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        section {
          margin-bottom: 2rem;
        }

        h2 {
          color: #333;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }

        li {
          color: #666;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .privacy-container {
            padding: 1rem;
          }

          h1 {
            font-size: 2rem;
          }

          .content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </Layout>
  )
} 
