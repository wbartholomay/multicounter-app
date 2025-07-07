import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";

function Counter({ counter, onUpdate, onDelete }) {
    const [count, setCount] = useState(counter.count);
    const [isEditing, setIsEditing] = useState(false);
    const [editValues, setEditValues] = useState({
        increment: counter.increment,
        incrementKey: counter.incrementKey,
        decrementKey: counter.decrementKey,
    });

    const toggleEditing = () => {
        if (isEditing) {
            onUpdate && onUpdate(counter.id, editValues);
        } else {
            setEditValues({
                increment: counter.increment,
                incrementKey: counter.incrementKey,
                decrementKey: counter.decrementKey,
            });
        }
        setIsEditing(!isEditing);
    };

    const incrementCount = () => {
        console.log("incrementing count");
        setCount(count + counter.increment);
        onUpdate && onUpdate(counter.id, { count: count + counter.increment });
    };

    const decrementCount = () => {
        console.log("decrementing count");
        setCount(count - counter.increment);
        onUpdate && onUpdate(counter.id, { count: count - counter.increment });
    };

    const resetCount = () => {
        console.log("resetting count");
        setCount(0);
        onUpdate && onUpdate(counter.id, { count: 0 });
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            console.log(
                "Key pressed:",
                e.key,
                "Decrement Key:",
                counter.decrementKey,
                "Increment Key:",
                counter.incrementKey
            );
            if (e.key === counter.incrementKey) {
                incrementCount();
            } else if (e.key === counter.decrementKey) {
                decrementCount();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [counter.incrementKey, counter.decrementKey, counter.count]);

    return (
        <div className="card">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "30px",
                        justifyContent: "center",
                    }}
                >
                    {isEditing ? (
                        <>
                            <input
                                type="number"
                                value={editValues.increment}
                                onChange={(e) =>
                                    setEditValues((prev) => ({
                                        ...prev,
                                        increment: parseInt(e.target.value),
                                    }))
                                }
                            />
                            <input
                                value={editValues.incrementKey}
                                onChange={(e) =>
                                    setEditValues((prev) => ({
                                        ...prev,
                                        incrementKey: e.target.value,
                                    }))
                                }
                            />
                            <input
                                value={editValues.decrementKey}
                                onChange={(e) =>
                                    setEditValues((prev) => ({
                                        ...prev,
                                        decrementKey: e.target.value,
                                    }))
                                }
                            />
                        </>
                    ) : (
                        <>
                            <p>Increment - {counter.increment}</p>
                            <p>Increment Key - {counter.incrementKey}</p>
                            <p>Decrement Key - {counter.decrementKey}</p>
                        </>
                    )}
                    <button
                        onClick={(e) => {
                            toggleEditing();
                            e.currentTarget.blur();
                        }}
                    >
                        {isEditing ? "Save" : "Edit"}
                    </button>
                    <DeleteButton counter={counter} onDelete={onDelete} />
                </div>
                <p>{count}</p>
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                    }}
                >
                    <button
                        onClick={(e) => {
                            incrementCount();
                            e.currentTarget.blur();
                        }}
                    >
                        +
                    </button>
                    <button
                        onClick={(e) => {
                            decrementCount();
                            e.currentTarget.blur();
                        }}
                    >
                        -
                    </button>
                    <button
                        onClick={(e) => {
                            resetCount();
                            e.currentTarget.blur();
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
