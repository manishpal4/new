import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  cont[(charactor, setcharactor)] = useState(false);
  const [symbol, setsymbol] = useState(false);
  const [password, setpassword] = useState("");

  const passwordgen = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (charactor) str += "012345789";
    if (symbol) str += "~!@#$%&*()_+";

    for (let i = 1; i <= array; i++) {
      let char = Math.floor(Math.randon() * str.length + 1);
      pass = str.charAt(char);
    }
    setpassword(pass);
  }, [length, charactor, symbol, password]);

  return (
    <>
      <div className="w-full w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-grey-700">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-ful py-1 px-3"
            placeholder='"Password'
            readOnly
          />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
