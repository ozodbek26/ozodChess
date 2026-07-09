export function Queen(whereFrom, moveTo, board) {
  const row = whereFrom.row;
  const col = whereFrom.col;
  const toRow = moveTo.row;
  const toCol = moveTo.col;

  if (row === toRow && col === toCol) {
    return false;
  }

  const isHorizontal = row === toRow;
  const isVertical = col === toCol;
  const isDiagonal = Math.abs(toRow - row) === Math.abs(toCol - col);

  if (!isHorizontal && !isVertical && !isDiagonal) {
    return false;
  }

  if (isHorizontal) {
    const step = toCol > col ? 1 : -1;
    let currentCol = col + step;

    while (currentCol !== toCol) {
      const currentCellId = `${row}-${currentCol}`;
      const blockedCell = board.find((ee) => ee.id === currentCellId);

      if (blockedCell && blockedCell.piece !== null) {
        return false;
      }

      currentCol += step;
    }

    return true;
  }

  if (isVertical) {
    const step = toRow > row ? 1 : -1;
    let currentRow = row + step;

    while (currentRow !== toRow) {
      const currentCellId = `${currentRow}-${col}`;
      const blockedCell = board.find((ee) => ee.id === currentCellId);

      if (blockedCell && blockedCell.piece !== null) {
        return false;
      }

      currentRow += step;
    }

    return true;
  }

  if (isDiagonal) {
    const rowStep = toRow > row ? 1 : -1;
    const colStep = toCol > col ? 1 : -1;
    let currentRow = row + rowStep;
    let currentCol = col + colStep;

    while (currentRow !== toRow && currentCol !== toCol) {
      const currentCellId = `${currentRow}-${currentCol}`;
      const blockedCell = board.find((ee) => ee.id === currentCellId);

      if (blockedCell && blockedCell.piece !== null) {
        return false;
      }

      currentRow += rowStep;
      currentCol += colStep;
    }

    return true;
  }

  return false;
}
