import React, { useEffect, useState } from "react";
import styles from "./Board.module.scss";

import { startingPosition } from "./data";
import { movePiece } from "./movePiece";
import { moveValidator } from "./moveValidator";
import { MoveHighlighting } from "./MoveHighlighting";

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

          twoMove:
            piece &&
            (piece.kto === "PawnBlack" ||
              piece.kto === "PawnWhite")
              ? true
              : false,
        });
      }
    }

    setBoard(newBoard);
  }, [setBoard]);

  const [clicks, setClicks] = useState(0);

  const [highlightedMoves, setHighlightedMoves] = useState([]);

  function isHighlighted(id) {
    return highlightedMoves.includes(id);
  }

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
        twoMove: cell.twoMove,
      });

      console.log("from", moveFrom);

      const moves = MoveHighlighting(cell, board);

      setHighlightedMoves(moves);

      setClicks(1);

      return;
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

      const moveResult = moveValidator(
        whereFrom,
        moveTo,
        board,
        setBoard
      );

      if (!moveResult) {
        console.log("ход невозможен");

        setWhereFrom(null);
        setHighlightedMoves([]);

        return;
      }      if (moveResult.castling) {
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
          setRecordingMoves
        );
      }

      setHighlightedMoves([]);
      setWhereFrom(null);

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
          onClick={() => handleClick(cell)}
          style={{
            background: isHighlighted(cell.id)? "#b1b1b1": cell.background,
            border: isHighlighted(cell.id)? "2px solid #797979": null,
          }}
        >
          <p className={styles.textId}>{cell.id}</p>

          <img
            className={styles.imgg}
            src={cell.img}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}