import React from "react";

const Counter = (props) => {
  //const [value, setValue] = useState(props.value);
  //const tags = ["tag1", "tag2", "tag3"];

  const formValue = () => {
    return props.value === 0 ? "Ноль" : props.value;
  };

  // const styles = {
  //   fontSize: "10px",
  //   fontWeight: "bold",
  // };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += props.value === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <div>
      <h4>{props.name}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={() => props.onIncrement(props.id)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDecrement(props.id)}
        className="btn btn-secondary btn-sm m-2"
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
