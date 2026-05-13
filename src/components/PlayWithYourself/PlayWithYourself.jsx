import React, { useState } from "react";
import Board from "./Board";
import styles from "./PlayWithYourself.module.scss";

export default function PlayWithYourself() {
  const [whoseMove, setWhoseMove] = useState("white");
  const [board, setBoard] = useState([]);
  const [whereFrom, setWhereFrom] = useState();
  const [whereTo, setWhereTo] = useState();

  function test(){
    console.log( "whereFrom ", whereFrom , "___" , "whereTo ", whereTo);
  }

  return (
    <div className={styles.playWithYourself}>
    <button onClick={test}>wdffd</button>
    <button onClick={()=> {console.log(board)} } > что там на доске </button>
      <Board
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
