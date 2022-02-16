import React, { useState, useEffect, useRef } from "react";

function Header(props) {
  const [name, setName] = useState("");
  let input = document.querySelector("input");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      if (input.value.length > 0) {
        props.add(name, "notComplete");
        clearInput();
      }
    }
  }

  function clearInput() {
    if (input.value.length > 0) {
      input.value = "";
    }
  }
  function handleClick() {
    if (input.value.length > 0) {
      props.add(name, "notComplete");
      clearInput();
    }
  }

  return (
    <header>
      <input
        onKeyPress={handleKeyPress}
        ref={inputRef}
        onChange={handleChange}
        type="text"
      />
      <button onClick={handleClick}>Add</button>
      <button
        onClick={() => {
          props.saveAll();
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          props.deleteAll();
        }}
      >
        Delete
      </button>
    </header>
  );
}

export default Header;
