import Die from "./Die";
import { useRef, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function Main() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null);

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
        ),
      );
    } else {
      setDice(generateAllNewDice());
    }
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
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <div className="bg-gray-50 pt-5 rounded-md w-full max-w-100 justify-evenly flex-1 max-h-100 flex flex-col items-center">
        <h1 className="text-3xl font-bold">Tenzies</h1>
        <p className="px-6 text-center mb-6">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="grid grid-cols-5 mb-5 gap-5">{diceElements}</div>
        <button
          ref={buttonRef}
          className="h-12.5 mb-5 w-25 rounded-sm shadow-[0px_2px_2px_rgba(0,0,0,0.15)] bg-[#5035FF] text-white text-[1.2rem] cursor-pointer"
          onClick={rollDice}
        >
          {gameWon ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  );
}
