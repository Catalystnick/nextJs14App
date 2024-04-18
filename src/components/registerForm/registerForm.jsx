"use client";
import { register } from "@/lib/actions";
import React, { useEffect } from "react";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="username" name="username"></input>
      <input type="email" placeholder="email" name="email"></input>
      <input type="password" placeholder="password" name="password"></input>
      <input
        type="password"
        placeholder="password again"
        name="passwordagain"
      ></input>
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Log in</b>
      </Link>
    </form>
  );
}
