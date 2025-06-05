export default function Footer() {
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-left">
            <p>© {new Date().getFullYear()} The AGI School. All Rights Reserved.</p>
          </div>
          <div className="footer-right">
            <a href="mailto:hello@kaamyaab.com" className="email-link">hello@kaamyaab.in</a>
            <div className="social-icons">
              {/* <a href="https://linkedin.com/company/kaamyaab" target="_blank" rel="noopener noreferrer">
                <img src="/favicon/linkedin.ico" alt="LinkedIn" width="20" height="20" />
              </a> */}
              <a href="https://linkedin.com/company/kaamyaabin"><p>LinkedIn</p></a>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          footer {
            padding: 1rem 0;
            border-top: 1px solid #eaeaea;
          }
          .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          .footer-right {
            display: flex;
            align-items: center;
            gap: 2rem;
          }
          .email-link {
            color: #666;
            transition: color 0.3s ease;
          }
          .email-link:hover {
            color: #FF3131;
          }
          .social-icons {
            display: flex;
            gap: 1rem;
          }
          .social-icons a {
            opacity: 0.7;
            transition: opacity 0.3s ease;
          }
          .social-icons a:hover {
            opacity: 1;
          }
        `}</style>
      </footer>
    )
  }