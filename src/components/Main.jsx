import Die from "./Die";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function Main() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    setDice(generateAllNewDice());
  }

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      hold={() => hold(dieObj.id)}
      key={dieObj.id}
      isHeld={dieObj.isHeld}
      value={dieObj.value}
    />
  ));

  return (
    <main className="bg-blue-950 justify-center items-center min-h-screen p-5 flex flex-col">
      <div className="bg-gray-50 rounded-md w-full max-w-100 justify-evenly flex-1 max-h-100 flex flex-col items-center">
        <div className="grid grid-cols-5 gap-5">{diceElements}</div>
        <button
          className="h-12.5 w-25 rounded-sm shadow-[0px_2px_2px_rgba(0,0,0,0.15)] bg-[#5035FF] text-white text-[1.2rem] cursor-pointer"
          onClick={rollDice}
        >
          Roll
        </button>
      </div>
    </main>
  );
}
