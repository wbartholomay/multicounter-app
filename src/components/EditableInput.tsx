import { useState } from 'react'
import { EditableInputProps } from '../types'

const EditableInput: React.FC<EditableInputProps> = ({ value, label, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    setIsEditing(false);
    const inputValAsNumber = Number(inputValue);
    if (!isNaN(inputValAsNumber)) {
      onSave(inputValAsNumber);
    }
  };

  return (
    <div>
      <label>{label}:</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        readOnly={!isEditing}
      />
      <button onClick={() => isEditing ? handleSave() : setIsEditing(true)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}

export default EditableInput;
