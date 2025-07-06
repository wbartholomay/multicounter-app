import { useEffect, useState } from "react";
import Counter from "./Counter";

function CounterMain() {
    const [counters, setCounters] = useState(() => {
        const savedCounters = localStorage.getItem("counters");
        return savedCounters
            ? JSON.parse(savedCounters)
            : [
                  {
                      id: 1,
                      count: 0,
                      incrementKey: " ",
                      decrementKey: "Backspace",
                      increment: 1,
                  },
              ];
    });

    useEffect(() => {
        localStorage.setItem("counters", JSON.stringify(counters));
    }, [counters]);

    const updateCounter = (id, updates) => {
        setCounters((counters) =>
            counters.map((counter) =>
                counter.id === id ? { ...counter, ...updates } : counter
            )
        );
    };

    return (
        <div>
            <div style={{ textAlign: "center", margin: "20px" }}>
                <h1>Multi Counter App</h1>
                <button style={{ padding: "10px 20px", fontSize: "16px" }}>
                    Add New Counter
                </button>
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {counters.map((counter) => (
                    <Counter counter={counter} onUpdate={updateCounter} />
                ))}
            </div>
        </div>
    );
}

export default CounterMain;
