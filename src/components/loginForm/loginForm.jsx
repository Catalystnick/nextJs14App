"use client";
import { handleGitHubLogin, login } from "@/lib/actions";
import React from "react";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

import Link from "next/link";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <>
      <form action={formAction} className={styles.form}>
        <input type="text" placeholder="username" name="username"></input>
        <input type="password" placeholder="password" name="password"></input>
        <button>Login</button>
        {state?.error && <p className={styles.text}>!--{state?.error}--!</p>}
        <p> OR </p>
      </form>
      <form action={handleGitHubLogin} className={styles.button}>
        <div>
          <button className={styles.buttondiv}>Login with github</button>
        </div>
      </form>
      <Link href="/register">
        Don&apos;t have an account? <b>Sign up</b>
      </Link>
    </>
  );
}
