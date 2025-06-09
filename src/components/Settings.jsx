import { Link } from 'react-router-dom';

function Settings() {
  return (
    <div className="settings">
      <Link
        to="/"
        style={{
          display: 'inline-block',
          textDecoration: 'none',
          padding: '8px 16px',
          backgroundColor: '#1a1a1a',
          color: '#fff',
          borderRadius: '4px',
          marginBottom: '20px',
          fontSize: '14px',
        }}
      >
        ← Back to Counter
      </Link>
      <h2>Settings</h2>
      <p>Settings will be implemented in the future.</p>
    </div>
  );
}

export default Settings;