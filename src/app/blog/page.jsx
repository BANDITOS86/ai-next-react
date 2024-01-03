import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link className={styles.container} href="blog/test1" key="1">
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
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link className={styles.container} href="block/test2" key="2">
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
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog