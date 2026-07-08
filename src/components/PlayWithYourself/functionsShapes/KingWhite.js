export function KingWhite(whereFrom, moveTo, board, setBoard) {
  if (whereFrom.kto !== "KingWhite") {
    return true;
  }

  const hod1 = board.find((ee) => ee.id === "7-5");
  const hod2 = board.find((ee) => ee.id === "7-6");
  const hod3 = board.find((ee) => ee.id === "7-4");
  const hod4 = board.find((ee) => ee.id === "7-7");

  if (
    hod1.piece === null &&
    hod2.piece === null &&
    moveTo.id === "7-6" &&
    hod3.piece === "King_white" &&
    hod4.piece === "rook_white2"
  ) {
    // рокировка в королевскую сторону
    const f1 = board.map((ee) => {
      if (ee.id === "7-6") {
        return {
          ...ee,
          piece: "King_white",
          img: hod3.img,
          shapecolor: "white",
          kto: "KingWhite",
        };
      }

      if (ee.id === "7-4") {
        return {
          ...ee,
          piece: null,
          img: null,
          shapecolor: null,
          kto: null,
        };
      }

      if (ee.id === "7-5") {
        return {
          ...ee,
          piece: "rook_white2",
          img: hod4.img,
          shapecolor: "white",
          kto: "rookWhite",
        };
      }

      if (ee.id === "7-7") {
        return {
          ...ee,
          piece: null,
          img: null,
          shapecolor: null,
          kto: null,
        };
      }
      return ee;
    });

    setBoard(f1);
    return { castling: true };
  }

  const hod11 = board.find((ee) => ee.id === "7-1");
  const hod12 = board.find((ee) => ee.id === "7-2");
  const hod13 = board.find((ee) => ee.id === "7-3");
  const hod14 = board.find((ee) => ee.id === "7-4");
  const hod15 = board.find((ee) => ee.id === "7-0");

  if (
    hod11.piece === null &&
    hod12.piece === null &&
    hod13.piece === null &&
    hod14.piece === "King_white" &&
    hod15.piece === "rook_white1" &&
    moveTo.id === "7-2"
  ) {
    // рокировка в ферзевую сторону
    const f2 = board.map((ee) => {
      if (ee.id === "7-2") {
        return {
          ...ee,
          piece: "King_white",
          img: hod3.img,
          shapecolor: "white",
          kto: "KingWhite",
        };
      }

      if (ee.id === "7-4") {
        return {
          ...ee,
          piece: null,
          img: null,
          shapecolor: null,
          kto: null,
        };
      }

      if (ee.id === "7-3") {
        return {
          ...ee,
          piece: "rook_white1",
          img: hod15.img,
          shapecolor: "white",
          kto: "rookWhite",
        };
      }

      if (ee.id === "7-0") {
        return {
          ...ee,
          piece: null,
          img: null,
          shapecolor: null,
          kto: null,
        };
      }
      return ee;
    });

    setBoard(f2);
    return { castling: true };
  }

  const rowDiff = Math.abs(moveTo.row - whereFrom.row);
  const colDiff = Math.abs(moveTo.col - whereFrom.col);

  return rowDiff <= 1 && colDiff <= 1 && (rowDiff !== 0 || colDiff !== 0);
}
