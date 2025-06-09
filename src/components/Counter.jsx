import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('counter');
    return savedCount ? parseInt(savedCount) : 0;
  });
  const [incrementKey, setIncrementKey] = useState(' ');
  const [increment, setIncrement] = useState(1);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log("Key pressed:", e.key);
      if (e.key === incrementKey) {
        setCount(count => count + increment);
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
      <button onClick={() => setCount((count) => count + increment)}>
        count is {count}
      </button>
    </div>
  )
}

export default Counter
