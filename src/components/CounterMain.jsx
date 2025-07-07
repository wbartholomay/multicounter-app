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

    const [nextId, setNextId] = useState(
        localStorage.getItem("nextId")
            ? parseInt(localStorage.getItem("nextId"))
            : 2
    );

    useEffect(() => {
        localStorage.setItem("counters", JSON.stringify(counters));
    }, [counters]);

    useEffect(() => {
        localStorage.setItem("nextId", nextId);
    }, [nextId]);

    const updateCounter = (id, updates) => {
        setCounters((counters) =>
            counters.map((counter) =>
                counter.id === id ? { ...counter, ...updates } : counter
            )
        );
    };

    const deleteCounter = (id) => {
        setCounters((counters) =>
            counters.filter((counter) => counter.id !== id)
        );
    };

    const addCounter = () => {
        const newCounter = {
            id: nextId,
            count: 0,
            incrementKey: " ",
            decrementKey: "Backspace",
            increment: 1,
        };
        setNextId((prevId) => prevId + 1);
        setCounters((prevCounters) => [...prevCounters, newCounter]);
    };

    return (
        <div>
            <div style={{ textAlign: "center", margin: "20px" }}>
                <h1 className="text-3xl font-bold underline">
                    Multi Counter App
                </h1>
                <button
                    onClick={addCounter}
                    style={{ padding: "10px 20px", fontSize: "16px" }}
                >
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
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onUpdate={updateCounter}
                        onDelete={deleteCounter}
                    />
                ))}
            </div>
        </div>
    );
}

export default CounterMain;
