import React, { useState } from "react";
import styles from "./css.modules.css";

function Box(props) {
  const [complete, setComplete] = useState("notComplete");
  const [i, setI] = useState(0);

  function handleComplete() {
    if (i % 2 === 0) {
      setComplete("complete");
      setI(i + 1);
      done();
    } else {
      setComplete("notComplete");
      setI(i + 1);
      notDone();
    }
  }

  function done() {
    props.changeValue("complete");
  }
  function notDone() {
    props.changeValue("notComplete");
  }

  function handleRemove() {
    const id = props.data.id;
    props.removeActivity(id);
  }
  return (
    <div className={props.data.className}>
      <p>{props.data.title}</p>
      <button onClick={handleComplete}>✔</button>
      <button onClick={handleRemove}>✖</button>
    </div>
  );
}

export default Box;
