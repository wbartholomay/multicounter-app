import { useState, useEffect } from 'react'

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(() => {
    const savedCount = localStorage.getItem('counter');
    return savedCount ? parseInt(savedCount) : 0;
  });
  const [incrementKey] = useState<string>(localStorage.getItem('incrementKey') || ' ');
  const [decrementKey] = useState<string>(localStorage.getItem('decrementKey') || 'Backspace');
  const [increment] = useState<number>(Number(localStorage.getItem('increment')) || 1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(typeof increment)
      console.log("Key pressed:", e.key, "Decrement Key:", decrementKey, "Increment Key:", incrementKey);
      if (e.key === incrementKey) {
        setCount(count => count + increment);
      }
      else if (e.key === decrementKey) {
        setCount(count => count - increment);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [incrementKey, decrementKey, increment]);

  useEffect(() => {
    localStorage.setItem('counter', String(count));
  }, [count]);
  
  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
          <p>Increment - {increment}</p>
          <p>Increment Key - {incrementKey}</p>
          <p>Decrement Key - {decrementKey}</p>
        </div>
        <p>{count}</p>
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
  );
}

export default Counter;
