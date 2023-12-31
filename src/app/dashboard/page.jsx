"use client"

import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  useEffect(() => {
    if (session.status == "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [session.status, router])

  if (session.status == "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading..."
            : data?.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image src={post.img} alt={post.title} width={200} height={100} />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>
              </div>
            ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input className={styles.input} type="text" placeholder="Title" />
          <input className={styles.input} type="text" placeholder="Desc" />
          <input className={styles.input} type="text" placeholder="Image" />
          <textarea cols="30" rows="10" className={styles.textArea} />
          <button className={styles.button}> Send</button>
        </form>
      </div>
    )
  }
  
}

export default Dashboard