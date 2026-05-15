export function movePiece(
  whereFrom,
  targetCell,
  board,
  setBoard,
  setWhereFrom,
  setWhereTo,
  setEatenFigures,
  setRecordingMoves,
) {
  if (!whereFrom || !targetCell) {
    console.log("недостаточно данных для хода");
    return;
  }

  console.log(
    "двигаем фигуру",
    whereFrom.piece,
    "с",
    whereFrom.id,
    "на",
    targetCell.id,
  );

  if (targetCell.piece == null) {
  } else {
    console.log(
      "съедаем фигуру",
      targetCell.piece +
        " с клетки " +
        targetCell.id +
        "оно было " +
        targetCell.shapecolor,
    );
    setEatenFigures((ee) => [
      ...ee,
      {
        id: ee.length + 1,
        piece: targetCell.piece,
        shapecolor: targetCell.shapecolor,
        kto: targetCell.kto,
        img: targetCell.img,
      },
    ]);
  }
  setRecordingMoves((ee) => [
    ...ee,
    {
      id: ee.length + 1,
      piece: whereFrom.piece,
      from: whereFrom.id,
      to: targetCell,
    },
  ]);

  const updatedBoard = board.map((cell) => {
    if (cell.id === whereFrom.id) {
      return {
        ...cell,
        piece: null,
        shapecolor: null,
        kto: null,
        img: null,
      };
    }
    if (cell.id === targetCell.id) {
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

  setBoard(updatedBoard);
  setWhereFrom(null);
  setWhereTo(null);
}
