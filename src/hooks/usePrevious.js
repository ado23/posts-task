import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  console.log("🚀 ~ file: usePrevious.js:4 ~ usePrevious ~ value", value);
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  console.log("ref.current", ref.current);

  return ref.current;
};

export default usePrevious;
