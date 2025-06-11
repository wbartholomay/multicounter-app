import { SetterButtonProps } from '../types'

const SetterButton: React.FC<SetterButtonProps> = ({ localVarName, buttonText }) => {
  const listenForInputAndUpdateLocalStorage = (varName: string) => {
    const handleOneTimeKeyPress = (e: KeyboardEvent) => {
      localStorage.setItem(varName, e.key);
      window.removeEventListener('keydown', handleOneTimeKeyPress);
    };

    window.addEventListener('keydown', handleOneTimeKeyPress);
  }

  return (
    <button onClick={(e) => {
      listenForInputAndUpdateLocalStorage(localVarName);
      e.currentTarget.blur();
    }}>
      {buttonText}
    </button>
  );
}

export default SetterButton;
