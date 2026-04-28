import React from "react";
import styles from "./Login.module.scss";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.loginForm}>
        <div className={styles.header}>
          <h1>Welcome Back</h1>
          <p>Sign in to continue to ozodChess</p>
        </div>

        <div className={styles.inputFields}>
          <input type="text" placeholder="Username or Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button className={styles.submitButton}>Login</button>
        <button className={styles.submitButton}>login as guest</button>

        <div className={styles.forgotPassword}>
          <p>Forgot your password?</p>
          <a href="">Reset it here</a>
        </div>

        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <p>or continue with</p>
          <div className={styles.dividerLine}></div>
        </div>

        <div className={styles.socialButtons}>
          <button className={styles.socialButton}>Google</button>
          <button className={styles.socialButton}>Facebook</button>
          <button className={styles.socialButton}>Twitter</button>
        </div>
      </div>
    </div>
  );
}
