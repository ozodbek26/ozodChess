import React from "react";
import styles from "./Sidebar.module.scss";

import { useNavigate } from "react-router-dom";


export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <p>Sidebar</p>
      <button onClick={() => navigate("/profile")}>профиль</button>
      <button onClick={() => navigate("/find-game")}>найти игру </button>
      <button onClick={() => navigate("/settings")}>настройки</button>
      <button onClick={() => navigate("/register")}>зарегистрироваться</button>
      <button onClick={() => navigate("/play")}>играть с собой</button>
      <button onClick={() => navigate("/logout")}>выйти</button>
    </div>
  );
}
