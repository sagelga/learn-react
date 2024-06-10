import React, { useState } from "react";

const Greeting = () => {
  const [isChanged, setIsChanged] = useState(false);

  const changeTextHandler = () => {
    setIsChanged(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!isChanged && <p>It's good to see you!</p>}
      {isChanged && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
