"use client"

import { useEffect } from 'react';
import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';

const Login = () => {
  const session = useSession();
  const router = useRouter();
  // console.log(router);

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session.status, router]);

  if (session.status == "loading") {
    return <p>Loading</p>
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password })
  }


  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="email" placeholder='Email' required />
        <input className={styles.input} type="password" placeholder='Password' required />
        <button className={styles.button}>Log in</button>
      </form>

      <button onClick={() => signIn("google")}>Login with google</button>
    </div>
  )
}

export default Login