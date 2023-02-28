const checkWinner = (gameBoard, checkFor) => {
  const search = (row, col, direction) => {
    let count = 0;
    let rowToCheck = row;
    let colToCheck = col;

    while (
      rowToCheck >= 0 &&
      rowToCheck < gameBoard.length &&
      colToCheck >= 0 &&
      colToCheck < gameBoard[row].length &&
      gameBoard[rowToCheck][colToCheck].value === checkFor
    ) {
      count++;
      rowToCheck += direction[0];
      colToCheck += direction[1];
    }

    return count;
  };

  for (let row = 0; row < gameBoard.length; row++) {
    for (let col = 0; col < gameBoard[row].length; col++) {
      if (gameBoard[row][col].value === checkFor) {
        const directions = [
          [0, 1],
          [1, 0],
          [-1, 0],
          [0, -1],
        ];

        for (let i = 0; i < directions.length; i++) {
          const direction = directions[i];
          const count = search(row, col, direction);

          if (count >= 4) {
            return true;
          }
        }
      }
    }
  }

  return false;
};

export default checkWinner;
