/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const headingRef = useRef();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  useEffect(() => {
    const word = headingRef.current.innerText;
    const letter = word.split("");
    console.log(letter.length);
    let iterations = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      headingRef.current.innerText = headingRef.current.innerText
        .split("")
        .map((lett, index) => {
          if (index < iterations) {
            return letter[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (iterations >= letter.length) {
        clearInterval(interval);
      }
      iterations += 1 / 5;
    }, 30);

    return () => {};
  }, []);

  return (
    <div className="relative flex h-screen flex-1 bg-black text-white">
      <h1
        ref={headingRef}
        className="t absolute top-[40%] left-[30%] mx-0 gap-8   text-center  text-6xl font-bold"
      >
        Wakanda Forever
      </h1>
    </div>
  );
}

export default App;
