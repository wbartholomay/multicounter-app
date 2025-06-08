import { useState, useEffect } from 'react'

function Counter(initialCount = 0, initialIncrementKey = ' ', initialIncrement = 1) {
  const [count, setCount] = useState(initialCount)
  const [incrementKey, setIncrementKey] = useState(initialIncrementKey); // Default to space key
  const [increment, setIncrement] = useState(initialIncrement);
  
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

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + increment)}>
        count is {count}
      </button>
    </div>
  )
}

export default Counter
