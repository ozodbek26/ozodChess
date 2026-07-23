import { moveValidator } from "./moveValidator";

export function MoveHighlighting(whereFrom, board) {
  if (!whereFrom) return [];


  return board.filter((cell) => {
      if (cell.id === whereFrom.id) return false;
      if (cell.piece && cell.shapecolor === whereFrom.shapecolor) return false;
      if (cell.kto === "KingWhite" || cell.kto === "KingBlack") return false;
      
      const result = moveValidator(whereFrom, cell, board, () => {});
      return Boolean(result);
    })
    .map((cell) => cell.id);
}
