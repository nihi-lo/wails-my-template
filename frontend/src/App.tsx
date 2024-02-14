import { Greet } from "@backend/go/main/App";
import { ChangeEvent, useState } from "react";

export default function App() {
  const [resultText, setResultText] = useState(
    "Please enter your name below 👇",
  );
  const [name, setName] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClickGreet = () => {
    void Greet(name).then((result: string) => setResultText(result));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[rgba(27,38,54,1)]">
      <div className="container flex flex-col items-center justify-center gap-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Hello <span className="text-[#DF0000]">Wails</span> App
        </h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-white">{resultText}</div>
          <div className="flex items-center justify-center gap-2">
            <input
              className="rounded px-2"
              type="text"
              name="input"
              autoComplete="off"
              onChange={handleChangeInput}
            />
            <button
              className="rounded border border-white px-2 text-white transition-colors hover:bg-white/25"
              onClick={handleClickGreet}
            >
              Greet
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
