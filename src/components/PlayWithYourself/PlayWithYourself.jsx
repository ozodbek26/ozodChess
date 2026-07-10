import React, { useState } from "react";
import Board from "./Board";
import styles from "./PlayWithYourself.module.scss";

export default function PlayWithYourself() {
  const [whoseMove, setWhoseMove] = useState("white");
  const [RecordingMoves, setRecordingMoves] = useState([]);

  const [board, setBoard] = useState([]);
  const [whereFrom, setWhereFrom] = useState();
  const [whereTo, setWhereTo] = useState();

  const [eatenFigures, setEatenFigures] = useState([]);

  function test() {
    console.log("whereFrom ", whereFrom, "___", "whereTo ", whereTo);
  } 

  function name(params) {
    console.log("кто сейчас ходит ", whoseMove);
  }

  return (
    <div className={styles.playWithYourself}>
      <button onClick={name} >whoseMove </button>
      <button onClick={test}>Test</button>
      <button
        onClick={() => {
          console.log(board);
        }}
      >
        что там на доске
      </button>
      <button
        onClick={() => {
          console.log(RecordingMoves);
        }}
      >
        список ходов
      </button>
      <Board
      setEatenFigures={setEatenFigures}
        eatenFigures={eatenFigures}

        whoseMove={whoseMove}
        setWhoseMove={setWhoseMove}
        RecordingMoves={RecordingMoves}
        setRecordingMoves={setRecordingMoves}
        board={board}
        setBoard={setBoard}
        whereFrom={whereFrom}
        whereTo={whereTo}
        setWhereFrom={setWhereFrom}
        setWhereTo={setWhereTo}
      />
    </div>
  );
}
