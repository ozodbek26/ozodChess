import React, { useState } from "react";
import Board from "./Board";
import styles from "./PlayWithYourself.module.scss";

export default function PlayWithYourself() {
  const [whoseMove, setWhoseMove] = useState("white");
  const [board, setBoard] = useState([]);

  return (
    <div className={styles.playWithYourself}>       
      <Board board={board} setBoard={setBoard} />
    </div>
  );
}
