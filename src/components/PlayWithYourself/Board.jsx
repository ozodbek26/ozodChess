import React, { useEffect } from "react";
import styles from "./Board.module.scss";

export default function Board({ board, setBoard }) {
  useEffect(() => {
    const startingPosition = [
      { id: "0-0", piece: "rook_black1" },
      { id: "0-7", piece: "rook_black2" },
      { id: "0-1", piece: "horses_black1" },
      { id: "0-6", piece: "horses_black2" },
      { id: "0-2", piece: "Bishop_black1" },
      { id: "0-5", piece: "Bishop_black2" },
      { id: "0-4", piece: "King_black" },
      { id: "0-3", piece: "Queen_black" },
      { id: "1-0", piece: "Pawn_black1" },
      { id: "1-1", piece: "Pawn_black2" },
      { id: "1-2", piece: "Pawn_black3" },
      { id: "1-3", piece: "Pawn_black4" },
      { id: "1-4", piece: "Pawn_black5" },
      { id: "1-5", piece: "Pawn_black6" },
      { id: "1-6", piece: "Pawn_black7" },
      { id: "1-7", piece: "Pawn_black8" },
      { id: "7-0", piece: "rook_white1" },
      { id: "7-7", piece: "rook_white2" },
      { id: "7-1", piece: "horses_white1" },
      { id: "7-6", piece: "horses_white2" },
      { id: "7-2", piece: "Bishop_white1" },
      { id: "7-5", piece: "Bishop_white2" },
      { id: "7-4", piece: "King_white" },
      { id: "7-3", piece: "Queen_white" },
      { id: "6-0", piece: "Pawn_white1" },
      { id: "6-1", piece: "Pawn_white2" },
      { id: "6-2", piece: "Pawn_white3" },
      { id: "6-3", piece: "Pawn_white4" },
      { id: "6-4", piece: "Pawn_white5" },
      { id: "6-5", piece: "Pawn_white6" },
      { id: "6-6", piece: "Pawn_white7" },
      { id: "6-7", piece: "Pawn_white8" },
    ];

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
        });
      }
    }

    setBoard(newBoard);
  }, [setBoard]);

  return (
    <div className={styles.board}>
      {board.map((e) => (
        <div key={e.id} style={{ background: e.background }}>
          <p>{e.id}</p>
          {e.piece && <p>{e.piece}</p>}
        </div>
      ))}
    </div>
  );
}
