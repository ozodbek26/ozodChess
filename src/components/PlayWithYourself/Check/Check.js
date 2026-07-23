
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

// Мат — это выполнение трех условий одновременно:

// Король находится под шахом. 
// Король не может уйти на безопасную клетку.
// Ни одна другая фигура не может:
// съесть атакующую фигуру;
// закрыть линию атаки (если это возможно).

// Если хотя бы один из этих пунктов выполняется — это не мат.

