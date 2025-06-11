function SetterButton({ localVarName, buttonText, setState }) {
    const listenForInputAndUpdateLocalStorage = (varName) => {
        const handleOneTimeKeyPress = (e) => {
        localStorage.setItem(varName, e.key);
        
        
        setState(e.key);
        console.log("Setting ", varName, "to ", e.key)
        
        window.removeEventListener('keydown', handleOneTimeKeyPress);
        };

        console.log("Listening for key press to set", varName);
        
        window.addEventListener('keydown', handleOneTimeKeyPress);
    }

    return <button onClick={(e) => {
          listenForInputAndUpdateLocalStorage(localVarName)
          e.currentTarget.blur();
        }}>
          {buttonText}
        </button>
}
export default SetterButton