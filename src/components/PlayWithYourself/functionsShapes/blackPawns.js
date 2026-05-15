export function BlackPawns(whereFrom, moveTo) {
  const blackPawns = [
    { name: "Pawn_black1", twoMove: true, id: 3 - 0 },
    { name: "Pawn_black2", twoMove: true, id: 3 - 1 },
    { name: "Pawn_black3", twoMove: true, id: 3 - 2 },
    { name: "Pawn_black4", twoMove: true, id: 3 - 3 },
    { name: "Pawn_black5", twoMove: true, id: 3 - 4 },
    { name: "Pawn_black6", twoMove: true, id: 3 - 5 },
    { name: "Pawn_black7", twoMove: true, id: 3 - 6 },
    { name: "Pawn_black8", twoMove: true, id: 3 - 7 },
  ];

  if (!blackPawns.includes(whereFrom.piece)) {
    return true;
  }

  const rowDiff = moveTo.row - whereFrom.row;
  const colDiff = moveTo.col - whereFrom.col;

  const f1 = whereFrom.row + 1;

  if (colDiff === f1) {
    return true;
  }

  return false;
}
