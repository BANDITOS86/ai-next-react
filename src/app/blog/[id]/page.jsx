import Image from "next/image"
import styles from './page.module.css';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const BlogId = async ({params}) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              className={styles.avatar}
              src=""
              width={40}
              height={40}
              alt=""
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src=""
            fill={true}
            alt=""
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          desc
        </p>
      </div>
    </div>
  )
}

export default BlogId;