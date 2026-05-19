import { BlackPawns } from "./functionsShapes/blackPawns";
import { BlackKing } from "./functionsShapes/blackKing";
import { horsesBlack } from "./functionsShapes/horsesBlack";

export function moveValidator(whereFrom, moveTo, board, setBoard) {
  switch (whereFrom.kto) {
    case "PawnBlack":
      return BlackPawns(whereFrom, moveTo, board);

    case "KingBlack":
      return BlackKing(whereFrom, moveTo, board, setBoard);

    case "horsesBlack":
    case "horsesWhite":
      return horsesBlack(whereFrom, moveTo, board);

    case "PawnWhite":
      return WhitePawns(whereFrom, moveTo, board);

    default:
      return false;
  }
}
