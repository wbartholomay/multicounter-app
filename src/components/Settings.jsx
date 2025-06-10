import { Link } from 'react-router-dom';

function Settings() {

    const updateLocalStorage = (e, localVarName) => {
        e.preventDefault();
        localStorage.setItem(localVarName, e.target[0].value);
        console.log(localVarName, 'updated:', e.target[0].value);
        e.target[0].value = '';
    }


    //TODO: Update the input to have change button, then listen for next keypress after change button is clicked
    //like in control binding in a video game. This may be better suited for the counter page itself.
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
      <form onSubmit={(e) => updateLocalStorage(e, 'incrementKey')}>
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