export function BlackKing(whereFrom, moveTo, board, setBoard) {
  const blackKing = { name: "King_black", id: 0 - 4 };

  if (whereFrom.kto !== "KingBlack") {
    return true;
  }

  const hod1 = board.find((ee) => ee.id === "0-5");
  const hod2 = board.find((ee) => ee.id === "0-6");
  const hod3 = board.find((ee) => ee.id === "0-4");
  const hod4 = board.find((ee) => ee.id === "0-7");

  if (
    hod1.piece === null &&
    hod2.piece === null &&
    moveTo.id === "0-6" &&
    hod3.piece === "King_black" &&
    hod4.piece === "rook_black2"
  ) {
    // рокировка в королевскую сторону
    const f1 = board.map((ee) => {
      if (ee.id === "0-6") {
        return {
          ...ee,
          piece: "King_black",
          img: hod3.img,
          shapecolor: "black",
          kto: "KingBlack",
        };
      }

      if (ee.id === "0-4") {
        return {
          ...ee,
          piece: null,
          img: null,
          shapecolor: null,
          kto: null,
        };
      }

      if (ee.id === "0-5") {
        return {
          ...ee,
          piece: "rook_black2",
          img: hod4.img,
          shapecolor: "black",
          kto: "rookBlack",
        };
      }

      if (ee.id === "0-7") {
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

  const hod11 = board.find((ee) => ee.id === "0-1");
  const hod12 = board.find((ee) => ee.id === "0-2");
  const hod13 = board.find((ee) => ee.id === "0-3");
  const hod14 = board.find((ee) => ee.id === "0-4");
  const hod15 = board.find((ee) => ee.id === "0-0");

  if (
    hod11.piece === null &&
    hod12.piece === null &&
    hod13.piece === null &&
    hod14.piece === "King_black" &&
    hod15.piece === "rook_black1" &&
    moveTo.id === "0-2"
  ) {
    // рокировка в ферзевую сторону
    const f2 = board.map((ee) => {
      if (ee.id === "0-2") {
        return {
          ...ee,
          piece: "King_black",
          img: hod3.img,
          shapecolor: "black",
          kto: "KingBlack",
        };
      }

      if (ee.id === "0-4") {
        return {
          ...ee,
          piece: null,
          img: null,
          shapecolor: null,
          kto: null,
        };
      }

      if (ee.id === "0-3") {
        return {
          ...ee,
          piece: "rook_black1",
          img: hod15.img,
          shapecolor: "black",
          kto: "rookBlack",
        };
      }

      if (ee.id === "0-0") {
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
