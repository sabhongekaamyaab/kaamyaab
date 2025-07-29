import Layout from '../components/Layout'

export default function ThankYou() {
  return (
    <Layout title="Thank You | The AGI School">
      <div className="agi-leadgen-thankyou">
        <div className="agi-thankyou-splash">
          <span className="agi-thankyou-emoji" role="img" aria-label="Party Popper">🎉</span>
          <h2>Thank you for reaching out!</h2>
          <p>We've received your details.<br />Our team will get in touch soon.</p>
        </div>
        <style jsx>{`
          .agi-leadgen-thankyou {
            background: #F7F8EF;
            border-radius: 16px;
            border: 2px solid #E9eae0;
            box-shadow: 0 4px 24px rgba(0,0,0,0.07);
            padding: 2rem;
            max-width: 480px;
            margin: 2rem auto;
            text-align: center;
            font-family: 'Instrument Serif', serif;
          }
          .agi-thankyou-emoji {
            font-size: 3rem;
            display: block;
            margin-bottom: 1rem;
          }
          .agi-thankyou-splash h2 {
            color: #0E4714;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
          }
          .agi-thankyou-splash p {
            color: #333;
            font-size: 1.1rem;
            margin-bottom: 0;
          }
        `}</style>
      </div>
    </Layout>
  )
}