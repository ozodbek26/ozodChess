import React, { useEffect } from "react";
import styles from "./Board.module.scss";

export default function Board({ board, setBoard }) {
  useEffect(() => {
    const newBoard = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isWhite = (row + col) % 2 === 0;

        newBoard.push({
          id: `${row}-${col}`,
          background: isWhite ? "white" : "grey",
        });
      }
    }

    setBoard(newBoard);
  }, [setBoard]);

  return (
    <div className={styles.board} >
      {board.map((e) => (
        <div key={e.id} style={{ background: e.background }} />
      ))}
    </div>
  );
}
