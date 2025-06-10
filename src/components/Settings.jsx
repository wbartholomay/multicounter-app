import { Link } from 'react-router-dom';

function Settings() {

    const updateIncrementKey = (e) => {
        e.preventDefault();
        localStorage.setItem('incrementKey', e.target[0].value);
        e.target[0].value = '';
        console.log('Increment key updated:', e.target[0].value);
    }


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
      <form onSubmit={updateIncrementKey}>
        <input
          type="text"
          placeholder="Increment Key"
          style={{ marginBottom: '10px', width: '20%' }}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Settings;