import React from "react";
import Box from "./Box";
import styles from "./css.modules.css";

function List(props) {
  return (
    <main>
      {props.activities.map((activity) => {
        return (
          <Box
            key={activity.id}
            data={activity}
            removeActivity={props.removeActivity}
            changeValue={props.changeValue}
          />
        );
      })}
    </main>
  );
}

export default List;
