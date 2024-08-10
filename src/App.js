import './App.css';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumallowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [passwordGen, setPassword] = useState("")

  const passwordGenerator = () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (numberAllowed) str += "!@#$%^&*()_+-=[]{}|;:`"

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={passwordGen}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button
            // onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
