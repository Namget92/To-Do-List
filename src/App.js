import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import styles from "./components/css.modules.css";
import Box from "./components/Box";

function App() {
  const [activities, setActivities] = useState(() => getActivities());

  function addActivity(title, cssClass) {
    switch (title.length) {
      case 0:
        break;
      default:
        setActivities((prevActivities) => {
          return [
            ...prevActivities,
            {
              id: Math.random().toString(),
              title: title,
              className: cssClass,
            },
          ];
        });
    }
  }

  function changeValue(cssClass) {
    const goal = JSON.parse(window.localStorage.getItem("myActivities"));
    console.log(goal[1].className);
  }

  function getActivities() {
    return JSON.parse(window.localStorage.getItem("myActivities")) || [];
  }

  function saveAll() {
    const data = JSON.stringify(activities);
    window.localStorage.setItem("myActivities", data);
  }
  function deleteAll() {
    localStorage.clear();
    const newActivities = [];
    setActivities(newActivities);
  }

  function removeActivity(id) {
    const newActivities = [...activities].filter(
      (activity) => activity.id !== id
    );
    setActivities(newActivities);
  }

  return (
    <>
      <h1>To Do List</h1>
      <Header deleteAll={deleteAll} saveAll={saveAll} add={addActivity} />
      <List
        changeValue={changeValue}
        removeActivity={removeActivity}
        activities={activities}
      />
    </>
  );
}

export default App;
