import { useState } from 'react'

function EditableInput({ value, label, onSave}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const handleSave = () => {
    setIsEditing(false);
    const inputValAsInt = parseInt(inputValue)
    onSave(inputValAsInt);
  };
  return (
    <div>
      <label>{label}:</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        readOnly={!isEditing}
      />
      <button onClick={() => isEditing ? handleSave() : setIsEditing(true)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}

export default EditableInput;
