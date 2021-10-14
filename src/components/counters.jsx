import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 5, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (counterId) => {
    console.log(counterId);
    const newCounters = counters.map((c) =>
      c.id === counterId ? c.value + 1 : c.value
    );
    console.log("newCounters", newCounters);
    setCounters(newCounters);
  };

  // const handleDecrement = (counterId) => {
  //   console.log(counterId);
  //   const newCounters = counters.map((counter) =>
  //     console.log("counter.value", counter.value)
  //   );
  //   setCounters(newCounters);
  // };

  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          //onDecrement={handleDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
