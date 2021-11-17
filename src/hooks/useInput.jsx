import { useState } from "react";

const useInput = (initialvaluer = "") => {
  const [input, setInput] = useState(initialvaluer);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return [input, handleChange];
};

export default useInput;
