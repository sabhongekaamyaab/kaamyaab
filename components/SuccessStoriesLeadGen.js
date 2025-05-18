import { useState } from 'react';
import Image from 'next/image';
import successStories from '../data/Stories';

export default function SuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevStory = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
    );
  };

  const currentStory = successStories[currentIndex];

  return (
    <div className="success-stories">
      <div className="story-card">
        <div className="story-content">
          <div className="story-image">
            <Image
              src={currentStory.image}
              alt={currentStory.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="story-details">
            <div className="story-header">
              <h3>{currentStory.name}</h3>
              <p className="company">{currentStory.company}</p>
              <p className="city">{currentStory.city}</p>
            </div>
            <p className="feedback">"{currentStory.feedback}"</p>
          </div>
        </div>
        
        <div className="navigation">
          <button onClick={prevStory} className="nav-button" aria-label="Previous story">
            ←
          </button>
          <div className="dots">
            {successStories.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
          <button onClick={nextStory} className="nav-button" aria-label="Next story">
            →
          </button>
        </div>
      </div>

      <style jsx>{`
        .success-stories {
          margin-top: 1rem;
        }
        .story-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .story-content {
          display: flex;
          gap: 2rem;
          padding: 2rem;
        }
        .story-image {
          position: relative;
          width: 120px;
          height: 120px;
          flex-shrink: 0;
        }
        .story-details {
          flex-grow: 1;
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
        .navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: #f9f9f9;
          border-top: 1px solid #eaeaea;
        }
        .nav-button {
          background: white;
          border: 1px solid #eaeaea;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }
        .nav-button:hover {
          background: #f0f0f0;
          border-color: #0070f3;
          color: #0070f3;
        }
        .dots {
          display: flex;
          gap: 0.5rem;
          margin: 0 1rem;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ddd;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dot.active {
          background: #0070f3;
          transform: scale(1.2);
        }
        @media (max-width: 768px) {
          .story-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1.5rem;
          }
          .story-image {
            width: 100px;
            height: 100px;
          }
          .story-header {
            margin-bottom: 0.5rem;
          }
          .feedback {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}