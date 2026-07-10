import { moveValidator } from "../moveValidator";

import { Check } from "./Check";

export function IsLegalMove(board, whoseMove, whereFrom, moveTo) {
  const from = whereFrom.id;
  const to = moveTo.id;

  const copiedBoard = board.map((cell) => {
    return { ...cell };
  });

  const moveResult = moveValidator(whereFrom, moveTo, copiedBoard, () => {});

  if (!moveResult) {
    return false;
  }

  const boardAfterMove = copiedBoard.map((cell) => {
    if (cell.id === from) {
      return {
        ...cell,
        piece: null,
        shapecolor: null,
        kto: null,
        img: null,
      };
    }

    if (cell.id === to) {
      return {
        ...cell,
        piece: whereFrom.piece,
        shapecolor: whereFrom.shapecolor,
        kto: whereFrom.kto,
        img: whereFrom.img,
      };
    }

    return cell;
  });

  const checkResult = Check(boardAfterMove, whoseMove);
  return !checkResult;
}
