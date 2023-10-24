import { useState } from "react";
import WordList from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return WordList[Math.floor(Math.random() * WordList.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);
  return <h1>Hello World!</h1>;
}

export default App;
