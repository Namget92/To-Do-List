import React, { useState } from "react";
import styles from "./css.modules.css";

function Box(props) {
  const [complete, setComplete] = useState("");
  const [i, setI] = useState(0);

  function handleComplete() {
    if (props.data.className === "notComplete") {
      setComplete("complete");
      setI(i + 1);
      props.changeValue("complete", props.data.id);
    } else {
      setComplete("notComplete");
      setI(i + 1);
      props.changeValue("notComplete", props.data.id);
    }
  }

  function handleRemove() {
    const id = props.data.id;
    props.removeActivity(id);
  }
  return (
    <div className={props.data.className}>
      <h3>{props.data.title}</h3>
      <button onClick={handleComplete}>✔</button>
      <button onClick={handleRemove}>✖</button>
    </div>
  );
}

export default Box;
