import Button from '../../../components/Button/Button';
import Image from "next/image"
import styles from './page.module.css';


const Category = ({ params }) => {
  // console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item} key="1">
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://img.freepik.com/free-vector/tiny-house-concept-illustration_114360-9087.jpg?size=626&ext=jpg&ga=GA1.1.465634580.1703669057&semt=sph" alt="" />
        </div>
      </div>
      <div className={styles.item} key="2">
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} fill={true} src="https://img.freepik.com/free-vector/tiny-house-concept-illustration_114360-9087.jpg?size=626&ext=jpg&ga=GA1.1.465634580.1703669057&semt=sph" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Category;