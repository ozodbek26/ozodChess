import { BlackPawns } from "./functionsShapes/blackPawns";
import { BlackKing } from "./functionsShapes/blackKing";
import { horsesBlack } from "./functionsShapes/horsesBlack";
import { PawnWhite } from "./functionsShapes/PawnWhite";
import { Rook } from "./functionsShapes/Rook";
import { Bishop } from "./functionsShapes/Bishop";
import { Queen } from "./functionsShapes/Queen";

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
      return PawnWhite(whereFrom, moveTo, board);

    case "BishopBlack":
    case "BishopWhite":
      return Bishop(whereFrom, moveTo, board);

    case "rookBlack":
    case "rookWhite":
      return Rook(whereFrom, moveTo, board);

    case "QueenBlack":
    case "QueenWhite":
      return Queen(whereFrom, moveTo, board);

      
    default:
      return false;
  }
}
