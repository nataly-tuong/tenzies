tenzies

🔗 https://tenzies-kohl-xi.vercel.app/

a dice game. roll 10 dice and keep clicking until they all land on the same number, each die you click locks in whatever it's showing. tracks your rolls so you can try to beat your own count.

what i learned

- holding an array of dice in state and updating one item without mutating the rest
- the function form of setState: setDice(prev => ...) when the new value depends on the old one
- toggling a single property (held) on individual objects inside an array
- conditional rendering for the win state, checking if every die is held and matching
- clean render logic: derive the win condition from state instead of storing it separately

built with

react, tailwind, vite
