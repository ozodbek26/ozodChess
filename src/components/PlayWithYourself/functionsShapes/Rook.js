
export function Rook(whereFrom, moveTo, board) {
  const row = whereFrom.row;
  const col = whereFrom.col;

  const toRow = moveTo.row;
  const toCol = moveTo.col;

  const right1 = `${row}-${col + 1}`;
  const right2 = `${row}-${col + 2}`;
  const right3 = `${row}-${col + 3}`;
  const right4 = `${row}-${col + 4}`;
  const right5 = `${row}-${col + 5}`;
  const right6 = `${row}-${col + 6}`;
  const right7 = `${row}-${col + 7}`;

  const cellsRight = [right1, right2, right3, right4, right5, right6, right7];

  const left1 = `${row}-${col - 1}`;
  const left2 = `${row}-${col - 2}`;
  const left3 = `${row}-${col - 3}`;
  const left4 = `${row}-${col - 4}`;
  const left5 = `${row}-${col - 5}`;
  const left6 = `${row}-${col - 6}`;
  const left7 = `${row}-${col - 7}`;

  const cellsLeft = [left1, left2, left3, left4, left5, left6, left7];

  const down1 = `${row + 1}-${col}`;
  const down2 = `${row + 2}-${col}`;
  const down3 = `${row + 3}-${col}`;
  const down4 = `${row + 4}-${col}`;
  const down5 = `${row + 5}-${col}`;
  const down6 = `${row + 6}-${col}`;
  const down7 = `${row + 7}-${col}`;

  const cellsDown = [down1, down2, down3, down4, down5, down6, down7];

  const up1 = `${row - 1}-${col}`;
  const up2 = `${row - 2}-${col}`;
  const up3 = `${row - 3}-${col}`;
  const up4 = `${row - 4}-${col}`;
  const up5 = `${row - 5}-${col}`;
  const up6 = `${row - 6}-${col}`;
  const up7 = `${row - 7}-${col}`;

  const cellsUp = [up1, up2, up3, up4, up5, up6, up7];

  if (
    cellsRight.includes(moveTo.id) ||
    cellsLeft.includes(moveTo.id) ||
    cellsDown.includes(moveTo.id) ||
    cellsUp.includes(moveTo.id)
  ) {
    let steps = 0;

    if (cellsRight.includes(moveTo.id)) {
      steps = Math.abs(toCol - col) - 1;

      for (let i = 1; i <= steps; i++) {
        const currentCellId = `${row}-${col + i}`;

        const pieceOnPath = board.find(
          (cell) => cell.id === currentCellId && cell.piece !== null,
        );

        if (pieceOnPath) {
          console.log("Есть фигура", pieceOnPath.piece);
          return false;
        }
      }
    } else if (cellsLeft.includes(moveTo.id)) {
      steps = Math.abs(toCol - col) - 1;

      for (let i = 1; i <= steps; i++) {
        const currentCellId = `${row}-${col - i}`;

        const pieceOnPath = board.find(
          (cell) => cell.id === currentCellId && cell.piece !== null,
        );

        if (pieceOnPath) {
          console.log("Есть фигура", pieceOnPath.piece);
          return false;
        }
      }
    } else if (cellsDown.includes(moveTo.id)) {
      steps = Math.abs(toRow - row) - 1;

      for (let i = 1; i <= steps; i++) {
        const currentCellId = `${row + i}-${col}`;

        const pieceOnPath = board.find(
          (cell) => cell.id === currentCellId && cell.piece !== null,
        );

        if (pieceOnPath) {
          console.log("Есть фигура", pieceOnPath.piece);
          return false;
        }
      }
    } else if (cellsUp.includes(moveTo.id)) {
      steps = Math.abs(toRow - row) - 1;

      for (let i = 1; i <= steps; i++) {
        const currentCellId = `${row - i}-${col}`;

        const pieceOnPath = board.find(
          (cell) => cell.id === currentCellId && cell.piece !== null,
        );

        if (pieceOnPath) {
          console.log("Есть фигура", pieceOnPath.piece);
          return false;
        }
      }
    }

    console.log("ход возможен кто rook");
    return true;
  } else {
    console.log("ход невозможен кто rook");
    return false;
  }
}
