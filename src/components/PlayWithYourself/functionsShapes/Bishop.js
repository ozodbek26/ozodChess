export function Bishop(whereFrom, moveTo, board) {
  const row = whereFrom.row;
  const col = whereFrom.col;

  const toRow = moveTo.row;
  const toCol = moveTo.col;

  
  const cnL1 = `${row + 1}-${col + 1}`;
  const cnL2 = `${row + 2}-${col + 2}`;
  const cnL3 = `${row + 3}-${col + 3}`;
  const cnL4 = `${row + 4}-${col + 4}`;
  const cnL5 = `${row + 5}-${col + 5}`;
  const cnL6 = `${row + 6}-${col + 6}`;
  const cnL7 = `${row + 7}-${col + 7}`;
  const cells = [cnL1, cnL2, cnL3, cnL4, cnL5, cnL6, cnL7];

  const cvR1 = `${row - 1}-${col - 1}`;
  const cvR2 = `${row - 2}-${col - 2}`;
  const cvR3 = `${row - 3}-${col - 3}`;
  const cvR4 = `${row - 4}-${col - 4}`;
  const cvR5 = `${row - 5}-${col - 5}`;
  const cvR6 = `${row - 6}-${col - 6}`;
  const cvR7 = `${row - 7}-${col - 7}`;
  const cells_2 = [cvR1, cvR2, cvR3, cvR4, cvR5, cvR6, cvR7];

  const cvL1 = `${row - 1}-${col + 1}`;
  const cvL2 = `${row - 2}-${col + 2}`;
  const cvL3 = `${row - 3}-${col + 3}`;
  const cvL4 = `${row - 4}-${col + 4}`;
  const cvL5 = `${row - 5}-${col + 5}`;
  const cvL6 = `${row - 6}-${col + 6}`;
  const cvL7 = `${row - 7}-${col + 7}`;
  const cells_3 = [cvL1, cvL2, cvL3, cvL4, cvL5, cvL6, cvL7];

  const cnR1 = `${row + 1}-${col - 1}`;
  const cnR2 = `${row + 2}-${col - 2}`;
  const cnR3 = `${row + 3}-${col - 3}`;
  const cnR4 = `${row + 4}-${col - 4}`;
  const cnR5 = `${row + 5}-${col - 5}`;
  const cnR6 = `${row + 6}-${col - 6}`;
  const cnR7 = `${row + 7}-${col - 7}`;
  const cells_4 = [cnR1, cnR2, cnR3, cnR4, cnR5, cnR6, cnR7];

  if (
    cells.includes(moveTo.id) ||
    cells_2.includes(moveTo.id) ||
    cells_3.includes(moveTo.id) ||
    cells_4.includes(moveTo.id)
  ) {
    console.log("ход возможен");
    return true;
  } else {
    console.log("ход невозможен");
  }

  return false;
}
