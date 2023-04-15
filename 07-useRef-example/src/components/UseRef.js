import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "Monica";
  };
  return (
    <div>
      <h1>UseRef when you want to manipulate the DOM</h1>
      <input type="text" placeholder="enter something here" ref={inputRef} />
      <button onClick={onClick}>clear text</button>
    </div>
  );
}

export default UseRef;
