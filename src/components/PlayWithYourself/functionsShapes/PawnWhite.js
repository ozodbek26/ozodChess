export function PawnWhite(whereFrom, moveTo, board) {
  const row = whereFrom.row;
  const col = whereFrom.col;

  const oneStep = board.find((cell) => cell.id === `${row - 1}-${col}`);
  const twoStep = board.find((cell) => cell.id === `${row - 2}-${col}`);



    if (moveTo.row === row - 1 && moveTo.col === col && moveTo.piece === null) {
    return true;
  }

    if (
    whereFrom.twoMove &&
    oneStep?.piece === null &&
    twoStep?.piece === null &&
    moveTo.id === twoStep.id
  ) {
    return true;
  }


  if (
    moveTo.row === row - 1 &&
    Math.abs(moveTo.col - col) === 1 &&
    moveTo.piece !== null &&
     moveTo.shapecolor === "black"
  ) {
    return true;
  }
  return false;
}
