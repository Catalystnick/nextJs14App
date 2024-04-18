import React from "react";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  );
}
