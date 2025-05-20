import { useState, useEffect } from 'react';

export default function PlacementStats() {
  const [counters, setCounters] = useState({
    students: 0,
    package: 0,
    average: 0,
    percentage: 0
  });

  useEffect(() => {
    const targets = {
      students: 500,    // Total students placed
      package: 75,      // Highest package in LPA
      average: 18,      // Average package in LPA
      percentage: 95    // Placement percentage
    };
    
    const duration = 2000; // 2 seconds animation
    const steps = 50;
    const stepDuration = duration / steps;

    const incrementCounters = () => {
      setCounters(prev => ({
        students: Math.min(prev.students + Math.ceil(targets.students / steps), targets.students),
        package: Math.min(prev.package + (targets.package / steps), targets.package),
        average: Math.min(prev.average + (targets.average / steps), targets.average),
        percentage: Math.min(prev.percentage + (targets.percentage / steps), targets.percentage)
      }));
    };

    const interval = setInterval(incrementCounters, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
        <div className="metrics-grid">
          <div className="metric-card">
            <h3>{counters.students}+</h3>
            <p>Students Placed</p>
          </div>
          <div className="metric-card">
            <h3>₹{Math.round(counters.package)}L</h3>
            <p>Highest Package</p>
          </div>
          <div className="metric-card">
            <h3>₹{Math.round(counters.average)}L</h3>
            <p>Average Package</p>
          </div>
          <div className="metric-card">
            <h3>{Math.round(counters.percentage)}%</h3>
            <p>Placement Rate</p>
          </div>
      
      <style jsx>{`
        .metrics {
          padding: 2rem 0;
          background-color: #f7f9fc;
          margin: -2rem 0 2rem 0;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .metric-card {
          text-align: center;
          padding: 1.5rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .metric-card:hover {
          transform: translateY(-5px);
        }

        .metric-card h3 {
          font-size: 2.5rem;
          color: #FF3131;
          margin: 0 0 0.5rem 0;
          font-weight: 700;
        }

        .metric-card p {
          font-size: 1.1rem;
          color: #666;
          margin: 0;
        }

        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .metric-card h3 {
            font-size: 2rem;
          }
        }
      `}</style>
      </div>
  );
}