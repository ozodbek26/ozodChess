import React, { useEffect, useState } from "react";
import styles from "./Board.module.scss";

import { startingPosition } from "./data";
import { movePiece } from "./movePiece";
import { BlackPawns } from "./functionsShapes/blackPawns";
import { BlackKing } from "./functionsShapes/blackKing";

export default function Board({
  whoseMove,
  setWhoseMove,

  RecordingMoves,
  setRecordingMoves,

  board,
  setBoard,

  whereFrom,
  whereTo,
  setWhereFrom,
  setWhereTo,

  eatenFigures,
  setEatenFigures,
}) {
  useEffect(() => {
    const newBoard = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isWhite = (row + col) % 2 === 0;
        const id = row + "-" + col;
        const piece = startingPosition.find((e) => e.id === id);

        newBoard.push({
          id,
          row,
          col,
          background: isWhite ? "white" : "grey",
          piece: piece ? piece.piece : null,
          shapecolor: piece ? piece.shapecolor : null,
          kto: piece ? piece.kto : null,
          img: piece ? piece.img : null,
        });
      }
    }
    setBoard(newBoard);
  }, [setBoard]);

  const [clicks, setClicks] = useState(0);

  function handleClick(cell) {
    const moveFrom = whereFrom;
    const moveTo = cell;

    if (clicks === 0) {
      if (cell.piece === null) {
        console.log("нет фигуры");
        return;
      }

      if (cell.shapecolor !== whoseMove) {
        console.log("сейчас ходит " + whoseMove);
        return;
      }
      console.log(cell.piece);
      setWhereFrom({
        id: cell.id,
        piece: cell.piece,
        shapecolor: cell.shapecolor,
        kto: cell.kto,
        img: cell.img,
        row: cell.row,
        col: cell.col,
      });
      console.log("from", moveFrom);
      setClicks(1);
    }

    if (clicks === 1) {
      if (!whereFrom) {
        console.log("что-то пошло не так, выбери фигуру снова");
        setClicks(0);
        return;
      }

      if (cell.id === whereFrom.id) {
        console.log("нельзя ходить на ту же клетку");
        return;
      }

      if (cell.shapecolor === whereFrom.shapecolor) {
        console.log("нельзя ходить на свою фигуру");
        return;
      }

      setClicks(0);

      const canMove = BlackPawns(whereFrom, moveTo);
      if (!canMove) {
        console.log("ход черной пешки невозможен");
        setClicks(0);
        setWhereFrom(null);
        return;
      }

      const canKingMove = BlackKing(whereFrom, moveTo, board, setBoard);
      if (!canKingMove) {
        console.log("ход черного king невозможен");
        setClicks(0);
        setWhereFrom(null);
        return;
      }

      if (canKingMove.castling) {
        setWhereFrom(null);
        setWhereTo(null);
      } else {
        movePiece(
          whereFrom,
          moveTo,
          board,
          setBoard,
          setWhereFrom,
          setWhereTo,
          setEatenFigures,
          setRecordingMoves,
        );
      }

      if (whoseMove === "white") {
        setWhoseMove("black");
      } else {
        setWhoseMove("white");
      }
      return;
    }
  }

  return (
    <div className={styles.board}>
      {board.map((cell) => (
        <div
          key={cell.id}
          style={{ background: cell.background }}
          onClick={() => handleClick(cell)}
        >
          <p className={styles.textId}>{cell.id}</p>
          {/* {cell.piece && <p>{cell.piece}</p>} */}
          <img className={styles.imgg} src={cell.img} alt="" />
        </div>
      ))}
    </div>
  );
}
