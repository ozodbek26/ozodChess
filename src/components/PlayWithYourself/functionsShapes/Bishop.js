export function Bishop(whereFrom, moveTo, board) {
  const row = whereFrom.row;
  const col = whereFrom.col;

  const toRow = moveTo.row;
  const toCol = moveTo.col;

  let steps = 0;

  if (toRow > row && toCol > col) {
    if (toRow - row !== toCol - col) return false;

    steps = toRow - row - 1;

    for (let i = 1; i <= steps; i++) {
      const currentCellId = `${row + i}-${col + i}`;

      const pieceOnPath = board.find(
        (cell) => cell.id === currentCellId && cell.piece !== null,
      );

      if (pieceOnPath) {
        console.log("Путь закрыт");
        return false;
      }
    }

    return true;
  }

  if (toRow < row && toCol < col) {
    if (row - toRow !== col - toCol) return false;

    steps = row - toRow - 1;

    for (let i = 1; i <= steps; i++) {
      const currentCellId = `${row - i}-${col - i}`;

      const pieceOnPath = board.find(
        (cell) => cell.id === currentCellId && cell.piece !== null,
      );

      if (pieceOnPath) {
        console.log("Путь закрыт");
        return false;
      }
    }

    return true;
  }

  if (toRow < row && toCol > col) {
    if (row - toRow !== toCol - col) return false;

    steps = row - toRow - 1;

    for (let i = 1; i <= steps; i++) {
      const currentCellId = `${row - i}-${col + i}`;

      const pieceOnPath = board.find(
        (cell) => cell.id === currentCellId && cell.piece !== null,
      );

      if (pieceOnPath) {
        console.log("Путь закрыт");
        return false;
      }
    }

    return true;
  }

  if (toRow > row && toCol < col) {
    if (toRow - row !== col - toCol) return false;

    steps = toRow - row - 1;

    for (let i = 1; i <= steps; i++) {
      const currentCellId = `${row + i}-${col - i}`;

      const pieceOnPath = board.find(
        (cell) => cell.id === currentCellId && cell.piece !== null,
      );

      if (pieceOnPath) {
        console.log("Путь закрыт");
        return false;
      }
    }

    return true;
  }

  return false;
}
