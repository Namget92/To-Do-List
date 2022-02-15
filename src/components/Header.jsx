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
      props.add(name, "notComplete");
      clearInput();
    }
  }

  function clearInput() {
    if (input.value.length > 0) {
      input.value = "";
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
      <button
        onClick={() => {
          props.add(name, "notComplete");
          clearInput();
        }}
      >
        Add
      </button>
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
