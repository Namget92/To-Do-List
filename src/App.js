import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useState([]);

  function addActivity(title) {
    setActivities((prevActivities) => {
      return [
        ...prevActivities,
        { id: Math.random().toString(), title: title },
      ];
    });
  }

  return (
    <>
      <h1>To Do List</h1>
      <Header add={addActivity} />
      <List />
    </>
  );
}

export default App;
