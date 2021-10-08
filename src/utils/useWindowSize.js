import { useState, useEffect } from "react";

const useWindowSize = () => {
  const isWindow = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: isWindow ? 1200 : window.innerWidth,
    height: isWindow ? 800 : window.innerHeight,
  });

  const changeWindowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize