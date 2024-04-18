import Image from "next/image";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email address"></input>
          <input type="text" placeholder="Phone Number"></input>
          <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
