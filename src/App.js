import "./App.css";
import Cell from "./components/Cell";

import { useState } from "react";

function App() {
  // master array of objects for the connect four game board
  const _gameBoard = [
    [
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
    ],
    [
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
    ],
    [
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
    ],
    [
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
    ],
    [
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
      { value: "", clickable: false },
    ],
    [
      { value: "", clickable: true },
      { value: "", clickable: true },
      { value: "", clickable: true },
      { value: "", clickable: true },
      { value: "", clickable: true },
      { value: "", clickable: true },
      { value: "", clickable: true },
    ],
  ];

  const [gameBoard, setGameBoard] = useState(_gameBoard);
  const [turn, setTurn] = useState("R");

  const checkForWin = () => {
    // check for horizontal win
    for (let row = 0; row < gameBoard.length - 3; row++) {
      for (let col = 0; col < gameBoard[row].length - 3; col++) {
        if (
          gameBoard[row][col].value !== "" &&
          gameBoard[row][col + 1].value === gameBoard[row][col].value &&
          gameBoard[row][col + 2].value === gameBoard[row][col].value &&
          gameBoard[row][col + 3].value === gameBoard[row][col].value
        ) {
          return true;
        }
      }

      // check for vertical win
      for (let col = 0; col < gameBoard[row].length; col++) {
        if (
          gameBoard[row][col].value !== "" &&
          gameBoard[row + 1][col].value === gameBoard[row][col].value &&
          gameBoard[row + 2][col].value === gameBoard[row][col].value &&
          gameBoard[row + 3][col].value === gameBoard[row][col].value
        ) {
          return true;
        }
      }

      return false;
    }
  };

  const addToColumn = (col) => {
    const tempGameBoard = [...gameBoard];

    for (let row = tempGameBoard.length - 1; row >= 0; row--) {
      if (tempGameBoard[row][col].value === "") {
        tempGameBoard[row][col].value = turn;
        setGameBoard(tempGameBoard);
        setTurn(turn === "R" ? "B" : "R");
        break;
      }
    }

    if (checkForWin()) {
      alert(`${turn} wins!`);
    }
  };

  return (
    <div id="game-board" className="p-4 max-w-6xl m-auto">
      <div className="grid grid-cols-7 gap-4 grid-rows-6">
        {gameBoard.map((row, rowIndex) => {
          return row.map((cell, colIndex) => {
            return <Cell key={rowIndex + colIndex} cell={cell}></Cell>;
          });
        })}

        {gameBoard[0].map((_, colIndex) => {
          return (
            <button
              className="w-full h-8 bg-gray-500"
              onClick={() => addToColumn(colIndex)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
