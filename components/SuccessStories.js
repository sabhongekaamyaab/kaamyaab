import { useState, useEffect } from 'react';
import Image from 'next/image';
import successStories from '../data/Stories'; // Assuming you have a data file for success stories



export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === successStories.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="success-stories-container">
      <div 
        className="success-stories-carousel"
        style={{
          transform: `translateX(-${currentIndex * 33.333}%)`
        }}
      >
        {successStories.map((story, idx) => (
          <div className="story-card" key={idx}>
            <div className="story-content">
              <div className="story-image">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  className="rounded-full"
                />
              </div>
              <div className="story-details">
                <div className="story-header">
                  <h3>{story.name}, {story.company}</h3>
                  {/* <p className="city">{story.city}</p> */}
                </div>
                <p className="feedback">"{story.feedback}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .success-stories-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 1rem 0;
        }
        .success-stories-carousel {
          display: flex;
          transition: transform 0.5s ease;
          margin: 0 -1rem;
        }
        .story-card {
          min-width: 33.333%;
          padding: 0 1rem;
          box-sizing: border-box;
        }
        .story-content {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          height: 100%;
          padding: 1.5rem;
        }
        .story-image {
          position: relative;
          width: 200px;
          height: 200px;
          flex-shrink: 0;
          margin: 0 auto 1rem;
        }
        .story-details {
          flex-grow: 1;
          text-align: center;
        }
        .story-header {
          margin-bottom: 1rem;
        }
        .story-details h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 0.25rem;
        }
        .company {
          color: #0070f3;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        .city {
          color: #666;
          font-size: 0.9rem;
        }
        .feedback {
          color: #666;
          font-style: italic;
          line-height: 1.6;
          font-size: 1.1rem;
        }
        @media (max-width: 1200px) {
          .story-card {
            min-width: 50%;
          }
        }
        
        @media (max-width: 768px) {
          .story-card {
            min-width: 100%;
          }
          .success-stories-carousel {
            margin: 0;
          }
          .story-card {
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}