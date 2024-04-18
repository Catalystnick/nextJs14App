import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth";

export default async function AdminPage(props) {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading ...</div>}>
            <AdminPosts />
          </Suspense>
        </div>

        <div className={styles.column}>
          <AdminPostForm userId={session?.user.id} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading ...</div>}>
            <AdminUsers />
          </Suspense>
        </div>

        <div className={styles.column}>
          <AdminUserForm  userId={session?.user.id} />
        </div>
      </div>
    </div>
  );
}