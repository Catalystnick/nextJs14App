import { createPost, deletePost } from "@/lib/actions";
import React from "react";

export default function managePosts() {
  return (
    <div>
      <form action={createPost}>
        <input type="text" placeholder="title" name="title"></input>
        <input type="text" placeholder="desc" name="desc"></input>
        <input type="text" placeholder="slug" name="slug"></input>
        <input type="text" placeholder="userId" name="userId"></input>
        <button>Submit</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="Id" name="id" />
        <button>Delete Post</button>
      </form>
    </div>
  );
}
