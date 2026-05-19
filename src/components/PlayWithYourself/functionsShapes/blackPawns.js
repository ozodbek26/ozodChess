export function BlackPawns(whereFrom, moveTo, board) {
    
  if (whereFrom.kto !== "PawnBlack") {
    return true;
  }

  const row = whereFrom.row;
  const col = whereFrom.col;

  const oneStep = board.find((cell) => cell.id === `${row + 1}-${col}`);
  const twoStep = board.find((cell) => cell.id === `${row + 2}-${col}`);

  // Ход на 1 клетку вперед
  if (moveTo.row === row + 1 && moveTo.col === col && moveTo.piece === null) {
    return true;
  }

  // Первый ход на 2 клетки вперед
  if (
    whereFrom.twoMove &&
    oneStep?.piece === null &&
    twoStep?.piece === null &&
    moveTo.id === twoStep.id
  ) {
    return true;
  }

  // Взятие по диагонали
  if (
    moveTo.row === row + 1 &&
    Math.abs(moveTo.col - col) === 1 &&
    moveTo.piece !== null &&
    moveTo.shapecolor === "white"
  ) {
    return true;
  }

  return false;
}
