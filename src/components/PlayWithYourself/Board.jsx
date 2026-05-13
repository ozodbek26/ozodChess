import React, { useEffect, useState } from "react";
import styles from "./Board.module.scss";

import { startingPosition } from "./data";

export default function Board({
  board,
  setBoard,
  whereFrom,
  whereTo,
  setWhereFrom,
  setWhereTo,
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
    const moveTo = cell.id;

    if (clicks === 0) {
      if (cell.piece === null) {
        console.log("нет фигуры");
        return;
      } else {
        console.log(cell.piece);
        setWhereFrom({
          id: cell.id,
          piece: cell.piece,
          shapecolor: cell.shapecolor,
          kto: cell.kto,
          img: cell.img,
        });
        console.log("from", moveFrom);
        setClicks(1);
      }
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

      // console.log("ход готов:", moveFrom.id, "->", moveTo);
      movePiece(moveTo);

      return;
    }
  }

  function movePiece(targetId) {
    if (!whereFrom || !targetId) {
      console.log("недостаточно данных для хода");
      return;
    }

    console.log(
      "двигаем фигуру",
      whereFrom.piece,
      "с",
      whereFrom.id,
      "на",
      targetId,
    );

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
      if (cell.id === targetId) {
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
