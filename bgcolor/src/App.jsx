import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom=12 inset-x-0 p-2 text-white">
          <div className="flex flex-wrap justify-center bg-white text-black rounded-3xl gap-3 p-3 ">
            <button className=" px-4 py-1 rounded-xl" style={{backgroundColor: "red"}}
             onClick={() => setColor("red")} >
              red
            </button>

            <button className=" px-4 py-1 rounded-xl" style={{backgroundColor: "green"}}
             onClick={() => setColor("green")} >
              Green
            </button>

            <button className=" px-4 py-1 rounded-xl text-white" style={{backgroundColor: "Black"}}
             onClick={() => setColor("Black")} >
              Black
            </button>

            <button className=" px-4 py-1 rounded-xl" style={{backgroundColor: "Blue"}}
             onClick={() => setColor("Blue")} >
              Blue
            </button>

            <button className=" px-4 py-1 rounded-xl" style={{backgroundColor: "skyblue"}}
             onClick={() => setColor("skyblue")} >
              skyblue
            </button>

            <button className=" px-4 py-1 rounded-xl" style={{backgroundColor: "Yellow"}}
             onClick={() => setColor("Yellow")} >
              Yellow
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
