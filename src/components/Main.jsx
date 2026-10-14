import Die from "./Die";
import { useState } from "react";

export default function Main() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  const diceElements = dice.map((num) => <Die value={num} />);

  return (
    <main className="bg-blue-950 justify-center items-center min-h-screen p-5 flex flex-col">
      <div className="bg-gray-50 rounded-md w-full max-w-100 flex-1 max-h-100 flex items-center justify-center">
        <div className="grid grid-cols-5 gap-5">{diceElements}</div>
      </div>
    </main>
  );
}
