import Layout from '../components/Layout'
import EmailForm from '../components/EmailForm'

export default function About() {
  return (
    <Layout title="Manifesto | Kaamyaab India">
      <div className="about-container">
        <h1>Our Manifesto</h1>
        
        <section>
          <h2>Our Mission</h2>
          <p>
            At Kaamyaab, we believe that businesses shouldn't be held back by repetitive tasks and inefficient workflows. Our mission is to redefine productivity through AI-driven automation, helping companies reduce manpower dependency and scale effortlessly.
            <br></br><br></br>
            With a deep understanding of technology and business needs, we craft custom automation solutions that eliminate bottlenecks, optimize operations, and unlock new growth opportunities. From workflow automation to AI-powered decision-making, we transform the way businesses work—so they can focus on what truly matters.
            
          </p>
        </section>
        <section>
            <h2>Why Kaamyaab?</h2>
            <p>
            1. Tailor-made AI solutions – built specifically for your business needs. <br></br>
            2. Seamless integration – works effortlessly with your existing systems. <br></br>
            3. Scalability & efficiency – automate once, benefit forever. <br></br>
            <br></br>
            Let's build the future of work—one automation at a time.
            <br></br><br></br>
            Ready to automate? <a href='https://forms.gle/1pcVh6CpeSqrNfUM6'>Let's talk! 🚀</a>
          </p>
        </section>
        
        {/* <section>
          <h2>Leadership</h2>
          <p>
            Our team consists of experienced professionals who are passionate about what they do.
            We bring together diverse skills and perspectives to deliver the best results for
            our clients.
          </p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Hardeep Singh Mehra</h3>
              <p>Founder & CEO</p>
            </div>
          </div>
        </section> */}
        
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or would like to learn more about our services,
            please don't hesitate to get in touch.
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> hello@kaamyaab.in (our average response time is 5 mins)</p>
            <p><strong>Phone:</strong> +91 70530 20016 (for Indian customers only)</p>
          </div>
        </section>

        {/* <div className="email-form-container"> */}
          <EmailForm />
        {/* </div> */}
        
      </div>
      
      <style jsx>{`
        .about-container {
          max-width: 800px;
          margin: 0 auto;
        }
        section {
          margin-bottom: 3rem;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .team-member {
          text-align: center;
        }
        .member-photo {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: #eaeaea;
          margin: 0 auto 1rem;
        }
        .contact-info {
          background-color: #f9f9f9;
          padding: 1.5rem;
          border-radius: 8px;
          margin-top: 1rem;
        }
      `}</style>
    </Layout>
  )
}