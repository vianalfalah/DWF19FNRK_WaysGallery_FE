import React from "react";

export default function test() {
  return (
    <div>
      <input type="text" name="name" onChange={() => handleChange(e)} />
      <input type="number" age="age" onChange={() => handleChange(e)} />
    </div>
  );
}
