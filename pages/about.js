import Layout from '../components/Layout'
import EmailForm from '../components/EmailForm'

export default function About() {
  return (
    <Layout title="About | The AGI School India">
      <div className="about-container">
        <h1>About Us</h1>
        
        <section>
          <h2>Our Mission</h2>
          <p>
            At The AGI School, we believe that everyone has the potential to be extraordinary.
            Our mission is to empower individuals to achieve their goals and live the Great Indian dream.
            
            <br></br><br></br>
            We do this by providing students with an environment for extraordinary learning, growth and development.
            We are committed to helping students develop the skills and knowledge they need to succeed in their careers.
            <br></br><br></br>
            We are a team of passionate individuals who are dedicated to making a difference in the lives of students.
  
            <br></br><br></br>
            We are constantly looking for new and innovative ways to improve our services and provide the best possible experience for our students.
            If you feel the same way, we would love to hear from you!
            <br></br><br></br>
            
          </p>
        </section>
        <section>
            <h2>Why The AGI School?</h2>
            <p>
            1. Indian colleges' curriculum is aged and is structured around incorrect and dated industry requirements. It's not their fault, it's the system.
            <br></br><br></br>
            2. There's a huge gap between what students learn in college and what they need to know to get a job.
            <br></br><br></br>
            3. The tech industry is changing rapidly, and colleges are struggling to keep up. As a result, students are graduating without the skills they need to succeed in their careers.
            <br></br><br></br>
            At The AGI School, we are bridging this gap by providing students with the skills and knowledge they need to succeed in their careers. 
            <br></br><br></br>
            Ready to start your journey with us? <br/><br/>
            <button className="cta-button">
              <a href="/lead-gen">Join The AGI School</a>
            </button>
            <br></br><br></br>
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
            <p><strong>Email:</strong> hello@theagischool.com (our average response time is 5 mins)</p>
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
        .cta-button {
          background-color: #0e4714;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </Layout>
  )
}