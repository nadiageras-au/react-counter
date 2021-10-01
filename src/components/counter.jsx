import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = ["tag1", "tag2", "tag3"];

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  // const styles = {
  //   fontSize: "10px",
  //   fontWeight: "bold",
  // };

  const getBageclasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };

  const renderTags = () => {
    if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  return (
    <React.Fragment>
      {tags.maplength === 0 && "Тегов не найдено"}
      {renderTags()}
      <span className={getBageclasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
    </React.Fragment>
  );
};

export default Counter;
