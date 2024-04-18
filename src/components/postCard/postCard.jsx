import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="image" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>01.02.2024</span>
      </div>
      <div className={styles.botton}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}
