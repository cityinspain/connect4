import "./App.css";
import Cell from "./components/Cell";

import { useState } from "react";
import checkWinner from "./util/check";
import { INITIAL_BOARD } from "./util/constants";

function App() {
  // master array of objects for the connect four game board

  const [gameBoard, setGameBoard] = useState(INITIAL_BOARD);
  const [turn, setTurn] = useState("R");

  const addToColumn = (col) => {
    const tempGameBoard = [...gameBoard];

    for (let row = tempGameBoard.length - 1; row >= 0; row--) {
      if (tempGameBoard[row][col].value === "") {
        tempGameBoard[row][col].value = turn;
        setGameBoard(tempGameBoard);

        break;
      }
    }

    const winStatus = checkWinner(gameBoard, turn);

    if (winStatus) {
      setTimeout(() => {
        alert(`${turn} wins!`);
      }, 100);
    }

    setTurn(turn === "R" ? "B" : "R");
  };

  return (
    <div id="game-board" className="p-4 max-w-6xl m-auto">
      <div className="grid grid-cols-7 grid-rows-6">
        {gameBoard.map((row, rowIndex) => {
          return row.map((cell, colIndex) => {
            return <Cell key={rowIndex + colIndex} cell={cell}></Cell>;
          });
        })}

        {gameBoard[0].map((_, colIndex) => {
          return (
            <button
              className="w-full h-8 border border-gray-500 hover:bg-gray-500 mt-4"
              onClick={() => addToColumn(colIndex)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
