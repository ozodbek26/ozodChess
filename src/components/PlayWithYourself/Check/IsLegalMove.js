import { moveValidator } from "../moveValidator";

import { Check } from "./Check";
import { getBoardAfterMove } from "./Checkmate";

export function IsLegalMove(board, whoseMove, whereFrom, moveTo) {
  if (moveTo.kto === "KingWhite" || moveTo.kto === "KingBlack") {
    return false;
  }

  const from = whereFrom.id;
  const to = moveTo.id;

  const copiedBoard = board.map((cell) => {
    return { ...cell };
  });

  const moveResult = moveValidator(whereFrom, moveTo, copiedBoard, () => {});

  if (!moveResult) {
    return false;
  }


  const boardAfterMove = getBoardAfterMove(copiedBoard, whereFrom, moveTo);

  const checkResult = Check(boardAfterMove, whoseMove);

  return !checkResult;
}
