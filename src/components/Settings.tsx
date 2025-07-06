import { Link } from 'react-router-dom';
import SetterButton from './SetterButton';
import EditableInput from './EditableInput';

const Settings: React.FC = () => {
  const updateLocalStorage = (e: React.FormEvent<HTMLFormElement>, localVarName: string) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const input = target[0] as HTMLInputElement;
    localStorage.setItem(localVarName, input.value);
    console.log(localVarName, 'updated:', input.value);
    input.value = '';
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
      <EditableInput
        value={Number(localStorage.getItem('increment')) || 1}
        label="increment"
        onSave={(value) => localStorage.setItem('increment', String(value))}
      />
      <SetterButton
        localVarName="incrementKey"
        buttonText="Set Increment Key"
      />
      <SetterButton
        localVarName="decrementKey"
        buttonText="Set Decrement Key"
      />
    </div>
  );
}

export default Settings;
