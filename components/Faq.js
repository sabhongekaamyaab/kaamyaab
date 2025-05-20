import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "What is the duration of your courses?",
    answer: "Our courses are designed for 1 year, with structured weekly sessions and hands-on projects. The curriculum is paced to ensure thorough learning while accommodating students' academic schedules."
  },
  {
    id: 2,
    question: "How are the classes conducted?",
    answer: "Classes are conducted online through live sessions with industry experts. We also provide recorded sessions, practice materials, and 1-on-1 mentorship to ensure comprehensive learning."
  },
  {
    id: 3,
    question: "What kind of placement support do you provide?",
    answer: "We offer end-to-end placement support including resume building, mock interviews, coding practice sessions, and direct connections with our hiring partners from top tech companies."
  },
  {
    id: 4,
    question: "Can institutes customize the curriculum?",
    answer: "Yes, we work closely with institutes to tailor our curriculum to their specific needs while maintaining our core focus on industry-relevant skills and practical learning."
  },
  {
    id: 5,
    question: "What are the prerequisites for students?",
    answer: "Students should have basic programming knowledge and a strong willingness to learn. Our courses are designed for both beginners and intermediate learners."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="faq-item">
            <button
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span className="icon">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .faq-section {
          padding: 4rem 0;
          max-width: 800px;
          margin: 0 auto;
        }

        h2 {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 2rem;
          color: #333;
        }

        .faq-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          border: 1px solid #eaeaea;
          border-radius: 8px;
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          text-align: left;
          padding: 1.5rem;
          background: white;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.1rem;
          color: #333;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          background: #f9f9f9;
        }

        .faq-question.active {
          background: #f0f7ff;
          color: #FF3131;
        }

        .icon {
          font-size: 1.5rem;
          font-weight: 300;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          padding: 0 1.5rem;
          color: #666;
          line-height: 1.6;
        }

        .faq-answer.active {
          max-height: 300px;
          padding: 1.5rem;
          background: white;
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 2rem 1rem;
          }

          .faq-question {
            padding: 1rem;
            font-size: 1rem;
          }

          .faq-answer.active {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
}