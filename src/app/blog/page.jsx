import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link className={styles.container} href={`blog/${item.id}`} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src="https://img.freepik.com/free-vector/tiny-house-concept-illustration_114360-9087.jpg?size=626&ext=jpg&ga=GA1.1.465634580.1703669057&semt=sph"
              width={400}
              height={250}
              alt=""
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog