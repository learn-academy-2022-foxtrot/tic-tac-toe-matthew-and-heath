import React, { useState } from "react";
import Squares from "./components/Squares";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  // const [clickedSquare, setClickedSqaure] = useState
  const [currentChar, setCurrentChar] = useState("X");
  // game logic that switches between "x" and "o" as players one and two and returns the character in the clicked square.
  const handleGamePlay = (clickedSquare) => {
    if (squares[clickedSquare] === null) {
      squares[clickedSquare] = currentChar;
      setSquares(squares);
      setCurrentChar(currentChar === "X" ? "O" : "X");
    }

    const winningPlay = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  };
  // Function to reset the board to its original state
  const handleReset = () => {
    setSquares(Array(9).fill(null));
  };

  const winDetector = (squares) => {
    if (squares[(0, 1, 2)] === "X" || "O") alert("You Win!");
  };
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board-game">
        {squares.map((square, index) => {
          return (
            <Squares
              square={square}
              index={index}
              handleGamePlay={handleGamePlay}
            />
          );
        })}
      </div>
      <div className="win-detector"></div>
      <button onClick={handleReset}>Play Again</button>
    </>
  );
};

export default App;
