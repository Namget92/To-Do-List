import React, { useState } from "react";

function Header(props) {
  const [name, setName] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
  }

  return (
    <header>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Write Here"
        value={name}
      />
      <button onClick={() => props.add(name)}>Add</button>
    </header>
  );
}

export default Header;
