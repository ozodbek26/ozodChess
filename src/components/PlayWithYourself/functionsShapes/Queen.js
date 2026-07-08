export function Queen(whereFrom, moveTo, board) {
  const row = whereFrom.row;
  const col = whereFrom.col;

  const toRow = moveTo.row;
  const toCol = moveTo.col;

  let steps = 0;

  if (row === toRow && toCol > col) {
    steps = toCol - col - 1;
    for (let i = 1; i <= steps; i++) {
      const currentCellId = `${row}-${col + i}`;
      const f1 = board.find((ee) => ee.id === currentCellId);
      if (f1 && f1.piece !== null) {
        return false;
      }
    }
    return true;
  }

  if (row === toRow && toCol < col) {
    steps = col - toCol - 1;
    for (let i = 1; i <= steps; i++) {
      const currentCellId2 = `${row}-${col - i}`;
      const f2 = board.find((ee) => ee.id === currentCellId2);
      if (f2 && f2.piece !== null) {
        return false;
      }
    }
    return true;
  }

  if (col === toCol && toRow > row) {
    steps = toRow - row - 1;
    for (let i = 1; i <= steps; i++) {
      const currentCellId3 = `${row + i}-${col}`;
      const f3 = board.find((ee) => ee.id === currentCellId3);
      if (f3 && f3.piece !== null) {
        return false;
      }
    }
    return true;
  }

  if (col === toCol && toRow < row) {
    steps = row - toRow - 1;
    for (let i = 1; i <= steps; i++) {
      const currentCellId4 = `${row - i}-${col}`;
      const f4 = board.find((ee) => ee.id === currentCellId4);
      if (f4 && f4.piece !== null) {
        return false;
      }
    }
    return true;
  }

  if (toRow > row && toCol > col) {
    steps = toRow - row - 1;
    for (let i = 1; i <= steps; i++) {
      const currentCellId = `${row + i}-${col + i}`;
      const pieceOnPath = board.find(
        (cell) => cell.id === currentCellId && cell.piece !== null,
      );
      if (pieceOnPath) {
        return false;
      }
    }

    return true;
  }

  if (toRow > row && toCol < col) {
    steps = toRow - row - 1;
    for (let i = 1; i <= steps; i++) {
      const currentCellId = `${row + i}-${col - i}`;
      const pieceOnPath = board.find(
        (cell) => cell.id === currentCellId && cell.piece !== null,
      );
      if (pieceOnPath) {
        return false;
      }
    }
    return true;
  }

  if (toRow < row && toCol > col) {
    steps = row - toRow - 1;
    for (let i = 1; i <= steps; i++) {
      const currentCellId = `${row - i}-${col + i}`;
      const pieceOnPath = board.find(
        (cell) => cell.id === currentCellId && cell.piece !== null,
      );
      if (pieceOnPath) {
        return false;
      }
    }
    return true;
  }

  if (toRow < row && toCol < col) {
    steps = row - toRow - 1;
    for (let i = 1; i <= steps; i++) {
      const currentCellId = `${row - i}-${col - i}`;
      const pieceOnPath = board.find(
        (cell) => cell.id === currentCellId && cell.piece !== null,
      );

      if (pieceOnPath) {
        return false;
      }
    }

    return true;
  }
  return false;
}
