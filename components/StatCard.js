export default function StatCard({ stat, label, description }) {
  return (
    <div className="stat-card">
      <div className="stat-number">{stat}</div>
      <h3>{label}</h3>
      <p>{description}</p>
      <style jsx>{`
        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  )
}