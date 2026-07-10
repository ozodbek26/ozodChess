
import { moveValidator } from "../moveValidator";

export function Check(board, color) {
  const king = board.find(
    (cell) => cell.kto === (color === "white" ? "KingWhite" : "KingBlack"),
  );

  if (!king) return false;

  return board.some((cell) => {
    if (cell.shapecolor === color) {
      return false;
    }

    if (!cell.piece) {
      return false;
    }

    const result = moveValidator(cell, king, board, () => {});

    return Boolean(result);
  });
}
