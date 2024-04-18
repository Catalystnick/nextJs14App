import Image from "next/image";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          We are a creative agency specialising in creating beautiful websites
          and applications for our clients
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact us</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="brands" fill />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="" fill />
      </div>
    </div>
  );
}
