import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('counter');
    return savedCount ? parseInt(savedCount) : 0;
  });
  const [incrementKey, setIncrementKey] = useState(localStorage.getItem('incrementKey') || ' ');
  const [decrementKey, setDecrementKey] = useState('Backspace');
  const [increment, setIncrement] = useState(1);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log("Key pressed:", e.key, "Decrement Key:", decrementKey, "Increment Key:", incrementKey);
      if (e.key === incrementKey) {
        setCount(count => count + increment);
      }
      else if (e.key === decrementKey) {
        setCount(count => count - increment);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

      useEffect(() => {
    localStorage.setItem('counter', count);
  }, [count]);
  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
        <p>
          Increment - {increment}
        </p>
        <p>
          Increment Key - {incrementKey}
        </p>
        <p>
          Decrement Key - {decrementKey}
        </p>
        </div>
        <p>
          {count}
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={(e) => {
            setCount(count + increment);
            e.currentTarget.blur();
          }}>
            +
          </button>
          <button onClick={(e) => {
            setCount(count - increment);
            e.currentTarget.blur();
          }}>
            -
          </button>
          <button onClick={(e) => {
            setCount(0);
            e.currentTarget.blur();
          }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
