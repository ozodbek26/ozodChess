import React from "react";
import Sidebar from "./../../components/Sidebar/Sidebar";
import styles from "./Home.module.scss";
import PlayWithYourself from "../../components/PlayWithYourself/PlayWithYourself";
// import { useNavigate } from "react-router-dom";


export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.game}>

        <PlayWithYourself/>
      </div>
    </div>
  );
}
